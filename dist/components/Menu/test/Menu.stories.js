'use strict';

var _List = require('../../List');

var _index = require('../index');

var _Button = require('../../Button');

var _react = require('@storybook/react');

var _MenuTest = require('./MenuTest1.component');

var _MenuTest2 = _interopRequireDefault(_MenuTest);

var _MenuPopper = require('../MenuPopper.component');

var _MenuPopper2 = _interopRequireDefault(_MenuPopper);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react.storiesOf)('Menu', module);
var onChange = function onChange(event) {
    var value = event.target.value;
};
var style = { root: { padding: 20 }, dropdown: { width: 400 } };
var multiItems = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'];
stories.add('Menu Closed', function () {
    return _react3.default.createElement(_Paper2.default, { style: style.root }, _react3.default.createElement(_index.Menu, { open: false, style: style.dropdown }, _react3.default.createElement(_index.MenuItem, { value: "xyz" }, "Item 1 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 2 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 3 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 4 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 5 ")));
});
stories.add('Dropdown with autoWidth', function () {
    return _react3.default.createElement(_Paper2.default, { style: style.root }, _react3.default.createElement(_index.Menu, { open: true, style: style.dropdown }, _react3.default.createElement(_index.MenuItem, { value: "xyz" }, "Item 1 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 2 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 3 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 4 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 5 ")));
});
stories.add('Dropdown with Override styles', function () {
    return _react3.default.createElement(_Paper2.default, { style: style.root }, _react3.default.createElement(_index.Menu, { style: { width: 600, backgroundColor: 'green' }, open: true }, _react3.default.createElement(_index.MenuItem, { value: "xyz" }, "Item 1 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 2 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 3 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 4 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 5 ")));
});
stories.add('Menu with disabled', function () {
    return _react3.default.createElement(_Paper2.default, { style: style.root }, _react3.default.createElement(_index.Menu, { style: style.dropdown, open: true }, _react3.default.createElement(_index.MenuItem, { value: "xyz" }, "Item 1 "), _react3.default.createElement(_index.MenuItem, { disabled: true, value: "abc" }, "Item 2"), _react3.default.createElement(_index.MenuItem, { disabled: true, value: "abc" }, "Item 3 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 4 "), _react3.default.createElement(_index.MenuItem, { value: "abc" }, "Item 5 ")));
});
stories.add('Menu Component', function () {
    return _react3.default.createElement(_MenuTest2.default, null);
});
var menuItems = [{
    title: 'Profile',
    onClick: function onClick() {
        return console.log('Profile Clicked');
    },
    style: {},
    otherProps: {}
}, {
    title: 'My account',
    onClick: function onClick() {
        return console.log('My account Clicked');
    },
    style: {},
    otherProps: {}
}, {
    title: 'Logout',
    onClick: function onClick() {
        return console.log('Logout Clicked');
    },
    style: {},
    otherProps: {}
}];
// stories.add('Menu Popper Button Component', () => {
// 	return (
// 		<div style={{ width: 200, height: 100, marginTop: 200 }}>
// 			<MenuPopper
// 				type="list-item"
// 				label={
// 					<div  style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
// 						<ListItemIcon style={{ marginLeft: 8, marginRight: 4 }}>
// 							<ListItemAvatar
// 								src={'https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg'}
// 								size={30}
// 							/>
// 						</ListItemIcon>
// 						<ListItemText primary={'Hello'} />
// 					</div>
// 				}
// 				buttonProps={{ style:{ width: 200, height: 100 } }}
// 				menuItems={menuItems}
// 			/>
// 		</div>
// 	);
// });
stories.add('Menu Popper List Component', function () {
    return _react3.default.createElement("div", null, _react3.default.createElement(_MenuPopper2.default, { style: { width: 200 }, menuItems: menuItems, component: function component(handleOpen) {
            return _react3.default.createElement(_List.ListItem, { button: true, onClick: handleOpen }, _react3.default.createElement(_List.ListItemAvatar, { src: 'https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg', size: 30, style: { marginLeft: 4, marginRight: 4 } }), _react3.default.createElement(_List.ListItemText, { primary: 'Hello' }));
        } }));
});
stories.add('Menu Popper List Component placement right', function () {
    return _react3.default.createElement("div", null, _react3.default.createElement(_MenuPopper2.default, { style: { width: 200 }, menuItems: menuItems, placement: "right-end", component: function component(handleOpen) {
            return _react3.default.createElement(_List.ListItem, { button: true, onClick: handleOpen }, _react3.default.createElement(_List.ListItemAvatar, { src: 'https://lh3.googleusercontent.com/-XSLXxx7YjLs/AAAAAAAAAAI/AAAAAAAAAAA/AA6ZPT4iEH_45OgsOLVCGU8YKIKqLuVtcQ/s32-c-mo/photo.jpg', size: 30, style: { marginLeft: 4, marginRight: 4 } }), _react3.default.createElement(_List.ListItemText, { primary: 'Hello' }));
        } }));
});
stories.add('Menu Popper Button Component', function () {
    return _react3.default.createElement("div", { style: { width: 200, height: 100, marginTop: 200 } }, _react3.default.createElement(_MenuPopper2.default, { style: { width: 200 }, menuItems: menuItems, component: function component(handleOpen) {
            return _react3.default.createElement(_Button.Button, { onPress: handleOpen, style: { width: 200, height: 100 } }, "Click Me");
        } }));
});
stories.add('Menu Popper Button Component placement right', function () {
    return _react3.default.createElement("div", { style: { width: 200, height: 100, marginTop: 200 } }, _react3.default.createElement(_MenuPopper2.default, { style: { width: 200 }, menuItems: menuItems, placement: "right", component: function component(handleOpen) {
            return _react3.default.createElement(_Button.Button, { onPress: handleOpen, style: { width: 200, height: 100 } }, "Click Me");
        } }));
});
//# sourceMappingURL=Menu.stories.js.map