import React, { useContext } from 'react'
import { CarContext } from '../App'
import '../style/bookingpage.css'
import { Link } from 'react-router-dom';

const BookingPage = () => {
    const get_context = useContext(CarContext);
    const selectCar = get_context.selectedCar
    const handelbooking=get_context.handelBooking;

    return (
        <div className='mainContainer'>
            <div className='bookingMain d-flex'>
                <div className='imageDiv shadow p-3 mb-5 bg-body-tertiary rounded'>
                    <img src={selectCar.image} alt='' />
                </div>
                <div className='detailsDiv'>
                    <h1 className='carName'>{selectCar.carName}</h1>
                    <h5 className='cartype'>{selectCar.type}</h5>
                    <h5 className='carPrice'>Price: <span>{selectCar.price}</span> per day</h5>
                    <div className=''>
                        <h6>Transmission: <span>{selectCar.transmission}</span></h6>
                        <h6>Capacity: <span>{selectCar.capacity}</span></h6>
                    </div>
                    <p className='carDescription'>{selectCar.description}</p>
                    <Link to={'./bookingform'}><button type="button" class="btn btn-success">Book Now</button></Link>

                </div>

            </div>

        </div>
    )
}

export default BookingPage