import React, { useState } from 'react';


const images = Array.from({ length: 14 }, (_, i) => `/images/${i + 1}.JPG`);

const galleryStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '80vh',
  '@media (max-width: 600px)': {
    maxHeight: '60vh',
  },
};

export const Gallery = () => {
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((index + 1) % images.length);
  const goPrev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={galleryStyle}>
      <h1>Präsentationsfolien</h1>
      <img style={imgStyle} src={images[index]} alt="" />
      <div>
        <button onClick={goPrev}>Vorheriges</button>
        <button onClick={goNext}>Nächstes</button>
      </div>
    </div>
  );
};