// components/PostForm.js
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Postform({ post = {}, onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: post.title || '',
      content: post.content || '',
      category: post.category || '',
      keywords: post.keywords || '',
    },
  });

  const [imagePreview, setImagePreview] = useState(post.image || null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title</label>
        <input type="text" {...register('title', { required: true })} />
        {errors.title && <span>Title is required</span>}
      </div>

      <div>
        <label>Content (HTML)</label>
        <textarea {...register('content', { required: true })}></textarea>
        {errors.content && <span>Content is required</span>}
      </div>

      <div>
        <label>Category</label>
        <input type="text" {...register('category', { required: true })} />
        {errors.category && <span>Category is required</span>}
      </div>

      <div>
        <label>Keywords</label>
        <input type="text" {...register('keywords', { required: true })} />
        {errors.keywords && <span>Keywords are required</span>}
      </div>

      <div>
        <label>Image</label>
        <input type="file" {...register('image')} onChange={handleImageChange} />
        {imagePreview && <img src={imagePreview} alt="preview" width="100" />}
      </div>

      <button type="submit">{post.id ? 'Edit Post' : 'Create Post'}</button>
    </form>
  );
}
