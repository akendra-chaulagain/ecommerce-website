import React from 'react'
import Category from '../../components/Category/Category'
import Footer from '../../components/footer/Footer'
import Announcementt from "../../components/announcenemt/Announcement"
import Navbar from "../../components/navbar/Navbar"

const Home = () => {
  return (
    <>
      <Announcementt/>
      <Navbar/>
      {/* Category import from slider components */}
      <Category />
      {/* footer */}
      <Footer />

    </>
  )
}

export default Home