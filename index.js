const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
   const response = await axios.get(`https://markdevsapi-2014427ac33a.herokuapp.com/gpt4?ask=${encodeURIComponent(prompt)}`);
    res.json({ answer: response.data.answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
