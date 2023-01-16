const { Reader } = require('../models');

exports.createReader = async (req, res) => { 
  const newReader = await Reader.create(req.body);
  res.status(201).json(newReader);
};

exports.getReader = async (req, res) => {
  const readers = await Reader.findAll(req.body);
  res.status(200).json(readers);
};

exports.getReaderId = async (req, res) => {
  try {
    const readerId = req.params.id;
    const reader = await Reader.findByPk(readerId);
    res.status(200).json(reader);

    if(!readerId) {
      return res.status(404).json({ message: 'The reader could not be found' });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
}