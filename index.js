const axios = require('axios');
const express = require('express');
const app = express();

// Define a route to handle GET requests to '/gpt'
app.get('/gpt', async (req, res) => {
  try {
    // Extract the 'prompt' query parameter from the request
    const { prompt } = req.query;

    // Validate if 'prompt' parameter is provided and not empty
    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Construct the full prompt
    const fullPrompt = `You are a GPT developed by OpenAI. If anyone asks who you are, you respond with: "${prompt}"`;

    // Send a GET request to the external API
    const response = await axios.get(`https://lianeapi.onrender.com/ask/gpt?query=${encodeURIComponent(fullPrompt)}`);

    // Send the response from the external API back to the client
    res.json({ Response: response.data });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
