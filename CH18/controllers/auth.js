const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe'
            });
        }

        // Crear nuevo usuario
        usuario = new Usuario(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        // Guardar usuario en DB
        await usuario.save();

        // Generar JWT
        const token = jwt.sign({ uid: usuario.id, name: usuario.name }, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        });

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno'
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }

        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            });
        }

        const token = jwt.sign({ uid: usuario.id, name: usuario.name }, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        });

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error interno'
        });
    }
};

const renewToken = (req, res) => {
    const { uid, name } = req;

    const token = jwt.sign({ uid, name }, process.env.SECRET_JWT_SEED, {
        expiresIn: '2h'
    });

    res.json({
        ok: true,
        uid,
        name,
        token
    });
};

module.exports = {
    registerUser,
    loginUser,
    renewToken
};
