import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import CreatePost from './CreatePost'

const Main = () => {
  return (
    <div className='bg-[#f9fafe] w-full py-4 px-4 min-h-[calc(100vh-73px)]'>
     
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/createpost" element={<CreatePost/>}/>
            </Routes>
            
        
        

    </div>
  )
}

export default Main