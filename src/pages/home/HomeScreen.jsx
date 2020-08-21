import React, { Component, useState } from "react";
import "./homescreen.css";
import CarouselSlider from "../../components/carousel/CarouselSlider";
import MandG from "../../components/marbels&granites/MandG";
import OurWork from "../../components/ourwork/OurWork";
import OurTeam from "../../components/ourteam/OurTeam";

const HomeScreen = () => {
  return (
    <div>
      <CarouselSlider
        images={[
          "img/home/carousel/1.jpg",
          "img/home/carousel/2.jpg",
          "img/home/carousel/3.jpg",
        ]}
      />
      <br />
      <br />
      <br />

      <MandG />
      <br />
      <br />
      <br />
      <OurWork images={["img/06.jpg", "img/04.jpg", "img/03.jpg"]} />
      <br />
      <br />
      <br />
      <OurTeam />
    </div>
  );
};
export default HomeScreen;
