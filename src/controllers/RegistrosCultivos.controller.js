import Registro from "../models/RegistroCultivos.model.js"

export const getRegistros = async (req, res) => {
    const RegistrosCultivos = await Registro.find({user: req.user.id}).populate('user'); 
    res.json(RegistrosCultivos);
};

export const getRegistro = async (req, res) => {
    const RegistroFind = await Registro.findById(req.params.id).populate('user');
    if (!RegistroFind) return res.status(404).json({message: "Registro not found"});

    res.json(RegistroFind);
};

export const createRegistro = async (req, res) => {
    const { name, date, cultivation, files } = req.body;

    const newRegistro = new Registro({
        name,
        date,
        cultivation,
        user: req.user.id,
        files,
    });

    const savedRegistro = await newRegistro.save();
    res.json(savedRegistro);
};

export const deleteRegistro = async (req, res) => {
    const RegistroFind = await Registro.findByIdAndDelete(req.params.id);
    if (!RegistroFind) return res.status(404).json({message: "Registro not found"});

    return res.sendStatus(204);
};

export const updateRegistro = async (req, res) => {
    const RegistroFind = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!RegistroFind) return res.status(404).json({message: "Registro not found"});

    res.json(RegistroFind);
};