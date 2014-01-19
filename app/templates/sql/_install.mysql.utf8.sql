CREATE TABLE IF NOT EXISTS `#__<%= _.slugify(componentName) %>` (
	`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	`title` varchar(250) NOT NULL DEFAULT '',
	`alias` varchar(255) NOT NULL DEFAULT '',
	PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;