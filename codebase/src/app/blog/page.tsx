'use client'

import { useState } from 'react';

export default function Page() {
  const [comment, setComment] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Send the comment to the API
    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
    });

    if (res.ok) {
      alert('Comment added successfully!');
      setComment(''); // Clear the input field
    } else {
      const data = await res.json();
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a comment"
        name="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
