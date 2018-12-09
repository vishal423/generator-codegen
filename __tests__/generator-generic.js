'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('scaffold new yeoman generator', () => {
  it('assert generated files when user respond to prompts', () => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'John Doe',
        email: 'john.doe@localhost.com',
        githubUsername: 'johndoe',
        generatorName: 'angular',
        description: 'Generator to scaffold a new angular application.'
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
          '__tests__/generator-generic.js'
        ]);
        assert.fileContent('LICENSE', /Copyright \(c\) 2018 John Doe <john\.doe@localhost\.com>/);
        assert.fileContent('README.md', /yarn global add generator-angular/);
        assert.fileContent('package.json', /"name":\s+"generator-angular"/);
        assert.fileContent(
          'package.json',
          /"description": "Generator to scaffold a new angular application."/
        );
        assert.fileContent('package.json', /"repository": "johndoe\/generator-angular"/);
      });
  });

  it('assert generated files when user also passes arguments', () => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments(['John Doe', 'john.doe@localhost.com', 'johndoe'])
      .withPrompts({
        generatorName: 'angular',
        description: 'Generator to scaffold a new angular application.'
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
          '__tests__/generator-generic.js'
        ]);
        assert.fileContent('LICENSE', /Copyright \(c\) 2018 John Doe <john\.doe@localhost\.com>/);
        assert.fileContent('README.md', /yarn global add generator-angular/);
        assert.fileContent(
          'package.json',
          /"description": "Generator to scaffold a new angular application."/
        );
        assert.fileContent('package.json', /"repository":\s+"johndoe\/generator-angular"/);
      });
  });
});
