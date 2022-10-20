const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 9000;

app.use(
  cors({
    origin: "*",
  })
);
app.use("/", express.static("public"));
app.use("/img", express.static("img"));
app.use("/pdf", express.static("pdf"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
