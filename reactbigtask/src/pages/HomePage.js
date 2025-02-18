import React, { useContext } from 'react'
import SlideShow from '../components/home page/SlideShow'
import '../style/homepage.css'
import CarCard from '../components/home page/CarCard'
import { CarContext } from '../App'
const HomePage = () => {
    const get_context=useContext(CarContext)
    return (
        <div className='mainContainer'>
            <SlideShow />
            <CarCard/>
        </div>
    )
}

export default HomePage