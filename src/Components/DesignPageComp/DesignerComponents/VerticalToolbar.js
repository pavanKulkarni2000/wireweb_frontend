import {IoIosRemoveCircleOutline} from 'react-icons/io';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {BiPointer} from 'react-icons/bi';
import {FaShapes} from 'react-icons/fa';
import {useState} from 'react';
import DeleteFormDialog from './DeleteFormDialog';
import ImageUploadDialog from './ImageUploadDialog';

const VerticalToolbar = (props) => {
  // for image upload
  const [imageUploading, setImageUploading] = useState(false);
  const [formDeleteing, setFormDeleting] = useState(false);

  return (
    <div id="vertical_toolbar">
      <ImageUploadDialog
        openDialog={imageUploading}
        onClose={() => setImageUploading(false)}
        onUpload={props.onUpload}
      />
      <DeleteFormDialog
        openDialog={formDeleteing}
        onClose={() => setFormDeleting(false)}
        onDelete={props.onDelete}
        formName={props.form==null?'':props.form.form_name}
      />
      <div className="toolbar-square-item-icon">
        <BiPointer className="toolbar-item-icon"/>
      </div>
      <hr className="toolbar-break"/>
      <div className="toolbar-square-item-icon">
        <FaShapes className="toolbar-item-icon"/>
      </div>
      <hr className="toolbar-break"/>
      <div className="toolbar-square-item-icon" onClick={() => setImageUploading(true)}>
        <IoIosAddCircleOutline className="toolbar-item-icon"/>
      </div>
      <hr className="toolbar-break"/>
      <div className="toolbar-square-item-icon" onClick={() => {
        if (props.form!=null) {
          setFormDeleting(true);
        }
      }}>
        <IoIosRemoveCircleOutline className="toolbar-item-icon"/>
      </div>
    </div>
  );
};

export default VerticalToolbar;
