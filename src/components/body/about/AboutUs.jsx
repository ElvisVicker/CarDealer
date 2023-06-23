import './AboutUs.css'
import './AboutUsResponsive.css'
import Leader from './leaders/Leader';
import Founder from './founders/Founder';
import { AppContext } from '../../../AppContext';
import { useContext } from 'react';

export default function AboutUs() {
    const { showLeader, showFounder, clickLeader, clickFounder, showModalLeader, setShowModalLeader, showModalFounder, setShowModalFounder } = useContext(AppContext)
    return (
        <div className='AboutUs'>
            <div className='aboutUsImgTitle'>
                <img className='aboutUsMainImg' src="https://images.wallpaperscraft.com/image/single/tables_cafe_view_39232_1920x1080.jpg" alt="" srcset="" />
                <div className='aboutUsMainTitle'>ABOUT CYCAUTO</div>
            </div>
            <div className='aboutUsMainList'>
                <div className='aboutUsInfo'>
                    <div className='aboutUsInfoWho'>
                        Who we are
                    </div>
                    <div className='aboutUsInfoDes'>
                        <div>CycAuto is a leading digital marketplace and solutions provider for the automotive industry that connects car shoppers with sellers. Launched in 1998 and headquartered in Chicago, the Company empowers shoppers with the data, resources and digital tools needed to make informed buying decisions and seamlessly connect with automotive retailers. In a rapidly changing market, CycAuto enables dealerships and OEMs with innovative technical solutions and data-driven intelligence to better reach and influence ready-to-buy shoppers, increase inventory turn and gain market share. In 2018, CycAuto acquired Dealer Inspire®, an innovative technology company building solutions that future-proof dealerships with more efficient operations, a faster and easier car buying process, and connected digital experiences that sell and service more vehicles.</div>
                        <div>CycAuto properties include DealerRater®,</div>
                        <div>Dealer Inspire®, Auto.com™, PickupTrucks.com® and NewCars.com®. For more information, visit www.CycAuto.</div>
                    </div>
                </div>
            </div>
            <div className='aboutUsImgRootInfo'>
                <img className='aboutUsImgRoot' src="https://beta.cstatic-images.com/xxlarge/in/v2/static/about-us/13-cars-20.jpg" alt="" srcset="" />
                <div className='aboutUsRootContainer'>
                    <div className='aboutUsRootTop'>Our roots</div>
                    <div>CycAuto invented car search. Our site and innovative solutions connect buyers and sellers to match people with their perfect car. With our people spread across the U.S. we still maintain a startup culture with innovation and passion for our people at the core of everything we do.</div>
                    <div>CycAuto has an award-winning brand, leadership team, and the best and brightest employees in the industry. We’ve been featured as one of the top places to work by The Chicago Tribune, Built in Chicago and Chicago Innovation.</div>
                    <div className='aboutUsRootBot'>Alex Vetter, President and CEO, CycAuto</div>
                </div>
            </div>
            <div className='aboutUsOurPeople'>
                <div className='aboutUsOurPeopleTitle' >Our people</div>
                <div className='leaderFounderContainer'>
                    <div onClick={clickLeader} className='btnLeader'>Leader</div>
                    <div onClick={clickFounder} className='btnFounder'>Founder</div>
                </div>
                {showLeader && <Leader />}
                {showFounder && <Founder />}
            </div>
            {showModalLeader && (
                <div className='outline' onClick={() => { setShowModalLeader(false) }} ></div>
            )}
            {showModalFounder && (
                <div className='outline' onClick={() => { setShowModalFounder(false) }} ></div>
            )}
        </div >
    );
}