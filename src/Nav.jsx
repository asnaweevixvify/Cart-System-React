import { useState } from 'react'
import './App.css'

function Nav(props){
    const count = props.count
    const newCount = count.reduce((sum,e)=>{
        const newItem = sum+e
        return newItem
    },0)
    return(
        <div className="nav-container">
            <ul className='nav-ul'>
                <li>Vixvify Shop</li>
                <li className='cartIcon'><i className="fa-solid fa-cart-shopping fa-1x"></i><h3>{newCount}</h3></li>
            </ul>
        </div>
    )
}

export default Nav