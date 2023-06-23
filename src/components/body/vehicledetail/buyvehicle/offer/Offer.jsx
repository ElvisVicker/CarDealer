import './Offer.css'
import './OfferResponsive.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../../../../AppContext';
import { useState } from 'react';

export default function Offer() {
    const { selectedCar, setSelectedCar } = useContext(AppContext)
    if (!localStorage.getItem("carSelectedInfo")) {
        localStorage.setItem("carSelectedInfo", JSON.stringify(selectedCar))
    }
    let selectedCarStored = JSON.parse(localStorage.getItem("carSelectedInfo"));
    const [isCheckedBuy, setIsCheckedBuy] = useState(false);
    const checkBoxBuyChange = (e) => {
        setIsCheckedBuy(e.target.checked);
    }
    return (
        <div className='Offer'>
            <div className='stepOffer'>Step 1/3</div>
            <div className='offerCarInfoContainer'>
                <div className='offerCarMainTitle'>Below is a summary of the information you have already provided us.</div>
                <div >
                    <div className='offerCarTitle'>Name:</div>
                    <div className='offerCarDes'>{selectedCarStored.name}</div>
                </div>
                <div >
                    <div className='offerCarTitle'>Price:</div>
                    <div className='offerCarDes'>{selectedCarStored.price}$</div>
                </div>
                <div >
                    <div className='offerCarTitle'>Image:</div>
                    <img className='offerCarImg' src={selectedCarStored.img[0]} alt="" srcset="" />
                </div>
                <div>
                    <div className='offerCarTitle'>Use of your personal information</div>
                    <div className='offerCarCheckContainer'>
                        <input type="checkbox" name="" id="" checked={isCheckedBuy} className='offerCheckBox'
                            onChange={checkBoxBuyChange} />
                        <div className='offerCarPolicy'>
                            I accept that you may use my information in the ways described in the privacy notice and I have read and understood the Evolution Disclosure document
                        </div>
                    </div>
                </div>
            </div>
            <div className='btnNAPContainer'>
                <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                    <button className='btnPrevOffer'>PREVIOUS</button>
                </Link>
                {
                    isCheckedBuy && <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/PersonalDetail`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                        <button className='btnNextOffer'>NEXT</button>
                    </Link>
                }
            </div>
        </div>
    );
}