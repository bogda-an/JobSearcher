const asyncHandler = require('express-async-handler');
const Job = require('../models/job');

// Get all jobs
const getJobs = asyncHandler(async (req, res) => {
    const pageSize = 10; // Number of jobs per page
    const page = Number(req.query.pageNumber) || 1;

    const count = await Job.countDocuments({});
    const jobs = await Job.find({})
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    res.json({ jobs, page, pages: Math.ceil(count / pageSize) });
});

// Create new job
const createJob = asyncHandler(async (req, res) => {
    const { title, company, location, jobType, description, requirements, salary } = req.body;

    const job = new Job({
        title,
        company,
        location,
        jobType,
        description,
        requirements,
        salary,
    });

    const createdJob = await job.save();
    res.status(201).json(createdJob);
});

// Update job
const updateJob = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { title, company, location, jobType, description, requirements, salary } = req.body;

    const job = await Job.findById(id);

    if (job) {
        job.title = title;
        job.company = company;
        job.location = location;
        job.jobType = jobType;
        job.description = description;
        job.requirements = requirements;
        job.salary = salary;

        const updatedJob = await job.save();
        res.json(updatedJob);
    } else {
        res.status(404);
        throw new Error('Job not found');
    }
});

// Delete job
const deleteJob = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const job = await Job.findById(id);

    if (job) {
        await job.remove();
        res.json({ message: 'Job removed' });
    } else {
        res.status(404);
        throw new Error('Job not found');
    }
});

module.exports = {
    getJobs,
    createJob,
    updateJob,
    deleteJob,
};
