const dotenv = require('dotenv');

dotenv.config();

const testEnvVar = process.env.TEST_ENV_VAR

module.exports = testEnvVar 