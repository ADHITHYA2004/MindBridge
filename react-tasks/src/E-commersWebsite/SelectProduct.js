import { useContext } from "react"
import { productsContext } from './WebsitApp';
import './selectProduct.css'
import { Link } from "react-router-dom";
const SelectProduct = () => {
    const getContext = useContext(productsContext)
    const buyProduct = getContext.buyData;
    const handleAddCart=getContext.handleAddCart;
    const cartContains=getContext.cart
    const handelAlert=()=>{alert("Product Added to Cart")}
    console.log(buyProduct)
    return (
        <div className="containers"><h1 className="pagetitle">Product Details</h1>
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
                    <div className="price_rating d-flex">
                        <h6 className="selectPrice">Price $:{buyProduct.price}</h6><p>Buys: ${buyProduct.rating.count}</p>
                    </div>
                    <div className="button">
                        <Link onClick={()=>{handleAddCart(buyProduct);handelAlert()}} className="btn btn-primary productsPagebtn">Add to Cart</Link>
                        {/* <Link className="btn btn-primary">Buy Now</Link> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectProduct