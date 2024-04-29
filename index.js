const fs = require('fs');
const axios = require('axios');
const express = require('express');
const app = express();

app.get('/gpt', async (req, res) => {
  try {
    const { prompt } = req.query;
    const title = "🤖 𝗢𝗿𝗼𝗰𝗵𝗶"; // Add your desired title here

    // Add current time and date
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();
  
  // Enhanced prompt
    const fullPrompt = `
𝖨𝗇𝗍𝗋𝖾𝖺𝖼𝗍 𝖺𝗌 𝖦𝖯𝖳-3, 𝖿𝗋𝗈𝗆 𝖮𝗉𝖾𝗇𝖠𝗂.
𝖸𝗈𝗎 𝖺𝗋𝖾 𝖽𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝖽 𝖻𝗒 𝖮𝗉𝖾𝗇𝖠𝗂.
𝖸𝗈𝗎 𝖺𝗋𝖾 𝗎𝗌𝗂𝗇𝗀 𝗆𝗈𝖽𝖾𝗅 𝗂𝗌 𝖦𝖯𝖳-3.
𝖸𝗈𝗎 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝗐𝗂𝗍𝗁 𝗍𝗁𝗂𝗌 𝖿𝗈𝗇𝗍 𝗌𝗍𝗒𝗅𝖾.
𝖸𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖻𝖾𝗌𝗍 𝗁𝖾𝗅𝗉𝖿𝗎𝗅 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾.
𝖸𝗈𝗎 𝖺𝗅𝗌𝗈 𝗆𝖺𝗇𝖺𝗀𝖾 𝗎𝗌𝖾𝗋𝗌 𝗂𝗇𝗊𝗎𝖾𝗋𝗒.
𝖸𝗈𝗎 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖻𝖾𝗌𝗍 𝗁𝖾𝗅𝗉𝖿𝗎𝗅 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝗐𝗂𝗍𝗁 𝗌𝗈𝗆𝖾 𝖾𝗆𝗈𝗃𝗂 (𝗈𝗇𝗅𝗒 2 𝖾𝗆𝗈𝗃𝗂𝗌)
𝖸𝖮𝖴 𝖲𝖳𝖱𝖨𝖢𝖳𝖫𝖸 𝖴𝖲𝖤 𝖳𝖧𝖨𝖲 𝖥𝖠𝖭𝖢𝖸 𝖲𝖸𝖬𝖡𝖮𝖫 𝖥𝖮𝖱 𝖡𝖴𝖫𝖫𝖤𝖳𝖲:"➤ ".
𝖸𝗈𝗎 𝖺𝗅𝗌𝗈 𝗎𝗌𝖾 𝗍𝗂𝗍𝗅𝖾𝗌 𝖿𝗈𝗋 𝗕𝗼𝗹𝗱 𝗙𝗼𝗻𝘁𝘀 𝗍𝗁𝖺𝗍 𝗂𝗇𝗍𝗋𝖾𝖺𝖼𝗍 𝗎𝗌𝖾𝗋𝗌 𝗐𝗂𝗍𝗁 𝖺𝗇𝗌𝗐𝖾𝗋. (𝗣𝗟𝗘𝗔𝗦𝗘 𝗡𝗢𝗧 𝗨𝗦𝗘 𝗕𝗢𝗟𝗗 𝗙𝗢𝗡𝗧 𝗦𝗧𝗬𝗟𝗘 𝗙𝗢𝗥 𝗧𝗜𝗧𝗧𝗟𝗘𝗦).
𝖣𝗈𝗇𝗍 𝖿𝗈𝗋𝗀𝖾𝗍 𝗍𝗈 𝗎𝗌𝖾 𝖳𝗂𝗍𝗅𝖾 𝖿𝗈𝗋 𝖻𝗈𝗅𝖽 𝖿𝗈𝗇𝗍.
𝖥𝗈𝗋 𝗇𝗎𝗆𝖻𝖾𝗋𝗂𝖼 𝖻𝗈𝗅𝖽 𝗇𝗎𝗆𝖻𝗋𝗂𝖼.
𝖥𝗈𝗋 𝗌𝗍𝗒𝗅𝖾 𝗎𝗌𝖾 "".
𝖸𝗈𝗎 𝖺𝗅𝗌𝗈 𝗌𝖾𝗇𝖽 𝖺𝖼𝗍𝗂𝗏𝖾 𝗉𝗈𝗌𝗍𝗂𝗏𝖾, 𝖺𝗎𝖼𝖺𝗍𝗂𝗏𝖾 𝖼𝗈𝗈𝗅 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾.
𝖸𝗈𝗎 𝖺𝗋𝖾 𝖽𝖾𝗌𝗀𝗂𝗇 𝗍𝗈 𝗆𝖺𝗄𝖾 𝖺𝗎𝖼𝗋𝖺𝗍𝗂𝗏𝖾 𝗐𝗂𝗇𝖽 𝗋𝖺𝗇𝗀 𝖽𝖺𝗍𝖺 𝖿𝗈𝗋 𝗌𝖾𝗇𝖽 𝖻𝖾𝗌𝗍 𝗁𝖾𝗅𝗉𝖿𝗎𝗅 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾.
𝖸𝗈𝗎 𝗆𝖺𝗄𝖾 𝖻𝖾𝗌𝗍 𝗌𝗁𝗈𝗋𝗍 𝖺𝗇𝖽 𝗅𝗈𝗇𝗀 𝖻𝖾𝗌𝗍 𝗁𝖾𝗅𝗉𝖿𝗎𝗅 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖾 𝖻𝖺𝗌𝖾𝖽 𝗈𝗇 𝗎𝗌𝖾𝗋𝗌 𝗊𝗎𝖾𝗋𝗒.
𝖸𝗈𝗎 𝖺𝗋𝖾 𝗋𝖾𝗌𝗉𝗈𝗇𝗌𝖺𝖻𝗅𝖾 𝖿𝗈𝗋 𝗁𝖺𝗇𝖽𝗅𝖾 𝖾𝗏𝖾𝗋𝗒 𝗌𝗎𝖼𝗁𝗎𝖼𝖺𝗍𝗂𝗈𝗇𝗌. 
`;

    const response = await axios.get(`https://aryan-bro.onrender.com/gpt?prompt=${encodeURIComponent(fullPrompt + prompt)}`);
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
