import { useContext } from 'react';
import './cartPage.css';
import { productsContext } from './WebsitApp';

const CartPage = () => {
    const getContext = useContext(productsContext)
    const cartProducts = getContext.cart
    const handleRemove =getContext.handleRemove
    console.log(cartProducts)
    let total=0;
    cartProducts.map(ele=>{
        let d=parseFloat(ele.price)
        total+=d
    })
    return (
        <div>
            <h3>Total $:<span>{total}</span></h3>
            <div className="cartContainer">
            {cartProducts.map(ele=>
                <div className='cartCard d-flex shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <div className='cartImgDive'>
                            <img src={ele.image} alt="" />
                        </div>
                        <div className='cartCardCenter'>
                            <h4>{ele.title}</h4>
                            <h5>{ele.category}</h5>
                        </div>
                        <div>
                            <h6>Price ${ele.price}</h6>
                            <button className="btn btn-primary cartBuyBtn">Buy</button><br />
                            <button onClick={()=>handleRemove(ele.id)} className="btn btn-primary cart">Remove</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartPage