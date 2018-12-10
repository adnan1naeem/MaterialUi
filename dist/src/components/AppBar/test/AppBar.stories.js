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
const AppBar_1 = require("../../AppBar");
// import { Button } from '../../Button';
const Button_1 = __importDefault(require("@material-ui/core/Button"));
const addon_knobs_1 = require("@storybook/addon-knobs");
const react_1 = require("@storybook/react");
const Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
const Notifications_1 = __importDefault(require("@material-ui/icons/Notifications"));
const IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
const Badge_1 = __importDefault(require("@material-ui/core/Badge"));
const stories = react_1.storiesOf('AppBar', module);
const AppBarStoriesStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 0
};
stories.addDecorator(addon_knobs_1.withKnobs).add('AppBar with primary color and position="fixed"', () => {
    return (React.createElement(AppBar_1.AppBar, { left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), title: addon_knobs_1.text('Title', 'title'), right: React.createElement(Button_1.default, { color: "primary" }, "Login"), position: "fixed", color: "primary", style: { backgroundColor: 'red' } }));
});
stories.addDecorator(addon_knobs_1.withKnobs).add('AppBar with primary color, position fixed and right elements"', () => {
    return (React.createElement(AppBar_1.AppBar, { left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), title: addon_knobs_1.text('Title', 'title'), right: React.createElement(IconButton_1.default, { color: "inherit" },
            React.createElement(Badge_1.default, { badgeContent: 17, color: "secondary" },
                React.createElement(Notifications_1.default, null))), position: "fixed", color: "primary", style: { backgroundColor: 'red' } }));
});
stories.add('AppBar with primary color and  position="absolute"', () => {
    return (React.createElement(AppBar_1.AppBar, { position: "absolute", left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), title: 'Title', right: React.createElement(Button_1.default, { color: "secondary" }, "Login"), color: "primary" }));
});
stories.add('AppBar with positiion="sticky"', () => {
    return (React.createElement(AppBar_1.AppBar, { position: "sticky", left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), title: 'Title', right: React.createElement(Button_1.default, { color: "secondary" }, "Login"), color: "primary" }));
});
stories.add('AppBar with inherit color', () => {
    return (React.createElement(AppBar_1.AppBar, { color: "inherit", left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), title: 'Title', right: React.createElement(Button_1.default, { color: "primary" }, "Login") }));
});
stories.add('AppBar with default color', () => {
    return (React.createElement(AppBar_1.AppBar, { color: "default", left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), title: 'Title', right: React.createElement(Button_1.default, { color: "primary" }, "Login") }));
});
stories.add('AppBar without right prop', () => {
    return (React.createElement(AppBar_1.AppBar, { left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), title: 'Title' }));
});
stories.add('AppBar without  left prop', () => {
    return (React.createElement(AppBar_1.AppBar, { title: 'Title', right: React.createElement(Button_1.default, { color: "primary" }, "Login") }));
});
stories.add('AppBar without title & position', () => {
    return (React.createElement(AppBar_1.AppBar, { left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), right: React.createElement(Button_1.default, { color: "primary" }, "Login") }));
});
stories.add('AppBar with color="secondary" & position="absolute"', () => {
    return (React.createElement(AppBar_1.AppBar, { color: "secondary", position: "absolute", left: React.createElement(Button_1.default, { style: AppBarStoriesStyle },
            React.createElement(Menu_1.default, null)), right: React.createElement(Button_1.default, { color: "primary" }, "Login") }));
});
// stories.add('AppBar with left ,right and title approach', () => {
// 	return (
// 		<AppBar
// 			left={<Button transparent><ArrowBack/></Button>}
// 			title="appbar"
// 			right={<Button transparent>Cancel</Button>}
// 		/>
// 	);
// });
// stories.add('AppBar with position approach', () => {
// 	return (
// 		<AppBar
// 			position="fixed"
// 			left={<Button transparent><ArrowBack/></Button>}
// 			title="appbar"
// 			right={<Button transparent>Cancel</Button>}
// 		/>
// 	);
// });
// stories.add('AppBar with style object', () => {
// 	return (<AppBar style={{ backgroundColor: 'red' }} />);
// });
// stories.add('AppBar with only left node', () => {
// 	return (<AppBar left={<Button transparent><ArrowBack /></Button>} />);
// });
// stories.add('AppBar with only right node', () => {
// 	return (<AppBar right={<Button transparent>Cancel</Button>} />);
// });
// stories.add('AppBar with only title', () => {
// 	return (<AppBar title="appbar" />);
// });
//# sourceMappingURL=AppBar.stories.js.map