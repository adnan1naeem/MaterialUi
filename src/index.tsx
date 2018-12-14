import Body1 from './components/Body1/Body1.component';
import Body2 from './components/Body2/Body2.component';
import Caption from './components/Caption/Caption.component';
import H1 from './components/H1/H1.component';
import H2 from './components/H2/H2.component';
import H3 from './components/H3/H3.component';
import H4 from './components/H4/H4.component';
import H5 from './components/H5/H5.component';
import H6 from './components/H6/H6.component';
import interfaces from '@blueeast/bluerain-ui-interfaces';
import Overline from './components/Overline/Overline.component';
import React from 'react';
import Subtitle1 from './components/Subtitle1/Subtitle1.component';
import Subtitle2 from './components/Subtitle2/Subtitle2.component';
import {
	ActionProperties,
	Card,
	CardAction,
	CardActionArea,
	CardBody,
	CardFooter,
	CardHeader,
	CardMedia,
	MUICardBodyProperties,
	MUICardFooterProperties,
	MUICardHeaderProperties,
	MUICardProperties
	} from './components/Card';
import { AppBar, MUIAppBarProperties } from './components/AppBar';
import { Avatar } from './components/Avatar';
import { Badge } from './components/Badge';
import { Button, MuiButtonProperties } from './components/Button';
import { Checkbox, MUIProps } from './components/Checkbox';
import { Chip, ChipMUIProperties } from './components/Chip';
import { ColorPicker, ColorPickerProperties } from './components/ColorPicker';
import { Divider, MUIDividerProperties } from './components/Divider';
import { Drawer, MUIDrawerProperties } from './components/Drawer';
import {
	Dropdown,
	DropdownItem,
	MUIDropdownItem,
	MUIPickerProperties
	} from './components/DropDown';
import {
	FormControl,
	FormGroup,
	MUIFormControlProperties,
	MUIFormGroupProperties
	} from './components/FormControl';
import {
	List,
	ListItem,
	ListSubheader,
	MUIListItemProperties,
	MUIListProperties
	} from './components/List';
import {
	Menu,
	MenuItem,
	MenuItemProperties,
	MenuList,
	MenuListprops,
	MenuPopper,
	MenuPopperprops,
	MenuProperties
	} from './components/Menu';
import {
	Modal,
	ModalBody,
	ModalBodyText,
	ModalFooter,
	ModalHeader
	} from './components/Modal';
import { MUISliderProperties, Slider } from './components/Slider';
import { MUISwitchProperties, Switch } from './components/Switch';
import { MUITableBodyProperties, TableBody } from './components/TableBody';
import { MUITableCellProperties, TableCell } from './components/TableCell';
import { MUITableFooterProperties, TableFooter } from './components/TableFooter';
import { MUITableHeadProperties, TableHead } from './components/TableHead';
import { MUITableProperties, Table } from './components/Table';
import { MUITableRowProperties, TableRow } from './components/TableRow';
import { MUITableSortLabelProperties, TableSortLabel } from './components/TableSortLabel';
import { MUITextInputProperties, TextInput } from './components/TextInput';
import { MUITypographyProperties, Text } from './components/Text';
import { Plugin } from '@blueeast/bluerain-os';
import { Stepper, StepperProps } from './components/Stepper';
import { Tab, TabProps } from './components/Tab';
import { TablePagination, TablePaginationProps } from './components/TablePagination';
import { Tabs, TabsProps } from './components/Tabs';
import { WebStepper, WebStepperProps } from './components/WebStepper';

// import { Notification } from './components/Notification';



/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */

class MaterialUiPlugin extends Plugin {
	static pluginName = 'MaterialUiPlugin';
	static slug = 'material-ui';
	static components = {
		AppBar,
		Avatar,
		Badge,
		Button,
		Card,
		CardHeader,
		CardBody,
		CardMedia,
		CardFooter,
		CardActionArea,
		CardAction,
		Chip,
		Checkbox,
		ColorPicker,
		Divider,
		Drawer,
		Menu,
		MenuItem,
		MenuList,
		MenuPopper,
		Modal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		ModalBodyText,
		'DropDown': Dropdown,
		'DropDownItem': DropdownItem,
		List,
		ListSubheader,
		ListItem,
		Switch,
		Slider,
		Stepper,
		// Notification,
		FormControl,
		FormGroup,
		TextInput,
		Text,
		H1,
		H2,
		H3,
		H4,
		H5,
		H6,
		Subtitle1,
		Subtitle2,
		Body1,
		Body2,
		Caption,
		Overline,
		WebStepper,
		Tab,
		Table,
		TableHead,
		TableFooter,
		TableCell,
		TableRow,
		TableBody,
		TablePagination,
		TableSortLabel,
		Tabs
	};

	// static hooks = {
	//  'bluerain.system.initialized': (BR: BlueRain) => {
	//    BR.Components.addHocs('SystemLayout', withReboot);
	//  },
	// };
}

export default MaterialUiPlugin;
