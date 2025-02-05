import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { productsContext } from './WebsitApp';
import { useContext } from "react";
const ProductPage = () => {
    const storeData = useLoaderData()
    console.log(storeData);

    const getContext = useContext(productsContext)
    const handleProductDetails = getContext.handleProductDetails;
    console.log(handleProductDetails)
    const navigate = useNavigate()

    return (
        <div className="containers"><h1>ProductPage</h1>
            <div className="cardContainer gap-4 ">
                {storeData.map(ele =>
                    <div className="card shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="productCardImg">
                            <img src={ele.image} className="products-img" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{ele.title}</h5>
                            <p className="card-text">Price ${ele.price}</p>
                            <Link onClick={() => { navigate('/selectproduct'); handleProductDetails(ele) }} className="btn btn-primary productsPagebtn">Details</Link>
                        </div>
                    </div>
                )}


            </div>
        </div>
    )
}

export default ProductPage