/*global describe, beforeEach, it*/
'use strict';

var path = require('path'),
	helpers = require('yeoman-generator').test,
	slugify = require('slugify');

describe('joomla-component generator', function ()
{
	var generatorDefaults = {
		'description': 'A sample description',
		'componentName': 'A component name',
		'authorName': 'Test author name',
		'authorEmail': 'testemail@gmail.com',
		'authorURL': 'testauthor@testauthor.com',
		'license': 'MIT',
		'legacyJoomla': true,
		'requireManageRights': true
	};
	beforeEach(function (done)
	{
		helpers.testDirectory(path.join(__dirname, 'temp'), function (err)
		{
			if (err)
			{
				return done(err);
			}

			this.app = helpers.createGenerator('joomla-component:app', [
				'../../app'
			]);
			done();
		}.bind(this));
	});

	it('creates expected files', function (done)
	{
		var expected = [
			'.jshintrc',
			'.editorconfig',
			'bower.json',
			'config.xml',
			'access.xml',
			slugify(generatorDefaults.componentName) + '.xml'
		];

		helpers.mockPrompt(this.app, generatorDefaults);
		this.app.options['skip-install'] = true;
		this.app.run({}, function ()
		{
			helpers.assertFiles(expected);
			done();
		});
	});
	it('creates package.json file', function () {
		//arrange
		//act
		//assert
		helpers.mockPrompt(this.app, generatorDefaults);
		this.app.options['skip-install'] = true;
		this.app.run({}, function ()
		{
			helpers.assertFiles(['package.json']);
			done();
		});
	});
	it('creates empty mvc folders', function () {
		//arrange
		var expectedFolders = [
		'controllers',
		'helpers',
		'models',
		'sql',
		'tables',
		'views'
		];
		//act
		//assert
		helpers.mockPrompt(this.app, generatorDefaults);
		this.app.options['skip-install'] = true;
		this.app.run({}, function ()
		{
			helpers.assertFiles(expectedFolders);
			done();
		});
	});

	it("creates language files", function () {
		//arrange
		var preferredLanguage = 'en-GB',
			expectedLanguageFiles = [
			'languages/' + preferredLanguage + '/' + preferredLanguage + '.com_' + this.componentName + '.ini',
			'languages/' + preferredLanguage + '/' + preferredLanguage + '.com_' + this.componentName + '.sys.ini'
		];
		//act
		//assert
		helpers.mockPrompt(this.app, generatorDefaults);
		this.app.options['skip-install'] = true;
		this.app.run({}, function ()
		{
			helpers.assertFiles(expectedLanguageFiles);
			done();
		});
	});

});
