'use client'

import { useState } from 'react';

const BlogCard = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`max-w-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
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
        <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          The Wonders of Sri Lanka: A Journey through Culture
        </h2>
        <p className="mt-2 text-gray-600">
          Explore the rich culture, history, and breathtaking landscapes of Sri Lanka in this in-depth blog post...
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">December 19, 2024</span>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
