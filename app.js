require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/book.route');
const loggerMiddleware = require('./middlewares/logger.middleware');
const app = express();


app.use(cors());
app.use(express.json());
app.use(loggerMiddleware); // Logging middleware



app.use('/book',bookRouter)


// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
