21323243435
const deleteLogger = async (req, res) => {
  try {
    const id = req.params.id;
    const existId = await LoggerModel.findById({ id });
    if (existId === id) {
      const deleteLogger = await LoggerModel.findByIdAndDelete(id);
      res.status(200).json({ deleteLogger });
    }
  } catch (error) {}
  res.status(404).json({ message: "Unsuccessfully Deleted " });
};

const editLogger = async (req, res) => {
  try {
    const { id } = req.params;
    const logger = await LoggerModel.findByIdAndUpdate(id, req.body);
    if (!logger) {
      return res.status(404).json({ message: "" });
    }
    res.status(200).json(logger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





const mongoose = require("mongoose");

const loggerSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  todo: { type: String, required: true },
  comments: { type: String, required: true },
});
const LoggerModel = mongoose.model("Logger", loggerSchema);

module.exports = LoggerModel;
