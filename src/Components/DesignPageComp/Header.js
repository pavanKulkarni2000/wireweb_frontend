import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header id="design_header">
            <h1 className="Name">Wireweb</h1>
            <nav id="nav-wrap">
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
                    <Link href="#about" className="smoothscroll" to="/home#about">About</Link>
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

        </header>
    )
}

export default Header