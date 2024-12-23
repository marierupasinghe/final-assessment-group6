'use client';

import { useEffect, useState } from 'react';
import { getCache } from "@/app/utils/cache";
interface User {
  username: string;
  email: string;
}
const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    content: '',
    
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [cachedUser, setCachedUser] = useState<User | null>(null);

    useEffect(() => {
        const user = getCache<User>("user");
        setCachedUser(user);
    }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/blog/insert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title, 
          description: formData.description, 
          category: formData.category, 
          content: formData.content,
          email: cachedUser?.email
        }),
      });

      console.log(formData.title);
      console.log("This")

      console.log(response.ok)

      if (response.ok) {
        alert('Blog submitted successfully!');
        setFormData({
          title: '',
          description: '',
          category: '',
          content: '',
          
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.log('Error submitting blog:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-black mb-6 animate__animated animate__fadeIn">Submit Your Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="transition-transform duration-500">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            placeholder="Enter your blog title"
            required
          />
        </div>

        <div className="transition-transform duration-500">
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Blog Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            placeholder="Provide a short description"
            required
          />
        </div>

        <div className="transition-transform duration-500">
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            required
          >
            <option value="">Select a Category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Culture">Culture</option>
          </select>
        </div>

        <div className="transition-transform duration-500">
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">Blog Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
            rows={6}
            placeholder="Write the content of your blog post"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 px-6 text-white font-semibold rounded-md shadow-md ${
            isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
          } transition-all duration-300 transform hover:scale-105`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Blog Post'}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
