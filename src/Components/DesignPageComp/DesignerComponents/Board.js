import { useEffect, useState, React } from "react";
import {Modal,Button} from 'react-bootstrap';
import Form from "./Form";

const Board = (props) => {
  // useEffect(() => {
  //     if(props.form!==null){
  //         document.querySelector("#form-result-content").replaceWith();
  //     }
  // }, [props.form]);
  return (
  <div id="design_board">
    <Modal 
            show={props.showModal} 
            onHide={props.onClose} 
            style={{backgroundColor:"white"}}
            fullscreen={true}
            className="modal_upload"
            >
           <br></br> <h1>Form JSON</h1><br></br>
          <Modal.Body >
            <div className="modal_container" style={{border:"none", margin: "30px"}} >
                    {JSON.stringify(props.form)}
            </div>
          </Modal.Body>
          <Modal.Footer  className="modal_footer">
            <Button className="modal_button" variant="secondary" onClick={props.onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className="form-result">
          {props.form==null ?
              <img  id="form-result-content"
                src={"images/result.jpg"}
                alt="Nordic Giant Profile Pic"
              />:
              < Form form={props.form}/>
          }
        </div>
  </div>);
};

export default Board;
