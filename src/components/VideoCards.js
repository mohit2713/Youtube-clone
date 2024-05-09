import React from "react";

const VideoCards = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 cursor-pointer shadow-lg ">
      <img
        className=" rounded-md"
        alt="thumbnailLogo"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-medium   ">{title}</li>
        <li className="text-sm text-gray-600 ">{channelTitle}</li>
        <li className="text-sm text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCards;
