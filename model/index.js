/*--------------------------------------------------------------------------------
 Author: Sean Goresht
 www: http://seangoresht.com/
 github: https://github.com/srsgores

 twitter: http://twitter.com/S.Goresht

 generator-joomla-component
 Do What the Fuck You Want License

 =============================================================================
 Filename: index.js
 =============================================================================
 Scaffold out new models
 -------------------------------------------------------------------------------*/

'use strict';

var util = require('util');
var yeoman = require('yeoman-generator');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config)
{
	// By calling `NamedBase` here, we get the argument to the subgenerator call as `this.name`.
	yeoman.generators.NamedBase.apply(this, arguments);

	console.log('You called the model subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files()
{
	this.template('_model.php', '/models/' + this.name + '.php');
};
