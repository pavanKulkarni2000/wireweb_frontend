import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {

    return (
      <footer>
        <hr style={{color:'white'}}/>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">

              <ul className="copyright">
                <li>&copy; Copyright 2021 Nordic Giant</li>
                <li>
                  Design by{" "}
                  <a title="Styleshout" href="http://www.styleshout.com/">
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
