const Task = require('../models/Task');

// Crear una nueva tarea
const createTask = async (req, res) => {
    const { title, description } = req.body;
    const userId = req.uid;

    try {
        const task = new Task({ title, description, user: userId });
        await task.save();

        res.status(201).json({
            ok: true,
            task
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear la tarea'
        });
    }
};

// Obtener todas las tareas del usuario
const getTasks = async (req, res) => {
    const userId = req.uid;

    try {
        const tasks = await Task.find({ user: userId });

        res.json({
            ok: true,
            tasks
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las tareas'
        });
    }
};

// Actualizar una tarea
const updateTask = async (req, res) => {
    const taskId = req.params.id;
    const userId = req.uid;
    const { title, description } = req.body;

    try {
        // Buscar la tarea por ID y verificar que el usuario sea el propietario
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({
                ok: false,
                msg: 'Tarea no encontrada'
            });
        }

        if (task.user.toString() !== userId) {
            return res.status(401).json({
                ok: false,
                msg: 'No autorizado para actualizar esta tarea'
            });
        }

        // Actualizar la tarea
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { title, description },
            { new: true }
        );

        res.json({
            ok: true,
            task: updatedTask
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar la tarea'
        });
    }
};

// Eliminar una tarea
const deleteTask = async (req, res) => {
    const taskId = req.params.id;
    const userId = req.uid;

    try {
        // Buscar la tarea por ID y verificar que el usuario sea el propietario
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({
                ok: false,
                msg: 'Tarea no encontrada'
            });
        }

        if (task.user.toString() !== userId) {
            return res.status(401).json({
                ok: false,
                msg: 'No autorizado para eliminar esta tarea'
            });
        }

        // Eliminar la tarea
        await Task.findByIdAndDelete(taskId);

        res.json({
            ok: true,
            msg: 'Tarea eliminada'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al eliminar la tarea'
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};
