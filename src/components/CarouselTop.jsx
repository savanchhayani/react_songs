import React from "react";
import { Carousel, Row, Col, Container, Button } from "react-bootstrap";
import Images from "../utils/images";

const CustomCol = ({ title, subTitle, ...props }) => (
  <Col xs={12} md={3} { ...props }>
    <i class='fa fa-address-book' aria-hidden='true'></i>
    <div className='title'>{title}</div>
    <div className='sub-title'>{subTitle}</div>
  </Col>
);

class CarouselTop extends React.PureComponent {
  constructor(props) {
    super(props);
      this.state = {
        lists: [
          {
            title: 'Spend time Smart',
            subTitle: 'Lorem impsum dolor sit amet',
          },
          {
            title: 'Spend time Smart',
            subTitle: 'Lorem impsum dolor sit amet',
          },
          {
            title: 'Spend time Smart',
            subTitle: 'Lorem impsum dolor sit amet',
          },
          {
            title: 'Spend time Smart',
            subTitle: 'Lorem impsum dolor sit amet',
          }
        ]
      }
  }
  render() {
    const { lists } = this.state;

    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='top-cover d-block w-100'
            src={Images.landingCarousal}
            alt='First slide'
          />
          <div className='content-container'>
            <Carousel.Caption>
              <h3>Join us today</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>

            <Container>
              <Row className='four-info-images'>
                {
                  lists.map((item) => (
                    <CustomCol { ...item } className='mb-4' />
                  ))
                }
              </Row>
            </Container>

            <Container>
              <Row className='buttons-row'>
                <Button className='sign-up btn-sm' variant='light'>Sign Up</Button>{" "}
                <Button className='sign-in btn-sm' variant='light'>Login</Button>{" "}
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselTop;
