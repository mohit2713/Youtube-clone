import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex bg-gray-200 rounded-md p-2 my-3">
      <img
        className="h-11 mt-2 "
        alt="profilelogo"
        src="https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg"
      />
      <div className="pl-1 text-sm mt-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
