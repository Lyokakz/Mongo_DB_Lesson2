db.posts.find({
  topics: "as",
  author: /example\.ru$/,
  score: { $gt: 100 }
})