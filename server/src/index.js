require('dotenv').config(); // loads .env from server root
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db'); // correct relative path

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

// Routes
const healthRoute = require('./routes/health');
const userRoutes = require('./routes/users');

app.use('/api', healthRoute);
app.use('/api/users', userRoutes);

app.get('/', (_req, res) => res.send('🚀 Zero-Ghost API is live!'));

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (error) {
    console.error('❌ Startup error:', error);
    process.exit(1);
  }
})();
