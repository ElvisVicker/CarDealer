import { Link } from "react-router-dom";
import './Header.css'
import cycauto from './cycauto.png';
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { AiOutlineHome } from 'react-icons/ai';


import { MdOutlineInventory2 } from 'react-icons/md';
import { BiBuildingHouse } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import { HiOutlineDocumentText } from 'react-icons/hi';


export default function Header() {
    const { setCurrentPage, setFilteredData, list, showListLink, setShowListLink } = useContext(AppContext)
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
                    }}>
                        <AiOutlineHome /> Home
                    </Link>

                    <Link className='listPerLink' to="/Inventory" onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        localStorage.removeItem("carSelectedInfo");
                        setCurrentPage(1)
                        setFilteredData(list)
                    }} >
                        <MdOutlineInventory2 /> Inventory
                    </Link>


                    <Link className='listPerLink' to="/Company" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                        <BiBuildingHouse /> Company
                    </Link>

                    <Link className="listPerLink" to="/Contact" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                        <RiContactsLine /> Contact
                    </Link>

                    <Link className="listPerLink" to="/AboutUs" onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        localStorage.removeItem("selectedPeople");
                    }}>
                        <HiOutlineDocumentText /> About Us
                    </Link>
                </div>
                <button onClick={() => setShowListLink(true)} className="btnListLinkToggle" >|||</button>
                {showListLink && (<div className={showListLink ? 'listlinkShowToggle listlinkShowToggleClicked' : 'listlinkShowToggle'}>
                    <div className="listLinkToggleContainer">
                        <Link className="listPerLinkToggle" to="/" onClick={() => {
                            window.scrollTo({ top: 0, left: 0 });
                            localStorage.clear();
                            setCurrentPage(1)
                            setFilteredData(list)
                        }}><AiOutlineHome /> Home</Link>
                        <Link className='listPerLinkToggle' to="/Inventory" onClick={() => {
                            window.scrollTo({ top: 0, left: 0 });
                            localStorage.removeItem("carSelectedInfo");
                            setCurrentPage(1)
                            setFilteredData(list)
                        }} ><MdOutlineInventory2 /> Inventory</Link>
                        <Link className='listPerLinkToggle' to="/Company" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                            <BiBuildingHouse /> Company
                        </Link>
                        <Link className="listPerLinkToggle" to="/Contact" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                            <RiContactsLine /> Contact
                        </Link>
                        <Link className="listPerLinkToggle" to="/AboutUs" onClick={() => {
                            window.scrollTo({ top: 0, left: 0 });
                            localStorage.removeItem("selectedPeople");
                        }}>
                            <HiOutlineDocumentText /> About Us
                        </Link>
                        <div className="closeListLinkModal" onClick={() => setShowListLink(false)}>x</div>
                    </div>
                </div>
                )}
                {showListLink && (
                    <div className='outline' onClick={() => { setShowListLink(false) }} ></div>
                )}
            </div>
        </div>
    );
}