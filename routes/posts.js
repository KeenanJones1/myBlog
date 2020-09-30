const express = require('express');
const router = express.Router();
const Post = require('../models/Post')



// Getting all the posts
router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }
  catch(err){ res.json({ message: err })} 
});

// Getting a single post
router.get('/:postId', async (req, res) => {
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  }catch(err){
    res.json({message: err });
  }
});

// Creating a new Post
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title, 
    body: req.body.body,
    tags: req.body.tags
  })
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch(err){
    res.json({ message: err })
  }
});

// Updating a single post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
    res.json(updatedPost)
  } catch(err){
    res.json({ message: err })
  }
})

// Deleteing a single post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await   Post.deleteOne({_id: req.params.postId})
    res.json(removedPost);
  } catch(err){
    res.json({ message: err })
  }
});



module.exports = router;