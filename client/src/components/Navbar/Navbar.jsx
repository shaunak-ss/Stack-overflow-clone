import { Link,useNavigate } from 'react-router-dom';
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png'
import Avatar from '../../components/Avatar/Avatar'
import search from '../../assets/search-solid.svg'
import './Navbar.css'
import {setCurrrentUser} from '../../actions/currentUser'
const Navbar = () => {
    
    const dispatch=useDispatch()

    var User=useSelector((state) => (state.currentUserReducer))
    //var User=JSON.parse(localStorage.getItem('Profile'))
    const navigate=useNavigate()
    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
        navigate('/')
        dispatch(setCurrrentUser(null))
    }
    useEffect(()=>{
        const token=User?.token
        if(token){
            const decodedToken =decode(token)
            if(decodedToken.exp *1000 < new Date().getTime()){
                handleLogout()
            }
        }
        dispatch(setCurrrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

  return (
    <nav className='main-nav'>
        <div className='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo'/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Product</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search..'/>
                <img src={search} alt='search' width="18" className='search-icon'/>
            </form>
            {
                User === null ?
                <Link to="/Auth" className='nav-item nav-links'>Log in</Link>:
                <>
                    <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%"><Link to={`/Users/${User?.result._id}`} style={{color:"white",textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                    <button className='nav-item nav-links' onClick={handleLogout}>Log out</button>
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar