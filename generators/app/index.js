'use strict';

const chalk = require('chalk');
const Generator = require('yeoman-generator');
const packageJson = require('../../package.json');

module.exports = class extends Generator {
  initializing() {
    /* eslint-disable */
    this.log(
      `${chalk.green(`
    ███████         ███     ███   ███████   ██████      ██     ██  ██       ███████
        ██          ██ ██ ██ ██  ██     ██  ██    ██    ██     ██  ██       ██
        ██   ████   ██  ██   ██  ██     ██  ██     ██   ██     ██  ██       █████
    ██  ██          ██       ██  ██     ██  ██    ██    ██     ██  ██       ██
    ██████          ██       ██   ███████   ██████       ███████   ███████  ███████`)}`
    );
    /* eslint-disable */
    this.log(
      `Welcome to the ${chalk.bold.green('JHipster Module')} ${chalk.yellow(
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
    this.log('JHipster module generated successfully.');
  }
};
