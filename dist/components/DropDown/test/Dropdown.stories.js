'use strict';

var _index = require('../index');

var _Input = require('material-ui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _react = require('@storybook/react');

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react.storiesOf)('Dropdown', module);
var onChange = function onChange(event) {
    var value = event.target.value;
};
var style = { root: { padding: 20 }, dropdown: { width: 400 } };
var multiItems = ['Oliver Hansen', 'Van Henry', 'April Tucker', 'Ralph Hubbard', 'Omar Alexander', 'Carlos Abbott', 'Miriam Wagner', 'Bradley Wilkerson', 'Virginia Andrews', 'Kelly Snyder'];
stories.add('Dropdown with autoWidth', function () {
    return _react3.default.createElement(_Paper2.default, { style: style.root }, _react3.default.createElement(_index.Dropdown, { onValueChange: onChange, value: 'xyz', autoWidth: true, style: style.dropdown }, _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 1 "), _react3.default.createElement(_index.DropdownItem, { value: "xyz" }, "Item 2 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 3 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 4 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 5 ")));
});
stories.add('Dropdown with Override styles', function () {
    return _react3.default.createElement(_Paper2.default, { style: style.root }, _react3.default.createElement(_index.Dropdown, { onValueChange: onChange, value: 'xyz', style: { width: 600, backgroundColor: 'green' }, itemStyle: { backgroundColor: 'black' } }, _react3.default.createElement(_index.DropdownItem, { value: "xyz" }, "Item 1 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 2 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 3 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 4 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 5 ")));
});
stories.add('Dropdown multiple select', function () {
    return _react3.default.createElement(_Paper2.default, { style: style.root }, _react3.default.createElement(_index.Dropdown, { onValueChange: onChange, value: multiItems, autoWidth: true, multiple: true, style: style.dropdown }, _react3.default.createElement(_index.DropdownItem, { value: "xyz" }, "Item 1 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 2 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 3 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 4 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 5 ")));
});
stories.add('Dropdown with disabled', function () {
    return _react3.default.createElement(_Paper2.default, { style: style.root }, _react3.default.createElement(_index.Dropdown, { onValueChange: onChange, value: 'xyz', input: _react3.default.createElement(_Input2.default, { id: "name-native-disabled" }), style: style.dropdown, displayEmpty: true }, _react3.default.createElement(_index.DropdownItem, { value: "xyz" }, "Item 1 "), _react3.default.createElement(_index.DropdownItem, { disabled: true, value: "abc" }, "Item 2"), _react3.default.createElement(_index.DropdownItem, { disabled: true, value: "abc" }, "Item 3 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 4 "), _react3.default.createElement(_index.DropdownItem, { value: "abc" }, "Item 5 ")));
});
//# sourceMappingURL=Dropdown.stories.js.map