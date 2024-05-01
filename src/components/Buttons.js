import React from "react";

const Buttons = ({ data }) => {
  // console.log(data);
  return (
    <div className="">
      <button className="text-md  px-3 py-1 m-2 border bg-gray-200 border-gray-100 rounded-md">
        {data}
      </button>
    </div>
  );
};

export default Buttons;
