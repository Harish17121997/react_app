import React from 'react'
import { Link } from 'react-router-dom'
import p from './Digital-Harish-Logo-1.webp'
import './Navbar1.css'
const Navbar1 = () => {
  return (<div className='nav'>
    <Link to='/'><img src={p}/></Link>
    <div className='home'>
    <Link to="/">Home</Link>
    <Link to='/cart' className='cart'>Cart</Link>
    <i className="fa-regular fa-user"></i>
    </div>
  </div>
    )}

export default Navbar1