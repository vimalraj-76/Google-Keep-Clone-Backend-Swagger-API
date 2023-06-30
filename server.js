const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const swaggerSetup = require("./swagger");
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const port = process.env.PORT || 5050;

swaggerSetup(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const notesRouter = require("./routes/notes");
app.use("/api/notes", notesRouter);
