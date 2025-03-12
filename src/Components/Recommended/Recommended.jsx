import React, { useEffect, useState } from 'react'
import './Recommended.css'

import { API_Key, value_converter } from '../../data'
import { Link } from 'react-router-dom'


const Recommended = ({categoryId}) => {
    const [relatedVideoData,setRelatedVideoData]= useState([])


      const FetchRelatedVideo = async () => {
        //fetching videos data
    
        const relatedVideo_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_Key}`;
    
        await fetch(relatedVideo_Url)
          .then((res) => res.json())
          .then((data) => setRelatedVideoData(data?.items));
      };

      useEffect(()=>{
        FetchRelatedVideo()
      },[])
  return (
    <div className='recommended'>

        {relatedVideoData?.map((item,index)=>{
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className='side-video-list' key={index}>


                <img src={item?.snippet.thumbnails.medium.url} alt="" />
     <div className="vid-info">
         <h4>{item?.snippet.title}</h4>
     <p>{item?.snippet.channelTitle}</p>
     <p>{value_converter(item?.statistics.viewCount)}</p>
     </div> 
             </Link>
            )
        })}
      
   


    </div>
  )
}

export default Recommended