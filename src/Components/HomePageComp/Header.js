import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    const name = "Wireweb";
    const description = "Wire your web with ease.....";
    const design="";
    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
                <li className="smoothscroll">
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
  }
}

export default Header;
