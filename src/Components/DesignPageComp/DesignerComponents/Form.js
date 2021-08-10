// import {Table} from '@material-ui/core';


const Form = (props) => {
  const formObj=props.form.form_meta_data;
  return (
    <div className="form-result-padding">
      <div className="form-result-content" style={{
        width: formObj.w,
        height: formObj.h,
        backgroundColor: 'White'}}>
        {formObj.widgets.map((widget) => {
          switch (widget.class) {
            case 'drop_down': return <div style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              width: widget.box[2],
              maxWidth: widget.box[2],
              height: widget.box[3],
              overflow: 'hidden',
            }} key={widget.box.toString()}><select style={{
                width: '100%',
                height: '100%',
              }} > <option >{widget.text}</option></select> </div>;
            case 'button': return <button style={{
              position: 'absolute',
              fontSize: '24px',
              left: widget.box[0],
              top: widget.box[1],
              borderRadius: '10px',
              width: widget.box[2],
            }} key={widget.box.toString()}><div contentEditable={true} suppressContentEditableWarning={true}>{widget.text} </div></button>;
            case 'text_box': return <div style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              width: widget.box[2],
              maxWidth: widget.box[2],
              height: widget.box[3],
              overflow: 'hidden',
            }} key={widget.box.toString()}><input type="text" value={widget.text} style={{
                width: '100%',
                height: '100%',
              }} onChange={null} ></input> </div>;
            case 'radio': return <input type="radio" style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              width: widget.box[2],
              height: widget.box[3],
            }} key={widget.box.toString()} onChange={null} />;
            case 'check_box': return <input type="checkbox" style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              width: widget.box[2],
              height: widget.box[3],
            }} key={widget.box.toString()} onChange={null}/>;
            case 'date': return <input type="date" style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              width: widget.box[2],
              height: widget.box[3],
              fontSize: '20px',
            }} key={widget.box.toString()} onChange={null}/>;
            case 'text': return <div style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              // width: widget.box[2],
              lineHeight: widget.box[3]+'px',
              fontSize: '30px',
              display: 'inline',
            }} key={widget.box.toString()} contentEditable={true} suppressContentEditableWarning={true}>{widget.text}</div>;
            case 'text_area': return <input type="textarea" style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              width: widget.box[2],
              height: widget.box[3],
              lineHeight: widget.box[3]+'px',
              fontSize: '30px',
              textAlign: 'top',
            }} key={widget.box.toString()} value={widget.text} onChange={null} />;
            case 'image': return <img src="images/default-image.jpg" style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              width: widget.box[2],
              height: widget.box[3],
              zIndex: 100,
            }} key={widget.box.toString()} alt="default.." value={widget.text} />;
            case 'section_header': return <h1 style={{
              position: 'absolute',
              left: widget.box[0],
              top: widget.box[1],
              // width: widget.box[2],
              lineHeight: widget.box[3]+'px',
              fontSize: '30px',
              display: 'inline',
              textDecoration: 'underline',
            }} key={widget.box.toString()} contentEditable={true} suppressContentEditableWarning={true}>{widget.text}</h1>;
            // case 'table': return <Table aria-label="simple table">
            // {widget.text}</Table>;
            default: return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default Form;
