import React from "react";
import Buttons from "./Buttons";

const list = [
  "All",
  "Cricket",
  "Songs",
  "Music",
  "Mixes",
  "IndianPop",
  "Watched",
  "News",
  "Live",
  "Playlists",
  "Pop Rock",
  "Bollywood",
  "Gaming",
  "Cooking",
];
const FilterButtonsList = () => {
  return (
    <div className="flex px-4 mt-2">
      {list.map((items, index) => (
        <Buttons key={index} data={items} />
      ))}
    </div>
  );
};

export default FilterButtonsList;
