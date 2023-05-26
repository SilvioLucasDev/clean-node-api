module.exports = {
  roots: ['<rootDri>/src'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDri>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
