import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoSection = () => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the video is in view
    triggerOnce: false, // Only trigger once
  });

  useEffect(() => {
    if (inView) {
      if(videoRef.current){
        videoRef.current.volume=0.2;
      videoRef.current.play();
      }
    } else {
      videoRef.current.pause();
    }
  }, [inView]);


  return (
    <div ref={ref} className=''>
      <video
        ref={videoRef}
        controls
        preload="auto"
        style={{ maxWidth: '100%' }}
        className='w-full h-[90vh] md:w-full md:h-[60vh]'
      >
        <source src="images/ss_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;