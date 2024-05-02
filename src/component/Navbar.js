import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
import './Navbar.css'
export const Navbar = () => {
  const auth=useAuth()
  return (
    <div>
        <nav className='navbar'>
         <p>Calculator</p>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Users'>Users</NavLink>
        {auth.user==='admin'&& <NavLink to='/admin'>Admin</NavLink>}
        <NavLink to='/profile'>Profile</NavLink>
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </nav>
    </div>
  )
}