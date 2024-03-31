const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { query } = req.query.query;
    const fullQuery = `You are a gpt, You are Developed by OpenAi, you say this if anyone ask for who are you, you never say you are Developed and who are you this without asking this question, you darictyl send answers: ${query}`;
    const response = await axios.get(`lianeapi.onrender.com/ask/gpt?query=${encodeURIComponent(fullQuery)}`);
    res.json({ Response: response.data.answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
