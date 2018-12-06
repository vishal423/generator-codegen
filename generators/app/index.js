'use strict';

const chalk = require('chalk');
const Generator = require('yeoman-generator');
const packageJson = require('../../package.json');

module.exports = class extends Generator {
  initializing() {
    this.log(
      `${chalk.green(`
     ████████      ████████    ████████     ██████████          ██████████    ██████████    ████      ██
    ██      ██    ██      ██   ██     ██    ██                  ██            ██            ██  ██    ██
    ██            ██      ██   ██      ██   ███████     █████   ██    ████    ███████       ██    ██  ██
    ██      ██    ██      ██   ██     ██    ██                  ██      ██    ██            ██      ████
     ████████      ████████    ████████     ██████████          ██████████    ██████████    ██        ██`)}`
    );
    this.log(
      `Welcome to the ${chalk.bold.green('CodeGen')} ${chalk.yellow(
        `v${packageJson.version}`
      )} generator!`
    );
  }

  prompting() {
    this.config.set({
      version: packageJson.version
    });
  }

  writing() {}

  install() {}

  end() {
    this.log('Scaffolding of new Yeoman generator completed successfully.');
  }
};
