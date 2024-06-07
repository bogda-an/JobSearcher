const express = require('express');
const router = express.Router();
const {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');
const authMiddleware = require('../middleware/authMiddleware');

router.route('/')
  .get(getJobs)
  .post(authMiddleware, createJob);

router.route('/:id')
  .put(authMiddleware, updateJob)
  .delete(authMiddleware, deleteJob);

module.exports = router;
