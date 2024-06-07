const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedSearches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Search' }],
    bookmarkedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    role: { type: String, default: 'user' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

