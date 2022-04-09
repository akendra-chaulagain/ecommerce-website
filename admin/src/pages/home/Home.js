import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import LastetUser from "../../components/latestUserContainer/LatestUser";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import axios from "axios";

const Home = () => {
  // fot getting latest 5 recent user data
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const getAllUser = async () => {
      const res = await axios.get(`/users?new=true`);
      setAllUser(res.data);
    };
    getAllUser();
  }, []);

  // for getting user stats
  const [userStats, setUserStats] = useState([]);

  // this usememo will never change when we use useffect
  const MONTHS = useMemo(
    () => [
      "jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getUserStats = async () => {
      try {
        const res = await axios.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (error) {
        console.log("unsble to get user stats" + error);
      }
    };
    getUserStats();
  }, [MONTHS]);
  return (
    <>
      <div className="home">
        <Sidebar />

        <div className="homeContainer">
          {/* import from widget component */}
          <Widget />
          {/* import from chart component */}
          {/* sending props in the cart components */}
          <Chart
            grid
            dataKey="Active User"
            title="User Analytics"
            data={userStats}
          />
          {/* latest user import feom latest user */}
          <LastetUser allUser={allUser} />
        </div>
      </div>
    </>
  );
};

export default Home;
