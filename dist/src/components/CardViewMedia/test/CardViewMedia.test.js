"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_1 = __importDefault(require("react"));
require("jest");
const bluerain_os_1 = require("@blueeast/bluerain-os");
function handleTextInputChange() {
    console.log('I am clicked');
}
test('Cardview componenet overlay title direction top left', () => {
    const cardviewmedia = react_test_renderer_1.default.create(react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => react_1.default.createElement(__1.CardViewMedia, { overlayTitle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), overlayColor: 'rgba(30,24,40,0.35)', mediaComponent: 'img', overlayDirection: 'topLeft', mediaWidth: 250, mediaHeight: 250, src: "https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60" }))).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('topeft');
    expect(cardviewmedia).toMatchSnapshot();
});
test('Cardview componenet overlay title with top right direction', () => {
    const cardviewmedia = react_test_renderer_1.default.create(react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => react_1.default.createElement(__1.CardViewMedia, { overlayTitle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), overlayColor: 'rgba(30,24,40,0.35)', mediaComponent: 'img', overlayDirection: 'topRight', mediaWidth: 250, mediaHeight: 250, src: "https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60" }))).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('topRIght');
    expect(cardviewmedia).toMatchSnapshot();
});
test('Cardviewmeida component image and  overlay title in bottom left  ', () => {
    const cardviewmedia = react_test_renderer_1.default.create(react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => react_1.default.createElement(__1.CardViewMedia, { overlayTitle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), overlayColor: 'rgba(30,24,40,0.35)', mediaComponent: 'img', overlayDirection: 'bottomLeft', mediaWidth: 250, mediaHeight: 250, src: "https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60" }))).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('bottomLeft');
    expect(cardviewmedia).toMatchSnapshot();
});
test('Cardviewmeida component image and  overlay title in bottom right  ', () => {
    const cardviewmedia = react_test_renderer_1.default.create(react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => react_1.default.createElement(__1.CardViewMedia, { overlayTitle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), overlayColor: 'rgba(30,24,40,0.35)', mediaComponent: 'img', overlayDirection: 'bottomRight', mediaWidth: 250, mediaHeight: 250, src: "https://images.unsplash.com/photo-1541828985935-1fe979f9fc0b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ae3092ed745c9b579463975f7494ad&auto=format&fit=crop&w=500&q=60" }))).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('bottomRight');
    expect(cardviewmedia).toMatchSnapshot();
});
test('Cardviewmeida component video and  overlay title in bottom right  ', () => {
    const cardviewmedia = react_test_renderer_1.default.create(react_1.default.createElement(bluerain_os_1.BlueRainConsumer, null, (BR) => react_1.default.createElement(__1.CardViewMedia, { overlayTitle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Overline, { style: { color: 'white' } }, "Overline")), overlaySubTiltle: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.H5, { style: { color: 'white' } }, "Basics of Brand Identity")), overlayOverline: react_1.default.createElement(BR.Components.View, null,
            react_1.default.createElement(BR.Components.Subtitle2, { style: { color: 'white' } }, "Subtitle2")), overlayColor: 'rgba(30,24,40,0.35)', mediaComponent: 'img', overlayDirection: 'bottomRight', mediaWidth: 250, mediaHeight: 250, src: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }))).toJSON();
    expect(cardviewmedia.props.overlayDirection).toEqual('bottomRight');
    expect(cardviewmedia).toMatchSnapshot();
});
//# sourceMappingURL=CardViewMedia.test.js.map