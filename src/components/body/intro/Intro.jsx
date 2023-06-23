import './Intro.css'
import './IntroResponsive.css'
import { AppContext } from '../../../AppContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

export default function Intro() {
    const { list, cus1, TextSlideshow1, cus2, TextSlideshow2, logoCompany } = useContext(AppContext)
    return (
        <div className='Intro'>
            <div className="Background">
                <img src="https://images4.alphacoders.com/988/988087.jpg" className="backgroundImg" alt="" srcset="" />
                <div className="mainTitle">MADE FOR PEOPLE BY PEOPLE</div>
            </div>
            <div className='exploreContainer'>
                <div className='exploreTitle' >
                    EXPLORE MORE
                </div>
                <div className='companyIntro' >
                    <div className='introTitle' >
                        The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars. To play an instrumental role in shaping the transformation as we head into a new age of mobility the Company is implementing its strategy step by step.
                    </div>
                    <iframe className='introVideo'
                        src="https://www.youtube.com/embed/BNVZmrxXuuU?&mute=1&loop=1&playlist=BNVZmrxXuuU">
                    </iframe>
                </div>
                <div className='companyIntro' >
                    <iframe className='introVideo'
                        src="https://www.youtube.com/embed/EOtjvBy1vDw?&mute=1&loop=1&playlist=EOtjvBy1vDw">
                    </iframe>
                    <div className='introTitle'>
                        Ford is a family company, one that spans the globe and has shared ideals. We value service to each other and the world as much as to our customers. Generations have made their memories with us and included us in their hopes and dreams. After 117 years, we’re used to adapting to and leading change. That’s why we’re evolving to focus on services, experiences and software as well as vehicles.
                    </div>
                </div>
                <div className='companyIntro' >
                    <div className='introTitle'>
                        From the very outset Volvo Cars has been a brand for people who care about the world we live in and the people around us. We have made it our mission to make life easier, better and safer for everyone.
                    </div>
                    <iframe className='introVideo'
                        src="https://www.youtube.com/embed/9u4Ejwfiqlo?&mute=1&loop=1&playlist=9u4Ejwfiqlo">
                    </iframe>
                </div>
            </div>
            <div className='introOurCars'>
                <div className='ourCarsTitle'  >
                    OUR CARS
                </div>
                <div className='introCarImgs' >
                    <div className='ourCarImgContainer'>
                        <img className='introCarImg' src={list[0].img[0]} alt="" />
                        <div className='nameAndPrice'>
                            <div>{list[0].name}</div>
                            <div>{list[0].price} USD</div>
                        </div>
                    </div>
                    <div className='ourCarImgContainer'>
                        <img className='introCarImg' src={list[1].img[0]} alt="" />
                        <div className='nameAndPrice'>
                            <div>{list[1].name}</div>
                            <div>{list[1].price} USD</div>
                        </div>
                    </div>
                    <div className='ourCarImgContainer'>
                        <img className='introCarImg' src={list[10].img[0]} alt="" />
                        <div className='nameAndPrice'>
                            <div>{list[10].name}</div>
                            <div>{list[10].price} USD</div>
                        </div>
                    </div>
                    <div className='ourCarImgContainer'>
                        <img className='introCarImg' src={list[19].img[0]} alt="" />
                        <div className='nameAndPrice'>
                            <div>{list[19].name}</div>
                            <div>{list[19].price} USD</div>
                        </div>
                    </div>
                    <div className='ourCarImgContainer'>
                        <img className='introCarImg' src={list[18].img[0]} alt="" />
                        <div className='nameAndPrice'>
                            <div>{list[18].name}</div>
                            <div>{list[18].price} USD</div>
                        </div>
                    </div>
                    <div className='ourCarImgContainer'>
                        <img className='introCarImg' src={list[13].img[0]} alt="" />
                        <div className='nameAndPrice'>
                            <div>{list[13].name}</div>
                            <div>{list[13].price} USD</div>
                        </div>
                    </div>
                </div>
                <Link className='noUnderline' to="/Inventory" onClick={() => {
                    window.scrollTo({ top: 0, left: 0 });
                    localStorage.removeItem("carSelectedInfo");
                }}>
                    <button className='btnViewInventory'>View Inventory</button>
                </Link>
            </div>
            <div className='introClient'>
                <div className='ourClientReviews'>
                    CLIENT REVIEWS
                </div>
                <div className='reviewContainer'>
                    <TextSlideshow1 cus1={cus1} />
                    <TextSlideshow2 cus2={cus2} />
                </div>
            </div>
            <div className='ourPartnersContainer'>
                <div className='ourPartnersTitle'  >
                    OUR PARTNERS
                </div>
                <div className='logoContainer'>
                    {
                        logoCompany.map((data, index) => {
                            return (
                                <div key={index} className='introLogo'>
                                    <img src={data} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}