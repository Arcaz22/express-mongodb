const express = require('express');
const router = express.Router();

const {  getAllTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/task');

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
