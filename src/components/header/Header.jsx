import { Link } from "react-router-dom";
import './Header.css'
import cycauto from './cycauto.png';



export default function Header() {
    return (
        <div className="Header">
            <div className="headerContainer">
                <Link to="/" onClick={() => {
                    window.scrollTo({ top: 0, left: 0 });
                    localStorage.clear();
                }}>
                    <img className="headerLogo" src={cycauto} alt="" />
                </Link>

                <div className="listlink">
                    <Link className="listPerLink" to="/" onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        localStorage.clear();
                    }}>Home</Link>
                    <Link className='listPerLink' to="/Inventory" onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        localStorage.removeItem("carSelectedInfo");
                    }} >Inventory</Link>
                    <Link className='listPerLink' to="/Company" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>Company</Link>
                    <Link className="listPerLink" to="/Contact" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>Contact</Link>
                    <Link className="listPerLink" to="/AboutUs" onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        localStorage.removeItem("selectedPeople");
                    }}>About Us</Link>
                </div>
            </div>
        </div>
    );
}