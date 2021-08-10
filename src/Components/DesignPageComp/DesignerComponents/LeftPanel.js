import {SquareLoader} from 'react-spinners';

const LeftPanel = (props) => {
  if (props.forms!=null && props.form==null) {
    props.selectForm(props.forms[0]);
  }

  const onFormRename = (e) => {
    const newName=e.target.value;
    if (props.form.form_name!=newName && newName!='') {
      props.renameForm(newName);
    }
  };

  return (
    <div id="left_panel">
      <h1 id="left_panel_heading" >Digitized Forms</h1>
      <div id="left_panel_body" >
        {props.forms==null?<><SquareLoader loading={true} size={15} style={{marginLeft: '5px'}}/> Loading...</>:
        <div id="left_panel_body_list" >
          {props.forms.length==0?<>No forms</>:
          props.forms.slice(0).reverse().map((form)=>{
            return form===props.form ?
                    <div className="left-panel-item-selected" key={form.form_id}>  <input className="left-panel-item-input" onClick={()=>document.activeElement.blur()} onDoubleClick={(e)=>{
                      e.target.focus();
                      e.target.select();
                    }} value={form.form_name} onInput={onFormRename}/></div>:
                      <input className="left-panel-item" key={form.form_id} onClick={()=>props.selectForm(form)} value={form.form_name}/>;
          })}
        </div>}
      </div>
    </div>
  );
};

export default LeftPanel;
