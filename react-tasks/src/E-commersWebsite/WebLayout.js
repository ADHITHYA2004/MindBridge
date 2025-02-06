import React from 'react'
import WebNave from './WebNave'
import './web.css';
import { Outlet } from 'react-router-dom';
const WebLayout = () => {
    return (
        <div>
            <WebNave/>
            <Outlet/>
        </div>
    )
}

export default WebLayout;

