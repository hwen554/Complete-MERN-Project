import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
const Main = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default Main