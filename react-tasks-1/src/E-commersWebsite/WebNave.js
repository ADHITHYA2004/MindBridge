import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { productsContext } from "./WebsitApp"


const WebNave = () => {
    const getContext=useContext(productsContext)
    const count=getContext.cart.length    
    return (
        <div className="Navbar">
            <div><h4 className="logo">ShopMart</h4></div>
            <div>
                <ul>
                    <NavLink to='/'><li>Products</li></NavLink>
                    <NavLink to='/selectproduct'><li>Select product</li></NavLink>
                    <NavLink to='/cart'><li>Cart <span className="cartCount">{count}</span></li></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default WebNave