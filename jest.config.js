module.exports = {
  transformIgnorePatterns: ["/node_modules/(?!your-module-name).*/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
