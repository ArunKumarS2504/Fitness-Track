
import styled from 'styled-components'
import React from 'react'

const videoLinks = [
  { id: 1, src:"https://www.youtube.com/embed/2qWoegDcHMI?si=Z_RAzrfpQW_6YJBF"},
  { id: 2, src:"https://www.youtube.com/embed/BNsKEG3hIzI?si=kQTOnn_o-bVEltz9"},
  { id: 3, src:"https://www.youtube.com/embed/aY-jST9htEM?si=WZ-JUt_kdKyg1LNX"},
  { id: 4, src:"https://www.youtube.com/embed/pc2xlLuCp4Y?si=UJIXvqUj73R_pD_t"},
  { id: 5, src:"https://www.youtube.com/embed/IODxDxX7oi4?si=L8EbMpL_JI2r_QU3"},
  { id: 6, src:"https://www.youtube.com/embed/U9ENCvFf9yQ?si=W_qGF8w2PlgaARDv"}
]

const VideoContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 25px;
padding: 30px;

@media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const IframeWrapper = styled.div`
  position: relative;
  width: 370px; /* Adjust this width to make the videos smaller */
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
`;

const Iframe = styled.iframe`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border: none;
`;

const Tutorial = () => {
        

  return (
    <VideoContainer>
            {videoLinks.map(video => (
                <IframeWrapper key={video.id}>
      <Iframe
        src={video.src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      </IframeWrapper>
    ))}
        </VideoContainer>
  )
}

export default Tutorial