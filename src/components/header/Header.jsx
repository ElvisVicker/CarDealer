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
                    <Link to="/" className="noUnderline" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>Home</Link>

                    <Link className='noUnderline' to="/Inventory" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                        <Link to="/Inventory" className="noUnderline">Inventory</Link>
                    </Link>

                    <Link className='noUnderline' to="/Company" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                        <Link to="/Company" className="noUnderline">Company</Link>
                    </Link>



                    <Link to="/Contact" className="noUnderline">Contact</Link>
                    <Link to="/About" className="noUnderline">About</Link>
                </div>
            </div>
        </div>
    );
}