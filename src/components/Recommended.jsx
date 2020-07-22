import React from "react";
import { Container, Row } from "react-bootstrap";
import Images from "../utils/images";
import Album from './Album';

class Recommended extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
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
    const { albums } = this.state;

    return (
      <Container>
        <div className='header mb-5'>
          <h1 className='mb-0'>Check</h1>
          <h1>recommended articles</h1>

          <div>
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>

        <Row className='albums'>
          {albums.map(album => (
            <Album { ...album } xs={12} sm={6} md={4} lg={3} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Recommended;
