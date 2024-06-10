// src/routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  applyForJob,
  getSavedJobs,
} = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getJobs);
router.post('/apply', applyForJob);
router.get('/saved', authMiddleware, getSavedJobs);

router.route('/')
  .post(authMiddleware, createJob);

router.route('/:id')
  .put(authMiddleware, updateJob)
  .delete(authMiddleware, deleteJob);

module.exports = router;
