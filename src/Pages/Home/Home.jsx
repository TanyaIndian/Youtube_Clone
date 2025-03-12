import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'


const Home = ({sidebar,searchedData}) => {

    const [category, setCategory] = useState(0);

  return (
    <div><Sidebar sidebar={sidebar} setCategory={setCategory} category={category} />
    <div className={`container ${sidebar ? '' : 'large-container'}`}>
  <Feed category={category} searchedData={searchedData} />

    </div>
    </div>
  )
}

export default Home