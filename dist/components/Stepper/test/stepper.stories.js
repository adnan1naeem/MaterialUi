'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Stepper = require('../Stepper.components');

var _react2 = require('@storybook/react');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _KeyboardArrowLeft = require('@material-ui/icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('@material-ui/icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var stories = (0, _react2.storiesOf)('Stepper', module);
var backButton = React.createElement(_Button2.default, null, React.createElement(_KeyboardArrowLeft2.default, null), "Back");
var NextButton = React.createElement(_Button2.default, null, "Next ", React.createElement(_KeyboardArrowRight2.default, null));
stories.add('Stepper progresss', function () {
    return React.createElement(_Stepper.Stepper, { type: "progress", activeStep: 3, backButton: backButton, nextButton: NextButton, steps: 6 });
});
stories.add('Stepper dot', function () {
    return React.createElement(_Stepper.Stepper, { type: "dots", activestep: 3, backButton: backButton, nextButton: NextButton, steps: 6 });
});
stories.add('Stepper  text', function () {
    return React.createElement(_Stepper.Stepper, { position: "top", type: "text", activestep: 3, backButton: backButton, nextButton: NextButton, steps: 6 });
});
// activeStep?: number;
// backButton: React.ReactElement<any>;
// nextButton: React.ReactElement<any>;
// position?: 'bottom' | 'top' | 'static';
// steps: number;
// type?: 'text' | 'dots' | 'progress';
//# sourceMappingURL=stepper.stories.js.map