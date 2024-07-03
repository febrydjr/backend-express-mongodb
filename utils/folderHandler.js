const fs = require('fs');

const createFolderIfNotExists = (path) => {
  // const pathArray = path.split('/');
  // let currentPath = '';
  // pathArray.forEach((folder) => {
  //     currentPath += folder + '/';
  //     if (!checkIfFolderExists(currentPath)) {
  //         fs.mkdirSync(currentPath);
  //     }
  // });
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }
};

const checkIfFolderExists = (path) => {
  return fs.existsSync(path);
};

module.exports = createFolderIfNotExists;
