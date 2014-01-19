<?php
/**
 * legacy.php
 *
 * Allows the component to work in Joomla 2.5 as well as 3x
 * @package     <%= _.slugify(componentName) %>
 * @subpackage  legacy_fallback
 *
 * @copyright   Copyright (C) <%= currentDate %> <%= authorName %>. All rights reserved.
 * @license     <%= license %>
 */

defined('_JEXEC') or die;

jimport('joomla.application.component.controller');

class JControllerLegacy extends JController
{
}

jimport('joomla.application.component.view');

class JViewLegacy extends JView
{
}

jimport('joomla.application.component.model');

class JModelLegacy extends JModel
{
	public static function addIncludePath($path = '', $prefix = '')
	{
		return parent::addIncludePath($path, $prefix);
	}
}