const express = require('express');
const app = express();
const PORT = 3000;
const connectDatabase = require('./config/db');
const komikRoutes = require('./route/komikRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mounting router dengan prefix /api
app.use('/api', komikRoutes);

// Jalankan Koneksi Database & Server
connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});