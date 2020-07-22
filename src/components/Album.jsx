import React from "react";
import { Col } from "react-bootstrap";

const Album = ({ cover, profile, title, text, ...props }) => (
  <Col className='mb-4' { ...props }>
    <div className='app-card-view album'>
      <div className='image-container'>
        <img className='cover' src={cover} alt='' />
        {profile && <img className='profile' src={profile} alt='' />}
      </div>

      <div className='details'>
        <div>
          <div className='title'>{title}</div>
          <div className='text'>{text}</div>
        </div>

        <div>
          <i class='fa fa-plus' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  </Col>
);

export default Album;
