'use strict';

const chalk = require('chalk');
const BaseGenerator = require('generator-jhipster/generators/generator-base');
const jhipsterConstants = require('generator-jhipster/generators/generator-constants');
const packageJson = require('../../package.json');
const figlet = require('figlet');

module.exports = class extends BaseGenerator {
  constructor(args, opts) {
    super(args, opts);
    if (this.destinationPath('.yo-rc.json')) {
      const fileData = this.fs.readJSON(this.destinationPath('.yo-rc.json'));
      if (!fileData || !fileData['generator-jhipster']) {
        this.error('Could not locate JHipster configurations inside .yo-rc.json.');
      }
    } else {
      this.error('.yo-rc.json not found');
    }

    this.argument('name', { type: String, required: false });
  }

  initializing() {

    /* eslint-disable */

    // can access yeoman configurations defined in .yo-rc.json
    this.jhipsterAppConfig = this.getJhipsterAppConfig();
    this.baseName = this.jhipsterAppConfig.baseName;
    this.packageName = this.jhipsterAppConfig.packageName;
    this.clientFramework = this.jhipsterAppConfig.clientFramework;
    this.clientPackageManager = this.jhipsterAppConfig.clientPackageManager;

    // can use constants defined in generator-constants
    const javaDir = `${jhipsterConstants.SERVER_MAIN_SRC_DIR + this.packageFolder}/`;
    const resourceDir = jhipsterConstants.SERVER_MAIN_RES_DIR;
    const webappDir = jhipsterConstants.CLIENT_MAIN_SRC_DIR;

    // can use public functions defined inside generator-base
    this.angularAppName = this.getAngularAppName(); // get the Angular application name.

    /* eslint-enable */
    const banner = figlet.textSync('<%= generatorName%>', {
      font: 'Standard',
      horizontalLayout: 'full',
      verticalLayout: 'full'
    });

    this.log(`${chalk.green(banner)}
  Welcome to the JHipster module :: ${chalk.bold.green('<%=generatorName%>')} ${chalk.yellow(`v${packageJson.version}`)}`);

    this.contextOptions = {
      name: this.options.name || this.config.get('name')
    };
  }

  async prompting() {
    if (!this.contextOptions.name) {
      const answer = await this.prompt({
        type: 'input',
        name: 'name',
        message: 'Specify your name > '
      });
      this.contextOptions.name = answer.name;
    }
  }

  configuring() {
    this.config.set({
      version: packageJson.version,
      name: this.contextOptions.name
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('sample.txt'),
      this.destinationPath(`./sample.txt`),
      this.contextOptions
    );
  }

  install() {
    this.log(`Install client dependencies`);
    if (this.clientPackageManager === 'yarn') {
      this.yarnInstall();
    } else {
      this.npmInstall();
    }
  }

  end() {
    this.log('JHipster module execution successfully completed.');
  }
};
