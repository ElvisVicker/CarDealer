import './PersonalDetail.css'
import { useContext } from 'react';
import { AppContext } from '../../../../../AppContext';
import { Link } from 'react-router-dom';



export default function PersonalDetail() {
    const { selectedCar, setSelectedCar } = useContext(AppContext)
    if (!localStorage.getItem("carSelectedInfo")) {
        localStorage.setItem("carSelectedInfo", JSON.stringify(selectedCar))
    }
    let selectedCarStored = JSON.parse(localStorage.getItem("carSelectedInfo"));

    return (
        <div className='PersonalDetail'>

            <div className='stepOffer'>Step 2/3</div>


            <div className='personalDetailInfoContainer'>
                <div className='personalDetailMainTitle'>What's your name?</div>

                <div>
                    <div className='personalDetailTitle'>First Name</div>
                    <input type="text" required className='personalDetailInput' />
                </div>

                <div>
                    <div className='personalDetailTitle'>Middle Name (Optional)</div>
                    <input type="text" className='personalDetailInput' />
                </div>

                <div>
                    <div className='personalDetailTitle'>Last Name</div>
                    <input type="text" required className='personalDetailInput' />
                </div>

                <div>
                    <div className='personalDetailTitle'>Your mobile number</div>

                    <input type="text" required className='personalDetailInput' />
                </div>

                <div>
                    <div className='personalDetailTitle'>Your email address</div>

                    <input type="email" name="" id="" required className='personalDetailInput' />
                </div>


                <div className='personalDetailGender'>
                    <div className='personalDetailTitle'>What's your gender?</div>

                    <div className='genderContainer'>
                        <div>
                            <input type="radio" name="genderRatio" id="" /> Male
                        </div>

                        <div>
                            <input type="radio" name="genderRatio" id="" /> Female
                        </div>
                    </div>
                </div>
            </div>


















            <div className='btnNAPContainer'>
                <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/Offer`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                    <button className='btnPrevOffer'>PREVIOUS</button>
                </Link>


                <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/Confirm`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                    <button className='btnNextOffer'>NEXT</button>
                </Link>
            </div>
        </div>
    );
}