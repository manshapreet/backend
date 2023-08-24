// const express = require('express');
// const UrlModel = require('./models/url'); // Path to your URL model
// const { exec } = require('youtube-dl-exec');

// const app = express();
// app.use(express.json());

// app.get('/get-video-info/:urlId', async (req, res) => {
//   try {
//     const { urlId } = req.params;

//     // Find the URL document in the database by its ID
//     const urlDocument = await UrlModel.findById(urlId);

//     if (!urlDocument) {
//       return res.status(404).json({ error: 'URL not found' });
//     }

//     const url = urlDocument.url;

//     // Run youtube-dl to get video information
//     const result = await exec(url, ['--dump-json']);

//     // Parse the JSON output from youtube-dl
//     const videoInfo = JSON.parse(result);

//     res.json(videoInfo);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
