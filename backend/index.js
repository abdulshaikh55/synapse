const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./routes/authRouter.js");
const courseRouter = require("./routes/courseRouter.js");
const connectDB = require('./models/db.js');

require('dotenv').config()

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/admin', courseRouter);

const server = () => {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}

server()