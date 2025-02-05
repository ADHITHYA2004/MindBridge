import { useContext } from "react"
import { productsContext } from './WebsitApp';
import './selectProduct.css'
import { Link, useNavigate } from "react-router-dom";
const SelectProduct = () => {
    const getContext = useContext(productsContext)
    const buyProduct = getContext.buyData;
    const handleAddCart=getContext.handleAddCart;
    console.log(buyProduct)
    const navigate=useNavigate
    return (
        <div><h1>SelectProduct</h1>
            <div className="row">
                <div class="col-sm-4 buy-image" >
                    <img src={buyProduct.image} alt="" />
                </div>
                <div className="col-sm-6 details">
                    <div className="title">
                        <h4 className="font-weight-bolder">{buyProduct.title}</h4>
                    </div>
                    <div className="description">
                        <p>{buyProduct.description}</p>
                    </div>
                    <div className="price_rating">
                        <p>Price $:{buyProduct.price}</p>
                    </div>
                    <div className="button">
                        <Link onClick={()=>{handleAddCart(buyProduct)}} className="btn btn-primary">Add to Cart</Link>
                        {/* <Link className="btn btn-primary">Buy Now</Link> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectProduct