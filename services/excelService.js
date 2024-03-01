const XLSX = require('xlsx');
const path = require('path');

const readExcelFile = () => {
    // construct the file path using file.join
    const filePath = path.join("C:", "Users", "jeepe", "OneDrive", "Documents", "Student_Exam_and_Grading.xlsx");

    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(worksheet);
}

module.exports = {
    readExcelFile
}