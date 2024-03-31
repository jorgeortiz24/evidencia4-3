import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
        <h1 className="navbar-logo">Electroluz</h1>
        <Link className="seeCarrito" to={"/cart"}>
            🛒
            </Link>
        </nav>
    </div>
  );
};

export default Navbar;