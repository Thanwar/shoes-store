import React from 'react';
import { Outlet } from "react-router-dom";


export const Products = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <Outlet />
        </div>
    )
}
