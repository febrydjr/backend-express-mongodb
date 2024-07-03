const fs = require('fs');

const removeFile = (path) => {
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const removeFilesOnError = (req) => {
  // Handling single file (Multer.single())
  if (req.file) {
    removeFile(req.file.path);
  } else if (req.files) {
    // Handling multiple files (Multer.array())
    if (Array.isArray(req.files)) {
      req.files.forEach((file) => {
        removeFile(file.path);
      });
    } else {
      // Handling multiple files (Multer.fields())
      for (const key in req.files) {
        if (req.files.hasOwnProperty(key)) {
          const files = req.files[key];
          files.forEach((file) => {
            removeFile(file.path);
          });
        }
      }
    }
  }
};

module.exports = {
  removeFile,
  removeFilesOnError
};
