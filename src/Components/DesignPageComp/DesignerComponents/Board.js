import Form from './Form';
import Draggable from 'react-draggable';

const Board = (props) => {
  return (
    <div id="design_board">
      <div className="form-result">
        <Draggable>
          <div>
            {props.form == null ? <></>:<Form form={props.form}/>}
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default Board;
