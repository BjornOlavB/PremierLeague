const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "http://localhost:5000"],
      connectSrc: ["'self'", "http://localhost:5000"],
    }
  }
}));

app.use(cors());

app.get('/api/standings', async (req, res) => {
  try {
    const response = await fetch('https://api.football-data.org/v4/competitions/PL/standings', {
      headers: {
        'X-Auth-Token': 'cdb4983d71ee42f5b29147f93ccccbdb',
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.get('/api/proxy-image', async (req, res) => {
  const imageUrl = req.query.url;
  
    try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }

    const buffer = await response.buffer();
    const contentType = response.headers.get('content-type');

    res.set('Content-Type', contentType);
    res.set('Cross-Origin-Resource-Policy', 'cross-origin');
    res.set('Access-Control-Allow-Origin', '*');

    res.send(buffer);

  } catch (error) {
    console.error('Failed to fetch image:', error);
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
