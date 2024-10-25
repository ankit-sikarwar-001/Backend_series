const express = require("express");
// import express from "express";
const app = express();
const port = 3000;
const obj1 = {
  Name: "Ankit Singh",
  Age: "22",
  Gender: "Male",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/details", (req, res) => {
  res.send(obj1);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
