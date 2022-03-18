import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import LastetUser from "../../components/latestUserContainer/LatestUser";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const getAllUser = async () => {
      const res = await axios.get(`/users?new=true`);
      setAllUser(res.data);
    };
    getAllUser();
  }, []);
  console.log(allUser);
  return (
    <>
      <div className="home">
        <Sidebar />

        <div className="homeContainer">
          {/* import from widget component */}
          <Widget />
          {/* import from chart component */}
          <Chart />
          {/* latest user import feom latest user */}
          <LastetUser allUser={allUser} />
        </div>
      </div>
    </>
  );
};

export default Home;
