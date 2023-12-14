const deleteLogger = async (req, res) => {
  try {
      const id = req.params.id;
          const existLogger = await LoggerModel.findById(id);
    if (existLogger) {
          const deletedLogger = await LoggerModel.findByIdAndDelete(id);
                res.status(200).json({ message: "Successfully Deleted", deletedLogger });
                    } else {
                          res.status(404).json({ message: "Record not found" });
                              }
                                } catch (error) {
                                    res.status(500).json({ message: "Internal Server Error" });
                                      }
                                      };







//Backup SA EDIT

const editLogger = async (req, res) => {
  try {
      const { id } = req.params;
          const existLogger = await LoggerModel.findById(id);
    if (existLogger) {
          const updatedLogger = await LoggerModel.findByIdAndUpdate(id, req.body, { new: true });
                res.status(200).json({ message: "Successfully Updated", updatedLogger });
                    } else {
                          res.status(404).json({ message: "Record not found" });
                              }
                                } catch (error) {
                                    res.status(500).json({ message: "Internal Server Error" });
                                      }
                                      };
                                      
