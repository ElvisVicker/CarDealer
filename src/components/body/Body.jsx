import './Body.css'
import { Route, Routes } from 'react-router';
import Intro from './intro/Intro';
import Inventory from './inventory/Inventory';
import Company from './company/Company';
import Contact from './contact/Contact';
import AboutUs from './about/AboutUs';
export default function Body() {
    return (
        <div className="Body">
            <Routes>
                <Route path="/" element={<Intro />}></Route>
                <Route path="/Inventory" element={<Inventory />}></Route>
                <Route path="/Company" element={<Company />}></Route>
                 <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/AboutUs" element={<AboutUs />}></Route>  
            </Routes>


        </div>
    );
}