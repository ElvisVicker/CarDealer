import './VehicleDetail.css'
import './VehicleDetailResponsive.css'
import { useContext } from 'react';
import { AppContext } from '../../../AppContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SlArrowUp, SlArrowDown } from 'react-icons/sl';
import { useEffect } from 'react';


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

    const filteredDC = selectedCarStored.equipment.filter((item) => item.category === "Driver Convenience");
    let driverConvenience = filteredDC.map((item) => { return (<div>- {item.label}</div>) })

    const filteredEntertainment = selectedCarStored.equipment.filter((item) => item.category === "Entertainment");
    let entertainment = filteredEntertainment.map((item) => { return (<div>- {item.label}</div>) })

    const filteredExterior = selectedCarStored.equipment.filter((item) => item.category === "Exterior");
    let exterior = filteredExterior.map((item) => { return (<div>- {item.label}</div>) })

    const filteredInterior = selectedCarStored.equipment.filter((item) => item.category === "Interior");
    let interior = filteredInterior.map((item) => { return (<div>- {item.label}</div>) })

    const filteredPacks = selectedCarStored.equipment.filter((item) => item.category === "Packs");
    let packs = filteredPacks.map((item) => { return (<div>- {item.label}</div>) })

    const filteredSecurity = selectedCarStored.equipment.filter((item) => item.category === "Security");
    let security = filteredSecurity.map((item) => { return (<div>- {item.label}</div>) })

    const filteredOther = selectedCarStored.equipment.filter((item) => item.category === "Other");
    let other = filteredOther.map((item) => { return (<div>- {item.label}</div>) })


    const [showFeature, setShowFeature] = useState(false);
    const [showSpecification, setShowSpecification] = useState(false);
    const [showWarranty, setShowWarranty] = useState(false);


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
                    <span class="span1"></span>
                    <span class="span2"></span>
                    <span class="span3"></span>
                    <span class="span4"></span>
                </div>
                <div className='infoPerCarContainer'>
                    <div className='overviewTitle'>
                        OVERVIEW
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
                    <Link to={`/Inventory/VehicleDetail/${selectedCarStored.id}/Offer`} className='linkDetail' onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                        <button className='btnBuyNow'>BUY NOW</button>
                    </Link>
                </div>



                <div className='detailSpecificContainer'>
                    <div className='detailTitle'>
                        DETAIL
                    </div>

                    <div className='featureContainer'>
                        <div className='featureBtn' onClick={() => setShowFeature(!showFeature)}>
                            <div>  Features </div>
                            <div>  {showFeature ? <SlArrowUp /> : <SlArrowDown />}   </div>
                        </div>
                        {showFeature &&
                            (<div className='featureModal'>
                                <div className='featureInfo'>
                                    <div className='featureTitle'>Driver Convenience</div>
                                    <div className='featureDes'>
                                        {driverConvenience}
                                    </div>
                                </div>
                                <div className='featureInfo'>
                                    <div className='featureTitle'>Entertainment</div>
                                    <div className='featureDes'>
                                        {entertainment}
                                    </div>
                                </div>
                                <div className='featureInfo'>
                                    <div className='featureTitle'>Exterior</div>
                                    <div className='featureDes'>
                                        {exterior}
                                    </div>
                                </div>
                                <div className='featureInfo'>
                                    <div className='featureTitle'>Interior</div>
                                    <div className='featureDes'>
                                        {interior}
                                    </div>
                                </div>
                                <div className='featureInfo'>
                                    <div className='featureTitle'>Packs</div>
                                    <div className='featureDes'>
                                        {packs}
                                    </div>
                                </div>
                                <div className='featureInfo'>
                                    <div className='featureTitle'>Security</div>
                                    <div className='featureDes'>
                                        {security}
                                    </div>
                                </div>
                                <div className='featureInfo'>
                                    <div className='featureTitle'>Other</div>
                                    <div className='featureDes'>
                                        {other}
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>

                    <div className='specificationContainer'>
                        <div className='specificationBtn' onClick={() => setShowSpecification(!showSpecification)}>
                            <div>Specification </div>
                            <div> {showSpecification ? <SlArrowUp /> : <SlArrowDown />}</div>
                        </div>
                        {showSpecification &&
                            (<div className='specificationModal'>
                                <div className='specificationInfo'>
                                    <div className='specificationTitle'>Dimensions</div>
                                    <div className='specificationDesContainer'>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>Length</div>
                                            <div>{selectedCarStored.dimensions.length} {selectedCarStored.dimensions.unit}</div>
                                        </div>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>Width</div>
                                            <div>{selectedCarStored.dimensions.width} {selectedCarStored.dimensions.unit}</div>
                                        </div>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>Height</div>
                                            <div>{selectedCarStored.dimensions.height} {selectedCarStored.dimensions.unit}</div>
                                        </div>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>Wheelbase</div>
                                            <div>{selectedCarStored.dimensions.wheelbase} {selectedCarStored.dimensions.unit}</div>
                                        </div>
                                    </div>
                                </div>



                                <div className='specificationInfo'>
                                    <div className='specificationTitle'>Engine</div>
                                    <div className='specificationDesContainer'>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>Engine Size</div>
                                            <div>{selectedCarStored.engine.size} L</div>
                                        </div>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>Engine Power</div>
                                            <div>{selectedCarStored.power.maxHp} HP</div>
                                        </div>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>Engine Capacity</div>
                                            <div>{selectedCarStored.power.maxKw} Kw</div>
                                        </div>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>Transmission</div>
                                            <div>{selectedCarStored.transmission.type}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='specificationInfo'>
                                    <div className='specificationTitle'>Performance</div>
                                    <div className='specificationDesContainer'>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>0 to 100 km</div>
                                            <div>{selectedCarStored.technical.acceleration} sec</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='specificationInfo'>
                                    <div className='specificationTitle'>Emissions</div>
                                    <div className='specificationDesContainer'>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>CO2</div>
                                            <div>{selectedCarStored.emission.co2} g/km</div>
                                        </div>
                                    </div>
                                </div>

                                <div className='specificationInfo'>
                                    <div className='specificationTitle'>Fuel Consumption</div>
                                    <div className='specificationDesContainer'>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>EC Combined</div>
                                            <div>{selectedCarStored.efficiency.combined} {selectedCarStored.efficiency.unit}</div>
                                        </div>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>EC Extra Urban</div>
                                            <div>{selectedCarStored.efficiency.urban} {selectedCarStored.efficiency.unit}</div>
                                        </div>
                                        <div className='subSpecificationDesContainer'>
                                            <div className='subDesTitle'>EC Urban</div>
                                            <div>{selectedCarStored.efficiency.motorway} {selectedCarStored.efficiency.unit}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>
                    <div className='warrantyContainer'>
                        <div className='warrantyBtn' onClick={() => setShowWarranty(!showWarranty)}>
                            <div>Warranty </div>
                            <div>{showWarranty ? <SlArrowUp /> : <SlArrowDown />}</div>
                        </div>
                        {showWarranty &&
                            (<div className='warrantyModal'>
                                Please contact us for details of our used vehicle warranty.
                            </div>
                            )}
                    </div>

                </div>
            </div>
        </div>
    );
}