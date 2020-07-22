import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Images from "../utils/images";

const Play = () => <i className='fa fa-play-circle play' aria-hidden='true'></i>;
const Pause = () => <i className='fa fa-pause-circle pause' aria-hidden='true'></i>;
const Download = () => <i className='fa fa-download download' aria-hidden='true'></i>;

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
        ]
      }
    };
  }
  render() {
    const { album } = this.state;

    return (
      <Container>
        <Row>
          <Col sm={12} md={6} className='mb-5'>
            <AlbumWithDetails album={album} />
          </Col>
          <Col sm={12} md={6} className='mb-5'>
            <Row>
              <Col>
                <h1> Data comes here</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1> Data comes here</h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BottomView;
