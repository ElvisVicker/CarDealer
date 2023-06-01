import './Body.css'
import Intro from './intro/Intro';
import { Route, Routes } from 'react-router';
import Inventory from './inventory/Inventory';
export default function Body() {
    return (
        <div className="Body">
            <Routes>
                <Route path="/" element={<Intro />}></Route>
                <Route path="/Inventory" element={<Inventory />}></Route>
                {/* <Route path="/Inventory" element={<Inventory />}></Route>
                <Route path="/Inventory" element={<Inventory />}></Route>
                <Route path="/Inventory" element={<Inventory />}></Route> */}

            </Routes>


        </div>
    );
}