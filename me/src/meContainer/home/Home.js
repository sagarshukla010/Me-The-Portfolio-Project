import React from "react";
import Profile from "./profile/Profile";
import Header from "./header/Header";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
    </div>
  );
}
