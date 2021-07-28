// import { Button , Input , Table , Select } from "semantic-ui-react";
import { Button , TextField , MenuItem , Table , FormControlLabel , Radio , Checkbox  } from '@material-ui/core';


const Form = (props) => {
    var form_obj=props.form;
    console.log(form_obj.w, form_obj.h);
    console.log(form_obj);
    return (
    <div id="form-result-content" style={{
        width:form_obj.w,
        height:form_obj.h,
        backgroundColor:"White"}}>
        {form_obj.widgets.map(widget => {
            
            switch (widget.class){
                // case "button":return <Button variant="contained" style={{
                //     left: widget.box[0],
                //     top: widget.box[1],
                //     size: widget.box[2]
                // }}>{widget.text}</Button>;
                // case "text_box":return <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{
                //     left: widget.box[0],
                //     top: widget.box[1],
                //     size: widget.box[2]
                // }}>{widget.text} </TextField>
                // case "drop_down":return <TextField select label="Select"  variant="outlined"  style={{
                //     left: widget.box[0],
                //     top: widget.box[1],
                //     size: widget.box[2]
                // }}><MenuItem key={widget.text} value={widget.text}>{widget.text}</MenuItem></TextField>
                // case "table":return <Table aria-label="simple table">{widget.text}</Table>;
                // case "text":return <div style={style}>{widget.text}</div>;
                // case "text_area":return <TextField multiline label="Multiline" variant="outlined">{widget.text}</TextField>
                // case "section_header":return <u> <h1 style={style}>{widget.text}</h1></u>;
                // case "radio": return <FormControlLabel value={widget.text} control={<Radio />} size={widget.box[3]+"px"} />;
                // case "check_box": return <FormControlLabel value={widget.text} size={widget.box[3]+"px"} control={<Checkbox/>}/>;
                // case "radio": return <FormControlLabel value={widget.text} control={<Radio />} size={widget.box[3]+"px"} />;
                // case "check_box": return <FormControlLabel value={widget.text} size={widget.box[3]+"px"} control={<Checkbox/>}/>;
                case "drop_down": return <select style={{
                    position:"absolute",
                    left: widget.box[0],
                    top: widget.box[1],
                    size: widget.box[2]
                }} ><option>{widget.text}</option> </select>
                case "button": return <input type="button" style={{
                    position:"absolute",
                    left: widget.box[0],
                    top: widget.box[1],
                    width: widget.box[2]
                }} key={widget.box.toString()} value={widget.text} />
                case "text_box": return <input type="text" style={{
                    position:"absolute",
                    left: widget.box[0],
                    top: widget.box[1],
                    width: widget.box[2]
                }} key={widget.box.toString()} value={widget.text} />
                case "radio": return <input type="radio" style={{
                    position:"absolute",
                    left: widget.box[0],
                    top: widget.box[1],
                    width: widget.box[2],
                    height: widget.box[3],
                }} key={widget.box.toString()} />
                case "check_box": return <input type="checkbox" style={{
                    position:"absolute",
                    left: widget.box[0],
                    top: widget.box[1],
                    width: widget.box[2],
                    height: widget.box[3],
                }} key={widget.box.toString()} />
                case "date": return <input type="date" style={{
                    position:"absolute",
                    left: widget.box[0],
                    top: widget.box[1],
                    width: widget.box[2],
                    height: widget.box[3],
                    fontSize: "30px"
                }} key={widget.box.toString()} />
                case "table":return <Table aria-label="simple table">{widget.text}</Table>;
                case "text":return <div style={{
                    position:"absolute",
                    left: widget.box[0],
                    top: widget.box[1],
                    // width: widget.box[2],
                    lineHeight: widget.box[3]+"px",
                    fontSize: "30px",
                    display:"inline"
                }}>{widget.text}</div>;
                case "text_area":return <TextField multiline label="Multiline" variant="outlined">{widget.text}</TextField>
                case "section_header":return <u> <h1 style={{
                    position:"absolute",
                    left: widget.box[0],
                    top: widget.box[1],
                    // width: widget.box[2],
                    lineHeight: widget.box[3]+"px",
                    fontSize: "30px",
                    display:"inline"
                }}>{widget.text}</h1></u>;
                default: return <></>;
            }
        })}
    </div>
    );
}

export default Form