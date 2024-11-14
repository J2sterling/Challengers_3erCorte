const { validationResult } = require('express-validator');

const crearUsuario = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            ok: false, 
            errors: errors.mapped() 
        });
    }

    const { name, email, password } = req.body;
    res.status(201).json({
        ok: true,
        msg: 'Usuario registrado exitosamente',
        data: { name, email }
    });
};

module.exports = { crearUsuario };
