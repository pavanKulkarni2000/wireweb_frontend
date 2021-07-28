import { useEffect } from "react";

const LeftPanel = (props) => {
    var forms=[{name:"Form1",form:{}},{name:"Form2",form:{}}];
    useEffect(() => {
        if(props.form && forms[forms.length-1].form!==props.form){
            console.log("adding left panel item");
            forms.push({ 
                name:"Form"+(forms.length+1),
                form: props.form
            });
        }
    }, [props.form])
    return (
        <div id="left_panel">
            <h1 id="left_panel_heading" >Digitized Forms</h1>
            <div id="left_panel_body" >
                {forms.map((form)=>{
                    return <div className="left-panel-item">
                        {form.name}
                    </div>
                })}
            </div>
        </div>
    )
}

export default LeftPanel