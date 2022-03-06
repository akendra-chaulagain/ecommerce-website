import React from 'react'
import Announcementt from '../../components/announcenemt/Announcement'
import Category from '../../components/Category/Category'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
      {/* Announcement import from announcement components */}
      <Announcementt />
      {/* navbar import from navbar components */}
      <Navbar />
      {/* Category import from slider components */}
      <Category/>

    </>
  )
}

export default Home