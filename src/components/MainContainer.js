import React from "react";
import VideoContainer from "./VideoContainer";
import FilterButtonsList from "./FilterButtonsList";

const MainContainer = () => {
  return (
    <div className=" col-span-3">
      <FilterButtonsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
