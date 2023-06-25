import './Footer.css'
import './FooterResponsive.css'
import { Link } from "react-router-dom";
import cycauto from './cycauto.png'
import { Route, Routes } from 'react-router-dom';
import Privacy from './privacy/Privacy';
import { useContext } from 'react';
import { AppContext } from '../../AppContext';

export default function Footer() {
    const { setCurrentPage, setFilteredData, list } = useContext(AppContext)
    return (
        <div className="Footer">
            <Routes>
                <Route path="/Privacy" element={<Privacy />}></Route>
            </Routes>
            <div className='footerContainer'>
                <div className='footerLogoADes'>
                    <Link to="/" onClick={() => {
                        window.scrollTo({ top: 0, left: 0 });
                        setCurrentPage(1)
                        setFilteredData(list)
                    }}>
                        <img className='footerLogo' src={cycauto} alt="" />
                    </Link>
                    <div className='footerDes'>We provide not only the best quality cars around, but give the best buying experience available!</div>
                </div>
                <div className='footerCompanyContainer'>
                    <div className='footerPerTitle'> Company</div>
                    <ul className='footerList'>
                        <li><a href="https://www.ford.com/">FORD</a></li>
                        <li><a href="https://www.audi.com/en.html">AUDI</a></li>
                        <li><a href="https://www.chevrolet.com/">CHEVROLET</a></li>
                        <li><a href="https://www.volvo.com/en/">VOLVO</a></li>
                        <li><a href="https://www.landrover.com/index.html">LAND ROVER</a></li>
                        <li><a href="https://www.toyota.com/">TOYOTA</a></li>
                    </ul>
                </div>
                <div className='footerContactContainer'>
                    <div className='footerPerTitle'>Contact us</div>
                    <ul className='footerList'>
                        <li><a href="mailto:CycAuto@gmail.com">CycAuto@gmail.com</a></li>
                        <li><a href="tel:+18885108579">+1 (888) 510-8519</a></li>
                        <li>2822 Doherty Dr. SW, Suite 404 · Joint Base Anacostia Bolling · Washington, DC</li>
                    </ul>
                </div>
                <div className='footerResourcesContainer'>
                    <div className='footerPerTitle'>Resources</div>
                    <Link to="/Privacy" className="privacy" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                        <div>Privacy Policy</div>
                    </Link>
                </div>
            </div>
            <div className='footerCopyright'>© Copyright 2018-2023, CycAuto Ltd.</div>
        </div>
    );
}