<?php
/**
* <%= _.slugify(componentName) %>.php
*
* Entry point, loader file for <%= componentName %> component.
* @package     <%= _.slugify(componentName) %>
*
* @copyright   Copyright (C) <%= currentDate %> <%= authorName %>. All rights reserved.
* @license     <%= license %>
*/

// prevent unwanted access
defined('_JEXEC') or die;

<% if (this.requireManageRights) { %>
if (!JFactory::getUser()->authorise('core.manage', 'com_folio'))
{
return JError::raiseWarning(404, JText::_('JERROR_ALERTNOAUTHOR'));
}
<% } %>

<% if (this.legacyJoomla) { %>
// load legacy compatibility layer
if (!class_exists('JControllerLegacy'))
{
	require_once( JPATH_COMPONENT_ADMINISTRATOR . '/legacy.php' );
}
<% } %>

/* Create an instance of JControllerLegacy, and we need to tell this function the name of our component. This name will be used as the prefix for all the classes; for example, FolioViewFolios or FolioHelper. Notice how we are using the JControllerLegacy class because we are using the old MVC. */
$controller  = JControllerLegacy::getInstance('<%= componentName %>');

// Since the component has more than a single page, we have a task input that determines what the component is going to do next.
$controller->execute(JFactory::getApplication()->input->get('task'));

//redirect to next URL
$controller->redirect();