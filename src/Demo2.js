import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);

  const ref = useRef(0);
  // useRef lets you reference a value that’s not needed for rendering.

  console.log("Rendering component...");
  return (
    <>
      <h1 className="text-4xl ml-12 h-[10px] p-5">useRef Example</h1>
      <div className="w-[250px] h-[230px] m-20 rounded-lg border border-black">
        <div>
          <button
            onClick={() => {
              x = x + 1;
              console.log(x);
            }}
            className="bg-green-100 p-2 m-4"
          >
            Increase x
          </button>
          <span className="font-bold text-xl">Let = {x}</span>
        </div>
        <div>
          <button
            onClick={() => {
              setY(y + 1);
            }}
            className="bg-green-100 p-2 m-4"
          >
            Increase y
          </button>
          <span className="font-bold text-xl">State = {y}</span>
        </div>
        <div>
          <button
            onClick={() => {
              ref.current = ref.current + 1;
            }}
            className="bg-green-100 p-2 m-4"
          >
            useRef
          </button>
          <span className="ml-6 font-bold text-xl">Ref ={ref.current}</span>
        </div>
      </div>
    </>
  );
};

export default Demo2;
