import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [sidebar,setSidebar] = useState(true);
  const [searchedData, setSearchedData] = useState('');
  return (
    <div>
   <Navbar setSidebar ={setSidebar}  setSearchedData={setSearchedData} />
   <Routes>
    <Route path='/' element={<Home sidebar ={sidebar}  searchedData={searchedData}  />} />
    <Route path='/video/:categoryId/:videoId' element={<Video/>} />

   </Routes>

    </div>
  )
}

export default App