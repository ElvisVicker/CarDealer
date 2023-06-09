import './Inventory.css'
import React, { useState } from 'react';
import { AppContext } from '../../../AppContext';
import { useContext } from 'react';
import { Link } from "react-router-dom";
export default function Inventory() {


  const { itemsToDisplay, pageLinks } = useContext(AppContext)


  return (
    <div className='Inventory'>
      <div className='inventoryTitle'>
        OUR VEHICLES
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
            <button className='btnCheckOut'>Check Out
            </button>

            <span class="span1"></span>
            <span class="span2"></span>
            <span class="span3"></span>
            <span class="span4"></span>
          </div>
        ))}
      </div>


      <Link className='noUnderline' to="/Inventory" onClick={() => { window.scrollTo({ top: 0, left: 0 }); }}>
        <div className="pagination">{pageLinks}</div>
      </Link>



    </div>
  );
}