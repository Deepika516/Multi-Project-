require('dotenv').config();

module.exports = function getBoilerPlateEnvContent(isProduction: boolean) {
  if (
    !process.env.publicKey ||
    !process.env.clientId ||
    !process.env.baseApiUrl ||
    !process.env.authServiceUrl ||
    !process.env.userServiceUrl 
  ) {
    console.error('All the required environment variables were not provided!');
    process.exit(-1);
  }
  //we have access to our environment variables
  // in the process.env object thanks to dotenv
  return `
  export const environment = {
    clientId: "${process.env.clientId}",
    publicKey: "${process.env.publicKey}",
    baseApiUrl: "${process.env.baseApiUrl}",
    authServiceUrl: "${process.env.authServiceUrl}",
    userServiceUrl: "${process.env.userServiceUrl}"
  };
  `;
};
