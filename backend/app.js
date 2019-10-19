const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Post = require("./models/posts");

//ykzOhclIj4fv2dWn
//mongodb+srv://nik:<password>@clusterpost-r2fz3.mongodb.net/test

mongoose
  .connect(
    "mongodb+srv://nik:ykzOhclIj4fv2dWn@clusterpost-r2fz3.mongodb.net/meanPost?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to Database..");
  })
  .catch(() => {
    console.log("Database connection failed..");
  });

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//to allow cross domain work
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added Succesfully !!",
      postId: createdPost._id
    });
  });
});

app.get("/api/posts", (req, res, next) => {
  Post.find().then(docs => {
    res.status(200).json({
      message: "Posts fetched succesfully",
      posts: docs
    });
  });
});

app.delete("/api/posts/:id", (req, res, next) => {
  // console.log(req.params.id);
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post Deleted.." });
  });
});

module.exports = app;
