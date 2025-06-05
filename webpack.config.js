const path = require("path");

module.exports = {
  // other config...
  resolve: {
  fallback: {
    fs: false,
    path: false,
    util: false,
    assert: false,
    url: false,
  },
},
};
