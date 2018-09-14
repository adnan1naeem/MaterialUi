"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
const react_test_renderer_1 = __importDefault(require("react-test-renderer"));
const react_1 = __importDefault(require("react"));
test('Card component with tag props', () => {
    const card = react_test_renderer_1.default.create(react_1.default.createElement(__1.Card, { tag: "span" })).toJSON();
    expect(card.props.tag).toEqual('span');
    expect(card).toMatchSnapshot();
});
test('Card component with children props', () => {
    const card = react_test_renderer_1.default.create(react_1.default.createElement(__1.Card, { tag: "span" },
        react_1.default.createElement("div", null, "Hello"))).toJSON();
    expect(card.props.children).toEqual(undefined);
    expect(card).toMatchSnapshot();
});
test('CardMedia with children props', () => {
    const cardmedia = react_test_renderer_1.default.create(react_1.default.createElement(__1.CardMedia, { className: "span", src: "https://material-ui-next.com/static/images/remy.jpg" })).toJSON();
    expect(cardmedia.props.className).toEqual('MuiCardMedia-root-28 span');
    expect(cardmedia).toMatchSnapshot();
});
test('CardBody with children props', () => {
    const cardbody = react_test_renderer_1.default.create(react_1.default.createElement(__1.CardBody, { className: "span", style: { width: 200 } })).toJSON();
    expect(cardbody.props.style).toEqual({ width: 200 });
    expect(cardbody).toMatchSnapshot();
});
test('CardHeader with children props', () => {
    const cardheader = react_test_renderer_1.default.create(react_1.default.createElement(__1.CardHeader, { className: "span", title: "hello" }, "second")).toJSON();
    expect(cardheader.props.title).toEqual(undefined);
    expect(cardheader).toMatchSnapshot();
});
test('CardFooter with children props', () => {
    const cardfooter = react_test_renderer_1.default.create(react_1.default.createElement(__1.CardFooter, { className: "span" }, "second")).toJSON();
    expect(cardfooter.props.children).toEqual(undefined);
    expect(cardfooter).toMatchSnapshot();
});
//# sourceMappingURL=Card.test.js.map