<?php
/**
 * <%= viewFolderName %>/default.php
 *
 * Default view for view <%= name %> in <%= componentName %> component
 *
 * @package		<%= _.slugify(componentName) %>
 * @subpackage	<%= viewFolderName %>
 *
 * @copyright	Copyright (C) <%= currentDate %> <%= authorName %>. All rights reserved.
 * @license		<%= license %>
 */

defined('_JEXEC') or die;

?>

<form action = "<?php echo JRoute::_('index.php?option=com_<%= _.underscored(componentName) %>&view=<%= _.underscored(viewFolderName) %>'); ?>" method = "post" name = "adminForm" id = "adminForm">
	<table class = "table table-striped" id = "<%= viewFolderName %>List">
		<thead>
			<tr>
					<th width = "1%" class = "hidden-phone">
						 <input type = "checkbox" name = "checkall-toggle" value = "" title = "<?php echo JText::_('JGLOBAL_CHECK_ALL'); ?>" onclick = "Joomla.checkAll(this)"/>
					</th>
					<th class = "title"><?php echo JHtml::_('grid.sort', 'JGLOBAL_TITLE', 'a.title', $listDirn, $listOrder); ?></th>
			</tr>
		</thead>
		<tbody>
			<?php foreach ($this->items as $i => $item) {?>
				<tr class = "row<?php echo $i % 2; ?>">
					<td class = "center hidden-phone"><?php echo JHtml::_('grid.id', $i, $item->id); ?></td>
					<td class = "nowrap has-context">
						<a href = "<?php echo JRoute::_('index.php?option=com_<%= _.underscored(componentName) %>&task=<%= _.underscored(viewFolderName) %>.edit&id=' . (int)$item->id); ?>"><?php echo $this->escape($item->title); ?></a>
					</td>
				</tr>
			<?php } ?>
		</tbody>
	</table>
	<input type = "hidden" name = "task" value = ""/>
	<input type = "hidden" name = "boxchecked" value = "0"/>
	<input type = "hidden" name = "filter_order" value = "<?php echo $listOrder; ?>"/>
	<input type = "hidden" name = "filter_order_Dir" value = "<?php echo $listDirn; ?>"/>
	<?php echo JHtml::_('form.token'); ?>
</form>
