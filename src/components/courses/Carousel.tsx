import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardWithLink } from "./Cards";

interface ChildComponentProps {
  wallet: any;
}
const CarouselComp: React.FC<ChildComponentProps> = ({ wallet }) => {
  return (
    <div className=" w-full h-full mx-auto lg:flex flex-col justify-center items-center ">
      <CardWithLink wallet={wallet} />
    </div>
  );
};

export default CarouselComp;
