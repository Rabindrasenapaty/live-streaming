import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    let [input,setinput]=useState("")
    let navigate=useNavigate()
    function handleJoin(){
        navigate(`/room/${input}`)
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-white mb-6">Join a Room</h1>
        
        <input
          type="text"
          placeholder="Enter your room ID"
          className="w-full px-4 py-3 mb-4 rounded-xl border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e)=>setinput(e.target.value)}
          value={input}
        />

        <button
        onClick={handleJoin}
          className="w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Home;
