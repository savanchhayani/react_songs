import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../utils/images";
import Album from "./Album";

const Play = () => (
  <i className='fa fa-play-circle play' aria-hidden='true'></i>
);
const Pause = () => (
  <i className='fa fa-pause-circle pause' aria-hidden='true'></i>
);
const Download = () => (
  <i className='fa fa-download download' aria-hidden='true'></i>
);

const Song = ({ isPlaying, name, time }) => (
  <div className='song border-bottom'>
    <div>
      {isPlaying ? <Pause /> : <Play />}
      <div>{name}</div>
    </div>

    <div>
      <Download />
      <div className='time'>{time}</div>
    </div>
  </div>
);

const AboutShow = () => (
  <div className='about-container app-card-view'>
    <img src={Images.albums.pc_cover} alt='' />

    <div className='item-detail-container'>
      <div className='detail'>
        <h5>About Show</h5>
        <p>
          n publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content
        </p>
      </div>

      <div className='next-detail'>
        <h5>Next Episode</h5>
        <p>Every Monday, 7:00 o'clock</p>
      </div>
    </div>
  </div>
);

const AlbumWithDetails = ({ album }) => {
  const { cover, title, singer, otherDetail, songs } = album;

  return (
    <div className='album-with-details-container app-card-view'>
      <div className='detail'>
        <div className='image-container'>
          <img src={cover} alt='' />
        </div>
        <div className='singer-info'>
          <h3>{title}</h3>
          <div className='name'>{singer}</div>
          <div className='other text-secondary'>{otherDetail}</div>
        </div>
      </div>
      <div className='songs-list'>
        {songs.map(song => (
          <Song {...song} />
        ))}
      </div>
    </div>
  );
};

class BottomView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      album: {
        title: "New Rules",
        singer: "by Dua Lipa",
        otherDetail: "Show: Coffee break",
        cover: Images.albums.weeknd_cover,
        songs: [
          { isPlaying: true, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
          { isPlaying: false, name: `Let's talk`, time: "30:43" },
        ]
      },
      albums: [
        {
          cover: Images.albums.weeknd_cover,
          profile: Images.profiles.weeknd,
          title: "The Weeknd Starboy",
          text: `A modern twist on journal`
        },
        {
          cover: Images.albums.weeknd_cover,
          profile: Images.profiles.weeknd,
          title: "The Weeknd Starboy",
          text: `A modern twist on journal`
        },
        {
          cover: Images.albums.weeknd_cover,
          profile: Images.profiles.weeknd,
          title: "The Weeknd Starboy",
          text: `A modern twist on journal`
        }
      ]
    };
  }
  render() {
    const { album, albums } = this.state;

    return (
      <Container>
        <Row className='bottom-view'>
          <Col sm={12} md={6} className='mb-5'>
            <AlbumWithDetails album={album} />
          </Col>

          <Col sm={12} md={6} className='mb-5 other-views'>
            <Row className='about-row mb-4'>
              <Col className='about-col' sm={12}>
                <AboutShow />
              </Col>
            </Row>

            <Row className='albums-row'>
              <Col sm={12}>
                <Row className='albums'>
                  {albums.map(album => (
                    <Album {...album} xs={12} sm={12} md={6} lg={4} />
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BottomView;
