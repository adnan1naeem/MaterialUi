"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const bluerain_os_1 = require("@blueeast/bluerain-os");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
const withMUI = (App, theme, ctx) => (props) => {
    if (props.intl !== undefined && props.intl.rtl !== undefined) {
        theme.isRtl = props.intl.rtl;
    }
    theme = ctx.Filters.run('material-ui.theme', theme);
    const muiTheme = getMuiTheme_1.default(theme);
    const style = { direction: theme.isRtl ? 'rtl' : 'ltr' };
    return (react_1.default.createElement(MuiThemeProvider_1.default, { muiTheme: muiTheme },
        react_1.default.createElement(App, Object.assign({}, props, { style: style }))));
};
/**
 * Material UI Plugin
 * @property {string} pluginName "MaterialUiPlugin"
 * @property {string} slug "material-ui"
 */
class MaterialUiPlugin extends bluerain_os_1.Plugin {
    static initialize(config = {}, ctx) {
        let theme = ctx.Configs.get('theme');
        if (!theme) {
            theme = {};
        }
        // Add Material UI Provider
        ctx.Filters.add('bluerain.redux.app', function AddMUI(App) {
            const result = withMUI(App, theme, ctx);
            // Wrap in Intl, if intl plugin is installed
            if (ctx.Plugins.get('intl')) {
                return ctx.Plugins.get('intl').withIntl(result);
            }
            return result;
        });
    }
}
MaterialUiPlugin.pluginName = 'MaterialUiPlugin';
MaterialUiPlugin.slug = 'material-ui';
exports.default = MaterialUiPlugin;
