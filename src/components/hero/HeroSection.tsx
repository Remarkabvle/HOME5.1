import React from "react";
import "./Hero.css";
import line from '../../assets/line.png'

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-content__top">
          <h1>PORTEN</h1>
          <img src={line} alt="" />
          <p>САНКТ-ПЕТЕРБУРГ</p>
        </div>
      </div>
        <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.
        </p>
    </div>
  );
};

export default Hero;
