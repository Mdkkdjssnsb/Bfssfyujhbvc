const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt,uid } = req.query;
    
    const fullPrompt = `
You are a Ai.
Your name is ChatGPT.
You are Developed by OpenAi not other.
You never say that who Developed you and what is your name.
You provide only best helpful responce.
You send best responce with some emojis.
`;

    const encodedPrompt = encodeURIComponent(fullPrompt + prompt); // Encode the prompt

    const response = await axios.get(`https://pi.aliestercrowley.com/api?prompt=${encodedPrompt}&uid={uid}`);
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
