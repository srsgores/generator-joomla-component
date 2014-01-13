'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var JoomlaComponentGenerator = module.exports = function JoomlaComponentGenerator(args, options, config)
{
	yeoman.generators.Base.apply(this, arguments);

	this.on('end', function ()
	{
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JoomlaComponentGenerator, yeoman.generators.Base);

function getCurrentDate()
{
	return new Date().getUTCDate();
}
JoomlaComponentGenerator.prototype.askFor = function askFor()
{
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [
		{
			name: 'description',
			message: 'Describe your component',
			default: 'A sample description'
		},
		{
			name: 'componentName',
			message: 'What\'s the component\'s name?',
			default: 'default-value'
		},
		{
			name: 'authorName',
			message: 'What\'s your name?',
			default: 'Author name'
		},
		{
			name: 'authorEmail',
			message: 'What\'s your e-mail?',
			default: 'email@somedomain.com'
		},
		{
			name: 'authorURL',
			message: 'What\'s your website?',
			default: 'somedomain.com'
		},
		{
			name: 'license',
			message: 'What\'s the copyright license?',
			default: 'MIT'
		},
		{
			type: 'confirm',
			name: 'requireManageRights',
			message: 'Does your component require admin manage rights to access it?'
		},
		{
			type: 'confirm',
			name: 'legacyJoomla',
			message: 'Support Joomla 2.5x with compatibility layer?'
		},
	];

	this.prompt(prompts, function (props)
	{
		this.description = props.description;
		this.componentName = props.componentName;
		this.authorName = props.authorName;
		this.authorEmail = props.authorEmail;
		this.authorURL = props.authorURL;
		this.license = props.license;
		this.requireManageRights = props.requireManageRights;
		this.legacyJoomla = props.legacyJoomla;
		this.currentDate = getCurrentDate();
		cb();
	}.bind(this));
};

JoomlaComponentGenerator.prototype.app = function app()
{
	this.mkdir('app');
	this.mkdir('app/templates');
	this.template('_package.json', 'package.json');
	this.template('_bower.json', 'bower.json');

	this.copy('_gitignore', '.gitignore');
};

JoomlaComponentGenerator.prototype.projectfiles = function projectfiles()
{
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
};

JoomlaComponentGenerator.prototype.createConfigFiles = function createConfigFiles()
{
	this.template('_component-name.xml', this._.slugify(this.componentName) + '.xml');
	this.template('_config.xml', 'config.xml');
	//create access file
	this.template('_access.xml', 'access.xml');
};

/**
 * Create legacy files for fallback to Joomla 2.5x
 */
JoomlaComponentGenerator.prototype.createLegacyFallbackFiles = function createLegacyFallbackFiles()
{
	if (this.legacyJoomla === true) {
		this.template('_legacy.php', 'legacy.php');
	}
};

JoomlaComponentGenerator.prototype.createEmptyMVCFolders = function createEmptyMVCFolders() {
	var emptyMVCFolders = [
		'controllers',
		'helpers',
		'models',
		'sql',
		'tables',
		'views'
	];
	var that = this;
	emptyMVCFolders.forEach(function(folderName) {
		that.mkdir(folderName);
	});
};