const fs = require("fs");
const path = require("path");

const routesDirectory = __dirname;

const files = fs.readdirSync(routesDirectory);

files.forEach((file) => {
  const filePath = path.join(routesDirectory, file);
  if (file !== "index.js" && file.endsWith(".js")) {
    const routeName = file.split(".").slice(0, -1).join(".");
    exports[routeName] = require(filePath);
  }
});

console.log("4. Middleware Loaded");
