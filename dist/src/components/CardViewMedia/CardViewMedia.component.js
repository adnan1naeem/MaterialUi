"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
class CardViewMedia extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const directionStyle = {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left'
        };
        if (this.props.overlayDirection === 'topRight' || this.props.overlayDirection === 'bottomRight') {
            directionStyle.alignItems = 'flex-end';
            directionStyle.textAlign = 'right';
        }
        if (this.props.overlayDirection === 'bottomLeft') {
            directionStyle.justifyContent = 'flex-end';
            directionStyle.textAlign = 'left';
        }
        if (this.props.overlayDirection === 'bottomRight') {
            directionStyle.justifyContent = 'flex-end';
            directionStyle.textAlign = 'right';
        }
        const overlayTitleProp = typeof this.props.overlayTitle === 'string' ? React.createElement(bluerain_os_1.default.Components.Overline, null, this.props.overlayTitle) : this.props.overlayTitle;
        const overlaySubtitleProp = typeof this.props.overlaySubTiltle === 'string' ? React.createElement(bluerain_os_1.default.Components.H6, null, this.props.overlaySubTiltle) : this.props.overlaySubTiltle;
        const overlayOverlineProp = typeof this.props.overlayOverline === 'string' ? React.createElement(bluerain_os_1.default.Components.Subtitle2, null, this.props.overlayOverline) : this.props.overlayOverline;
        if (this.props.mediaComponent === 'img') {
            return (React.createElement(bluerain_os_1.default.Components.View, { style: { width: this.props.mediaWidth, height: this.props.mediaHeight } },
                React.createElement(bluerain_os_1.default.Components.CardMedia, { component: 'img', style: { position: 'absolute', width: this.props.mediaWidth, height: this.props.mediaHeight, backgroundColor: !this.props.src ? '#cfcfcf' : 'transparent' }, src: this.props.src }),
                React.createElement(bluerain_os_1.default.Components.View, { style: { backgroundColor: this.props.overlayColor, width: this.props.mediaWidth, height: this.props.mediaHeight } },
                    React.createElement(bluerain_os_1.default.Components.View, { style: Object.assign({ padding: 16 }, directionStyle, { width: this.props.mediaWidth, height: this.props.mediaHeight }) },
                        overlayTitleProp,
                        overlaySubtitleProp,
                        overlayOverlineProp))));
        }
        return (React.createElement(bluerain_os_1.default.Components.View, { style: { width: this.props.mediaWidth, height: this.props.mediaHeight } },
            React.createElement(bluerain_os_1.default.Components.CardMedia, { component: this.props.mediaComponent, style: { position: 'absolute', width: this.props.mediaWidth, height: this.props.mediaHeight, backgroundColor: !this.props.src ? '#cfcfcf' : 'transparent' }, src: this.props.src }),
            React.createElement(bluerain_os_1.default.Components.View, { style: { backgroundColor: this.props.overlayColor, width: this.props.mediaWidth, height: this.props.mediaHeight } },
                React.createElement(bluerain_os_1.default.Components.View, { style: Object.assign({ padding: 16 }, directionStyle, { width: this.props.mediaWidth, height: this.props.mediaHeight }) },
                    overlayTitleProp,
                    overlaySubtitleProp,
                    overlayOverlineProp))));
    }
}
exports.default = CardViewMedia;
//# sourceMappingURL=CardViewMedia.component.js.map