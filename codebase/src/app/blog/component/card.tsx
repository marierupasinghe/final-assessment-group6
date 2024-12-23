'use client';

import { useState } from 'react';
import { RxAvatar } from "react-icons/rx";

type BlogCardProps = {
    title: string;
    description: string;
    category: string;
    content: string;
    email: string;
    username: string;
    date: string

}

const BlogCard = ({title, description, category, content, email, username, date}:BlogCardProps) => {
  const [hovered, setHovered] = useState(false);
  console.log(date)

  return (
    <div
      className={`min-w-full rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
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
          {title}
        </h2>
        <p className="text-xl font-normal text-gray-600 hover:text-blue-600 transition-colors duration-200">
          {description}
        </p>

        <div className="mt-4 flex items-center">
          <RxAvatar className='w-12 h-12 mr-5 '/>
          <div className='flex-col'>
            <span className="text-lg font-bold text-gray-800 flex">{username}</span>
            <span className="font-bold text-gray-600">{email}</span> 
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          <span className="font-medium text-gray-800">Category:</span> {category}
        </div>

        

        <p className="mt-4 text-gray-600">
          {content}
        </p>

        <div className="mt-4 text-sm text-gray-500">
          <p>Posted on {date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
