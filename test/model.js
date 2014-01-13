/*--------------------------------------------------------------------------------
 Author: Sean
 www: http://seangoresht.com/
 github: https://github.com/srsgores

 twitter: http://twitter.com/S.Goresht

 generator-joomla-component
 Do What the Fuck You Want License

 =============================================================================
 Filename: model.js
 =============================================================================
 Test model subgenerator
 -------------------------------------------------------------------------------*/
'use strict';

var path = require('path'),
	helpers = require('yeoman-generator').test,
	assert = require('assert'),
	fs = require('fs');

describe('model', function () {
	var testModelName = 'modelName';
	var generatorDefaults = {
		'description': 'A sample description',
		'componentName': 'A component name',
		'authorName': 'Test author name',
		'authorEmail': 'testemail@gmail.com',
		'authorURL': 'testauthor@testauthor.com',
		'license': 'MIT'
	};
	beforeEach(function (done) {
		helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
			this.app = helpers.createGenerator('joomla-component:app', [
				'../../app'
			]);
			this.app.options['skip-install'] = true;
			helpers.mockPrompt(this.app, generatorDefaults);
			console.log('Created test app for subgenerator');
			done();
		}.bind(this));
	});

	function initModel() {
		return helpers.createGenerator('joomla-component:model', [
			'../../model',
			[helpers.createDummyGenerator(), 'test:namespace']
		], [testModelName]);
	}

	/**
	 * Test that model subgenerator creates desired files
	 */
	it('creates expected model files', function () {
		//arrange
		var expectedFiles = [
			testModelName + '.php',
			'index.html'
		];
		//act
		var model = initModel();
		//assert
		model.run([], function () {
			helpers.assertFiles(expectedFiles);
		});
	});
	it('creates package.json file', function () {
		//arrange
		var expectedFiles = [
			'package.json'
		];
		//act
		var model = initModel();
		//assert
		model.run([], function () {
			helpers.assertFiles(expectedFiles);
		});
	});
});
