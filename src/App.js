import React from "react";

import Navbar from "./components/navbar/Navbar";
import Headers from "./containers/header/Headers";
import Brands from "./components/brand/Brands";
import WhatGPT3s from "./containers/whatGPT3/WhatGPT3s";
import Featuress from "./containers/features/Featuress";
import Possibilitys from "./containers/possibility/Possibilitys";
import Cta from "./components/cta/Cta";
import Blog from "./containers/blog/Blogs";
import Footers from "./containers/footer/Footers";

import "./App.css";


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Headers />
      </div>
      <Brands />
      <WhatGPT3s />
      <Featuress />
      <Possibilitys />
      <Cta />
      <Blog />
      <Footers />
    </div>
  );};

export default App;
