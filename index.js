const express = require("express");
const app = express();

const profileRouter = require('./api/profile.js');

app.use('/api/profile', profileRouter);
app.get('/', (req, res) => {
    res.send("this is just a router page")
});

app.listen(3000, () => {
    console.log("Running on port 3000.");
  });

module.exports = app;

