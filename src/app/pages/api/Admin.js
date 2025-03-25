// pages/admin.js
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PostItem from '../components/Postitem';

export default function Admin() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    const response = await fetch(`/api/posts?id=${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      {posts.map(post => (
        <div key={post.id}>
          <PostItem post={post} />
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <Link href={`/edit/${post.id}`}><a>Edit</a></Link>
        </div>
      ))}
    </div>
  );
}
