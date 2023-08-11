import React from "react";
import Card from "./sectComp";

export default function aboutSect() {
  return (
    <div
      className="my-[30px] h-screen px-[20px] text-center"
    >
      <h1 className=" text-[30px] pt-6 font-bold md:text-[40px]">
        A Perfect Learning Environment for Your Kids
      </h1>
      <p className="md:text-[30px]">What We offer</p>
      <div className="px-[20px] flex flex-col lg:flex-row justify-around flex-wrap md:ml-[70px]">
        <Card cardTitle="Guidance" cardImage="imgsrc/guidance.jpeg" />
        <Card  cardTitle="Character Development" cardImage="imgsrc/characterdev.webp"/>
        <Card cardTitle="Interesting Classroom" cardImage="imgsrc/interestingclass.webp" />
        <Card cardTitle="Peaceful Environment" cardImage="imgsrc/env.jpg" />
      </div>
    </div>
  );
}
