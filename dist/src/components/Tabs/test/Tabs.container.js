"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
const __1 = require("../");
const Tab_1 = require("../../Tab");
const Phone_1 = __importDefault(require("@material-ui/icons/Phone"));
const Favorite_1 = __importDefault(require("@material-ui/icons/Favorite"));
const PersonPin_1 = __importDefault(require("@material-ui/icons/PersonPin"));
const Help_1 = __importDefault(require("@material-ui/icons/Help"));
const ShoppingBasket_1 = __importDefault(require("@material-ui/icons/ShoppingBasket"));
const ThumbDown_1 = __importDefault(require("@material-ui/icons/ThumbDown"));
const ThumbUp_1 = __importDefault(require("@material-ui/icons/ThumbUp"));
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
function TabContainer(props) {
    return (react_1.default.createElement(Typography_1.default, { component: "div", style: { padding: 8 * 3 } }, props.children));
}
const styles = {
    root: {
        flexGrow: 1,
        width: '100%',
    },
};
class ScrollableTabsButtonForce extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: 0,
        };
        this.handleChange = (event, value) => {
            this.setState({ value });
        };
    }
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (react_1.default.createElement("div", { style: styles.root },
            react_1.default.createElement(AppBar_1.default, { position: "static", color: "default" },
                react_1.default.createElement(__1.Tabs, { value: value, onChange: this.handleChange, scrollable: true, scrollButtons: "on", indicatorColor: "primary", textColor: "primary" },
                    react_1.default.createElement(Tab_1.Tab, { label: "Item One", icon: react_1.default.createElement(Phone_1.default, null) }),
                    react_1.default.createElement(Tab_1.Tab, { label: "Item Two", icon: react_1.default.createElement(Favorite_1.default, null) }),
                    react_1.default.createElement(Tab_1.Tab, { label: "Item Three", icon: react_1.default.createElement(PersonPin_1.default, null) }),
                    react_1.default.createElement(Tab_1.Tab, { label: "Item Four", icon: react_1.default.createElement(Help_1.default, null) }),
                    react_1.default.createElement(Tab_1.Tab, { label: "Item Five", icon: react_1.default.createElement(ShoppingBasket_1.default, null) }),
                    react_1.default.createElement(Tab_1.Tab, { label: "Item Six", icon: react_1.default.createElement(ThumbDown_1.default, null) }),
                    react_1.default.createElement(Tab_1.Tab, { label: "Item Seven", icon: react_1.default.createElement(ThumbUp_1.default, null) }))),
            value === 0 && react_1.default.createElement(TabContainer, null, "Item One"),
            value === 1 && react_1.default.createElement(TabContainer, null, "Item Two"),
            value === 2 && react_1.default.createElement(TabContainer, null, "Item Three"),
            value === 3 && react_1.default.createElement(TabContainer, null, "Item Four"),
            value === 4 && react_1.default.createElement(TabContainer, null, "Item Five"),
            value === 5 && react_1.default.createElement(TabContainer, null, "Item Six"),
            value === 6 && react_1.default.createElement(TabContainer, null, "Item Seven")));
    }
}
exports.default = ScrollableTabsButtonForce;
//# sourceMappingURL=Tabs.container.js.map