import React, { createContext, useState } from 'react'
import ProductPage from './ProductPage'
import SelectProduct from './SelectProduct'
import CartPage from './CartPage'
import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom'
import WebLayout from './WebLayout'
import './web.css';
import Nopage from './Nopage'
import Loader from './Loader'
export const productsContext=createContext();
const WebsitApp = () => {

    const [buyData,set_buyData]=useState();

    const [cart,set_cart]=useState([]);

    const handleProductDetails=(data)=>{
        set_buyData(data);
    }

    const handleAddCart=(item)=>{
        set_cart([...cart,item])
        console.log(cart)
    }


    const handleRemove=(id)=>{
        set_cart(cart.filter(ele=> id!=ele.id))
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<WebLayout />}>
                <Route index element={<ProductPage />} loader={Loader}/>
                <Route path='/selectproduct' element={<SelectProduct />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='*' element={<Nopage/>}/>
            </Route>
        )
    )


    return (
        <productsContext.Provider value={{handleProductDetails,buyData,handleAddCart,cart,handleRemove}}>
                    <RouterProvider router={router}></RouterProvider>
        </productsContext.Provider>
    )
}

export default WebsitApp