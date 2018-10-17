'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Button = require('../../Button');

var _react2 = require('@storybook/react');

var _bluerainOs = require('@blueeast/bluerain-os');

var _bluerainOs2 = _interopRequireDefault(_bluerainOs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var background = '.background {background-color: red;}';
var Text = _bluerainOs2.default.Components.get('Text');
// storiesOf('Button', module).add('Primary Button with knobs', () =>{
//     const Image = BR.Components.get('Image');
//     const label = text('label as child', 'withknobs');
//     const color = text('color', 'primary');
//     const disabled = boolean('disabled', false);
//     const fullWidth = boolean('fullWidth', false);
//     const fab = boolean('fab', false);
//     const small = boolean('small', false);
// (
// <Button
//     color={color}
//     onPress={action('I was clicked with knobs')}
//     disabled={disabled}
//     fullWidth={fullWidth}
//     fab={fab}
//     small={small}
// >
// </Button>);
// });
(0, _react2.storiesOf)('Button', module).add('Default Button without Text tag in Child', function () {
    return React.createElement(_Button.Button, { color: 'default' }, "Default");
});
(0, _react2.storiesOf)('Button', module).add('Accent Button with style prop', function () {
    return React.createElement(_Button.Button, { color: "accent", style: { backgroundColor: 'purple', borderColor: 'purple' } }, "Custom Purple");
});
(0, _react2.storiesOf)('Button', module).add('Inherit button with onPress prop', function () {
    return React.createElement(_Button.Button, { color: "inherit", onPress: function onPress() {
            console.log('I was pressed');
        } }, "onPress");
});
(0, _react2.storiesOf)('Button', module).add('Contrast button with disabled prop true', function () {
    return React.createElement(_Button.Button, { color: "contrast", disabled: true }, "Disabled");
});
(0, _react2.storiesOf)('Button', module).add('Accent button with href prop', function () {
    return React.createElement(_Button.Button, { color: "accent", href: "https://www.facebook.com" }, "href");
});
(0, _react2.storiesOf)('Button', module).add('Primary button with onPress prop', function () {
    return React.createElement(_Button.Button, { color: "primary", fullWidth: true }, "FullWidth");
});
(0, _react2.storiesOf)('Button', module).add('Contrast button with active prop true', function () {
    return React.createElement(_Button.Button, { color: "contrast", active: true }, "Active");
});
(0, _react2.storiesOf)('Button', module).add('Accent button with bordered prop true', function () {
    return React.createElement(_Button.Button, { color: "accent", bordered: true }, "Bordered");
});
(0, _react2.storiesOf)('Button', module).add('Accent Rounded Button ', function () {
    return React.createElement(_Button.Button, { color: "accent" }, "Rounded");
});
(0, _react2.storiesOf)('Button', module).add('Primary button with iconLeft prop', function () {
    return React.createElement(_Button.Button, { color: "primary", iconLeft: React.createElement("img", { src: "https://getbootstrap.com/assets/img/bootstrap-stack.png", width: "15", height: "15" }) }, "Icon Left");
});
(0, _react2.storiesOf)('Button', module).add('Transparent Button with icon as child', function () {
    return React.createElement(_Button.Button, { style: { backgroundColor: 'transparent', boxShadow: 'none', border: 0 } }, React.createElement("img", { src: "https://getbootstrap.com/assets/img/bootstrap-stack.png", width: "35", height: "35" }));
});
(0, _react2.storiesOf)('Button', module).add('Contrast button with iconRight prop', function () {
    return React.createElement(_Button.Button, { color: "contrast", iconRight: React.createElement("img", { src: "https://getbootstrap.com/assets/img/bootstrap-stack.png", width: "15", height: "15" }) }, "Icon Right");
});
(0, _react2.storiesOf)('Button', module).add('Primary button with fab prop', function () {
    return React.createElement(_Button.Button, { color: "primary", fab: true }, "FAB");
});
(0, _react2.storiesOf)('Button', module).add('Primary button with fab prop and small prop', function () {
    return React.createElement(_Button.Button, { color: "primary", fab: true, small: true }, "sm");
});
(0, _react2.storiesOf)('Button', module).add('Accent button with large prop true', function () {
    return React.createElement(_Button.Button, { color: "accent", large: true }, "Large");
});
(0, _react2.storiesOf)('Button', module).add('Default button with small prop true', function () {
    return React.createElement(_Button.Button, { color: "default", small: true }, "Small");
});
//# sourceMappingURL=Button.stories.js.map