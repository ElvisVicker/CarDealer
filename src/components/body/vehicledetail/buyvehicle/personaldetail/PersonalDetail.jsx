import './PersonalDetail.css'
import './PersonalDetailResponsive.css'
import { useContext, useEffect } from 'react';
import { AppContext } from '../../../../../AppContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function PersonalDetail() {
    const { selectedCar, setSelectedCar } = useContext(AppContext)
    const navigate = useNavigate();
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


    let saveBuyerInfo = (e) => {
        if (firstNameValue && lastNameValue && phoneNumberValue && phoneNumberValue.length == 10 && emailValue && emailValue.includes('@') && genderValue) {
            e.preventDefault()
            localStorage.setItem("buyerInfoWillStore", JSON.stringify(buyerInfo))
            // window.location.href = `/Inventory/VehicleDetail/${selectedCarStored.id}/Confirm`;
            window.scrollTo({ top: 0, left: 0 });
            navigate(`/Inventory/VehicleDetail/${selectedCarStored.id}/Confirm`)
        }
    }

    return (
        <form className='PersonalDetail'>
            <div className='stepPersonalDetail'>Step 2/3</div>
            <div className='personalDetailInfoContainer' >
                <div className='personalDetailMainTitle'>Your Information</div>
                <div>
                    <div className='personalDetailTitle'>First Name</div>
                    <input placeholder="John" type="text" required className='personalDetailInput' firstNameValue={firstNameValue} onChange={changeFirstNameValue} />
                </div>
                <div>
                    <div className='personalDetailTitle'>Middle Name (Optional)</div>
                    <input type="text" className='personalDetailInput' midNameValue={midNameValue} onChange={changeMidNameValue} />
                </div>
                <div>
                    <div className='personalDetailTitle'>Last Name</div>
                    <input placeholder="Wick" type="text" required className='personalDetailInput' lastNameValue={lastNameValue} onChange={changeLastNameValue} />
                </div>
                <div>
                    <div className='personalDetailTitle'>Your mobile number</div>

                    <input type="tel" placeholder="0912345678" pattern="[0-9]{10}" required className='personalDetailInput' phoneNumberValue={phoneNumberValue} onChange={changePhoneNumberValue} />
                </div>

                <div >
                    <div className='personalDetailTitle'>Your email address</div>
                    <input type="email" placeholder="address@gmail.com" required className='personalDetailInput' emailValue={emailValue} onChange={changeEmailValue} />
                </div>


                <div className='personalDetailGender'>
                    <div className='personalDetailTitle'>What's your gender?</div>
                    <div className='genderContainer'>
                        <div>
                            <input type="radio" name="genderRatio" value="Male"
                                checked={genderValue === "Male"}
                                onChange={changeGenderValue} required /> Male
                        </div>
                        <div>
                            <input type="radio" name="genderRatio" value="Female"
                                checked={genderValue === "Female"}
                                onChange={changeGenderValue} required /> Female
                        </div>
                    </div>
                </div>
            </div>
            <div className='btnNAPContainer'>
                <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/Offer`} onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                    <button className='btnPrevOffer'>PREVIOUS</button>
                </Link>
                <button type="submit" className='btnNextOffer' onClick={saveBuyerInfo}>NEXT</button>
            </div>
        </form>
    );
}