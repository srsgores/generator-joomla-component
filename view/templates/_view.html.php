<?php
/**
 * <%= viewFolderName %>/view.html.php
 *
 * View and display logic for back-end administrator view <%= name %> in <%= componentName %> component
 *
 * @package		<%= _.slugify(componentName) %>
 * @subpackage	<%= viewFolderName %>
 *
 * @copyright	Copyright (C) <%= currentDate %> <%= authorName %>. All rights reserved.
 * @license		<%= license %>
 */

defined('_JEXEC') or die;

/**
 * Class		<%= viewClassName %>
 * @author		<%= authorName %> <<%= authorEmail %>>
 * TODO: Describe your view here
 */
class <%= viewClassName %>View<%= _.classify(componentName) %> extends JViewLegacy {
	// TODO: place attributes here: ex. $protected $items;

	/**
	 * Display logic for when view is displayed
	 *
	 * @author <%= authorName %> <<%= authorEmail %>>
	 *
	 * @param String $tpl template which is used to display the component page (view)
	 *
	 * @return bool whether items have been displayed
	 */
	public function display($tpl = null) {
		// TODO: constructor logic here
		parent::display($tpl);
	}
}
