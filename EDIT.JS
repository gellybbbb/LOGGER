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
