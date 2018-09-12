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
const Card_1 = require("../../Card");
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_1 = require("@storybook/react");
const Avatar_1 = __importDefault(require("material-ui/Avatar"));
const bluerain_os_1 = __importDefault(require("@blueeast/bluerain-os"));
const Button_1 = __importDefault(require("material-ui/Button"));
const IconButton_1 = __importDefault(require("material-ui/IconButton"));
const PlayArrow_1 = __importDefault(require("material-ui-icons/PlayArrow"));
const SkipNext_1 = __importDefault(require("material-ui-icons/SkipNext"));
const SkipPrevious_1 = __importDefault(require("material-ui-icons/SkipPrevious"));
const Typography_1 = __importDefault(require("material-ui/Typography"));
react_1.storiesOf('Card', module).addDecorator(addon_knobs_1.withKnobs).add('Card with style, className and raised props', () => React.createElement(Card_1.Card, { raised: true, style: { backgroundColor: 'brown' }, className: "bg-main" }, addon_knobs_1.text('label', 'Raised')));
react_1.storiesOf('Card', module).add('Card and raised prop false', () => React.createElement(Card_1.Card, { raised: false, style: { backgroundColor: 'orange' }, className: "bg-main" }, "UnRaised success "));
react_1.storiesOf('Card', module).add('Card with children and tag props', () => React.createElement(Card_1.Card, { style: { maxWidth: 100 }, tag: Card_1.CardHeader }, " hello"));
react_1.storiesOf('Card', module).add('Card with square, tag as Text and elevation as 12 props', () => React.createElement(Card_1.Card, { style: { maxWidth: 100 }, tag: React.createElement(bluerain_os_1.default.Components.Text, null, "Tag"), square: true, elevation: 12 }, "Hello"));
react_1.storiesOf('BluerainCard', module).add('MaterialUI story for music card', () => (React.createElement(Card_1.Card, { style: { width: 350, display: 'flex' } },
    React.createElement("div", null,
        React.createElement(Card_1.CardBody, null,
            React.createElement("h4", null, "Live From Space"),
            React.createElement("h5", { style: { color: 'green' } }, "Mac Miller")),
        React.createElement("div", null,
            React.createElement(IconButton_1.default, { "aria-label": "Previous" },
                React.createElement(SkipNext_1.default, null)),
            React.createElement(IconButton_1.default, { "aria-label": "Play/pause" },
                React.createElement(PlayArrow_1.default, null)),
            React.createElement(IconButton_1.default, { "aria-label": "Next" },
                React.createElement(SkipPrevious_1.default, null)))),
    React.createElement(Card_1.CardMedia, { src: "https://material-ui-next.com/static/images/cards/live-from-space.jpg", style: { width: 200 }, height: 200 }))));
react_1.storiesOf('BluerainCard', module).add('MaterialUI basic Card', () => (React.createElement(Card_1.Card, { style: { maxWidth: 275 } },
    React.createElement(Card_1.CardBody, null,
        React.createElement(Typography_1.default, { style: { marginBottom: 16, fontSize: 14 } }, "Word of the Day"),
        React.createElement(Typography_1.default, { type: "headline", component: "h2" }, "benevolent"),
        React.createElement(Typography_1.default, { style: { marginBottom: 12 } }, "adjective"),
        React.createElement(Typography_1.default, { component: "p" },
            "well meaning and kindly.",
            React.createElement("br", null),
            '"a benevolent smile"')),
    React.createElement(Card_1.CardFooter, null,
        React.createElement(Button_1.default, { dense: true }, "Learn More")))));
react_1.storiesOf('BluerainCard', module).add('MaterialUI Card with all subcomponents', () => (React.createElement(Card_1.Card, { style: { width: 350 } },
    React.createElement(Card_1.CardHeader, { avatar: React.createElement(Avatar_1.default, { "aria-label": "Recipe" }, "R"), action: React.createElement(IconButton_1.default, null,
            React.createElement(PlayArrow_1.default, null)), title: "Shrimp and Chorizo Paella", subheader: "September 14, 2016" }),
    React.createElement(Card_1.CardMedia, { src: "https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg", height: 200 }),
    React.createElement(Card_1.CardBody, null,
        React.createElement(Typography_1.default, { type: "headline", component: "h2" }, "Lizard"),
        React.createElement(Typography_1.default, { component: "p" }, "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica")),
    React.createElement(Card_1.CardFooter, null,
        React.createElement(Button_1.default, { dense: true, color: "primary" }, "Share"),
        React.createElement(Button_1.default, { dense: true, color: "primary" }, "Learn More")))));
//# sourceMappingURL=Card.stories.js.map