'use client'

import Head from "next/head";
import ThreeScene from "./components/ThreeScene";
import Navbar from "./components/Navbar";
import RightSideBar from "./components/RightSideBar";
import { HouseContext } from './context/HouseContext'
import { useState } from 'react'

const HomePage = () => {

  const [houseObject, setHouseObject] = useState({
    color: "#E8B8B8",
    width: 2,
    height: 2,
    depth: 2,
  })

  return (
    <>
      <Head>
        <title>My Three.js Scene in Next.js</title>
      </Head>
      <div className="bg-white">
          <Navbar/>
          <HouseContext.Provider value={{ houseObject, setHouseObject }}>
            <div className="flex flex-row justify-between">
              <div id="canvas" className="w-[80%] h-[100%] overflow-clip">
                <ThreeScene />
              </div>
              <RightSideBar/> 
            </div>
          </HouseContext.Provider>
      </div>
    </>
  );
};
export default HomePage;