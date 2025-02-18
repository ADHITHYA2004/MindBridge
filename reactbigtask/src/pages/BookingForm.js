import React, { useContext, useRef } from 'react'
import '../style/bookingformpage.css'
import { CarContext } from '../App'
const BookingForm = () => {
    const get_context = useContext(CarContext);
    const selectedcar = get_context.selectedCar;
    const handelbooking = get_context.handelBooking;
    const handelinput = get_context.handelInput;
    return (
        <div className='mainBookingform'>
            <div className="booking_form shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="needs-validation">
                    <div className="form-row d-flex gap-3">
                        <div className="col-md-6 mb-3">
                            <label >Name</label>
                            <input type="text" className="form-control" id="fname" name="fname" onChange={handelinput} placeholder="User Name" required />
                            <small></small>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label >Last name</label>
                            <input type="text" className="form-control" id="lname" name="lname" onChange={handelinput} placeholder="Last name" required />
                            <small></small>
                        </div>
                    </div>
                    <div className="form-row d-flex gap-3">
                        <div className="col-md-6 mb-3">
                            <label >Email address</label>
                            <input type="email" className="form-control" id="mails" name="mails" onChange={handelinput} placeholder="abcd@email.com" required />
                            <small></small>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label >Phone Number</label><br />
                            <input type="text" className="form-control" id="phnums" name="phnums" onChange={handelinput} placeholder="1234567890" />
                            <small></small>
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Address</label>
                        <input type="text" className="form-control" id="address" name="address" onChange={handelinput} placeholder="1234 Main St" />
                        <small></small>
                    </div>
                    <div className="form-row d-flex gap-2">
                        <div className="col-md-5 mb-3 state">
                            <label >State</label>
                            <select className="custom-select" id="inlineFormCustomSelectPrefs" required>
                                <option selected value="choose">Choose...</option>
                            </select>
                            <small></small>
                        </div>
                        <div className="col-md-4 mb-3 district">
                            <label >District</label>
                            <select className="custom-select" id="inlineFormCustomSelectPref">
                                <option selected value="choose">Choose...</option>
                                <option value="choose">Erode</option>
                                <option value="choose">Tirupur</option>
                                <option value="choose">Nammakal</option>

                            </select>
                            <small></small>
                        </div>
                        <div className="col-md-3 mb-3 d-flex zip">
                            <label >Zip</label>
                            <input type="text" className="form-control" id="zip" name="zip" onChange={handelinput} placeholder="Zip" required />
                            <div className="invalid-feedback">Please provide a valid zip.</div>
                            <small></small>
                        </div>
                    </div>
                    <div className="form-row d-flex gap-1">
                        <div className="col-md-3 mb-3">
                            <label >Car Name</label>
                            <input type="text" className="form-control" name="carName" onChange={handelinput} value={selectedcar.carName} id="model" disabled />
                        </div>
                        <div className="col-md-2 mb-3">
                            <label >Price Per Day</label>
                            <input type="text" className="form-control" id="price" name="price" onInput={handelinput} value={selectedcar.price} disabled />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label >Select Start Date</label>
                            <input type="date" className="form-control" id="startdate" name="startdate" onChange={handelinput} />
                            <small></small>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label >Select End Date</label>
                            <input type="date" className="form-control" id="enddate" name="enddate" onChange={handelinput} required />
                            <small></small>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label className="form-check-label">
                                Agree to terms and conditions
                            </label>
                            <small></small>
                        </div>
                    </div>

                    <center><button className="btn btn-primary" type="submit" onClick={(e,price) => handelbooking()}>Submit form</button></center>
                </div>
            </div>
        </div>
    )
}

export default BookingForm