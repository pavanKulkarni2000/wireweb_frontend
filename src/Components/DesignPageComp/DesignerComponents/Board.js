import { useEffect, useState } from "react";
import {Modal,Button} from 'react-bootstrap';

const Board = (props) => {
  // useEffect(() => {
  //     if(props.form!==null){
  //         document.querySelector("#design_board").innerHTML=props.form;
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
                    {props.form}
            </div>
          </Modal.Body>
          <Modal.Footer  className="modal_footer">
            <Button className="modal_button" variant="secondary" onClick={props.onClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
                  <img
                className="result-pic"
                src={"images/result.jpg"}
                alt="Nordic Giant Profile Pic"
              />
  </div>);
};

export default Board;
