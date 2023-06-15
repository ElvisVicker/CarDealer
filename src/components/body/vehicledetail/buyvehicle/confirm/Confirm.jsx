import './Confirm.css'
import { useContext } from 'react';
import { AppContext } from '../../../../../AppContext';
import { Link } from 'react-router-dom';


export default function Confirm() {
    const { selectedCar, setSelectedCar } = useContext(AppContext)
    if (!localStorage.getItem("carSelectedInfo")) {
        localStorage.setItem("carSelectedInfo", JSON.stringify(selectedCar))
    }
    let selectedCarStored = JSON.parse(localStorage.getItem("carSelectedInfo"));

    return (
        <div className='Confirm'>



            <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/PersonalDetail`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                <button className='btnBuyNow'>PREVIOUS</button>
            </Link>
            <button className='btnBuyNow'>SUBMIT</button>


        </div>
    );
}