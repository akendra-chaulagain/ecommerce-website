import React from 'react'
import Announcementt from '../../components/announcenemt/Announcement'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <>
      {/* Announcement import from announcement components */}
      <Announcementt />
      {/* navbar import from navbar components */}
      <Navbar />

    </>
  )
}

export default Home