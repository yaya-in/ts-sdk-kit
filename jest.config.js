module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['./jest.setup.js']
};


