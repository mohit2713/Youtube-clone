import React, { useEffect, useState } from "react";
import {
  LIVE_CHAT_Messages_CLOSE,
  LIVE_CHAT_Messages_OPEN,
} from "../utils/constants";
import LiveChatMessage from "./LiveChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = ({ videoId }) => {
  const [liveChats, setLiveChats] = useState([]);
  const [livemessage, setLivemessage] = useState("");
  const [data, setData] = useState(false);
  const [count, setCount] = useState(0);
  if (count === 30) {
    setLiveChats(liveChats);
  }

  console.log(liveChats);
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  // function getName() {
  //   var data = [];
  //   var data = liveChats.map((name) => name.authorDetails.displayName);
  //   return data;
  // }

  // liveChats.map((mess) => {
  //   setLivemessage({
  //     name: mess.authorDetails.displayName,
  //     message: mess.snippet.displayMessage,
  //   });
  //   const i = setInterval(() => {
  //     // API POLLING
  //     console.log("Api polling");

  //     dispatch(addMessage(livemessage));
  //   }, 80000);
  //   return () => clearInterval(i);
  // });

  useEffect(() => {
    console.log("useEFFECT");
    getLiveChat();
    if (data === true) {
      const i = setInterval(() => {
        // API POLLING
        console.log("Api polling");

        dispatch(
          addMessage({
            name: liveChats[count].authorDetails.displayName,
            message: liveChats[count].snippet.displayMessage,
          })
        );
        setCount(count + 1);
      }, 1500);
      return () => clearInterval(i);
    }
  }, [count, data]);

  const getLiveChat = async () => {
    const LiveVideoDataChat = await fetch(
      LIVE_CHAT_Messages_OPEN + videoId + LIVE_CHAT_Messages_CLOSE
    );
    const jsonData = await LiveVideoDataChat.json();
    console.log(jsonData.items);
    setLiveChats(jsonData.items);
    setData(true);

    // console.log(jsonData.items[0].authorDetails.displayName);
    // console.log(jsonData.items[0].snippet.displayMessage);

    //   name: jsonData.items[0].authorDetails.displayName,
    //   message: jsonData.items[0].snippet.displayMessage,
  };

  // if (data !== false) {
  //   const name = getName();
  //   console.log(name);
  // }

  return (
    <>
      <div className="text-center text-red-600 font-bold text-xl">
        <h1>LiveChats</h1>
      </div>
      <div className=" flex flex-col-reverse w-full h-[530px] ml-2 p-2 bg-slate-100 rounded-lg border border-black overflow-y-scroll ">
        {chatMessages.map((c, i) => (
          <LiveChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full ml-2 border border-black p-2 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit", livemessage);
          dispatch(
            addMessage({
              name: "Mohit kashyap",
              message: livemessage,
            })
          );
          setLivemessage("");
        }}
      >
        <input
          className="w-10/12 pl-2"
          value={livemessage}
          onChange={(e) => setLivemessage(e.target.value)}
        />
        <buttob className="p-2 ml-4 bg-blue-300 rounded-lg cursor-pointer">
          Submit
        </buttob>
      </form>
    </>
  );
};

export default LiveChat;
