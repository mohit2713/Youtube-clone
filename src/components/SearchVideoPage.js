import React from "react";
import SearchVideoCards from "./SearchVideoCards";
import { Link } from "react-router-dom";

const SearchVideoPage = ({ data }) => {
  // console.log(data[0]);
  return (
    <div>
      {data.map((data) => (
        <Link key={data.id.videoId} to={"/watch?v=" + data.id.videoId}>
          <SearchVideoCards info={data} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideoPage;
