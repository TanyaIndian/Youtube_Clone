import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import tech from "../../assets/tech.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import cameron from "../../assets/cameron.png";
import megan from "../../assets/megan.png";

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
      <div className="shortcut-links">
        <div className={`side-links ${category === 0 ? "active":''}`}>
          <img src={home} alt="" onClick={()=>setCategory(0)} />
          <p>Home</p>
        </div>
        <div className={`side-links ${category === 20 ? "active":''}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming </p>
        </div>
        <div className={`side-links ${category === 2 ? "active":''}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`side-links ${category === 17 ? "active":''}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" />
          <p>sports</p>
        </div>
        <div className={`side-links ${category === 24 ? "active":''}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-links ${category === 10 ? "active":''}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="" />
          <p>music</p>
        </div>
        <div className={`side-links ${category === 22 ? "active":''}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" />
          <p>blogs</p>
        </div>
        <div className={`side-links ${category === 25 ? "active":''}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="" />
          <p>news</p>
        </div>
        <div className={`side-links ${category === 28 ? "active":''}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="" />
          <p>Technology</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
<h3>Subscribed</h3>
<div className="side-links" >
   <img src={jack} alt="" /> <p>PewdDiePie</p>
</div>
<div className="side-links" >
   <img src={simon} alt="" /> <p>Mr Beast</p>
</div>
<div className="side-links" >
   <img src={tom} alt="" /> <p>Justin Beiber</p>
</div>
<div className="side-links" >
   <img src={megan} alt="" /> <p>5-Minute Crafts</p>
</div>
<div className="side-links" >
   <img src={cameron} alt="" /> <p>Nas Daily</p>
</div>
      </div>
    </div>
  );
};

export default Sidebar;
