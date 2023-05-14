const { Message } = require('../models');

// Controlador para obtener todos los mensajes
async function getAllMessages(req, res) {
  try {
    const messages = await Message.findAll();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los mensajes', error });
  }
}

// Controlador para crear un nuevo mensaje
async function createMessage(req, res) {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el mensaje', error });
  }
}

// Controlador para obtener un mensaje por su id
async function getMessageById(req, res) {
  const { messageId } = req.params;
  try {
    const message = await Message.findByPk(messageId);
    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ message: 'Mensaje no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el mensaje', error });
  }
};

// Controlador para eliminar un mensaje por su id
async function deleteMessage(req, res) {
    const { messageId } = req.params;
    try {
      const message = await Message.findByPk(messageId);
      if (message) {
        await message.destroy();
        res.status(200).json({ message: 'Mensaje eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Mensaje no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el mensaje', error });
    }
  }

module.exports = {
    getAllMessages,
    createMessage,
    getMessageById,
    deleteMessage,
  }