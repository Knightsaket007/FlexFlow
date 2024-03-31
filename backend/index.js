
// const hostname = '127.0.0.1';

const express = require('express');
const app = express();
const port = 5000; 
require('dotenv').config();
const authRoutes= require('./routes/authRoutes');
const component= require('./routes/component');
const fileUpload=require('express-fileupload');
const path = require('path');
const cors = require('cors');

// Configure express-session to use MongoDBStore as session store


app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  // origin: 'https://flexflow-css.netlify.app/',
  credentials: true,
}))
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/', 
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/comp', component);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});