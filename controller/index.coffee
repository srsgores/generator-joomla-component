###
	generator-joomla-component

	index.coffee

	@author Sean

	@note Created on 2014-10-03 by PhpStorm
	@note uses Codoc
	@see https://github.com/mklabs/yeoman/wiki/generators coffeescript with yeoman
	@see https://github.com/coffeedoc/codo
###

"use strict"
yeoman = require("yeoman-generator")
path = require("path")
###
	@class ControllerGenerator sub-generator for joomla component controllers
###
module.exports = class ControllerGenerator extends yeoman.generators.NamedBase
	constructor: (args, options, config) ->
		super args, options, config
		pkg = JSON.parse(@readFileAsString(path.join(process.cwd(), "./package.json")))
		@componentName = pkg.componentName
		@description = pkg.description
		@requireManageRights = pkg.requireManageRights
		@authorName = pkg.author?.name
		@authorEmail = pkg.author?.email
		@authorURL = pkg.author?.url
		@license = pkg.licenses[0]?.type
		@currentDate = new Date().getFullYear()
		@controllerClassName = @._.classify(@name)
		console.log """
			You called the controller subgenerator with the argument #{@name}.
			Now let's create that controller #{@controllerClassName}.php for you...
		"""
	generateController: ->
		@template "_controller.php", "controllers/#{@controllerClassName}.php"
