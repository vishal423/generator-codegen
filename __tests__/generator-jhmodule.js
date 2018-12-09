'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('scaffold new jhipster module generator', () => {
  it('assert generated files when user respond to prompts', () => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'John Doe',
        email: 'john.doe@localhost.com',
        githubUsername: 'johndoe',
        type: 'jhipster-module',
        generatorName: 'angular',
        description: 'Generator to scaffold new jhipster angular module.'
      })
      .on('ready', gen => {
        gen.yarnInstall = () => {};
      })
      .then(() => {
        assert.file([
          '.editorconfig',
          '.eslintignore',
          '.eslintrc.json',
          '.gitattributes',
          '.gitignore',
          '.prettierrc.json',
          '.huskyrc.json',
          '.travis.yml',
          '.yo-rc.json',
          'LICENSE',
          'package.json',
          'README.md',
          'generators/app/index.js',
          'generators/app/templates/sample.txt',
          '__tests__/oauth2-gateway.spec.js'
        ]);
        assert.fileContent('LICENSE', /Copyright \(c\) 2018 John Doe <john\.doe@localhost\.com>/);
        assert.fileContent('README.md', /yarn global add generator-jhipster-angular/);
        assert.fileContent('package.json', /"name":\s+"generator-jhipster-angular"/);
        assert.fileContent(
          'package.json',
          /"description": "Generator to scaffold new jhipster angular module."/
        );
        assert.fileContent('package.json', /"repository": "johndoe\/generator-jhipster-angular"/);
      });
  });

  it('assert generated files when user also passes arguments', () => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments(['John Doe', 'john.doe@localhost.com', 'johndoe'])
      .withPrompts({
        generatorName: 'angular',
        type: 'jhipster-module',
        description: 'Generator to scaffold new jhipster angular module.'
      })
      .on('ready', gen => {
        gen.yarnInstall = () => {};
      })
      .then(() => {
        assert.file([
          '.editorconfig',
          '.eslintignore',
          '.eslintrc.json',
          '.gitattributes',
          '.gitignore',
          '.prettierrc.json',
          '.huskyrc.json',
          '.travis.yml',
          '.yo-rc.json',
          'LICENSE',
          'package.json',
          'README.md',
          'generators/app/index.js',
          'generators/app/templates/sample.txt',
          '__tests__/oauth2-gateway.spec.js'
        ]);
        assert.fileContent('LICENSE', /Copyright \(c\) 2018 John Doe <john\.doe@localhost\.com>/);
        assert.fileContent('README.md', /yarn global add generator-jhipster-angular/);
        assert.fileContent('package.json', /"name":\s+"generator-jhipster-angular"/);
        assert.fileContent(
          'package.json',
          /"description": "Generator to scaffold new jhipster angular module."/
        );
        assert.fileContent('package.json', /"repository": "johndoe\/generator-jhipster-angular"/);
      });
  });
});
