import React, { useEffect, useState } from "react";
import "./Feed.css";

import loader from "../../assets/loading-7528_256.gif";
import No_video from "../../assets/no_vdeo.jpg";

import { Link } from "react-router-dom";
import { API_Key } from "../../data";
import moment from "moment";

const Feed = ({ category,searchedData }) => {
  const [data, setData] = useState([]);
  const [loading ,setLoading] = useState(true)
  const fetchData = async () => {
    const query_Url = `https://youtube.googleapis.com/youtube/v3/search?key=${API_Key}&q=${searchedData}&type=video&maxResults=20&part=snippet`

    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_Key}`;
    
    if(searchedData)
    {
      const res = await fetch(query_Url);
      const resData = await res.json();
      setData(resData?.items);
      setLoading(false)
    }
    else{
      const res = await fetch(videoList_Url);
      const resData = await res.json();
      setData(resData?.items);
      setLoading(false)

    }
   
   
  };

  console.log(data == 0)

  useEffect(() => {
    fetchData();
  }, [category,searchedData]);

  return (
    <div className="feed" >
      { loading ? ( <div style={{ display: "flex", alignItems: "center", justifyContent: "center",height:'100vh' }}>
          <img src={loader} alt="Loading..." style={{ width: "100px", height: "100px" }} />
        </div>) :    ( data?.length !=0 ? data?.map((item, index) => {
        return (
          <Link
            to={searchedData ? `video/${category}/${item.id.videoId}`  : `video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={index}
          >
            <img src={item?.snippet.thumbnails.medium.url} alt="" />
            <h2>{item?.snippet.title}</h2>
            <h3>{item?.snippet.channelTitle}</h3>
            <p>
              {item?.statistics?.viewCount} &bull;{" "}
              {moment(item?.snippet?.publishedAt).fromNow()}
            </p>
          </Link>
        );
      }): (<div style={{ display: "flex", alignItems: "center", justifyContent: "center",height:'100vh' }}>
        <img src={No_video} alt="no video..." style={{ width: "600px", height: "500px" }} />
      </div>))}
    </div>
  );
};

export default Feed;
