import LeftPanel from "./DesignerComponents/LeftPanel";
import ModalImageUpload from "./DesignerComponents/ModalImageUpload";
import Toolbar from "./DesignerComponents/Toolbar";
import { useState } from "react";
import Loading from "./Loading";
import Board from "./DesignerComponents/Board";

const Designer = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleOpen = () => setModalShow(true);

  const [loading, setLoading] = useState(false);
  const handleFinishLoading = () => setLoading(false);
  const handleStartLoading = () => setLoading(true);

  const [form, setForm] = useState("");
  const [showAlert, setshowAlert] = useState(false);


  var formJson = "";
  const handleUpload = (e) => {
    handleStartLoading();
    e.preventDefault();
    console.log("uploading");
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    fetch("http://013fef861b22.ngrok.io/design", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        console.log(res, " is the response");
        if (res.ok) {
          return res.json();
        }else{
          return null;
        }
      })
      .then((data)=> {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        console.log(data.json);
        setForm(data.json);
        setshowAlert(true)
      });
      console.log("outside");
  };

  return (
    <div id="designer_body">
      
      <Board form={form} showModal={showAlert} onClose={() => setshowAlert(false)}/>
      <LeftPanel />
      <Toolbar onAdd={handleOpen} />

      <ModalImageUpload
        showModal={modalShow}
        onClose={handleClose}
        onUpload={handleUpload}
      />
      
      <Loading loading={loading} />
    </div>
  );
};

export default Designer;
