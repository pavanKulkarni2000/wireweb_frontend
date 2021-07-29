import LeftPanel from "./DesignerComponents/LeftPanel";
import ModalImageUpload from "./DesignerComponents/ModalImageUpload";
import Toolbar from "./DesignerComponents/Toolbar";
import { useState } from "react";
import Loading from "./Loading";
import Board from "./DesignerComponents/Board";
import Alert from '@material-ui/lab/Alert';

const Designer = () => {
  //for image upload
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleOpen = () => setModalShow(true);

  //to display loading screen while image digitization
  const [loading, setLoading] = useState(false);
  //to set current form
  const [form, setForm] = useState(null);
  //to show form digitization result as alert
  const [showAlert, setshowAlert] = useState(false);


  const handleUpload = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log("uploading");
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    fetch("http://e4fda4dec642.ngrok.io", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        console.log(res, " is the response");
        if (res.ok) {
          return res.json();
        }else{
          throw new Error("result not OK");
        }
      })
      .then((data)=> {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data.json);
        var str = data.json.replace(/\\n/g, "\\n")  
               .replace(/\\'/g, "\\'")
               .replace(/\\"/g, '\\"')
               .replace(/\\&/g, "\\&")
               .replace(/\\r/g, "\\r")
               .replace(/\\t/g, "\\t")
               .replace(/\\b/g, "\\b")
               .replace(/\\f/g, "\\f");
        // remove non-printable and other non-valid JSON chars
        str = str.replace(/[\u0000-\u0019]+/g,""); 
        str=JSON.parse(str);
        console.log(str);
        setForm(str);
        setshowAlert(true);
        setLoading(false);
      }).catch((err)=>{
        console.log(err);
        setLoading(false);
      });
      console.log("outside");
  };

  return (
    <div id="designer_body">

      <Loading 
        loading={loading} 
      />
      {/* <Alert className="fail-alert" severity="error">Server Error!</Alert> */}
      <LeftPanel 
        form={form} 
      />
      <Toolbar
        onAdd={handleOpen} 
      />
      <Board 
        form={form} 
        showModal={showAlert} 
        onClose={() => setshowAlert(false)}
      />
      <ModalImageUpload
        showModal={modalShow}
        onClose={handleClose}
        onUpload={handleUpload}
      />
    </div>
  );
};

export default Designer;
