'use strict';

const chalk = require('chalk');
const Generator = require('yeoman-generator');
const packageJson = require('../../package.json');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: false });
    this.argument('email', { type: String, required: false });
    this.argument('githubUsername', { type: String, required: false });
  }

  initializing() {
    this.log(
      `${chalk.green(`
     ███████  ████████  █████     ████████        ████████  ████████  ███    ██
    ██        ██    ██  ██   ██   ██              ██        ██        █████  ██
    ██        ██    ██  ██    ██  ██████    ████  ██   ███  ██████    ██  ██ ██
    ██        ██    ██  ██   ██   ██              ██    ██  ██        ██   ████
     ███████  ████████  █████     ████████        ████████  ████████  ██    ███    
`)}`
    );
    this.log(
      `Welcome to the ${chalk.bold.green('CodeGen')} ${chalk.yellow(
        `v${packageJson.version}`
      )} generator!`
    );

    this.contextOptions = {
      name: this.options.name || this.config.get('name'),
      email: this.options.email || this.config.get('email'),
      type: this.options.type || this.config.get('type'),
      generatorName: this.options.generatorName || this.config.get('generatorName'),
      description: this.options.generatorDescription || this.config.get('description'),
      githubUsername: this.options.githubUsername || this.config.get('githubUsername')
    };
  }

  async prompting() {
    if (!this.contextOptions.name) {
      const answer = await this.prompt({
        type: 'input',
        name: 'name',
        message: 'Specify your full name > '
      });
      this.contextOptions.name = answer.name;
    }

    if (!this.contextOptions.email) {
      const answer = await this.prompt({
        type: 'input',
        name: 'email',
        message: 'Specify your email address > '
      });
      this.contextOptions.email = answer.email;
    }

    if (!this.contextOptions.githubUsername) {
      const answer = await this.prompt({
        type: 'input',
        name: 'githubUsername',
        message: 'Specify your GitHub username > '
      });
      this.contextOptions.githubUsername = answer.githubUsername;
    }
    if (!this.contextOptions.type) {
      const answer = await this.prompt({
        type: 'list',
        name: 'type',
        message: 'Choose generator type > ',
        choices: [
          {
            name: 'Generic',
            value: 'generic'
          },
          {
            name: 'JHipster Module',
            value: 'jhipster-module'
          }
        ]
      });
      this.contextOptions.type = answer.type;
    }

    if (!this.contextOptions.generatorName) {
      const answer = await this.prompt({
        type: 'input',
        name: 'generatorName',
        message: `Specify your generator name (without generator-${
          this.contextOptions.type === 'jhipster-module' ? 'jhipster-' : ''
        } prefix) > `
      });
      this.contextOptions.generatorName = answer.generatorName;
    }

    if (!this.contextOptions.description) {
      const answer = await this.prompt({
        type: 'input',
        name: 'description',
        message: 'Specify some description about your generator > '
      });
      this.contextOptions.description = answer.description;
    }
  }

  configuring() {
    this.config.set({
      version: packageJson.version,
      name: this.contextOptions.name,
      email: this.contextOptions.email,
      githubUsername: this.contextOptions.githubUsername,
      type: this.contextOptions.type,
      generatorName: this.contextOptions.generatorName,
      description: this.contextOptions.description
    });

    if (this.contextOptions.type === 'jhipster-module') {
      this.contextOptions.npmPackageName = `generator-jhipster-${
        this.contextOptions.generatorName
      }`;
    } else {
      this.contextOptions.npmPackageName = `generator-${this.contextOptions.generatorName}`;
    }
  }

  writing() {
    this.fs.copy(this.templatePath('static/.*'), this.destinationPath('.'));

    this.fs.copy(
      this.templatePath('generators/app/templates/sample.txt'),
      this.destinationPath('./generators/app/templates/sample.txt')
    );

    if (this.contextOptions.type === 'jhipster-module') {
      this.fs.copy(
        this.templatePath('tests/oauth2-gateway.js'),
        this.destinationPath('./__tests__/oauth2-gateway.spec.js')
      );
      this.fs.copy(
        this.templatePath('tests/templates/oauth2-gateway/.yo-rc.json'),
        this.destinationPath('./__tests__/templates/oauth2-gateway/.yo-rc.json')
      );
    } else {
      this.fs.copy(
        this.templatePath('tests/generator-generic.js'),
        this.destinationPath('./__tests__/generic.spec.js')
      );
    }

    this.fs.copyTpl(
      this.templatePath('dynamic/LICENSE'),
      this.destinationPath(`./LICENSE`),
      this.contextOptions
    );

    this.fs.copyTpl(
      this.templatePath('dynamic/package.json.ejs'),
      this.destinationPath(`./package.json`),
      this.contextOptions
    );

    this.fs.copyTpl(
      this.templatePath('dynamic/README.md'),
      this.destinationPath(`./README.md`),
      this.contextOptions
    );

    this.fs.copyTpl(
      this.templatePath(
        `generators/app/index${
          this.contextOptions.type === 'jhipster-module' ? '-jhmodule' : ''
        }.js`
      ),
      this.destinationPath(`./generators/app/index.js`),
      this.contextOptions
    );
  }

  install() {
    this.log(`Installing dependencies`);
    this.yarnInstall();
  }

  end() {
    this.log(chalk.green('Scaffolding of new Yeoman generator completed successfully.'));
  }
};
