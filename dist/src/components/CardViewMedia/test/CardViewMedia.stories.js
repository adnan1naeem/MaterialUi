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
const __1 = require("../");
const addon_knobs_1 = require("@storybook/addon-knobs");
const bluerain_os_1 = require("@blueeast/bluerain-os");
const bluerain_os_2 = __importDefault(require("@blueeast/bluerain-os"));
const react_1 = require("@storybook/react");
const font = {
    color: 'white',
};
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with image and overlaytitle position top left', () => (React.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => React.createElement(__1.CardViewMedia, { overlayTitle: React.createElement(BR.Components.View, null,
        React.createElement(BR.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: React.createElement(BR.Components.View, null,
        React.createElement(BR.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: React.createElement(BR.Components.View, null,
        React.createElement(BR.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), overlayColor: 'rgba(30,24,40,0.35)', mediaComponent: 'img', overlayDirection: 'topLeft', mediaWidth: 250, mediaHeight: 250, src: "https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60" }))));
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with image and overlaytitle position top right', () => (React.createElement(__1.CardViewMedia, { overlayDirection: 'topRight', mediaComponent: 'img', overlayColor: 'rgba(30,24,40,0.35)', overlayTitle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), mediaWidth: 250, mediaHeight: 250, src: "https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60" })));
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with image and overlaytitle position bottom left', () => (React.createElement(__1.CardViewMedia, { mediaComponent: 'img', overlayDirection: 'bottomLeft', overlayColor: 'rgba(30,24,40,0.35)', overlayTitle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity ")), overlayOverline: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), mediaWidth: 250, mediaHeight: 250, src: "https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60" })));
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with image and overlaytitle position bottom right', () => (React.createElement(__1.CardViewMedia, { mediaComponent: 'img', overlayDirection: 'bottomRight', overlayColor: 'rgba(30,24,40,0.35)', overlayTitle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), mediaWidth: 250, mediaHeight: 250, src: "https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60" })));
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with video and overlaytitle position top left', () => (React.createElement(__1.CardViewMedia, { mediaComponent: 'iframe', overlayDirection: 'topLeft', overlayColor: 'rgba(30,24,40,0.35)', overlayTitle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), mediaWidth: 250, mediaHeight: 145, src: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' })));
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with video and overlaytitle position top right', () => (React.createElement(__1.CardViewMedia, { mediaComponent: 'iframe', overlayDirection: 'topRight', overlayColor: 'rgba(30,24,40,0.35)', overlayTitle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), mediaWidth: 250, mediaHeight: 145, src: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' })));
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with video and overlaytitle position bottom left', () => (React.createElement(__1.CardViewMedia, { mediaComponent: 'iframe', overlayDirection: 'bottomLeft', overlayColor: 'rgba(30,24,40,0.35)', overlayTitle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), mediaWidth: 250, mediaHeight: 145, src: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' })));
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with video and overlaytitle position bottom right', () => (React.createElement(__1.CardViewMedia, { mediaComponent: 'iframe', overlayDirection: 'bottomRight', overlayColor: 'rgba(30,24,40,0.35)', overlayTitle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: React.createElement(bluerain_os_2.default.Components.View, null,
        React.createElement(bluerain_os_2.default.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), mediaWidth: 250, mediaHeight: 145, src: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' })));
react_1.storiesOf('CardViewMedia', module)
    .addDecorator(addon_knobs_1.withKnobs)
    .add('CardViewMedia with video and overlaytitle position top right icon', () => (React.createElement(__1.CardViewMedia, { overlayColor: 'rgba(30,24,40,0.35)', mediaComponent: 'iframe', overlayDirection: 'topLeft', overlayTitle: React.createElement(bluerain_os_2.default.Components.Icon, { name: 'heart', size: 20, color: "white" }), mediaWidth: 250, mediaHeight: 145, src: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' })));
//# sourceMappingURL=CardViewMedia.stories.js.map