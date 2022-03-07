import React from "react";
import Category from "../../components/Category/Category";
import Footer from "../../components/footer/Footer";
import Announcementt from "../../components/announcenemt/Announcement";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import Slider from "../../components/slider/Slider";

const Home = () => {
  const [category, setCategory] = useState([]);

  // getting category data from database
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("/categories");
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      {/* Announcementt import from the Announcementt component */}
      <Announcementt />
      {/* navbar import from the navbar component */}
      <Navbar />
      {/* slider import from slider component */}
      {/* <Slider /> */}
      {/* Category import from category components */}
      <Category category={category} />
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
