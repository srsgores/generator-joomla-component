###
	generator-joomla-component

	index.coffee

	@author Sean Goresht

	@note uses Codoc
	@see https://github.com/mklabs/yeoman/wiki/generators coffeescript with yeoman
	@see https://github.com/coffeedoc/codo
###

"use strict"
yeoman = require("yeoman-generator")
path = require("path")
###
	@class HelperGenerator sub-generator for joomla component controllers
###
module.exports = class HelperGenerator extends yeoman.generators.NamedBase
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
		@helperName = @._.slugify(@name)
		@helperClassName = @._.classify(@name)
		console.log """
			You called the helper subgenerator with the argument #{@name}.
			Now let's create that helper as helpers/#{@helperName}.php for you...
		"""
	generateHelper: ->
		@template "_helper.php", "helpers/#{@helperName}.php"
