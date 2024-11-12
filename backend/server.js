const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());               
app.use(express.json());         
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend en funcionamiento en http://localhost:${PORT}`);
});
