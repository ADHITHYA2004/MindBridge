import React, { useContext } from 'react'
import { CarContext } from '../App'
import '../style/servicepage.css'

const ServicesPage = () => {
    const get_context = useContext(CarContext);
    // const selectedcar = get_context.selectedCar;
    const totalBooked=get_context.finalBooking;
    console.log(totalBooked)
    return (
        <div>
            <div className='containers'>
            <h1 className='pagetitle'>My Booked Cars</h1>
            <div className="cartContainer">
            {totalBooked.map(ele=>
                <div className='cartCard d-flex shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <div className='cartImgDive'>
                            <img src={ele.selectedCar.image} alt="" />
                        </div>
                        <div className='cartCardCenter'>
                            <h4>{ele.selectedCar.carName}</h4>
                            <h5>From: {ele.finalBookingData.startdate}</h5>
                            <h5>To: {ele.finalBookingData.enddate}</h5>
                        </div>
                        <div>
                            <h6>Price ${ele.selectedCar.price}</h6>
                            <button className="btn btn-primary cartBuyBtn">Booked</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
    )
}

export default ServicesPage