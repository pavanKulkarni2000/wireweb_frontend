import { Link } from "react-router-dom"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

const Header = () => {
    return (
        <header >
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <nav class="navbar navbar-dark bg-dark">
                jhbjnb,n,
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
                Hide navigation
            </a>

            <ul id="nav" className="nav">
                <li>
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
            </nav> */}

        </header>
    )
}

export default Header