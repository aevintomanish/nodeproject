const express = require('express');
const employeeData = require('./employeedata'); // Import the employeeData module
const app = express();
const port = 3030;
app.get('/', (req, res) => {
  res.send('Welcome to Node JS Case Study.');
});
// Route to get all employees
app.get('/employees', (req, res) => {
  res.json(employeeData);
});
// Route to get employee data by Designation
app.get('/employees/:Designation', (req, res) => {
  const { Designation } = req.params;
  // Filter the employeeData by Designation
  const filteredEmployees = employeeData.filter(employee => employee.Designation.toLowerCase() === Designation.toLowerCase());
  if (filteredEmployees.length > 0) {
    res.json(filteredEmployees);
  } else {
    res.status(404).send('No employees found with the specified Designation.');
  }
});
app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});



