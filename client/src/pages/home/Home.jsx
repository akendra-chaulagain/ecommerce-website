import React from 'react'
import Announcementt from '../../components/announcenemt/Announcement'
import Category from '../../components/Category/Category'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
      {/* Announcement import from announcement components */}
      <Announcementt />
      {/* navbar import from navbar components */}
      <Navbar />
      {/* Category import from slider components */}
      <Category />

      {/* footer */}
      <Footer />

    </>
  )
}

export default Home