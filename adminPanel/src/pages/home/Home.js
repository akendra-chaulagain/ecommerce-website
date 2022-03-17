import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import LastetUser from "../../components/latestUserContainer/LatestUser";

const Home = () => {
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
          <LastetUser />
        </div>
      </div>
    </>
  );
};

export default Home;
