import './PersonalDetail.css'
import { useContext, useEffect } from 'react';
import { AppContext } from '../../../../../AppContext';
import { Link } from 'react-router-dom';

import { useState } from 'react';

export default function PersonalDetail() {
    const { selectedCar, setSelectedCar } = useContext(AppContext)
    if (!localStorage.getItem("carSelectedInfo")) {
        localStorage.setItem("carSelectedInfo", JSON.stringify(selectedCar))
    }
    let selectedCarStored = JSON.parse(localStorage.getItem("carSelectedInfo"));

    const [firstNameValue, setFirstNameValue] = useState('');
    const changeFirstNameValue = e => {
        setFirstNameValue(e.target.value);
    };

    const [midNameValue, setMidNameValue] = useState('');
    const changeMidNameValue = e => {
        setMidNameValue(e.target.value);
    };

    const [lastNameValue, setLastNameValue] = useState('');
    const changeLastNameValue = e => {
        setLastNameValue(e.target.value);
    };


    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const changePhoneNumberValue = e => {
        setPhoneNumberValue(e.target.value);
    };




    const [emailValue, setEmailValue] = useState('');
    const changeEmailValue = e => {
        setEmailValue(e.target.value);
    };



    const [genderValue, setGenderValue] = useState('');
    const changeGenderValue = e => {
        setGenderValue(e.target.value);
    };


    let buyerInfo = {
        firstName: `${firstNameValue}`,
        midName: `${midNameValue}`, lastName: `${lastNameValue}`,
        phoneNumber: `${phoneNumberValue}`, email: `${emailValue}`,
        gender: `${genderValue}`
    }

    let saveBuyerInfo = () => {
        localStorage.setItem("buyerInfoWillStore", JSON.stringify(buyerInfo))
    }

    // if (!localStorage.getItem("buyerInfoWillStore")) {
    //     localStorage.setItem("buyerInfoWillStore", JSON.stringify(buyerInfo))
    // }
    // let buyerInfoStored = JSON.parse(localStorage.getItem("buyerInfoWillStore"));






    return (
        <div className='PersonalDetail'>

            <div className='stepPersonalDetail'>Step 2/3</div>


            <form className='personalDetailInfoContainer'>
                <div className='personalDetailMainTitle'>Your Information</div>

                <div>
                    <div className='personalDetailTitle'>First Name</div>
                    <input type="text" required className='personalDetailInput' firstNameValue={firstNameValue} onChange={changeFirstNameValue} />
                </div>

                <div>
                    <div className='personalDetailTitle'>Middle Name (Optional)</div>
                    <input type="text" className='personalDetailInput' midNameValue={midNameValue} onChange={changeMidNameValue} />
                </div>

                <div>
                    <div className='personalDetailTitle'>Last Name</div>
                    <input type="text" required className='personalDetailInput' lastNameValue={lastNameValue} onChange={changeLastNameValue} />
                </div>

                <div>
                    <div className='personalDetailTitle'>Your mobile number</div>

                    <input type="text" required className='personalDetailInput' phoneNumberValue={phoneNumberValue} onChange={changePhoneNumberValue} />
                </div>

                <div>
                    <div className='personalDetailTitle'>Your email address</div>

                    <input type="email" name="" id="" required className='personalDetailInput' emailValue={emailValue} onChange={changeEmailValue} />
                </div>


                <div className='personalDetailGender'>
                    <div className='personalDetailTitle'>What's your gender?</div>

                    <div className='genderContainer'>
                        <div>
                            <input type="radio" name="genderRatio" value="Male"
                                checked={genderValue === "Male"}
                                onChange={changeGenderValue} /> Male
                        </div>

                        <div>
                            <input type="radio" name="genderRatio" value="Female"
                                checked={genderValue === "Female"}
                                onChange={changeGenderValue} /> Female
                        </div>
                    </div>
                </div>
            </form>




            <div className='btnNAPContainer'>
                <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/Offer`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                    <button className='btnPrevOffer'>PREVIOUS</button>
                </Link>


                <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/Confirm`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                    <button className='btnNextOffer' onClick={saveBuyerInfo}>NEXT</button>
                </Link>
            </div>
        </div>
    );
}