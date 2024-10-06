import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComp from "./compoenets/HeaderComp";
import NavbarComp from "./compoenets/NavbarComp";
import FooterComp from "./compoenets/FooterComp";
import WaterSoluble from "./pages/WaterSolubleTable2";
import Home from "./pages/Home";
import About from "./pages/About";

import Carotenoids from "./pages/CarotenoidsTable4";
import Starch from "./pages/StarchTable6";
import OrganicAcid from "./pages/OrganicAcidTable9";

const App = () => {
  const [clickedWaterSoluble, setClickedWaterSoluble] = useState(null);
  const [clickedOrganicAcid, setClickedOrganicAcid] = useState(null);
  const [clickedCarotenoids, setClickedCarotenoids] = useState(null);
  const [activeTable, setActiveTable] = useState("watersoluble");

  return (
    <BrowserRouter>
      <HeaderComp activeTable={activeTable} />
      <NavbarComp setActiveTable={setActiveTable} activeTable={activeTable} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route
          path="/watersoluble"
          element={
            <WaterSoluble setClickedWaterSoluble={setClickedWaterSoluble} />
          }
        />
        <Route
          path="/organicacid"
          element={
            <OrganicAcid setClickedOrganicAcid={setClickedOrganicAcid} />
          }
        />
        <Route
          path="/carotenoids"
          element={
            <Carotenoids setClickedCarotenoids={setClickedCarotenoids} />
          }
        />
        <Route path="/starch" element={<Starch />} />
      </Routes>
      <FooterComp
        clickedWaterSoluble={clickedWaterSoluble}
        clickedOrganicAcid={clickedOrganicAcid}
        clickedCarotenoids={clickedCarotenoids}
        activeTable={activeTable}
      />
    </BrowserRouter>
  );
};

export default App;
