const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    description: { type: String, required: true },
    requirements: [{ type: String }],
    datePosted: { type: Date, default: Date.now },
    salary: { type: Number }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

