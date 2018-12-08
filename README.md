# generator-codegen [![NPM version][npm-image]][npm-url] [![npm][npm-downloads]][npm-downloads] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![code style: prettier][prettier-image]][prettier-url] [![NpmLicense][license-image]][license-url]
> An opinionated generator to scaffold new generators

# Introduction

This is a [Yeoman](https://yeoman.io/) generator to scaffold new generators.

# Installation

Use following command to globally install this generator:

```bash
yarn global add generator-codegen
```

# Usage
- Navigate to directory where you would like to scaffold new generator.
- Use following command to scaffold generator :

  ```bash
  yo codegen
  ```
- Provide appropriate prompt answers. This information will be used during generation.
- You can also provide `full name`, `email address`, `GitHub username` information with command line arguments (in given order):
  ```bash
  yo codegen "full name" "email address" "GitHub username"
  ```
- Resolve conflicts, if any.
- After successful generation, you can try out new generator using yarn link.

## License

MIT © [Vishal Mahajan](https://twitter.com/vishal423)


[npm-image]: https://badge.fury.io/js/generator-codegen.svg
[npm-url]: https://npmjs.org/package/generator-codegen
[npm-downloads]: https://img.shields.io/npm/dt/generator-codegen.svg
[travis-image]: https://travis-ci.org/vishal423/generator-codegen.svg?branch=master
[travis-url]: https://travis-ci.org/vishal423/generator-codegen
[daviddm-image]: https://david-dm.org/vishal423/generator-codegen.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/vishal423/generator-codegen
[coveralls-image]: https://coveralls.io/repos/github/vishal423/generator-codegen/badge.svg
[coveralls-url]: https://coveralls.io/github/vishal423/generator-codegen
[prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
[license-image]: https://img.shields.io/npm/l/generator-codegen.svg
[license-url]: https://github.com/vishal423/generator-codegen/blob/master/LICENSE
