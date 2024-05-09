import React, { useMemo, useState } from "react";
import { findNthPrime } from "./helper";

const Demo1 = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // const prime = findNthPrime(text);
  //  calling function at every isDark state change using toggle.

  const prime = useMemo(() => findNthPrime(text), [text]);
  //  Not calling function at every at every isDark state change toggle untill text state changes.
  //  cache the result of findNthPrime between the re-render.

  //console.log("rendering...");

  return (
    <>
      <h1 className="text-4xl ml-12 h-[10px] p-5">useMemo Example</h1>
      <div
        className={
          "w-[400px] h-[500px m-20 rounded-lg border border-black ]" +
          (isDark && " bg-gray-900 text-white")
        }
      >
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 m-8 text-white bg-purple-500 rounded-lg "
        >
          Toggle
        </button>
        <div>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Number"
            className="border ml-8 mt-5 pl-4 text-black border-black w-[300px] h-[40px]"
          />
          <p className={"text-3xl font-bold ml-8 my-8"}>nth Prime: {prime}</p>
        </div>
      </div>
    </>
  );
};

export default Demo1;
