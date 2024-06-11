import React from "react";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const VideoList = ({ data }) => {
  // console.log(data[0]);
  return (
    <div className="flex flex-wrap justify-around">
      {data.map((data, i) => (
        <Link key={i} to={"/watch?v=" + data.id}>
          <div>
            <VideoCards info={data} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default VideoList;
