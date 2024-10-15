import { useState } from 'react'
import './App.css'
import VideoUpload from './components/VideoUpload'

function App() {
  const [count, setCount] = useState(0);
  const [videoId, setVideoId]= useState("223c9e8f-4342-46e6-8821-fc4c8ef873ee"); //dummy id

  return (
    <>
      <div className='flex flex-col items-center space-y-5 justify-center py-9'>
        <h1 className='text-3xl font-bold text-gray-700 dark:text-gray-100'>Video Streaming app</h1>

        <div className='flex w-full justify-around'>
          <div>
            <h1 className="text-white">Playing video</h1>

            <video style={{width:900}}
              // src={`http://localhost:8080/api/v1/videos/stream/${videoId}`} 

              
              src={`http://localhost:8080/api/v1/videos/streaming/${videoId}`} 
              controls 
            ></video>
          </div>

          <VideoUpload />
        </div>
      </div>
    </>
  )
}

export default App
