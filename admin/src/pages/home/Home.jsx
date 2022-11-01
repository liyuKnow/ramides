import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { FaBookmark } from "react-icons/fa";
import StatusCards from "../../components/StatusCards";

const Home = () => {
  const [stats, setStats] = useState({
    pendingRequests: 0,
    totalRequests: 0,
  });
  useEffect(() => {
    const getPendingRequests = async () => {
      try {
        const res = await axios.get("http://localhost:8888/api/stats/counts");
        setStats(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPendingRequests();
  }, []);
  // console.log(pendingReq);
  return (
    <>
      <h1 className="text-3xl text-black pb-6">Dashboard Home</h1>

      <StatusCards stats={stats} />
    </>
  );
};

export default Home;
