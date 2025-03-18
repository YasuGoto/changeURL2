// jest.config.js
module.exports = {
  transformIgnorePatterns: [
    "/node_modules/(?!your-module-name).*/", // 必要なモジュールだけをトランスフォーム
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
};
