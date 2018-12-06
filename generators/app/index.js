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
     ████████      ████████    ████████     ██████████          ██████████    ██████████    ██        ██    
`)}`
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

  writing() {
    this.fs.copy(this.templatePath('static/.*'), this.destinationPath('.'));

    this.fs.copy(
      this.templatePath('generators/app/templates/.*'),
      this.destinationPath('./generators/app/templates')
    );
    this.fs.copy(this.templatePath('tests/.*'), this.destinationPath('./__tests__'));

    this.fs.copyTpl(this.templatePath('dynamic/LICENSE'), this.destinationPath(`./LICENSE`), {});

    this.fs.copyTpl(
      this.templatePath('dynamic/package.json'),
      this.destinationPath(`./package.json`),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('dynamic/README.md'),
      this.destinationPath(`./README.md`),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('dynamic/README.md'),
      this.destinationPath(`./README.md`),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('generators/app/index.js'),
      this.destinationPath(`./generators/app/index.js`),
      {}
    );
  }

  install() {
    this.log(`Installing dependencies`);
    this.yarnInstall();
  }

  end() {
    this.log('Scaffolding of new Yeoman generator completed successfully.');
  }
};
