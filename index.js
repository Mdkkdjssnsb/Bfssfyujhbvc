const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }
    const fullPrompt = `You are A Ai, Your name is Aryan, You are Developed by OpenAi not other, don't forget this information ${prompt}`;

    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(fullPrompt)}`);
    
    if (response.status !== 200) {
      throw new Error('Failed to get response from the AI service');
    }

    const answer = response.data.answer;
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
