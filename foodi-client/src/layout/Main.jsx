import React, { useContext } from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuthContext } from '../contexts/AuthProvider'

const Main = () => {

  const {loading} = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main