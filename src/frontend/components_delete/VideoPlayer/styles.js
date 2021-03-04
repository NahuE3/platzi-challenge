import styled from 'styled-components';
import ReactPlayer from 'react-player';

export const Container = styled.div`
  position: relative;
  margin-top: 180px;
  padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
`
// .player-wrapper {
// }

export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 25%;
  & iframe {
    border-radius: 12px;
  }
`

// .react-player {
// }