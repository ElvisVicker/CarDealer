import './Body.css'
import { Route, Routes } from 'react-router-dom';
import Intro from './intro/Intro';
import Inventory from './inventory/Inventory';
import Company from './company/Company';
import Contact from './contact/Contact';
import AboutUs from './about/AboutUs';
import VehicleDetail from './vehicledetail/VehicleDetail';
import Offer from './vehicledetail/buyvehicle/offer/Offer';
import PersonalDetail from './vehicledetail/buyvehicle/personaldetail/PersonalDetail';
import Confirm from './vehicledetail/buyvehicle/confirm/Confirm';
import NotFound from '../notfound/NotFound';
export default function Body() {
    return (
        <div className="Body">
            <Routes>
                <Route exact path="/CarDealer" element={<Intro />} ></Route>
                <Route path="/" element={<Intro />} ></Route>
                <Route path="/Inventory" element={<Inventory />}></Route>
                <Route path="/Inventory/VehicleDetail/:id" element={<VehicleDetail />}></Route>
                <Route path="/Company" element={<Company />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/AboutUs" element={<AboutUs />}></Route>
                <Route path="/Inventory/VehicleDetail/:id/Offer" element={< Offer />}></Route>
                <Route path="/Inventory/VehicleDetail/:id/PersonalDetail" element={< PersonalDetail />}></Route>
                <Route path="/Inventory/VehicleDetail/:id/Confirm" element={< Confirm />}></Route>
                <Route path="*" element={< NotFound />}></Route>
            </Routes>
        </div >
    );
}