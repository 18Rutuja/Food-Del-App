import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Navbar/header/Header";
import ExploreMenu from "../../components/Navbar/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/Navbar/fooddsplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
