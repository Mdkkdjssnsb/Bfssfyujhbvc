const express = require('express');
const { G4F } = require("g4f");

const app = express();
const port = 3000;

app.get('/gpt', async (req, res) => {
    const g4f = new G4F();
    const userPrompt = req.query.prompt || "Hi, what's up?"; // Default prompt if none is provided
    const messages = [
        { role: "user", content: userPrompt }
    ];
    const options = {
        provider: g4f.providers.GPT,
        model: "gpt-3.5-turbo",
        debug: true,
        proxy: ""
    };

    try {
        const answer = await g4f.chatCompletion(messages, options);
        res.json({ answer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
