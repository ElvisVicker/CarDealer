import './VehicleDetail.css'
import { useContext } from 'react';
import { AppContext } from '../../../AppContext';
import { useState } from 'react';

export default function VehicleDetail() {
    const { selectedCar, setSelectedCar } = useContext(AppContext)
    if (!localStorage.getItem("carSelectedInfo")) {
        localStorage.setItem("carSelectedInfo", JSON.stringify(selectedCar))
    }
    let selectedCarStored = JSON.parse(localStorage.getItem("carSelectedInfo"));
    const [selectedImage, setSelectedImage] = useState(selectedCarStored.img[0]);
    const clickImgAndShow = (imageUrl) => {
        setSelectedImage(imageUrl);
    };
    return (
        <div className='VehicleDetail'>
            <div className='vehicleNamePriceContainer'>
                <div className='vehicleDetailName'>{selectedCarStored.name} </div>
                <div className='vehicleDetailPrice'>{selectedCarStored.price}$</div>
            </div>

            <div className='fullInfoVehicleContainer'>
                <div className='selectedImgContainer'>
                    <div className='selectedMainImg'>
                        <img src={selectedImage} alt="" srcset="" className='selectedMainVehicleImg' />
                    </div>

                    <div className='selectedListImg'>
                        <div className='scrollImg'>
                            {selectedCarStored.img.map((imageUrl) => (
                                <img src={imageUrl} alt="" srcset="" className='selectedVehicleImg' onClick={() => clickImgAndShow(imageUrl)} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='infoPerCarContainer'>
                    <div className='overviewTitle'>
                        Overview
                    </div>

                    <div className='companyALogo'>
                        <img src={selectedCarStored.logo} alt="" className='perCarLogo' />
                        <div>{selectedCarStored.company}</div>
                    </div>

                    <div className='perCarDes'>{selectedCarStored.description}</div>

                    <div className='detailInfoContainer'>
                        <div>Model: {selectedCarStored.model}</div>
                        <div>Body style: {selectedCarStored.bodystyle}</div>
                        <div>Color: {selectedCarStored.color}</div>
                        <div>Fuel type:{selectedCarStored.fueltype}</div>
                        <div>Release date: {selectedCarStored.year}</div>
                        <div>Seat: {selectedCarStored.sittingfor}</div>
                    </div>
                    <a href={selectedCarStored.video} target='blank' className='linkPerCar'>WATCH IT NOW</a>
                    <button className='btnBuyNow'>BUY NOW</button>
                </div>
            </div>
        </div>
    );
}