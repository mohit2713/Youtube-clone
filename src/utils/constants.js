const YOUR_API_KEY = "AIzaSyBWTXTy2FDrPaiFYhyXSC6H7aTt8W0Xx3Y";

// const YOUR_API_KEY = "AIzaSyAikglWNWDm8OSo3CzHsTXcxOmTZ8LdWT4";

// const YOUR_API_KEY = "AIzaSyDN9jIaq2BOBowLvZQbXSdCjCf5d6huLn0";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=In&key=" +
  YOUR_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_VIDEOS_FIRST =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";

export const YOUTUBE_SEARCH_RESULTS_VIDEOS_LAST =
  "&maxResults=25&key=AIzaSyBWTXTy2FDrPaiFYhyXSC6H7aTt8W0Xx3Y";
