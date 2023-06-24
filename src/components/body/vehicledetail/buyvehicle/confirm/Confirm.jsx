import './Confirm.css'
import './ConfirmResponsive.css'
import { useContext } from 'react';
import { AppContext } from '../../../../../AppContext';
import { Link } from 'react-router-dom';

export default function Confirm() {
    const { selectedCar, setSelectedCar } = useContext(AppContext)
    if (!localStorage.getItem("carSelectedInfo")) {
        localStorage.setItem("carSelectedInfo", JSON.stringify(selectedCar))
    }
    let selectedCarStored = JSON.parse(localStorage.getItem("carSelectedInfo"));
    let buyerInfoStored = JSON.parse(localStorage.getItem("buyerInfoWillStore"));

    let submitAll = () => {
        const allInformation = Object.assign({}, selectedCarStored, buyerInfoStored);
        if (!localStorage.getItem("allInformation")) {
            localStorage.setItem("allInformation", JSON.stringify(allInformation))
        }
        localStorage.removeItem("carSelectedInfo");
        localStorage.removeItem("buyerInfoWillStore");
        localStorage.removeItem("selectedLeader");
        localStorage.removeItem("selectedFounder");
        alert('Thank you for submiting, Have a nice day :D')
    }

    return (
        <div className='Confirm'>
            <div className='stepConfirm'>Step 3/3</div>
            <div className='confirmInfoContainer'>
                <div className='confirmBuyerContainer'>
                    <img className='bgConfirmBuyer' src="https://wallpaperset.com/w/full/9/6/a/263727.jpg" alt="" />
                    <div className='confirmMainBuyerTitle zindex2'>Check your information</div>
                    <div className='zindex2'>
                        <div className='confirmBuyerTitle'>Your First Name:</div>
                        <div className='confirmBuyerDes'>{buyerInfoStored.firstName}</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmBuyerTitle'>Your Middle Name:</div>
                        <div className='confirmBuyerDes'>{buyerInfoStored.midName}</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmBuyerTitle'>Your Last Name:</div>
                        <div className='confirmBuyerDes'>{buyerInfoStored.lastName}</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmBuyerTitle'>Your Gender:</div>
                        <div className='confirmBuyerDes'>{buyerInfoStored.gender}</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmBuyerTitle'>Your Phone Number:</div>
                        <div className='confirmBuyerDes'>{buyerInfoStored.phoneNumber}</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmBuyerTitle'>Your Email:</div>
                        <div className='confirmBuyerDes'>{buyerInfoStored.email}</div>
                    </div>
                </div>
                <div className='confirmVehicleContainer'>
                    <img className='bgConfirmVehicle' src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="" />
                    <div className='confirmMainVehicleTitle zindex2'>  Vehicle Information </div>
                    <div className='zindex2'>
                        <div className='confirmVehicleTitle '>Name:</div>
                        <div className='confirmVehicleDes '>{selectedCarStored.name}</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmVehicleTitle '>Price:</div>
                        <div className='confirmVehicleDes '>{selectedCarStored.price}$</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmVehicleTitle '>Company:</div>
                        <div className='confirmVehicleDes '>{selectedCarStored.company}</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmVehicleTitle '>Color:</div>
                        <div className='confirmVehicleDes '>{selectedCarStored.color}</div>
                    </div>
                    <div className='zindex2'>
                        <div className='confirmVehicleTitle '>Year Release:</div>
                        <div className='confirmVehicleDes '>{selectedCarStored.year}</div>
                    </div>
                </div>
            </div>
            <div className='btnNAPContainer'>
                <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/PersonalDetail`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                    <button className='btnPrevOffer'>PREVIOUS</button>
                </Link>
                <Link to="/" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
                    <button className='btnNextOffer' onClick={submitAll}>SUBMIT</button>
                </Link>
            </div>
        </div>
    );
}