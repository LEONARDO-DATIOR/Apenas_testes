const userRoutes = require("./userRoutes.js")

function Routes(app) {
  app.use("/users", userRoutes);
}

module.exports = Routes;
