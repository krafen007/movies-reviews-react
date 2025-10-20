import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connectDB from './config/connectDB.js';

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT;

// Start server
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running at http://localhost:${PORT}`);
});
