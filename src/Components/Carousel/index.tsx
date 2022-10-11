import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css';

interface CarouselProps {
  children: ReactNode[];
  onChangeSlide: (currentSlide: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, onChangeSlide }: CarouselProps) => {
  const settings = {
    className: 'slider',
    arrows: false,
    centerMode: true,
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current: number) => onChangeSlide(current),
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
