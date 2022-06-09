import express from 'express';
import postController from '../controllers/postController';
const router = express.Router();

router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPost);
router.post('/posts', postController.createPost);
// router.put('/posts/:id', postController.updatePost);
// router.delete('/posts/:id', postController.deletePost);

export default router;
