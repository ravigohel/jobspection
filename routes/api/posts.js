const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// Load Models
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");

// Bring validation file
const validatePostInput = require("../../validation/post");

// @route   GET api/posts/test
// @desc    Tests posts route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: "No posts submitted" }));
});

// @route   GET api/posts/:id
// @desc    Get posts by ID
// @access  Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

// @route   GET api/posts/posted/:id
// @desc    Get posts by ID
// @access  Public
router.get("posted/:user", (req, res) => {
  Post.find({ user: req.users.user })
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with that ID" })
    );
});

// @route   POST api/posts
// @desc    Create posts
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      user: req.user.id,
      name: req.body.name,
      avatar: req.body.avatar,
      designation: req.body.designation,
      location: req.body.location,
      salary: req.body.salary,
      workingHours: req.body.workingHours,
      qualification: req.body.qualification,
      experience: req.body.experience,
      perks: req.body.perks,
      description: req.body.description
    });
    newPost.save().then(post => res.json(post));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post with a given id
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (post.user.toString !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: "User not authorized" });
          }
          // Delete
          post.remove().then(() => res.json({ success: true }));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

// @route   POST api/posts/like/:id
// @desc    Like post
// @access  Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check if user has already liked
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User already liked this" });
          }
          // Add user id to likes array
          post.likes.unshift({ user: req.user.id });

          // Save to database
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

// @route   POST api/posts/unlike/:id
// @desc    unlike post
// @access  Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check if user has already liked
          if (
            post.likes.filter(like => like.user.toString() === req.user.id)
              .length == 0
          ) {
            return res
              .status(400)
              .json({ notliked: "You have not yet liked this" });
          }
          // Get the remove index
          const removeIndex = post.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id);

          // Splice out of array
          post.likes.splice(removeIndex, 1);

          // Save
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

// @route   POST api/posts/applicant/:id
// @desc    Applying for the posted vacancy
// @access  Private
router.post(
  "/applicant/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check if user has already liked
          if (
            post.applicants.filter(
              applicant => applicant.user.toString() === req.user.id
            ).length > 0
          ) {
            return res.status(400).json({
              alreadyapplied: "User already applied for this vacancy"
            });
          }
          // Add user id to likes array
          post.applicants.unshift({ user: req.user.id });

          // Save to database
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    });
  }
);

module.exports = router;
