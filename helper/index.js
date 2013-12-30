'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');

var HelperGenerator = module.exports = function HelperGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the helper subgenerator with the argument ' + this.name + '.');
};

util.inherits(HelperGenerator, yeoman.generators.NamedBase);

HelperGenerator.prototype.files = function files() {
  this.copy('somefile.js', 'somefile.js');
};
