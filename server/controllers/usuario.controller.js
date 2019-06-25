const usuA = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuario = async (req, res) => {
    const guardar = await usuA.find();
    res.json(guardar);
   
}

usuarioCtrl.getAUsuario = async (req, res) => {
    const guardar = await usuA.findById(req.params.id);
    res.json(guardar);

}

usuarioCtrl.createUsuario = async (req, res) => {
    const guardar = new usuA ({
        name: req.body.nombre,
        user: req.body.usuario,
        email: req.body.email,
        pass: req.body.pass,
        edad: req.body.edad

    })
    
}
usuarioCtrl.editUsuario = async (req, res) => {
    const {id} = req.params;
    const guardar = {
        name: req.body.nombre,
        user: req.body.usuario,
        email: req.body.email,
        pass: req.body.pass,
        edad: req.body.edad
    };
    await usuA.findByIdAndUpdate(id, {$set: guardar}, {new: true});
    res.json({status: 'Usuario actualizado'});
    
}
usuarioCtrl.deleteUsuario = async (req, res) => {
    await usuA.findByIdAndRemove(req.params.id);
    res.json({status: 'usuario eliminado men'});
    
}




module.exports = usuarioCtrl;