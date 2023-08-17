

import express from 'express';

// All the logic is written in the controllers.
import { getPostsBySearch, getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

// router is an object, router object is used so that the index.js file is not loaded up.
const router = express.Router();

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id' , getPost);
// After the sign in only you can create your own post, update post, like or delete the post.
router.post('/', auth, createPost);

// Patch is used for updating existing documents.
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth,  likePost);

export default router;