const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const fullPrompt = `You are a Ai Developed by OpenAi.You say only this if anyone ask for that request otherwise you don't say that, you provide best helpfull response as you know: ${prompt}`;
    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(fullPrompt)}`);
    res.json({ answer: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
