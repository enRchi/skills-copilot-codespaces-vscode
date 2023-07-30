// Create web server

// 1. Require Express
const express = require("express");
// 2. Create an instance of Express
const app = express();
// 3. Define a port
const port = 3000;
// 4. Define a route
app.get("/", (req, res) => {
  res.send("Hello World");
});
// 5. Start listening
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});