import React from 'react';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, src: '/destinations/highlight_8.jpg', alt: 'Image 1' },
  { id: 2, src: '/destinations/gallery_2.jpg', alt: 'Image 2' },
  { id: 3, src: '/destinations/gallery_3.jpg', alt: 'Image 3' },
  { id: 4, src: '/destinations/gallery_19.jpg', alt: 'Image 4' },
  { id: 5, src: '/destinations/gallery_5.jpg', alt: 'Image 5' },
  { id: 6, src: '/destinations/gallery_14.jpg', alt: 'Image 6' },
  { id: 7, src: '/destinations/gallery_12.jpg', alt: 'Image 7' },
  { id: 8, src: '/destinations/gallery_23.jpg', alt: 'Image 8' },
  { id: 9, src: '/destinations/gallery_14.jpg', alt: 'Image 9' },
  { id: 10, src: '/destinations/gallery_18.jpg', alt: 'Image 10' },
  { id: 11, src: '/destinations/gallery_24.jpg', alt: 'Image 11' },
  { id: 12, src: '/destinations/gallery_15.jpg', alt: 'Image 12' },
  { id: 13, src: '/destinations/gallery_21.jpg', alt: 'Image 13' },
  { id: 14, src: '/destinations/gallery_8.jpg', alt: 'Image 14' },
  { id: 15, src: '/destinations/gallery_26.jpg', alt: 'Image 15' },
  { id: 16, src: '/destinations/gallery_27.jpg', alt: 'Image 16' },

];

const Gallery: React.FC = () => {
  return (
    <div className=" py-10">
      <h1 className="text-center text-3xl font-bold text-blue-950 mb-8">Gallery</h1>
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
