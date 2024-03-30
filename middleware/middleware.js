const express = require('express');

// Middleware for validating user data
function validateUserData(req, res, next) {
    const { carId, date, userId } = req.body;
    if (!carId || !date || !userId) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    if (typeof carId !== 'number' || typeof userId !== 'number' || typeof date !== 'string') {
        return res.status(400).json({ error: "Invalid data types" });
    }
    next();
}

// Middleware for validating admin data
function validateAdminData(req, res, next) {
    const { name, seats } = req.body;
    if (!name || !seats) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    if (typeof name !== 'string' || typeof seats !== 'number') {
        return res.status(400).json({ error: "Invalid data types" });
    }
    next();
}

module.exports = { validateUserData, validateAdminData };
