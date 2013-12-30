/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('joomla-component generator', function ()
{
	var generatorDefaults = {
		'description': 'A sample description',
		'componentName': 'A component name',
		'authorName': 'Test author name',
		'authorEmail': 'testemail@gmail.com',
		'authorURL': 'testauthor@testauthor.com',
		'license': 'MIT'
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
			'.editorconfig'
		];

		helpers.mockPrompt(this.app, generatorDefaults);
		this.app.options['skip-install'] = true;
		this.app.run({}, function ()
		{
			helpers.assertFiles(expected);
			done();
		});
	});

	/**
	 * Test that model subgenerator creates desired files
	 */
	it('creates model files', function ()
	{
		// arrange
		var testModelName = 'modelName',
			expectedFiles = [
				'index.html',
				'modelName.php'
			];

		// act
		helpers.mockPrompt(this.app, {
			'modelName': 'modelName'
		});
		this.app.options['skip-install'] = true;

		// assert
		this.app.run({}, function ()
		{
			helpers.assertFiles(expectedFiles);
			done();
		});
	});

});
