import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { CarContext } from '../../App';
// import '../../style/homepage.css'
const CarCard = () => {
    const storedData=useLoaderData()
    const navigate=useNavigate();

    const get_context=useContext(CarContext);
    const handelDetails=get_context.handelDetails;
    return (
        <>
            <div className="cardContainer gap-4 ">
            {storedData.map(ele =>
                    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="productCardImg">
                            <img src={ele.image} className="products-img" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{ele.carName}</h5>
                            <p className="card-text">Price ${ele.price}</p>
                            <Link onClick={() => { navigate('/booking'); handelDetails(ele) }} className="btn btn-primary productsPagebtn">Details</Link>
                        </div>
                    </div>
                )}
                </div>
        </>
    )
}

export default CarCard