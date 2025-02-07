const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./routes/authRouter.js");

require('dotenv').config()
const { connectDB } = require('./models/db.js');

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  res.send("pong");
})

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);

const server = () => {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
}

server()