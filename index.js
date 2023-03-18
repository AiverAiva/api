const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
// Export the Express API
module.exports = app;

// const express = require('express');
// const app = express();
// const { createServer } = require('http');

// const profileRouter = require('./api/profile.js');

// app.use('/profile', profileRouter);
// app.get('/', (req, res) => {
//     res.send("this is just a router page")
// });
 
// const server = createServer(app);
// module.exports = (req, res) => {
//   server(req, res);
// };