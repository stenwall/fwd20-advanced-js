module.exports = {
  "roots": [
    "<rootDir>/"
  ],
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      // ...
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  }
};
