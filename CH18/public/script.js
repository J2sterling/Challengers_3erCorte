// Elementos del DOM
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const createTaskForm = document.getElementById('create-task-form');
const getTasksButton = document.getElementById('get-tasks');
const tasksList = document.getElementById('tasks-list');
const messageDiv = document.getElementById('message');

// Variables globales
let token = '';

// Función para mostrar mensajes
function showMessage(message, isError = false) {
    messageDiv.textContent = message;
    messageDiv.style.color = isError ? 'red' : 'green';
}

// Función para registrar un usuario
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const response = await fetch('http://localhost:4000/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();
        if (data.ok) {
            showMessage('Usuario registrado exitosamente');
        } else {
            showMessage(data.msg || 'Error en el registro', true);
        }
    } catch (error) {
        showMessage('Error en el servidor', true);
    }
});

// Función para iniciar sesión
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:4000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.ok) {
            token = data.token; // Guarda el token
            console.log("Token recibido:", token); // Verifica el token en la consola
            showMessage('Inicio de sesión exitoso');
        } else {
            showMessage(data.msg || 'Error en el inicio de sesión', true);
        }
    } catch (error) {
        showMessage('Error en el servidor', true);
    }
});

// Función para obtener tareas
getTasksButton.addEventListener('click', async () => {
    if (!token) {
        showMessage('Por favor, inicia sesión primero', true);
        return;
    }

    try {
        const response = await fetch('http://localhost:4000/api/task', {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        console.log("Respuesta de tareas:", data); // Verifica la respuesta en la consola
        if (data.ok) {
            tasksList.innerHTML = '';
            data.tasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = `${task.title} - ${task.description}`;
                tasksList.appendChild(li);
            });
        } else {
            showMessage('No se pudieron obtener las tareas', true);
        }
    } catch (error) {
        showMessage('Error en el servidor', true);
    }
});

// Función para crear una nueva tarea
createTaskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!token) {
        showMessage('Por favor, inicia sesión primero', true);
        return;
    }

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;

    try {
        const response = await fetch('http://localhost:4000/api/task', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({ title, description })
        });
        const data = await response.json();
        console.log("Respuesta de creación de tarea:", data); // Verifica la respuesta en la consola
        if (data.ok) {
            showMessage('Tarea creada exitosamente');
            // Opcionalmente, podrías actualizar la lista de tareas aquí
        } else {
            showMessage(data.msg || 'No se pudo crear la tarea', true);
        }
    } catch (error) {
        showMessage('Error en el servidor', true);
    }
});
