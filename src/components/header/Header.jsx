import { Link } from "react-router-dom";
import './Header.css'
import cycauto from './cycauto.png';
import { useContext } from "react";
import { AppContext } from "../../AppContext";




export default function Header() {
    const { setCurrentPage, setFilteredData, list } = useContext(AppContext)
    return (
        <div className="Header">
            <div className="headerContainer">
                <Link to="/" onClick={() => {
                    window.scrollTo({ top: 0, left: 0 });
                    localStorage.clear();
                    setCurrentPage(1)
                    setFilteredData(list)
                }}>
                    <img className="headerLogo" src={cycauto} alt="" />
                </Link>

                <div className="listlink">
                    <Link className="listPerLink" to="/" onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        localStorage.clear();
                        setCurrentPage(1)
                        setFilteredData(list)
                    }}>Home</Link>
                    <Link className='listPerLink' to="/Inventory" onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        localStorage.removeItem("carSelectedInfo");
                        setCurrentPage(1)
                        setFilteredData(list)
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