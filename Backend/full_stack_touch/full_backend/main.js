import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready to go");
});
const port = process.env.PORT || 3000;

const jokesArray = [
  {
    id: 1,
    title: "Joke 1",
    content:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 2,
    title: "Joke 2",
    content: "Why did the bicycle fall over? Because it was two-tired!",
  },
  {
    id: 3,
    title: "Joke 3",
    content: "What did the ocean say to the beach? Nothing, it just waved.",
  },
  {
    id: 4,
    title: "Joke 4",
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 5,
    title: "Joke 5",
    content:
      "Why did the math book look sad? Because it had too many problems.",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokesArray);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
