import React from 'react';
// import ReactPlayer from 'react-player';
import { Container, Player } from './styles';

const VideoPlayer = () => {
  return (
    <Container>
      <Player
        url='https://youtu.be/DKSzY7Dg-rA'
        width='50%'
        height='50%'
        controls={true}
      />
    </Container>
  );
}

export default VideoPlayer;