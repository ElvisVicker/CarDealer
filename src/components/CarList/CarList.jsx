import './CarList.css'
// import data from './data.json'

import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../AppContext';


export default function CarList() {
    // console.log(data)
    const { list } = useContext(AppContext)
    console.log(list)
    // console.log(data);
    return (
        <div className="main">


            {
                list.map((data, index) => {
                    return (
                        <div key={index}>
                            <h1 > {data.name}</h1>
                            <h1 > {data.price}</h1>
                            <div>
                                <img src={data.img[0]} alt="" />
                                <img src={data.img[1]} alt="" />
                                <img src={data.img[2]} alt="" />
                                <img src={data.img[3]} alt="" />
                                <img src={data.img[4]} alt="" />
                                <img src={data.img[5]} alt="" />
                            </div>

                        </div>


                    )
                })
            }





        </div>
    );
}

