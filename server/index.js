const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Allow local dev and GitHub Pages origin during testing — change in production
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Sample API routes
app.get('/api/ping', (req, res) => {
  res.json({ ok: true, msg: 'pong' });
});

app.get('/api/tours', (req, res) => {
  res.json([
    { id: 1, title: 'Hajj 2026 - Premium', price: 1999 },
    { id: 2, title: 'Umrah 2025 - Economy', price: 799 }
  ]);
});

app.post('/api/contact', (req, res) => {
  const body = req.body || {};
  // Echo back for demo purposes
  res.json({ ok: true, received: body });
});

// Serve a simple status page on root (optional)
app.get('/', (req, res) => res.send('Palash Travel API running'));

app.listen(PORT, () => console.log(`API server listening on http://localhost:${PORT}`));
