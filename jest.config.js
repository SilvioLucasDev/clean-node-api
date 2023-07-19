module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/server.ts',
    '!<rootDir>/src/**/*protocols.ts',
    '!<rootDir>/src/**/protocols/**',
    '!<rootDir>/src/main/config/**',
    '!<rootDir>/src/domain/**',
    '!**/test/**'
  ],
  coverageDirectory: 'coverage',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  coverageProvider: 'v8',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
