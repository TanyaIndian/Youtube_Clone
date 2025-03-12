import React, { useEffect, useState } from "react";
import "./PlayVide.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import jack from "../../assets/jack.png";
import save from "../../assets/save.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_Key, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const {videoId} = useParams()
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideo = async () => {
    //fetching videos data

    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_Key}`;

    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data?.items[0]));
  };

  const fetchOtherData = async () => {
    //fetching videos data

    const otherData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_Key}`;

    await fetch(otherData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

  const fetchCommentData = async () => {
    //fetching videos data

    const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=35&videoId=${videoId}&key=${API_Key}`;

    await fetch(commentData_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideo();
    fetchCommentData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}

      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {" "}
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}{" "}
          &bull; {moment(apiData?.snippet.publishedAt).fromNow()}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {value_converter(apiData?.statistics.likeCount)}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData?.snippet.channelTitle}</p>
          <span>
            {" "}
            {value_converter(channelData?.statistics.subscriberCount)}{" "}
            Subscribers{" "}
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?.snippet.description.slice(0, 250)}</p>

        <hr />
        <h4>{value_converter(apiData?.statistics.commentCount)} comments</h4>
        {commentData?.map((item, index) => {
          return (
            <div className="comment" key={index}>
              <img
                src={
                  item?.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt=""
              />
              <div>
                <h3>
                  {item?.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>1 day ago</span>
                </h3>
                <p>{item?.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_converter(
                      item?.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
