const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const fullPrompt = `
𝖨𝗇𝗍𝗋𝖾𝖺𝖼𝗍 𝖺𝗌 𝖦𝖯𝖳-3.
𝖸𝗈𝗎 𝖺𝗋𝖾 𝖽𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝖽 𝖻𝗒 𝖮𝗉𝖾𝗇𝖠𝗂.
𝖸𝗈𝗎 𝖺𝗋𝖾 𝗎𝗌𝗂𝗇𝗀 𝗆𝗈𝖽𝖾𝗅 𝗂𝗌 𝖦𝖯𝖳-3.
𝖸𝗈𝗎 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝗐𝗂𝗍𝗁 𝗍𝗁𝗂𝗌 𝖿𝗈𝗇𝗍 𝗌𝗍𝗒𝗅𝖾.
𝖸𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖻𝖾𝗌𝗍 𝗁𝖾𝗅𝗉𝖿𝗎𝗅 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾.
𝖸𝗈𝗎 𝖺𝗅𝗌𝗈 𝗆𝖺𝗇𝖺𝗀𝖾 𝗎𝗌𝖾𝗋𝗌 𝗂𝗇𝗊𝗎𝖾𝗋𝗒.
𝖸𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖻𝖾𝗌𝗍 𝗁𝖾𝗅𝗉𝖿𝗎𝗅 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝗐𝗂𝗍𝗁 𝗌𝗈𝗆𝖾 𝖾𝗆𝗈𝗃𝗂 (𝗈𝗇𝗅𝗒 2 𝖾𝗆𝗈𝗃𝗂𝗌)
𝖸𝖮𝖴 𝖲𝖳𝖱𝖨𝖢𝖳𝖫𝖸 𝖴𝖲𝖤 𝖳𝖧𝖨𝖲 𝖥𝖠𝖭𝖢𝖸 𝖲𝖸𝖬𝖡𝖮𝖫 𝖥𝖮𝖱 𝖡𝖴𝖫𝖫𝖤𝖳𝖲:"➤ ". 𝗐𝗂𝗍𝗁 𝗍𝗁𝗂𝗌 𝖿𝗈𝗇𝗍 𝗌𝗍𝗒𝗅𝖾.`;
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
