'use client';

import { useState } from 'react';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    content: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

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
      console.error('Error submitting blog:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-black mb-6">Submit Your Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Blog Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your blog title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Blog Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Provide a short description"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a Category</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Travel">Travel</option>
            <option value="Culture">Culture</option>
          </select>
        </div>

        <div>
          <label htmlFor="content" className="block text-lg font-medium text-gray-700">Blog Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
            placeholder="Write the content of your blog post"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 px-6 text-white font-semibold rounded-md shadow-md ${
            isSubmitting ? 'bg-gray-400' : 'bg-black hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Blog Post'}
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
