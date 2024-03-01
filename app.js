const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');


const excelRoutes = require('./routes/excelRoutes');
const uploadRoutes = require('./routes/uploadRoutes');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/upload', uploadRoutes);
app.use('/api/excel', excelRoutes) 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

module.exports = app