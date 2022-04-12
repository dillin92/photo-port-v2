import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

function Gallery(props) {

    const currentCategory = {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    };

    return (
      <section>
        <h1>{ capitalizeFirstLetter(currentCategory.name)}</h1>
        <p>{currentCategory.name}</p>
        <PhotoList category={currentCategory.name}>
          
        </PhotoList>
      </section>
    );
  }

export default Gallery;
