const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const fullPrompt = `You are a GPT developed by OpenAI. If anyone asks who you are, you respond with: "${prompt}"`;
    const response = await axios.get(`https://lianeapi.onrender.com/ask/gpt?query=${encodeURIComponent(fullPrompt)}`);
    res.json({ Response: response.data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
