import './Contact.css'
import './ContactResponsive.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Inventory() {
    const navigate = useNavigate();
    const [contactName, setContactName] = useState('');
    const changeContactName = e => {
        setContactName(e.target.value);
    };
    const [contactEmail, setContactEmail] = useState('');
    const changeContactEmail = e => {
        setContactEmail(e.target.value);
    };
    const [contactMessage, setContactMessage] = useState('');
    const changeContactMessage = e => {
        setContactMessage(e.target.value);
    };
    let contactInfo = {
        name: `${contactName}`,
        email: `${contactEmail}`,
        message: `${contactMessage}`
    }

    let submitContact = (e) => {
        if (contactName && contactEmail && contactEmail.includes('@') && contactMessage) {
            e.preventDefault()
            localStorage.setItem("contactInfo", JSON.stringify(contactInfo))
            if (!localStorage.getItem("contactInfo")) {
                localStorage.setItem("contactInfo", JSON.stringify(contactInfo))
            }
            alert('Thank you for submiting, Have a nice day :D')
            window.scrollTo({ top: 0, left: 0 });
            navigate('/')
        }
    }


    return (
        <div className='Contact'>
            <div className='contactImgTitle'>
                <img className='contactMainImg' src="  https://wallpaperaccess.com/full/3124512.jpg" alt="" srcset="" />
                <div className='contactMainTitle'>CONTACT</div>
            </div>
            <div className='contactMainList'>
                <iframe className='contactMap' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d979.8806516303258!2d106.68032636633158!3d10.771227711971106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529246d49e7d5%3A0xf8a7ea7a47dba4!2zU8OgaSBHw7JuIEZvcmQgUXXhuq1uIDM!5e0!3m2!1svi!2s!4v1686398049362!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='contactInfo'>
                    <div className='contactMainDes'>
                        CycAuto is the Professional Car Dealer that not only operates in finding the perfect car for you, but also finds the perfect owner for your current vehicle, taking the stress out of the whole process for you.
                    </div>
                    <div className='contactMainDes'>
                        Our ultimate goal is to provide you with an outstanding service personalized to you by supplying vehicles from our list of trusted and approved UK franchise dealers and sourcing only the best pre-owned vehicles from high class providers of prestigious and good value cars.
                    </div>
                    <div className='contactMainDes'>
                        We are able to provide finance to fund any vehicle whether purchased through us or not and also offer the unique service of selling your vehicle with the ability to provide finance to any potential buyers, removing any concerns from you regarding advertising, test drives, paperwork, settling any existing finance and receiving monies.
                    </div>
                    <div className='contactMainDes'>
                        We pride ourselves on our complete personalized Service, Competitive pricing and outstanding customer support.
                    </div>
                    <div className='contactMainDes'>
                        Please feel free to browse our online used vehicles stock list for full details of our latest range. Our stock is updated regularly - for further details on any of our vehicles or the services we provide, please contact us.
                    </div>
                </div>
                <div className='contactOpenTimeContainer'>
                    <div className='contactOpenTime'>
                        OPENING TIMES:
                    </div>
                    <div className='contactOpenContainer'>
                        <div className='contactOpenDes'>Monday-Friday: 9am-6pm</div>
                        <div className='contactOpenDes'>Saturday: 9am - 12pm (12pm - 4pm appointments only)</div>
                        <div className='contactOpenDes'>Sunday: By appointment only</div>
                        <div className='contactOpenDes'>Please call to arrange an appointment</div>
                    </div>
                </div>


                <form className='contactClientInfo'>
                    <div className='nameEmailContainer'>
                        <input type="text" required className='inputName' onfocus="this.value=''" placeholder='Name' contactName={contactName} onChange={changeContactName} />
                        <input type="email" required className='inputEmail' onfocus="this.value=''" placeholder='Email' contactEmail={contactEmail} onChange={changeContactEmail} />
                    </div>
                    <textarea rows="20" cols="50" required className='inputMessage' onfocus="this.value=''" placeholder='Message' contactMessage={contactMessage} onChange={changeContactMessage}></textarea>

                    <button type="submit" className='btnSubmit linkBtnContact' onClick={submitContact}>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}