const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the root directory (where index.html is located)
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  // Send the index.html file for requests to the root path
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`);
});
