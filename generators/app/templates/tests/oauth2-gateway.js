'use strict';

const fs = require('fs-extra');
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('scaffold jhipster module', () => {
  it('assert generated files when user respond to prompts', () => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .inTmpDir(dir => {
        fs.copySync(path.join(__dirname, './templates/oauth2-gateway/'), dir);
      })
      .withPrompts({
        name: 'John Doe'
      })
      .then(() => {
        assert.file(['.yo-rc.json', 'sample.txt']);
        assert.fileContent('sample.txt', /Hello John Doe/);
      });
  });

  it('assert generated files when user pass arguments', () => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .inTmpDir(dir => {
        fs.copySync(path.join(__dirname, './templates/oauth2-gateway/'), dir);
      })
      .withArguments(['John Doe'])
      .then(() => {
        assert.file(['.yo-rc.json', 'sample.txt']);
        assert.fileContent('sample.txt', /Hello John Doe/);
      });
  });
});
