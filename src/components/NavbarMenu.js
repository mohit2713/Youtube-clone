import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="col-span-8 w-[200px] px-4 mx-2 shadow-lg">
      <div>
        <ul className="font-medium mt-4 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Subsciptions</li>
          <li>Youtube Music</li>
        </ul>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div>
        <h2 className="font-bold">You</h2>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>playlists</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked videos</li>
          <li>Downloads</li>
        </ul>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <div>
        <h2 className="font-bold">Subscriptions</h2>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subsciptions</li>
          <li>Youtube Music</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
