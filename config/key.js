if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod"); // deploy에서
} else {
  module.exports = require("./dev"); // local에서
}
