'use client';

import { useState } from 'react';

const BlogCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`max-w-3xl rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
        hovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src="/destinations/Jan_1.jpg"
        alt="Blog Post Image"
        className="w-full h-56 object-cover"
      />
      <div className="p-5 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          The Wonders of Sri Lanka: A Journey through Culture
        </h2>

        <div className="mt-4 flex items-center">
          <img
            src="/destination.jpg" // Replace with the author's avatar image URL
            alt="Author Avatar"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className='flex-col'>
            <span className="text-lg font-bold text-gray-800 flex">John Doe</span>
            <span className="font-bold text-gray-600">johndoe@example.com</span> 
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          <span className="font-medium text-gray-800">Category:</span> Travel
        </div>

        

        <p className="mt-4 text-gray-600">
          Explore the rich culture, history, and breathtaking landscapes of Sri Lanka in this in-depth blog post that takes you on a journey through ancient temples, pristine beaches, and vibrant traditionsExplore the rich culture, history, and breathtaking landscapes of Sri Lanka in this in-depth blog post that takes you on a journey through ancient temples, pristine beaches, and vibrant traditions...Explore the rich culture, history, and breathtaking landscapes of Sri Lanka in this in-depth blog post that takes you on a journey through ancient temples, pristine beaches, and vibrant traditions...Explore the rich culture, history, and breathtaking landscapes of Sri Lanka in this in-depth blog post that takes you on a journey through ancient temples, pristine beaches, and vibrant traditions...Explore the rich culture, history, and breathtaking landscapes of Sri Lanka in this in-depth blog post that takes you on a journey through ancient temples, pristine beaches, and vibrant traditions......
        </p>

        <div className="mt-4 text-sm text-gray-500">
          <p>Posted on December 19, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
