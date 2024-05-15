// const YOUR_API_KEY = "AIzaSyBWTXTy2FDrPaiFYhyXSC6H7aTt8W0Xx3Y";

// const YOUR_API_KEY = "AIzaSyAikglWNWDm8OSo3CzHsTXcxOmTZ8LdWT4";

// const YOUR_API_KEY = "AIzaSyDN9jIaq2BOBowLvZQbXSdCjCf5d6huLn0";

const YOUR_API_KEY = "AIzaSyD0agaKUayPgtw-tOvnmWvi2WakaHs25dU";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" +
  YOUR_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_VIDEOS_FIRST =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";

//NEED QUERY NAME IN MIDDLE OF THESE TWO API

export const YOUTUBE_SEARCH_RESULTS_VIDEOS_LAST =
  "&maxResults=25&key=" + YOUR_API_KEY;

//////////////////////////////////////////////////////////////////////////
export const API_GET_LIVEDATA_ID_FIRST =
  "https://www.googleapis.com/youtube/v3/videos?id=";

//NEED VIDEO ID IN MIDDLE OF THESE TWO API

export const API_GET_LIVEDATA_ID_SECOND =
  "&key=" + YOUR_API_KEY + "&part=liveStreamingDetails%2Csnippet";
//////////////////////////////////////////////////////////////////////////

export const LIVE_CHAT_Messages_OPEN =
  "https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=";

// NEED LIVE CHAT ID IN THE MIDDLE

export const LIVE_CHAT_Messages_CLOSE =
  "&part=id%2Csnippet%2CauthorDetails&key=" + YOUR_API_KEY;
