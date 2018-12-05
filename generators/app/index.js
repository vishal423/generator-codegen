'use strict';

const chalk = require('chalk');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
/* eslint-disable */
  initializing() {

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
        `v${standalonePackageJson.version}`
      )} generator!`
    );
  }

  prompting() {
    this.config.set({
      version: standalonePackageJson.version
    });
  }

  writing() { }

  install() { }

  end() {
    this.log('JHipster module generated successfully.');
  }
};
