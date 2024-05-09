import React from "react";

const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-2 mt-1 ">
      <img
        className="w-9"
        alt="profilelogo"
        src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
      />
      <span className="font-medium mx-1  text-[15px]">{name} :</span>
      <span className="text-[16px] mt-[1px] ">{message}</span>
    </div>
  );
};

export default LiveChatMessage;
