import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import Images from "../utils/images";

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
            <Col className='mb-4' xs={12} sm={6} md={4} lg={3}>
              <div className='app-card-view album'>
                <div className='image-container'>
                  <img className='cover' src={album.cover} alt='' />
                  <img className='profile' src={album.profile} alt='' />
                </div>

                <div className='details'>
                  <div>
                    <div className='title'>{album.title}</div>
                    <div className='text'>{album.text}</div>
                  </div>

                  <div>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Recommended;
