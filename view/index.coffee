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
	@class ViewGenerator sub-generator for joomla component controllers
###
module.exports = class ViewGenerator extends yeoman.generators.NamedBase
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
		@viewFolderName = @._.slugify(@name)
		@viewClassName = @._.classify(@name)
		console.log """
			You called the view subgenerator with the argument #{@name}.
			Now let's create that view under the subdirectory views/#{@viewFolderName} for you...
		"""
	generateView: ->
		@template "_view.html.php", "views/#{@viewFolderName}/view.html.php"
		@template "_default.php", "views/#{@viewFolderName}/default.php"
