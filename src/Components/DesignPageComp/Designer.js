import LeftPanel from './DesignerComponents/LeftPanel';
import Alert from '@material-ui/lab/Alert';
import VerticalToolbar from './DesignerComponents/VerticalToolbar';
import {useState, useEffect} from 'react';
import Loading from './Loading';
import Board from './DesignerComponents/Board';
import Save from './DesignerComponents/Save';

const baseUrl = 'https://handwritten-wireweb.herokuapp.com/';

const Designer = (props) => {
  // to display loading screen while image digitization
  const [digitizing, setDigitizing] = useState(false);

  // to show all alerts
  const [alert, setAlert] = useState({
    severity: 'error',
    message: 'this is an alert message',
    show: false,
  });

  // to set current form
  const [form, setForm] = useState(null);
  // all forms
  const [forms, setForms] = useState(null);
  // dirty forms
  const [modifiedForms, setModifiedForms] = useState({});

  useEffect(() => {
    // fetch user forms
    fetch(baseUrl + '/user-forms/' + props.user.id, {
      method: 'GET',
    })
        .then((response) => {
          if (response.status == 200) {
            response.json().then((result) => {
              console.log(result);
              setForms(result);
              const intialModified = {};
              for (const f of result) {
                intialModified[f.form_id] = 1;
              }
              setModifiedForms(intialModified);
            });
          } else {
          // error
            response.text().then((error) => {
              console.log('error', error);
              setAlert({
                severity: 'error',
                message: error,
                show: true,
              });
            });
          }
        })
        .catch((error) => {
          setAlert({
            severity: 'error',
            message: 'Couldn\'t connect the server!',
            show: true,
          });
          console.log(error);
        });
  }, []);

  const handleUpload = (e) => {
    setDigitizing(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    formData.append('user_id', props.user.id);
    formData.append('form_name', 'Form' + (forms == null ? 0 : forms.length));
    fetch(baseUrl + '/design', {
      method: 'POST',
      body: formData,
    })
        .then((res) => {
          console.log(res, ' is the response');
          if (res.status == 200) {
            res.json().then((data) => {
              setForms([data].concat(forms));
              setModifiedForms({...modifiedForms, [data.form_id]: 1});
              setDigitizing(false);
              setAlert({
                severity: 'success',
                message: 'Form Digitized!',
                show: true,
              });
              setForm(data);
            });
          } else {
            res.text().then((error) => {
              console.log('error', error);
              setAlert({
                severity: 'error',
                message: 'Server error!',
                show: true,
              });
            });
            setDigitizing(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setDigitizing(false);
        });
  };

  const handleSave = () => {
    const id = form.form_id;
    setModifiedForms({...modifiedForms, [id]: 3});
    const formRecord = {form_name: form.form_name};
    const formData = new FormData();
    formData.append('form', JSON.stringify(formRecord));
    fetch(baseUrl + '/user-forms/' + id, {
      method: 'PUT',
      body: formData,
    })
        .then((res) => {
          if (res.status == 200) {
            res.text().then((data) => {
              setAlert({
                severity: 'info',
                message: 'Form Saved!',
                show: true,
              });
              setModifiedForms({...modifiedForms, [id]: 1});
            });
          } else {
            res.text().then((error) => {
              console.log('error', error);
              setAlert({
                severity: 'error',
                message: error,
                show: true,
              });
              setModifiedForms({...modifiedForms, [id]: 2});
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setModifiedForms({...modifiedForms, [id]: 2});
        });
  };

  const handleFormRename = (name) => {
    const i = forms.indexOf(form);
    const renamedForm = {...form, form_name: name};
    setForm(renamedForm);

    // const formsCopy = [...forms];
    // formsCopy[i] = renamedForm;
    // setForms(formsCopy);
    forms[i]=renamedForm;
    setModifiedForms({...modifiedForms, [form.form_id]: 2});
  };

  const handleFormEdit = (formMetaData) => {
    const formsCopy = [...forms];
    const i = formsCopy.indexOf(form);
    const editedForm = {...form, form_meta_data: formMetaData};
    formsCopy[i] = editedForm;
    setForm(renamedForm);
    setForms(formsCopy);
    setModifiedForms({...modifiedForms, [form.form_id]: 2});
    console.log(modifiedForms);
  };

  const handleDelete = () => {
    fetch(baseUrl + '/user-forms/' + form.form_id, {method: 'DELETE'})
        .then((res) => {
          if (res.status == 200) {
            res.text().then((data) => {
              setAlert({
                severity: 'info',
                message: 'Form Deleted!',
                show: true,
              });
              const formsCopy = [...forms];
              const index = formsCopy.indexOf(form);
              if (index > -1) {
                formsCopy.splice(index, 1);
              }
              setForms(formsCopy);
              if (formsCopy.length > 0) {
                setForm(formsCopy[0]);
              } else {
                setForm(null);
              }
            });
          } else {
            res.text().then((error) => {
              console.log('error', error);
              setAlert({
                severity: 'error',
                message: error,
                show: true,
              });
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div id="designer_body">
      <Loading digitizing={digitizing} />
      <Alert
        id="designer_page_alert"
        severity={alert.severity}
        className={`${alert.show ? 'form-alert' : 'form-alert-hidden'}`}
        onTransitionEnd={() => setAlert({...alert, show: false})}
      >
        {alert.message}
      </Alert>
      <Save
        modified={form === null ? 1 : modifiedForms[form.form_id]}
        onSave={handleSave}
      />
      <VerticalToolbar
        form={form}
        onUpload={handleUpload}
        onDelete={handleDelete}
      />
      <LeftPanel
        forms={forms}
        form={form}
        selectForm={setForm}
        renameForm={handleFormRename}
      />
      <Board form={form} alert={alert} />
    </div>
  );
};

export default Designer;
