###
	generator-joomla-component

	index.coffee

	@author Sean

	@note Created on 2014-10-04 by PhpStorm
	@note uses Codoc
	@see https://github.com/coffeedoc/codo
###
"use strict"
yeoman = require("yeoman-generator")
path = require("path")

###
	@class ControllerGenerator sub-generator for joomla component controllers
	@see https://github.com/mklabs/yeoman/wiki/generators coffeescript with yeoman
###
module.exports = class JoomlaComponentGenerator extends yeoman.generators.Base
	###
		@param [Array] args command-line arguments passed in (if any)
		@param [Array] options any additional options
		@param [Array] config the yeoman configuration
	###
	constructor: (args, options, config) ->
		super args, options, config
		@on "end", ->
			@installDependencies skipInstall: options["skip-install"]
		@pkg = JSON.parse(@readFileAsString(path.join(__dirname, "../package.json")))
	askFor: ->
		cb = @async()

		# have Yeoman greet the user.
		console.log @yeoman
		prompts = [
			{
				name: "description"
				message: "Describe your component"
				default: "A sample description"
			}
			{
				name: "componentName"
				message: "What's the component's name?"
				default: "default-value"
			}
			{
				name: "authorName"
				message: "What's your name?"
				default: "Author name"
			}
			{
				name: "authorEmail"
				message: "What's your e-mail?"
				default: "email@somedomain.com"
			}
			{
				name: "authorURL"
				message: "What's your website?"
				default: "somedomain.com"
			}
			{
				name: "license"
				message: "What's the copyright license?"
				default: "MIT"
			}
			{
				type: "confirm"
				name: "requireManageRights"
				message: "Does your component require admin manage rights to access it?"
			}
			{
				type: "confirm"
				name: "legacyJoomla"
				message: "Support Joomla 2.5x with compatibility layer?"
			}
		]
		@prompt prompts, ((props) ->
			# for own prompt of prompts
			# @prompt.name = prompt.name?
			@description = props.description
			@componentName = props.componentName
			@authorName = props.authorName
			@authorEmail = props.authorEmail
			@authorURL = props.authorURL
			@license = props.license
			@requireManageRights = props.requireManageRights
			@legacyJoomla = props.legacyJoomla
			@currentDate = @_getCurrentDate()
			cb()
		).bind(@)
	app: ->
		@mkdir "app"
		@mkdir "app/templates"
		@template "_package.json", "package.json"
		@template "_bower.json", "bower.json"
		@copy "_gitignore", ".gitignore"

	_getCurrentDate: ->
		new Date().getUTCDate()
	projectfiles: ->
		@copy "editorconfig", ".editorconfig"
		@copy "jshintrc", ".jshintrc"
	createConfigFiles: ->
		@template "_component-name.xml", @_.slugify(@componentName) + ".xml"
		@template "_config.xml", "config.xml"
		@template "_access.xml", "access.xml"
	###
	Create legacy files for fallback to Joomla 2.5x
	###
	createLegacyFallbackFiles: ->
		@template "_legacy.php", "legacy.php" if @legacyJoomla is on

	createPHPFiles: ->
		@template "_component-name.php", @_.slugify(@componentName) + ".php"
		@template "_router.php", "router.php"

	createDatabaseFiles: ->
		@template "sql/_install.mysql.utf8.sql", "sql/install.mysql.utf8.sql"
		@template "sql/_uninstall.mysql.utf8.sql", "sql/uninstall.mysql.utf8.sql"
		@template "_install-uninstall.php", "install-uninstall.php"

	createLanguageFiles: ->
		@template "languages/en-GB/_en-GB.com_component-name.ini", "languages/en-GB/en-GB.com_" + @_.slugify(@componentName) + ".ini"
		@template "languages/en-GB/_en-GB.com_component-name.ini", "languages/en-GB/en-GB.com_" + @_.slugify(@componentName) + ".sys.ini"

	createEmptyMVCFolders: ->
		emptyMVCFolders = [
			"controllers"
			"helpers"
			"models"
			"sql"
			"tables"
			"views"
		]
		for folderName in emptyMVCFolders
			@template "_index.html", "#{folderName}/index.html"

		@template "_index.html", "index.html"
		@template "_index.html", "languages/index.html"
		@template "_index.html", "languages/en-GB/index.html"

