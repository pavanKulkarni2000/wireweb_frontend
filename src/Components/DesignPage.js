import Header from './DesignPageComp/Header';
import Designer from './DesignPageComp/Designer';
import {Redirect} from 'react-router-dom';


const DesignPage = (props) => {
  return props.user==null?<Redirect to="/signin"/>:
  (
  // return (
    <div id="design_page">
      < Header user={props.user}/>
      < Designer user={props.user}/>
    </div>
  );
};

export default DesignPage;
