'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Card = require('../../Card');

var _react2 = require('@storybook/react');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var styles = {
    bg: {
        backgroundColor: 'white', width: '100%'
    }
};
(0, _react2.storiesOf)('CardFooter', module).add('CardFooter with className and style prop', function () {
    return React.createElement(_Card.CardFooter, { className: "bg-footer", style: { width: 200, height: 200, backgroundColor: 'grey' } });
});
(0, _react2.storiesOf)('CardFooter', module).add('CardFooter with children prop (MUI specific)', function () {
    return React.createElement(_Card.CardFooter, { disableActionSpacing: true, style: styles.bg }, React.createElement(_Button2.default, { dense: true }, "Learn More"));
});
//# sourceMappingURL=CardFooter.stories.js.map