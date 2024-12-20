import React from 'react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/destinations/154.jpg', alt: 'Image 1' },
  { id: 2, src: '/destinations/april_1.jpg', alt: 'Image 2' },
  { id: 3, src: '/destinations/april_2.jpg', alt: 'Image 3' },
  { id: 4, src: '/destinations/August_2.jpg', alt: 'Image 4' },
  { id: 5, src: '/destinations/August_3.jpg', alt: 'Image 5' },
  { id: 6, src: '/destinations/Dec_1.jpg', alt: 'Image 6' },
  { id: 7, src: '/destinations/Feb_1.jpg', alt: 'Image 7' },
  { id: 8, src: '/destinations/May_1.jpg', alt: 'Image 8' },
  { id: 9, src: '/destinations/May_2.jpg', alt: 'Image 9' },
];

const Gallery: React.FC = () => {
  return (
    <div className=" py-10">
      <h1 className="text-center text-3xl font-bold text-black mb-8">Platform Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-lg">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
