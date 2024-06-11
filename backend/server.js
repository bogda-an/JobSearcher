require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/user');

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Register route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  await user.save();
  res.status(201).send();
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(400).send('Invalid credentials');
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
});

// 404 handling middleware
app.use((req, res, next) => {
  res.status(404).send({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
