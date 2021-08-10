import React from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal';
import {Link} from 'react-router-dom';
import Avatar from 'react-avatar';


const Header = (props) => {
  const name = 'Wireweb';
  const description = 'Wire your web with ease.....';
  return (
    <header id="home_header">
      <ParticlesBg type="circle" bg={true} />

      <nav id="nav-wrap">

        <ul id="nav" className="nav">
          <li id="current">
            <Link className="smoothscroll" to="/home">Home</Link>
          </li>

          <li>
            <Link className="smoothscroll" to="/home#about">About</Link>
          </li>

          <li>
            <Link className="smoothscroll" to="/home">Products</Link>

          </li>

          <li>
            <Link className="smoothscroll" to="/home">Pricing</Link>

          </li>

          <li>
            <Link className="smoothscroll" to="/home">Contact</Link>

          </li>
        </ul>
        <div className="left-corner-item" >
          {
          props.user==null?
          <>
            <Link to="/signin" className="formFieldButton">Sign In</Link>
            <Link to="/signup" className="formFieldButton">Sign Up</Link>
          </>:
          <span className="top-left-avatar">
            <Avatar name={props.user.name}
              size={70} round={true} textSizeRatio={3} maxInitials={2}/>
          </span>
          }
        </div>

      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 id="id1" className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <h3>{description}.</h3>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <Link to="/design" className="button btn design-btn">
              <i className="fa fa-book"></i> Design
            </Link>
          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
