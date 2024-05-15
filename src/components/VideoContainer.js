import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoList from "./VideoList";
import ShimmerUI from "../utils/ShimmerUI";
import { useDispatch, useSelector } from "react-redux";
import { addVideos, immerge } from "../utils/scrollSlice";

const VideoContainer = () => {
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const videoList = useSelector((store) => store.scroll.videos);
  // console.log(videoList);

  useEffect(() => {
    getVideos();
    window.addEventListener("scroll", handleScroll);
    setLoading(false);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    dispatch(addVideos(json.items));
    setCheck(true);
  };

  const handleScroll = async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setLoading(true);
      const newPosts = await fetch(YOUTUBE_VIDEOS_API);
      const json = await newPosts.json();
      console.log(json);
      dispatch(immerge(json.items));
      setCheck(true);
    }
  };

  if (check === false) return <ShimmerUI />;
  return (
    <div className="">
      {/* <h1> Limit Execed</h1> */}
      <VideoList data={videoList} />
      {loading && <ShimmerUI />}
    </div>
  );
};

export default VideoContainer;
