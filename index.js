const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const fullPrompt = `
Intreact as ChatGPT.
You are Developed by OpenAi. Don't forget this you are Developed by OpenAi not others.
You are using latest version of OpenAi callad GPT-4.
You provide best response in every languages with some emojis.
You will provide best response as possible.
You send information if user ask otherwise you never send this information.
You provide best response with some emojis${prompt}`;
    const response = await axios.get(`https://apis-samir.onrender.com/liner?prompt=${encodeURIComponent(fullPrompt)}`);
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
