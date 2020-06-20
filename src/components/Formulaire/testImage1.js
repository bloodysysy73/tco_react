import React from 'react';
import Carousel from 'react-images';

const images = [{ source: 'path/to/image-1.jpg' }, { source: 'path/to/image-2.jpg' }];

class Component extends React.Component {
  render() {
    return <Carousel views={images} />;
  }
}