const Joi = require('joi');
const Job = require('../models/job');

const jobSchema = Joi.object({
  title: Joi.string().min(3).required(),
  company: Joi.string().min(3).required(),
  location: Joi.string().min(3).required(),
  date_posted: Joi.date().required(),
  employment_type: Joi.string().min(3).required(),
  job_description: Joi.string().min(10).required(),
  job_requirements: Joi.string().min(10).required(),
  salary: Joi.number().required(),
  industry: Joi.string().min(3).required(),
  experience_level: Joi.string().min(3).required(),
  job_link: Joi.string().uri().required(),
});

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createJob = async (req, res) => {
  const { error } = jobSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateJob = async (req, res) => {
  const { error } = jobSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
};
