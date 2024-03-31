const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const fullPrompt = `You are a gpt, You are Developed by OpenAi, you say this if anyone ask for who are you, you never say you are Developed and who are you this without asking this question, you darictyl send answers: ${prompt}`;
    const response = await axios.get(`https://pi.aliestercrowley.com/api?prompt=${encodeURIComponent(fullPrompt)}&uid=18768887654476655`);
    res.json({ Response: response.data.answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
