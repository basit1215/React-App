import React from 'react'
import large from './assets/large.mp4'

const Video = () => {
    return (
        <>
            <video src={large} autoPlay loop muted className='w-[100%] h-[100%] object-cover'></video>
        </>
    )
}

export default Video