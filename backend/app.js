const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

//to allow cross domain work
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added Succesfully !!"
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fh908djei7",
      title: "first post",
      content: "this is in serer"
    },
    {
      id: "fh90843jei7",
      title: "second post",
      content: "this is in the express serer"
    }
  ];

  res.status(200).json({ message: "Posts fetched succesfully", posts: posts });
});

module.exports = app;
