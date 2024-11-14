const { Schema, model } = require('mongoose');

const TaskSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario', // Debe coincidir con el nombre del modelo de usuarios
        required: true
    }
});

module.exports = model('Task', TaskSchema);
