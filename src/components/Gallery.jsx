import React from 'react';
import Image1 from "../assets/imgs/images/1.webp";
import Image2 from "../assets/imgs/images/2.webp";
import Image3 from "../assets/imgs/images/3.webp";
import Image12 from "../assets/imgs/images/12.webp";
import Image5 from "../assets/imgs/images/5.webp";
import Image6 from "../assets/imgs/images/6.webp";
import Image7 from "../assets/imgs/images/7.webp";
import Image8 from "../assets/imgs/images/8.webp";
import Image9 from "../assets/imgs/images/9.webp";
import Image10 from "../assets/imgs/images/10.webp";
import Image11 from "../assets/imgs/images/11.webp";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const images = [
    { src: Image1, alt: 'Gallery Image 1' },
    { src: Image2, alt: 'Gallery Image 2' },
    { src: Image3, alt: 'Gallery Image 3' },
    { src: Image12, alt: 'Gallery Image 4' },
    { src: Image5, alt: 'Gallery Image 5' },
    { src: Image6, alt: 'Gallery Image 6' },
    { src: Image7, alt: 'Gallery Image 7' },
    { src: Image8, alt: 'Gallery Image 8' },
    { src: Image9, alt: 'Gallery Image 9' },
    { src: Image10, alt: 'Gallery Image 10' },
    { src: Image11, alt: 'Gallery Image 11' },
];

const Gallery = () => {
    return (
        <section id="gallery" className="w-full bg-white py-16" itemScope itemType="http://schema.org/ImageGallery">
        <div className="md:max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Event Gallery
          </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <figure 
              key={index}
              className="group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              itemProp="image"
              itemScope
              itemType="http://schema.org/ImageObject"
            >
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                effect="blur"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                wrapperClassName="w-full h-full"
                threshold={300}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                {image.caption}
              </figcaption>
              <meta itemProp="name" content={image.alt} />
              <meta itemProp="description" content={image.caption} />
            </figure>
          ))}
        </div>
            </div>
        </section>
    );
};

export default Gallery;
