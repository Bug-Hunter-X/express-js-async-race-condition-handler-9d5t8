const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  const requestStartTime = Date.now();
  // Process the data asynchronously
  setTimeout(() => {
    const processingTime = Date.now() - requestStartTime;
    console.log(`Processing data: ${data}, Time taken: ${processingTime}ms`);
    res.status(200).send(`Data received. Processing time: ${processingTime}ms`);
  }, 2000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});