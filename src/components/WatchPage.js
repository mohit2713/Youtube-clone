import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import {
  API_GET_LIVEDATA_ID_FIRST,
  API_GET_LIVEDATA_ID_SECOND,
} from "../utils/constants";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  const [liveVideoId, setLiveVideoId] = useState("");
  // console.log(liveVideoId);
  const [checkLive, setCheckLive] = useState("");
  // console.log(checkLive);
  const [passed, setPassed] = useState(false);
  console.log(passed);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getLiveVideoDataId();
  }, [checkLive]);

  const getLiveVideoDataId = async () => {
    const LiveVideoData = await fetch(
      API_GET_LIVEDATA_ID_FIRST +
        searchParams.get("v") +
        API_GET_LIVEDATA_ID_SECOND
    );
    const json = await LiveVideoData.json();
    // console.log(json.items[0]);
    setCheckLive(json.items[0].snippet.liveBroadcastContent);
    if (checkLive === "live") {
      setLiveVideoId(json.items[0].liveStreamingDetails.activeLiveChatId);
      setPassed(true);
    }
  };

  return (
    <div className="flex flex-col p-5">
      <div className="flex">
        <div className="">
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full">
          {passed && <LiveChat videoId={liveVideoId} />}
        </div>
      </div>
      <div>
        <CommentContainer />
      </div>
    </div>
  );
};

export default WatchPage;
