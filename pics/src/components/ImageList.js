import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  /*
  const images = props.images.map(image => {
    return <img alt={image.description} key={image.id} src={image.urls.regular} />
  });
  */

  // refactored version using object destructuring
  /*
  const images = props.images.map(({ description, id, urls }) => {
    // use "key" to uniquely identify a list of elements (put "key" attribute on root element being returned)
    return <img alt={description} key={id} src={urls.regular} />
  });
  */

  // modified version to support a grid layout for images using "ImageCard" component
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;