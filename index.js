const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const PORT = 3000;

const users = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.io = io;
  return next();
});

io.on("connection", socket => {
  io.emit("update", users);
})

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

app.post("/username", (req, res) => {
  if (!users.includes(req.body.username)) {
    users.push(req.body.username);
  }
  io.emit("update", users);
  return res.status(200).send({users: users});
})

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

app.use((err, req, res, next) => {
  console.log(err)
  return res.status(418).send({ error: err });
});
http.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
