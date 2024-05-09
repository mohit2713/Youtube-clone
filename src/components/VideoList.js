import React from "react";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoList = ({ data }) => {
  // console.log(data[0]);
  return (
    <div className="flex flex-wrap justify-around">
      {data.map((data) => (
        <Link key={data.id} to={"/watch?v=" + data.id}>
          <VideoCards info={data} />
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
