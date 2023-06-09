import { Link } from "react-router-dom";
import './Header.css'
import cycauto from './cycauto.png';



export default function Header() {
    return (
        <div className="Header">
            <div className="headerContainer">
                <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                    <img className="headerLogo" src={cycauto} alt="" />
                </Link>

                <div className="listlink">
                    <Link to="/" className="listPerLink" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>Home</Link>
                    <Link className='listPerLink' to="/Inventory" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>Inventory</Link>
                    <Link className='listPerLink' to="/Company" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>Company</Link>


                    <Link to="/Contact" className="listPerLink">Contact</Link>
                    <Link to="/About" className="listPerLink">About</Link>
                </div>
            </div>
        </div>
    );
}