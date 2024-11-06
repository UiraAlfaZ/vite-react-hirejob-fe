import React from 'react';
import Slider from 'react-slick';
import './component.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import harryImg from '../assets/img/haris.png';
import niallImg from '../assets/img/liampayne.png';
import louisImg from '../assets/img/louis.png';

const CustomCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Untuk layar di bawah 1024px (misalnya tablet)
        settings: {
          slidesToShow: 2, // Tampilkan 2 slide
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Untuk layar di bawah 768px (misalnya smartphone)
        settings: {
          slidesToShow: 1, // Tampilkan 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className='cardousel' style={{width: "60vw"}}>
      <div className="custom-card">
        <div className="card-body">
          <img src={harryImg} alt="Harry Styles" className="rounded-circle imgcar" style={{ width: '100px', height: '100px' }} />
          <h3>Harry Styles</h3>
          <p>Web Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
      </div>
      <div className="custom-card">
        <div className="card-body">
          <img src={niallImg} alt="Niall Horan" className="rounded-circle imgcar" style={{ width: '100px', height: '100px' }} />
          <h3>Niall Horan</h3>
          <p>Web Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
      </div>
      <div className="custom-card">
        <div className="card-body">
          <img src={louisImg} alt="Louis Tomlinson" className="rounded-circle imgcar" style={{ width: '100px', height: '100px' }} />
          <h3>Louis Tomlinson</h3>
          <p>Web Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
      </div>
    </Slider>
  );
};

// Komponen untuk next arrow
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'purple', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

// Komponen untuk prev arrow
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'purple', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
};

export default CustomCarousel;
