// import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import HomePageNavbar from "../components/HomePageNavBar";

export const styles = {
  link: {
    color: "teal",
    cursor: "pointer"
  }
};

export  default function Home() {
  return (
    <div className="App">
      <HomePageNavbar />
      <section className="section">
        <h1>Welcome to my website</h1>
        <h4>Pages:</h4>
      
        <Outlet />
      </section>
    </div>
  );
}