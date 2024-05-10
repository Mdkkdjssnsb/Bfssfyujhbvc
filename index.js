const express = require('express');
const { gpt } = require('nayan-server');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/gpt', async (req, res) => {
  const { prompt } = req.query;

  gpt({
    messages: [
      {
        role: 'Gpt-4',
        content: 'system'
      },
      {
        role: 'user',
        content: `system`
      },
      {
        role: 'Gpt-4',
        content: `system`
      }
    ],
    prompt: `${prompt}`,
    model: 'Gpt-4',
    markdown: false
  }, async (err, data) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).json({ error: 'An error occurred' });
    }

    const answer = data.gpt;
    try {
      // Define sendMessage function to send messages
      async function sendMessage(msg) {
        // Implement your code to send the message here
        // For example, you can use axios or any other library to make HTTP requests to a messaging API
        // Replace the following line with your actual code for sending messages
        console.log('Message sent:', msg);
      }

      res.status(200).json({ answer });
    } catch (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ error: 'An error occurred while sending the message' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
