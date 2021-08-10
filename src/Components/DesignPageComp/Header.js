import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';

const Header = (props) => {
  return (
    <header id="design_header">
      <h1 className="Name">Wireweb</h1>
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link href="#about"
              to="/home#about">About</Link>
          </li>

          <li>
            <Link to="/">Products</Link>

          </li>

          <li>
            <Link to="/home">Pricing</Link>

          </li>

          <li>
            <Link to="/home">Contact</Link>

          </li>
        </ul>
        <div className="left-corner-item" >
          <span className="top-left-avatar">
            <Avatar name={props.user==null?'An':props.user.name}
              size={60} round={true} textSizeRatio={3} maxInitials={2}/>
          </span>
        </div>
      </nav>

    </header>
  );
};

export default Header;
