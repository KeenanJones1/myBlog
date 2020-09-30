const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  try{
    const posts = await Post.find();
    res.json(posts);
  }
  catch(err){ res.json({ message: err })} 
});

router.get('/:postId', async (req, res) => {
  // Params 
  // console.log(req.params.postId);\
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  }catch(err){
    res.json({message: err });
  }
});

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title, 
    body: req.body.body,
    tags: req.body.tags
  })
  // post.save()
  // .then(data => res.send(data))
  // .catch(err => { res.json({message: err}) });

  // refractored 
  // Rememeber to have async in router post!
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch(err){
    res.json({ message: err })
  }



});


// router.patch()
// router.delete()



module.exports = router;