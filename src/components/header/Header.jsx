import { Link, Outlet } from "react-router-dom";
import './Header.css'
export default function Header() {
    return (
        <div className="Header">
            <div className="headerContainer">
                <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                    <img className="headerLogo" src="https://img.freepik.com/premium-vector/car-logo-design-simple-modern-concept-vector-eps-10_567423-203.jpg?w=2000" alt="" srcset="" />
                </Link>

                <div className="listlink">
                    <Link to="/" className="noLinkUnderline" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>Home</Link>
                    <Link to="/Inventory" className="noLinkUnderline">Inventory</Link>
                    <Link to="/Company" className="noLinkUnderline">Company</Link>
                    <Link to="/Contact" className="noLinkUnderline">Contact</Link>
                    <Link to="/About" className="noLinkUnderline">About</Link>
                </div>
            </div>
        </div>
    );
}