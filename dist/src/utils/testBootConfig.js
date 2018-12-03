"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bluerain_os_1 = __importStar(require("@blueeast/bluerain-os"));
class ReactNative extends bluerain_os_1.Plugin {
}
ReactNative.pluginName = 'ReactNative';
ReactNative.slug = 'react-native';
bluerain_os_1.default.Configs.set('plugins.user-management.logos.default.src', '/image');
bluerain_os_1.default.Configs.set('plugins.user-management.logos.default.width', 20);
bluerain_os_1.default.Configs.set('plugins.user-management.logos.default.height', 40);
bluerain_os_1.default.Components.set('View', () => null);
bluerain_os_1.default.Components.set('Image', () => null);
bluerain_os_1.default.Components.set('Button', () => null);
bluerain_os_1.default.Components.set('TextInput', () => null);
bluerain_os_1.default.Components.set('IntlConsumer', () => null);
bluerain_os_1.default.Components.set('TaskbarActions', () => null);
bluerain_os_1.default.Components.set('GraphqlMutation', () => null);
bluerain_os_1.default.Components.set('Route', () => null);
bluerain_os_1.default.Components.set('Link', () => null);
bluerain_os_1.default.Components.set('Body2', () => null);
bluerain_os_1.default.Components.set('Body1', () => null);
bluerain_os_1.default.Components.set('StatefulComponent', () => null);
bluerain_os_1.default.Components.set('Caption', () => null);
bluerain_os_1.default.Components.set('Caption', () => null);
bluerain_os_1.default.Components.set('ActivityIndicator', () => null);
bluerain_os_1.default.Components.set('Text', () => null);
bluerain_os_1.default.Components.set('List', () => null);
bluerain_os_1.default.Components.set('ListItem', () => null);
bluerain_os_1.default.Components.set('Menu', () => null);
bluerain_os_1.default.Components.set('MenuItem', () => null);
bluerain_os_1.default.Components.set('Avatar', () => null);
bluerain_os_1.default.Components.set('RouterSwitch', () => null);
bluerain_os_1.default.Components.set('Store', () => null);
bluerain_os_1.default.Components.set('GraphqlQuery', () => null);
bluerain_os_1.default.Components.set('IconEnhanced', () => null);
bluerain_os_1.default.Components.set('Redirect', () => null);
bluerain_os_1.default.Components.set('Divider', () => null);
exports.BluerainBoot = () => {
    return bluerain_os_1.default.boot({ platform: [ReactNative], renderApp: false });
};
//# sourceMappingURL=testBootConfig.js.map