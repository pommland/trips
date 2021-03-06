const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
  Blog.find()
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const topic = req.body.topic;
  const description = req.body.description;
  const date = req.body.date;
  const image = req.body.image;
  const newBlog = new Blog({
    username,
    topic,
    description,
    date,
    image
  });

  newBlog.save()
  .then(() => res.json('Blog added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id)    
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json('Error: ' + err));
});
  
router.route('/:id').delete((req, res) => {
    Blog.findByIdAndDelete(req.params.id)
      .then(() => res.json('Blog deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
router.route('/update/:id').post((req, res) => {
    Blog.findById(req.params.id)
      .then(blog => {
        blog.username = req.body.username;
        blog.topic = (req.body.topic);
        blog.description = req.body.description;
        blog.date = req.body.date;
        blog.image = req.body.image;
        blog.save()
          .then(() => res.json('Blog updated! Branch    Pom test'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  


module.exports = router;