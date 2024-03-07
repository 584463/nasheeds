const express = require('express');
const pasth = require("path");
const bcryt = require("bcrypt");

const app = express();

// EJS view engine

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});




const port = 5000;
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
})