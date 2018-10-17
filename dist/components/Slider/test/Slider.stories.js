'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _addonActions = require('@storybook/addon-actions');

var _react2 = require('@storybook/react');

var _Slider = require('../../Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Slider', module);
stories.add('Slider with defaultValue 8 and onValueChange, min 1, max 100', function () {
    return React.createElement(_Slider2.default, { defaultValue: 8, onValueChange: (0, _addonActions.action)('Value changed at'), maximumValue: 100, minimumValue: 1 });
});
stories.add('Slider (default )', function () {
    return React.createElement(_Slider2.default, { onValueChange: (0, _addonActions.action)('Value is changed at') });
});
//# sourceMappingURL=Slider.stories.js.map