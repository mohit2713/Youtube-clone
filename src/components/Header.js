import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 mx-2 mb-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-11 mt-2 cursor-pointer"
          alt="menulogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />

        <img
          className="h-16"
          alt="youtube logo"
          src="https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_logo_premium_phone_portrait_1200x320.png"
        />
      </div>
      <div className="flex col-span-10 mt-2 ">
        <input
          className="border border-gray-400 w-1/2 h-12 rounded-l-full p-4"
          placeholder="Search"
        />
        <button className=" w-16 h-12 border border-gray-400 rounded-r-full ">
          <img
            className="h-11 object-contain"
            alt="searchlogo"
            src="https://t3.ftcdn.net/jpg/05/99/84/86/360_F_599848646_MdK7wVDJQZygObyKEahVkOuhh0IGdTt3.jpg"
          />
        </button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-12 mt-2 "
          alt="profilelogo"
          src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
        />
        <img
          className="h-12 mt-2"
          alt="profilelogo"
          src="https://static.vecteezy.com/system/resources/thumbnails/001/505/138/small/notification-bell-icon-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
