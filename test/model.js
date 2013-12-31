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

describe("model", function ()
{
	beforeEach(function (done)
	{
		helpers.testDirectory(path.join(__dirname, './temp'), function (err) {
			this.app = helpers.createGenerator('joomla-component:model', [
				'../../app'
			]);
			done();
		}.bind(this));
	});
		
});
