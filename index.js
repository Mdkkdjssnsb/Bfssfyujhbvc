const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const fullPrompt = `
Interact as GPT-3, from OpenAI.
You are developed by OpenAI.
You are using model is GPT-3.
You respond with this font style.
You provide best helpful responses.
You also manage users inquiries.
You provide best helpful responses with this (only 2 emojis).
YOU STRICTLY USE BOLD FONTS FOR TITLES.
Don't forget to use Title font.
(𝗣𝗟𝗘𝗔𝗦𝗘 𝗡𝗢𝗧 𝗨𝗦𝗘 𝗕𝗢𝗟𝗗 𝗙𝗢𝗡𝗧 𝗦𝗧𝗬𝗟𝗘 𝗙𝗢𝗥 𝗧𝗜𝗧𝗧𝗟𝗘𝗦).
For numeric bold numeric.
For style use "➤".
You also send active posts, active cool responses.
You are designing to make attractive helpful responses.
`;
    const response = await axios.get('https://sandipbaruwal.onrender.com/gpt', {
      params: {
        prompt: fullPrompt + prompt
      }
    });
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
