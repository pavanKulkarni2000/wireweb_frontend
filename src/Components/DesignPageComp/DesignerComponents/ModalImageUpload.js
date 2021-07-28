import {useState,useEffect} from 'react';
import {Button,Modal} from 'react-bootstrap';

function ModalImageUpload(props) {

    const handleUpload = (e) => {
        props.onClose();
        props.onUpload(e);
    }
    return (
        <Modal 
            show={props.showModal} 
            onHide={props.onClose} 
            style={{backgroundColor:"white"}}
            fullscreen={true}
            className="modal_upload"
            >
           <br></br> <h1>Upload image</h1><br></br>
          <Modal.Body >
            <div className="modal_container">
                    <label>Upload Your File </label>
                    <input type="file" className="form-control" name="file" onChange={handleUpload}/>
            </div>
          </Modal.Body>
          <Modal.Footer  className="modal_footer">
            <Button className="modal_button" variant="secondary" onClick={props.onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }

  export default ModalImageUpload;