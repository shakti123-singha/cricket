// pages/api/posts.js
import { postsData } from '../../data/postsData'; // Assuming you have a dummy data store

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(postsData);
  } else if (req.method === 'POST') {
    // Handle post creation
    const { title, content, category, keywords, imageUrl } = req.body;
    const newPost = {
      id: postsData.length + 1,
      title,
      content,
      category,
      keywords,
      imageUrl,
    };
    postsData.push(newPost);
    res.status(201).json(newPost);
  } else if (req.method === 'PUT') {
    // Handle post update
    const { id, title, content, category, keywords, imageUrl } = req.body;
    const index = postsData.findIndex(post => post.id === id);
    if (index > -1) {
      postsData[index] = { id, title, content, category, keywords, imageUrl };
      res.status(200).json(postsData[index]);
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    const index = postsData.findIndex(post => post.id === parseInt(id));
    if (index > -1) {
      postsData.splice(index, 1);
      res.status(200).json({ message: 'Post deleted' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  }
}
