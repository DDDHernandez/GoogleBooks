const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose")
const db = require("./BookSchema")
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));mongoose.connect('mongodb://localhost:27017/book_db', {
    useNewUrlParser: true
  });

  mongoose.connect('mongodb://localhost:27017/book_db', {
	useNewUrlParser: true
});
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// Going to start adding routes for saved and searched
app.post("/api/add", (req, res) => {
	db.create(req.body.bookInfo)
		.then((results) => {
			res.json({
				results
			});
		});
});

app.get("/api/books", (req, res) => {
	db.find().then((books) => {
		res.json({
			books
		});
	});
});

app.delete("/api/book/:id", (req, res) => {
	db.deleteOne({
		id: req.params.id
	}).then((result) => {
		res.json(result);
	});
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
