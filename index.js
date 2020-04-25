const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

app.use((err, req, res, next) => {
  console.log(err)
  return res.status(418).send({ error: err });
});
http.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
