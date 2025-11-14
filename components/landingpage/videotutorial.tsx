
import React from 'react'

const VideoTutorial = () => {
  return (
    //  <iframe src='https://prgp818pdh.ufs.sh/f/IcB5Cw4L3miGWiMLIKRLYyG6cNFpo5HS0U3mdlkTExtDIJPh'
    <div className='w-full h-full fontSourGummy items-center justify-center mb-20  '>
        <h1 className='text-4xl md:text-5xl  h-full w-full lg:text-6xl xl:text-6xl text-center '>Video Tutorial</h1>
        <div className=' w-[80%] h-[60%] md:w-full md:h-full '>


  <video 
  className='rounded-md w-full h-full md:w-full md:h-full  '
  width="560" 
  height="315"
  autoPlay
  muted
  loop
  playsInline
  controlsList="nodownload nofullscreen noremoteplayback"
  disablePictureInPicture
  style={{ pointerEvents: 'none' }} // Prevents any interaction
>
  <source src="https://prgp818pdh.ufs.sh/f/IcB5Cw4L3miGWiMLIKRLYyG6cNFpo5HS0U3mdlkTExtDIJPh" type="video/mp4" />
</video>
        </div>
  </div>
  )
}

export default VideoTutorial