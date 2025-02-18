import { useEffect } from 'react';
import './styleshow.css'

const SlideShow = () => {
    useEffect(() => {
        const carousel = new window.bootstrap.Carousel(document.getElementById('carouselExampleSlidesOnly'));
        carousel.cycle();
    }, []);
    return (
        <div className="mainContainer">
            <div className="slidemain">
                <div className='show d-flex'>
                    <div className='headingContant'>
                    </div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="./images/banner-img.png"
                                    className="d-block w-100"
                                    alt="First Slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="./images/BMW.png"
                                    className="d-block w-100"
                                    alt="Second Slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="./images/Wrangler.png"
                                    className="d-block w-100"
                                    alt="Third Slide"
                                />
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default SlideShow