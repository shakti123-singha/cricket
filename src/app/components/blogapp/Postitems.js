// components/PostItem.js
import Link from 'next/link';

export default function PostItem({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}...</p>
      <Link href={`/post/${post.id}`}>
        <a>Read More</a>
      </Link>
    </div>
  );
}
