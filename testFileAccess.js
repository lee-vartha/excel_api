const fs = require ('fs');
const path = require('path');

const filePath = path.join(__dirname, 'Student_Exam_and_Grading.xlsx');

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.error('Error reading file', err);
    }
})