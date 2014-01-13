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

var util = require('util'),
	yeoman = require('yeoman-generator'),
	path = require('path');

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
	// By calling `NamedBase` here, we get the argument to the subgenerator call as `this.name`.
	yeoman.generators.NamedBase.apply(this, arguments);

	console.log('You called the model subgenerator with the argument ' + this.name + '.');
};

util.inherits(ModelGenerator, yeoman.generators.NamedBase);

ModelGenerator.prototype.files = function files() {
	var pkg = JSON.parse(this.readFileAsString(path.join(process.cwd(), './package.json'))),
		currentDate = new Date().getDate();
	this.componentName = 		pkg.componentName;
	this.description = 			pkg.description;
	this.requireManageRights = 	pkg.requireManageRights;
	this.authorName = 			pkg.author.name;
	this.authorEmail = 			pkg.author.email;
	this.authorURL = 			pkg.author.url;
	this.license = 				pkg.licenses[0].type;
	this.currentDate =			new Date().getUTCDate();
	this.modelName = 			this.name;
	this.template('_model.php', 'models/' + this.name + '.php');
};