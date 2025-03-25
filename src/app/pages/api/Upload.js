// pages/api/upload.js
import multer from 'multer';
import nextConnect from 'next-connect';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

const handler = nextConnect();

handler.use(upload.single('image'));

handler.post((req, res) => {
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  res.status(200).json({ imageUrl });
});

export default handler;
