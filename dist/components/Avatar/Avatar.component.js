'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _bluerainOs = require('@blueeast/bluerain-os');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};

var BlueRainAvatar = function BlueRainAvatar(props) {
    var size = props.size ? props.size : 70;
    var avatarStyle = [{
        width: size,
        height: size,
        backgroundColor: 'lightgrey',
        borderRadius: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 0.5 * size
    }, __assign({}, props.style)];
    var View = props.bluerain ? props.bluerain.Components.get('View') : 'div';
    // const Text = props.bluerain ? props.bluerain.Components.get('Text') : 'div';
    var Image = props.bluerain ? props.bluerain.Components.get('Image') : 'img';
    if (props.children) {
        return React.createElement(View, { style: avatarStyle }, props.children);
    }
    return React.createElement(Image, { source: props.src, style: avatarStyle });
};
exports.default = (0, _bluerainOs.withBlueRain)(BlueRainAvatar);
// export const BlueRainAvatar: React.StatelessComponent<MUIAvatarProperties> = props => (
//  <BlueRainConsumer>
// 	 {(BR: BlueRain) => (
// 		 <Avatar {...props}>
// 		 </Avatar>
// 	 )}
//  </BlueRainConsumer>
// );
//# sourceMappingURL=Avatar.component.js.map