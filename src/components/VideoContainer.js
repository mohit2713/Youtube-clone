import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoList from "./VideoList";
import ShimmerUI from "../utils/ShimmerUI";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
    setCheck(true);
  };
  if (check === false) return <ShimmerUI />;
  return (
    <div className="">
      {/* <h1> Limit Execed</h1> */}
      <VideoList data={videos} />
    </div>
  );
};

export default VideoContainer;
