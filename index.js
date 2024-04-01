const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(prompt)}`);
    res.json({ answer: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
