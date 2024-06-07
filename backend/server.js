const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
});

// 404 handling middleware
app.use((req, res, next) => {
  res.status(404).send({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));