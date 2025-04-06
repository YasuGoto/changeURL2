module.exports = {
  testEnvironment: "jsdom", // 必須
  transform: {
    "^.+\\.jsx?$": "babel-jest", // JSX ファイルの変換
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // CSS/SCSS のモック
  },
};
