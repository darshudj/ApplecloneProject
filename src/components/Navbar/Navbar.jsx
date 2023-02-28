import React from 'react'
import { Link } from 'react-router-dom'
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Style from './Navbar.module.css'
import { useRecoilValue } from 'recoil'
import { useState } from 'react';
import { CartState } from '../../atoms/Store/Products'

const Navbar = () => {
  const Items =useRecoilValue(CartState)
 
  return (
    
    <div>
      <nav className={Style.nav}>
        <ul>
          <Link to='/' className={Style.Home}>
        <li className={Style.appleicon}><AppleIcon   sx={{ color: 'white' }}/></li>
          </Link>
          <Link to='/store' >
           <li>Store</li> 
          </Link>
          <Link to='/mac'>
          <li>Mac</li>
          </Link>
          <Link to='/ipad' >
           <li> iPad</li>
          </Link>
          <Link to='/iphone'>
          <li>iPhone</li>
          </Link>
          <Link to='/watch'>
          <li>Watch</li>
          </Link>
          <Link to='/airpods' >
          <li>Airpods</li>
          </Link>
          <Link to='/tv' >
         <li> TV & Home</li>
          </Link>
          <Link to='/accessories' className='Accessories'>
         <li> Accessories</li>
          </Link>
          <Link to='/support' className='Support'>
          <li> Support</li>
          </Link>
          <li> <SearchIcon/></li>
          <Link to='/cart' className='cart'>
          <li style={{fontSize:"0.7rem"}}><ShoppingBagIcon/>({Items.length})</li>
          
          </Link>
          

        </ul>

      </nav>
    </div>
  )
}

export default Navbar