const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Hello World!" });
});

const exerRoute = require("./src/routes/exer");

app.use("/exer", exerRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
