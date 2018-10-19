"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const bluerain_os_1 = require("@blueeast/bluerain-os");
const BlueRainAvatar = (props) => {
    const size = props.size ? props.size : 40;
    const avatarStyle = [
        {
            width: size,
            height: size,
            backgroundColor: 'lightgrey',
            borderRadius: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        Object.assign({}, props.style)
    ];
    // const View = props.bluerain ? props.bluerain.Components.get('View') : 'div';
    // // const Text = props.bluerain ? props.bluerain.Components.get('Text') : 'div';
    // const Image = props.bluerain ? props.bluerain.Components.get('Image') : 'img';
    if (props.children) {
        return (React.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (React.createElement(BR.Components.View, { style: avatarStyle }, props.children))));
    }
    return (React.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => (React.createElement(BR.Components.Image, { source: props.src, style: avatarStyle }))));
};
exports.default = bluerain_os_1.withBlueRain(BlueRainAvatar);
// export const BlueRainAvatar: React.StatelessComponent<MUIAvatarProperties> = props => (
//  <BlueRainConsumer>
// 	 {(BR: BlueRain) => (
// 		 <Avatar {...props}>
// 		 </Avatar>
// 	 )}
//  </BlueRainConsumer>
// );
//# sourceMappingURL=Avatar.component.js.map