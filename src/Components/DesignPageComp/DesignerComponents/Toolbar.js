import {IoIosRemoveCircleOutline,IoIosAddCircleOutline} from 'react-icons/io'
import { Tooltip } from 'react-bootstrap';
import { useState } from 'react';
import { BiPointer } from 'react-icons/bi';
import {FaShapes} from 'react-icons/fa'
import ModalImageUpload from './ModalImageUpload';

const Toolbar = (props) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const  handleUpload = (e) => {
        // e.preventDefault();
        
        // const formData = new FormData();
        // formData.append('file', e.target.files[0]);
        // fetch('http://localhost:8080/design', {
        //     method: 'post',
        //     body: formData
        // }).then(res => {
        //     if(res.ok) {
        //         console.log(res.data);
        //         alert("File uploaded successfully.")
        //     }
        // });
    };

    return (
        <div className="toolbar center" draggable>
                <div className="toolbar_item">
                    <BiPointer className="toolbar_item_icon" id="remove_tool" >
                    <Tooltip isOpen={tooltipOpen} placement="right" target="remove_tool" toggle={toggle}>
                        Hello world!
                    </Tooltip>
                    </BiPointer>
                </div>
                <div className="toolbar_item">
                    <FaShapes className="toolbar_item_icon" id="remove_tool" >
                    <Tooltip isOpen={tooltipOpen} placement="right" target="remove_tool" toggle={toggle}>
                        Hello world!
                    </Tooltip>
                    </FaShapes>
                </div>
                <div className="toolbar_item" >
                    <IoIosAddCircleOutline onClick={props.onAdd} className="toolbar_item_icon" id="remove_tool" >
                    <Tooltip isOpen={tooltipOpen} placement="right" target="remove_tool" toggle={toggle}>
                        Hello world!
                    </Tooltip>
                    </IoIosAddCircleOutline>
                </div>
                <div className="toolbar_item">
                    <IoIosRemoveCircleOutline className="toolbar_item_icon" id="remove_tool" >
                    <Tooltip isOpen={tooltipOpen} placement="right" target="remove_tool" toggle={toggle}>
                        Hello world!
                    </Tooltip>
                    </IoIosRemoveCircleOutline>
                </div>
        </div>
    );
}

export default Toolbar