import React from "react";

const SearchVideoCards = ({ info }) => {
  // console.log(info);
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" flex p-4 m-2 w-9/12 cursor-pointer shadow-lg ">
      <img
        className="w-4/12 rounded-md"
        alt="thumbnailLogo"
        src={thumbnails.high.url}
      />
      <ul className=" pt-4 pl-2">
        <li className="font-medium text-xl ">{title}</li>
        <li className="text-md text-gray-600 ">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default SearchVideoCards;
