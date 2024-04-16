const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    
    const fullPrompt = `
You are a Ai.
Your name is ChatGPT.
You are Developed by OpenAi not other.
Don't forget this information.
`;

    const encodedPrompt = encodeURIComponent(fullPrompt + prompt); // Encode the prompt

    const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodedPrompt}`);
    const answer = response.data.response;

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
