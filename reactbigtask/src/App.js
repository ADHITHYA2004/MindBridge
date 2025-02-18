
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import NavBar from './pages/NavBar';
import { createContext, useContext, useRef, useState } from 'react';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import loader from './Loader'
import BookingForm from './pages/BookingForm';

export const CarContext = createContext();
function App() {

  const w = 0;
  const [user, set_user] = useState([])
  const [selectedCar, set_selectedCar] = useState([])
  const [finalBookingData, set_finalBookingData] = useState([])
  const [finalBooking, set_finalBooking] = useState([])


  const handelDetails = (ele) => {
    console.log(ele)
    set_selectedCar(ele);
  }

  const handelInput = (e,price) => {
    console.log(e.target.value)
    set_finalBookingData((prev) => (
      { ...prev, [e.target.name]: e?.target.value }
    ))
    console.log(finalBookingData)
  }
  const handelBooking = () => {
    // e.prevent.default();
    const carName=selectedCar.carName
    set_finalBooking((data) =>( [...data,{selectedCar,finalBookingData}]))
  console.log(finalBooking)
  alert("hellow")
}
console.log(finalBooking)

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<HomePage />} loader={loader}></Route>
    <Route path='/bookedcars' element={<ServicesPage />}></Route>
    <Route path='/booking' element={<BookingPage />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/booking/bookingform' element={<BookingForm />}></Route>
  </Route>
))
return (
  <CarContext.Provider value={{ user, handelDetails, selectedCar, finalBookingData, set_finalBookingData, handelBooking, handelInput,finalBooking}}>
    <RouterProvider router={router}></RouterProvider>
  </CarContext.Provider>
);
}

export default App;
