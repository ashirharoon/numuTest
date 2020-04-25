const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("connected");
});
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`listening to the server at port: ${port}`);
});
