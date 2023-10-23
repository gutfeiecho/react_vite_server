// Import express.
const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./route/user");
app.use(cors());

const PORT = 8989;

// Create a 'GET' request.
app.get("/msg", (req, res) => {
  setTimeout(() => {
    res.type("application/json");
    res.send({
      msg: "success",
      data: {
        title: "Hello,Programmer!!",
        decription: "A example for testing react-router",
      },
    });
  }, 3000);
  //   res.status(401).send("Don't have access.");
});

app.get("/query", (req, res) => {
  res.status(401).send("Don't have access.");
});

userRouter(app);

// Port is 8989.
app.listen(PORT, function () {
  console.log(`App is running at http://localhost:${PORT}.`);
});
