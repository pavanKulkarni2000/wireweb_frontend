import {Alert} from '@material-ui/lab';
import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

const baseUrl='https://handwritten-wireweb.herokuapp.com/';

const SignUpForm = (props) => {
  const [logged, setLogged] = useState(false);
  const [errorAlert, setErrorAlert]=useState(false);
  const [errorAlertMessage, setErrorAlertMessage] =
  useState('this is a error message!');
  let username=''; let email=''; let password=''; let terms;
  // eslint-disable-next-line max-len
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  const setError = (id, errorMessage) => {
    const ele=document.querySelector(`.signup-page #${id}.form-error-message`);
    if (errorMessage) {
      ele.innerHTML = errorMessage;
      ele.style.visibility='visible';
    } else {
      ele.style.visibility='hidden';
    }
  };
  const onUsernameChanged = (e) => {
    username=e.target.value;
    validateUser();
  };
  const validateUser = () => {
    if (username.length==0) {
      setError('name', '&#9888; User Name can\'t be empty.');
      return false;
    } else if (!username.match(/^[a-zA-Z ]+$/)) {
      setError('name', '&#9888; Please enter alphabet characters only.');
      return false;
    } else {
      setError('name', null);
      return true;
    }
  };
  const onEmailChanged = (e) => {
    email=e.target.value;
    validateEmail();
  };
  const validateEmail = () => {
    if (email.length==0) {
      setError('email', '&#9888; Email can\'t be empty.');
      return false;
    } else if (!pattern.test(email)) {
      setError('email', '&#9888; Please enter a valid email.');
      return false;
    } else {
      setError('email', null);
      return true;
    }
  };
  const onPasswordChanged = (e) => {
    password=e.target.value;
    validatePassword();
  };
  const validatePassword = () => {
    if (password.length==0) {
      setError('password', '&#9888; Password can\'t be empty.');
      return false;
    // eslint-disable-next-line max-len
    } else if (password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
      setError('password', '&#9888; Please enter secure and strong password.');
      return false;
    } else {
      setError('password', null);
      return true;
    }
  };
  const onTermsChanged = (e) => {
    terms=e.target.checked;
    setError('terms', null);
  };
  const onSubmit = (e) => {
    if ( validateUser() && validateEmail() && validatePassword() ) {
      if (terms) {
        const formData = new FormData();
        formData.append('name', username);
        formData.append('email', email);
        formData.append('password', password);
        fetch(baseUrl+'/signin', {
          method: 'POST',
          body: formData,
        })
            .then((response) => {
              if (response.ok) {
                response.json().then((result)=>{
                  props.setUser({
                    id: result.id,
                    name: username,
                  });
                  setLogged(true);
                });
              } else {
                // error
                response.text().then((error)=>{
                  console.log('error', error);
                  setErrorAlertMessage(error);
                  setErrorAlert(true);
                });
              }
            })
            .catch( (error) => {
              console.log('error connecting', error);
              setErrorAlertMessage('Error connecting the server!');
              setErrorAlert(true);
            });
      } else {
        setError('terms', '&#9888; Agree to terms and conditions to sign-up.');
      }
    }
    e.preventDefault();
  };

  return logged?<Redirect to="/home"/>:
  (
    <div className="signup-page">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li>
            <Link className="smoothscroll" to="/home">
                Home
            </Link>
          </li>

          <li>
            <Link className="smoothscroll" to="/home#about">
                About
            </Link>
          </li>

          <li>
            <Link className="smoothscroll" to="/home">
                Products
            </Link>
          </li>

          <li>
            <Link className="smoothscroll" to="/home">
                Pricing
            </Link>
          </li>

          <li>
            <Link className="smoothscroll" to="/home">
                Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="formCenter">
        <Alert severity="error" className={` 
        ${errorAlert ? 'form-alert' : 'form-alert-hidden'}`}
        onTransitionEnd={() => setErrorAlert(false)}>{errorAlertMessage}</Alert>
        <form className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
                Full Name
            </label>
            <input
              type="text"
              id="name"
              className="form-field-input"
              placeholder="Enter your full name"
              name="name"
              onInput={onUsernameChanged}
            />
            <div id="name" className="form-error-message">{' '}
            &#9888; Please enter alphabet characters only.
            </div>
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
                Password
            </label>
            <input
              type="password"
              id="password"
              className="form-field-input"
              placeholder="Enter your password"
              name="password"
              onInput={onPasswordChanged}
            />
            <div id="password" className="form-error-message">{' '}
            &#9888; Please enter secure and strong password.
            </div>
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="form-field-input"
              placeholder="Enter your email"
              name="email"
              onInput={onEmailChanged}
            />
            <div id="email" className="form-error-message">{' '}
            &#9888; Please enter a valid email.
            </div>
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                onInput={onTermsChanged}
              />{' '}
                I agree all statements in{' '}
              <a href="null" className="formFieldTermsLink">
                  terms of service
              </a>
            </label>
            <div id="terms" className="form-error-message">{' '}
            &#9888; Agree to terms and conditions to sign-up.
            </div>
          </div>

          <div className="formField">
            <button style={{fontSize: '20px', maxWidth: '80%'}}
              className="formFieldButton" onClick={onSubmit}>Sign Up</button>
            {' '}
            <Link to="/signin" className="formFieldLink">
                I'm already member
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUpForm;
