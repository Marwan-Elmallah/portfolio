import React from 'react';
import { NavLink } from 'react-router-dom';

function Tab2(props) {


    return (
        <div className="list-group py-5">
            <NavLink to="https://marwan-elmallah.github.io/Bakery/" target="_blank" className='list-group-item list-group-item-action list-group-item-dark'>Bakery</NavLink>
            <NavLink to="https://marwan-elmallah.github.io/Travel-Agency/" target="_blank" className='list-group-item list-group-item-action list-group-item-dark'>Travel Agency</NavLink>
            <NavLink to="https://marwan-elmallah.github.io/E-Commerce/" target="_blank" className='list-group-item list-group-item-action list-group-item-dark'>E-Commerce</NavLink>
            <NavLink to="https://marwan-elmallah.github.io/Elmallah-Academy/" target="_blank" className='list-group-item list-group-item-action list-group-item-dark'>Academy</NavLink>
            <NavLink to="https://marwan-elmallah.github.io/Elmallah-Store/" target="_blank" className='list-group-item list-group-item-action list-group-item-dark'>Elmallah Store</NavLink>
        </div>
    );
}

export default Tab2;