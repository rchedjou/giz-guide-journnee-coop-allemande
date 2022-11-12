import React from 'react';
import SvgGiz from "../Composants/Svg_giz";
// import Giz_map from "../Images/svg.svg";
// import { SVGMap } from "react-svg-map";

// project imports
import MainCard from '../Composants/MainCard';

const Carte = () => {
  const title="GIZ Carte"
  return (
    <MainCard title={title}>
        {/* <img src={Giz_map} alt="chedjou" /> */}
        <SvgGiz />
    </MainCard>
  )
}

export default Carte
