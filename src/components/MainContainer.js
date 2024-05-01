import React from "react";
import VideoContainer from "./VideoContainer";
import FilterButtonsList from "./FilterButtonsList";

const MainContainer = () => {
  return (
    <div className="">
      <FilterButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
