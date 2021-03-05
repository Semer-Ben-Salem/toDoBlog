const express = require("express");
const bodyParser = require("body-parser");

const connextion = require("./database/connexion/connexion.js");
const userRouter = require("./routers/userRouter.js");
// const blogRouter = require("./routers/blogRouter.js");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("express working");
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// to link the front. I need to get more info about it.
app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/api/user", userRouter);
// app.use("/api/blogs", blogRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
