'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Drawer = require('../../Drawer');

var _react2 = require('@storybook/react');

var _DrawerTest = require('./DrawerTest.component');

var _DrawerTest2 = _interopRequireDefault(_DrawerTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Drawer', module);
var AppBarStoriesStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 0
};
stories.add('Drawer open', function () {
    return React.createElement(_Drawer.Drawer, { variant: "persistent", open: true, tweenDuration: 1000, side: "left" }, React.createElement("div", null, "YOLO"));
});
stories.add('Permanent Drawer StateFull with changable side', function () {
    return React.createElement(_DrawerTest2.default, { variant: "permanent" });
});
stories.add('Persistent Drawer StateFull with changable side aswell as open the drawer', function () {
    return React.createElement(_DrawerTest2.default, { variant: "persistent" });
});
stories.add('Temporary Drawer StateFull with changable side aswell as open the drawer', function () {
    return React.createElement(_DrawerTest2.default, { variant: "temporary" });
});
//# sourceMappingURL=Drawer.stories.js.map