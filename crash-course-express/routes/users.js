const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res, next) => {
  console.log("/");
  //console.log(req.query.name);
  res.render("users/list", { users: users });
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    console.log(JSON.stringify(users));
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res, next) => {
    console.log(`showing details for user with ID ${req.params.id}`);
    res.send("user details");
  })
  .post((req, res, next) => {
    console.log(`posting details for user with ID ${req.params.id}`);
    res.send("user details");
  })
  .delete((req, res, next) => {
    console.log(`deleting user with ID ${req.params.id}`);
    res.send("user details");
  });

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log("original url", req.originalUrl);
  next();
}

const users = [{ name: "Kyle" }, { name: "Sally" }];
module.exports = router;
