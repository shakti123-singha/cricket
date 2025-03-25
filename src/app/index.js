// pages/create.js
import PostForm from '../components/Postform';
import { useState } from 'react';

export default function Create() {
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('content', data.content);
    formData.append('category', data.category);
    formData.append('keywords', data.keywords);
    formData.append('image', data.image[0]);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      if (response.ok) {
        alert('Post created!');
      } else {
        alert('Error creating post');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Post</h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}
