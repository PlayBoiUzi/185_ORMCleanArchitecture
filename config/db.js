const db = require('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database connected successfully');
