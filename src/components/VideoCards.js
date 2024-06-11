import React from "react";

const VideoCards = ({ info }) => {
  // console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 cursor-pointer shadow-lg">
      <img
        className="w-[500px] lg:w-72 rounded-md"
        alt="thumbnailLogo"
        src={thumbnails.medium.url}
      />
      <ul className=" ">
        <li className="font-medium w-[270px] truncate">{title}</li>
        <li className="text-sm text-gray-600 ">{channelTitle}</li>
        <li className="text-sm text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCards;
