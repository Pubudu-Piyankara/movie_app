import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple home page.</p>

         
        <div>
           <h1>Video Player</h1>
          <VideoPlayer  source = "https://www.youtube.com/embed/9bZkp7q19f0"/>
        </div>

    </div>
  );
};

export default Home;
