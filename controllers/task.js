const data = require('../model/data');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await data.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const getTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await data.findById(taskId);

    if (!task) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const createTask = async (req, res) => {
  try {
    const task = await data.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await data.findByIdAndUpdate(
      taskId, updatedData, options
    )

    res.send(result)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await data.findByIdAndDelete(taskId);
    res.send(`Document with ${task.name} has been deleted..`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}
