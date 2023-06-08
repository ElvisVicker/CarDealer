import './Body.css'
import { Route, Routes } from 'react-router';
import Intro from './intro/Intro';
import Inventory from './inventory/Inventory';
import Company from './company/Company';
export default function Body() {
    return (
        <div className="Body">
            <Routes>
                <Route path="/" element={<Intro />}></Route>
                <Route path="/Inventory" element={<Inventory />}></Route>
                <Route path="/Company" element={<Company />}></Route>
                {/* <Route path="/Inventory" element={<Inventory />}></Route>
                <Route path="/Inventory" element={<Inventory />}></Route>  */}

            </Routes>


        </div>
    );
}