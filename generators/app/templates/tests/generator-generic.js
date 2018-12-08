'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('scaffold new sample application', () => {
  it('assert generated files when user respond to prompts', () => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
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
      .withArguments(['John Doe'])
      .then(() => {
        assert.file(['.yo-rc.json', 'sample.txt']);
        assert.fileContent('sample.txt', /Hello John Doe/);
      });
  });
});
