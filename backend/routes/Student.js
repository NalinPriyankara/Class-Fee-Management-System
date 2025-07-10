const express = require('express');
const router = express.Router();
const db = require('../models');
const Student = db.Student;

router.post('/add-student', async (req, res) => {
  try {
    const { name, sid, grade } = req.body;
    
    if (!name || !sid || !grade) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingStudent = await Student.findOne({ where: { sid } });
    if (existingStudent) {
      return res.status(400).json({ error: 'Student ID already exists' });
    }

    const newStudent = await Student.create({
      sid,
      studentName: name,
      studentGrade: grade
    });

    res.status(201).json(newStudent);
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/get-students', async (req, res) => {
  try {
    const students = await Student.findAll({
      order: [['studentName', 'ASC']]
    });
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/delete-student/:sid', async (req, res) => {
  try {
    const { sid } = req.params;
    const deleted = await Student.destroy({ where: { sid } });
    
    if (deleted) {
      return res.json({ message: 'Student deleted successfully' });
    }
    res.status(404).json({ error: 'Student not found' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;