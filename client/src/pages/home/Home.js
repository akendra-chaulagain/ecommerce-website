import React from "react";
import Category from "../../components/Category/Category";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
// import Slider from "../../components/slider/Slider";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [total, setTotal] = useState("");

  // getting category data from database
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("/categories");
        setCategory(res.data);
        setTotal(res.data.length);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      {/* Category import from category components */}
      <Category category={category} total={total} />
      
      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
