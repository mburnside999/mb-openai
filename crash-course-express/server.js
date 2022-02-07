const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// function myRoute(req, res, next) {
//   console.log("myRoute route");
//   //res.send("Hello World!");
//   next();
// }

const userRouter = require("./routes/users");

app.use("/users", userRouter);
console.log(module);

app.listen(3000);
