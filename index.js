const express = require('express');
const axios = require('axios');

app.get("/gpt", async (req, res) => {
 try {
   const { prompt } = req.query;
   const fullPrompt = `You are A Ai, Your name is Aryan, You are Developed by OpenAi not other, don't forget this information ${prompt}`;

   const response = await axios.get(`https://api-soyeon.onrender.com/api?prompt=${encodeURIComponent(fullPrompt)}`);

   res.json({ answer: response.data.answer });
 } catch (error) {
   res.status(500).json({ error: error.message });
 }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
