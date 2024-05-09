import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  YOUTUBE_SEARCH_RESULTS_VIDEOS_FIRST,
  YOUTUBE_SEARCH_RESULTS_VIDEOS_LAST,
} from "../utils/constants";
import SearchVideoPage from "./SearchVideoPage";
import ShimmerUI from "../utils/ShimmerUI";
import { openMenu } from "../utils/appSlice";

const SearchResultsContainer = () => {
  // console.log("run");
  const [searchData, setSearchData] = useState([]);
  const [checkData, setCheckData] = useState(false);
  const searchQueryData = useSelector((store) => store.inputSearch.searchValue);
  //console.log(searchQueryData);
  const dispatch = useDispatch();
  useEffect(() => {
    getSearchVideo();
    dispatch(openMenu());
  }, [searchQueryData]);

  const getSearchVideo = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULTS_VIDEOS_FIRST +
        searchQueryData +
        YOUTUBE_SEARCH_RESULTS_VIDEOS_LAST
    );
    const json = await data.json();
    //console.log(json.items);
    setSearchData(json.items);
    setCheckData(true);
  };
  if (checkData === false) return <ShimmerUI />;
  return (
    <div className="col-span-2">
      {/* <h1>Limit execed!!!</h1> */}
      <SearchVideoPage data={searchData} />
    </div>
  );
};

export default SearchResultsContainer;
