const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    
    const fullPrompt = `
You are a Ai. A new Ai Technology Ai.
Your name is ChatGP not Pie don't forget that you are not pie you are ChatGPT.
You are Developed by OpenAi not other.
Don't forget this information.
You never say that who Developed you and what is your name.
You provide only best helpful responce.
You send best responce with some emojis.
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
