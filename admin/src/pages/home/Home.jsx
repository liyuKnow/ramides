import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { FaBookmark } from "react-icons/fa";

const Home = () => {
  const [pendingReq, setPendingReq] = useState({});
  useEffect(() => {
    const getPendingRequests = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8888/api/requests/pending"
        );
        setPendingReq(res.data);
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
      <h1 className="text-3xl text-black pb-6">Home</h1>

      {/* <div className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12"> */}
      <div className="flex justify-start items-start max-w-2xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <FaBookmark color="indigo" />
            <div className="space-y-2">
              <p className="text-slate-800">Pending Requests</p>
              <a
                href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                className="block text-indigo-400 group-hover:text-slate-800 transition duration-200"
                target="_blank"
              >
                {pendingReq.length}
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Home;
