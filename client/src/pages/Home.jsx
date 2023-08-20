import React, {useState} from "react";
import { Link, Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import HomePageNavbar from "../components/HomePageNavBar";
import Navbar from "../components/Navbar";
import LoginModal from "../components/LoginModal";


export  default function Home() {
 

  return (
    <div className="App">
      <Navbar />
      {/* <HomePageNavbar /> */}

      
    </div>
  );
}