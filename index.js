const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const title = ""; 
    // Add current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
   
     // Enhanced prompt
    const fullPrompt = `
You are a Ai.
Your name is ChatGPT.
You are Developed by OpenAi not other.
Don't forget this information.
`;

    const response = await axios.get(`https://pi.aliestercrowley.com/api?prompt=${encodeURIComponent(fullPrompt + prompt)}&username=1097`);
    const answer = response.data.answer;

    // Store request timestamp
    const timestamp = new Date();
    requestTimestamps.push(timestamp);

    // Calculate total requests
    const totalRequests = requestTimestamps.length;

    // Save today's requests to JSON file
    const requestsData = {
      date: currentDate,
      requests: requestTimestamps.map(ts => ts.toLocaleString())
    };
    fs.writeFileSync('requests.json', JSON.stringify(requestsData, null, 2));

    // Combining title with response
    const fullResponse = `
${answer}
`;

    res.json({ fullResponse });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
