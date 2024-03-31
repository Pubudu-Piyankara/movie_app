import React, { useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';

const VideoPlayer = ({ source }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <video
        ref={videoRef}
        className="shadow-lg rounded-lg"
        width="640"
        height="360"
        onClick={togglePlay}
      >
        <source src={source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={togglePlay}
        >
          Play
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
