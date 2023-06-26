import './Inventory.css'
import './InventoryResponsive.css'
import React, { useState } from 'react';
import { AppContext } from '../../../AppContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";

export default function Inventory() {
  const { pageLinks, itemsToDisplay, setSelectedCar, handleFilter, company } = useContext(AppContext)
  return (
    <div className='Inventory'>
      <div className='inventoryImgTitle'>
        <img className='inventoryMainImg' src="https://www.supercars.net/blog/wp-content/uploads/2020/09/wallpaperflare.com_wallpaper-1-1.jpg" alt="" srcset="" />
        <div className='inventoryMainTitle'>  OUR VEHICLES</div>
      </div>
      <div className='carMainList'>



        <div className='filterArea'>
          <div className='filterTitle'>Search by Categories</div>
          <div className='filterContainer'>
            <div className='filterBtn' onClick={() => handleFilter("All")}  >
              All
            </div>
            {company.map((data, index) => (
              <div key={index} className='filterBtn' onClick={() => handleFilter(`${data}`)}  >
                {data}
              </div>
            ))}
          </div>
        </div>



        <div className='carListContainer'>
          {itemsToDisplay.map((item, index) => (
            <div className='perCarContainer' key={index}>
              <div className='carImgContainer'>
                <img src={item.img[0]} alt="" className='carImg' />
              </div>
              <div className='carCardInfo'>
                <div className='carName' >Name: {item.name}</div>
                <div className='carPrice'>Price: {item.price}$</div>
                <div className='carBodyStyle'>Style: {item.bodystyle}</div>
              </div>
              <Link to={`/Inventory/VehicleDetail/${item.id}`} className='linkDetail' onClick={() => { window.scrollTo({ top: 0, left: 0 }); }} >
                <button className='btnCheckOut' onClick={() => setSelectedCar(item)}>Check Out</button>
              </Link>
              <span class="span1"></span>
              <span class="span2"></span>
              <span class="span3"></span>
              <span class="span4"></span>
            </div>
          ))}
        </div>
        <Link className='btnPerLink' to="/Inventory" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
          <div className="pagination">{pageLinks}</div>
        </Link>
      </div>
    </div>
  );
}