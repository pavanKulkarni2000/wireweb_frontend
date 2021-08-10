import React, {useState} from 'react';
import {Alert} from '@material-ui/lab';
import {Link, Redirect} from 'react-router-dom';
import {SiFacebook, SiGithub} from 'react-icons/si';

const baseUrl='https://handwritten-wireweb.herokuapp.com/';

const SignInForm = (props) => {
  const [logged, setLogged] = useState(false);
  const [errorAlert, setErrorAlert]=useState(false);
  const [errorAlertMessage, setErrorAlertMessage] =useState('this is a error message!');

  let email='';
  let password='';

  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  const setError = (id, errorMessage) => {
    const ele=document.querySelector(`.signin-page #${id}.form-error-message`);
    if (errorMessage) {
      ele.innerHTML = errorMessage;
      ele.style.visibility='visible';
    } else {
      ele.style.visibility='hidden';
    }
  };
  const onEmailChanged = (e) => {
    email=e.target.value;
    validateEmail();
  };
  const validateEmail = () => {
    if ( email!=document.querySelector('.signin-page #email.form-field-input').value) {
      email=document.querySelector('.signin-page #email.form-field-input').value;
    }
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
    if (password!=document.querySelector('.signin-page #password.form-field-input').value) {
      password = document.querySelector('.signin-page #password.form-field-input').value;
    }
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
  const onSubmit = (e) => {
    if ( validateEmail() && validatePassword() ) {
      const formData = new FormData();
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
                  name: result.name,
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
    }
    e.preventDefault();
  };
  return logged?<Redirect to="/home"/>:
  (
    <div className="signin-page">
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li>
            <Link to="/home">
                Home
            </Link>
          </li>

          <li>
            <Link to="/home#about">
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
        <form className="formFields" >
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
            <button
              style={{fontSize: '20px', maxWidth: '80%'}}
              className="formFieldButton" onClick={onSubmit}
            >
                Sign In
            </button>{' '}
            <Link to="/signup" className="formFieldLink">
                Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <SiGithub size="30" onClick={() => alert('Hello')} />
            <SiFacebook size="30" onClick={() => alert('Hello')} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
