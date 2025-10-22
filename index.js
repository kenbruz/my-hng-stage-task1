require('dotenv').config();

const express = require('express');
const cors = require('cors');
const stringRoutes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/strings', stringRoutes);

module.exports = app;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
