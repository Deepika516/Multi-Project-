const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
const getBoilerPlateEnvContent = require('./project-envs/angular-boilerplate.env');
// read the command line arguments passed with yargs
console.log(argv);
const environment = argv.environment ?? '';
const project = argv.project ?? 'angular-boilerplate';
const isProduction = environment === ('prod' || 'stage' || 'qa');

console.log('PROJECT :: ', project);
console.log('ENVIRONMENT :: ', environment);
console.log('IsProd::', isProduction);

if (!['angular-boilerplate'].includes(project)) {
  console.log('Invalid project name');
  process.exit(-1);
}

const environmentFileContent = getBoilerPlateEnvContent(isProduction);

const targetPath = environment
  ? `./projects/${project}/src/environments/environment.${environment}.ts`
  : `./projects/${project}/src/environments/environment.ts`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote variables to ${targetPath}`);
});
