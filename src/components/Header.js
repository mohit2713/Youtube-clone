import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { storeCache } from "../utils/searchCacheSlice";
import { findVideo } from "../utils/inputSearchSlice";
import { Link, useHref } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  // const [searchCheck, setSearchCheck] = useState(false);
  // console.log(suggestion);

  const [showsuggestion, setShowSuggestion] = useState(false);
  // console.log(searchQuery);

  const storeCacheResult = useSelector((store) => store.search);
  // storeCacheResult = {
  //   iphone: ["iphone11", "iphone 14", "iphone x"],
  // };
  // searchQuery = iphone;

  const dispatch = useDispatch();

  useEffect(() => {
    //make an api call after every key press
    //but if the difference between 2 api calls is <200ms
    //decline the api call
    // const time = setTimeout(() => searchSuggestions(), 200); // api will call after 200ms

    const time = setTimeout(() => {
      if (storeCacheResult[searchQuery]) {
        setSuggestion(storeCacheResult[searchQuery]);
      } else {
        searchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(time); // calls after every re-render
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    console.log("Api Call -" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);
    //  update cache
    dispatch(
      storeCache({
        [searchQuery]: json[1],
      })
    );
    // setSearchCheck(true);
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchValueInput = (name) => {
    dispatch(findVideo(name));
    setShowSuggestion(false);
  };

  const handleSearchValueSuggestion = (item) => {
    dispatch(findVideo(item));
    setSearchQuery(item);
    setShowSuggestion(false);
  };

  return (
    <div className="sm:flex flex-initial lg:grid w-full grid-flow-col sticky top-0 bg-white tran p-3 mx-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-11 mt-2 cursor-pointer"
          alt="menulogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-16"
            alt="youtube logo"
            src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_logo_premium_phone_portrait_1200x320.png"
          />
        </a>
      </div>
      <div className="flex-col col-span-10 mt-2 ">
        <div className="flex">
          <input
            className="border relative border-gray-400 h-12 rounded-l-full p-4 sm:w-2/12 lg:w-6/12"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            // onBlur={() => setSuggestion(false)}
          />
          <Link to="/search">
            <button
              className=" w-16 h-12 border border-gray-400 rounded-r-full "
              onClick={() => handleSearchValueInput(searchQuery)}
              // important
            >
              <img
                className="h-11 object-contain"
                alt="searchlogo"
                src="https://t3.ftcdn.net/jpg/05/99/84/86/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg"
              />
            </button>
          </Link>
        </div>
        {showsuggestion && (
          <div className=" w-9/12 lg:w-[41rem] absolute shadow-lg bg-white  rounded-md border border-gray-100">
            {suggestion.map((item, index) => (
              <ul key={index}>
                <Link to="/search">
                  <li
                    onClick={() => handleSearchValueSuggestion(item)}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100 rounded-md cursor-pointer"
                  >
                    {item}
                  </li>
                </Link>
              </ul>
            ))}
          </div>
        )}
      </div>
      <div className="sm:h-0 lg: h-0 flex col-span-1">
        <img
          className="lg:h-12 mt-2 "
          alt="profilelogo"
          src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
        />
        <img
          className="lg:h-12 mt-2"
          alt="profilelogo"
          src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
