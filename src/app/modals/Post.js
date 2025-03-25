import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  keywords: { type: String, required: true },
  imageUrl: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to User
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;
