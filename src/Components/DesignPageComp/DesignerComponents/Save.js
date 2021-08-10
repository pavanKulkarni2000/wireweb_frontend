
const Save = (props) => {
  console.log('save', props.modified);
  return <div className="form-save">
    {props.modified==3?<div style={{color: 'mediumseagreen', fontSize: '1.8em', fontWeight: 'bold', margin: 'auto'}} >Saving...</div>:
    <button onClick={props.modified==2?props.onSave:null} className={props.modified==1?' form-disabled-button':'form-save-button'}>Save</button>}
  </div>;
};

export default Save;
