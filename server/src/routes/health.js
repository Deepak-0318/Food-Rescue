const express = require('express');
const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'Zero-Ghost API',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
