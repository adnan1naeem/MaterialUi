import BR, { Plugin } from '@blueeast/bluerain-os';

class ReactNative extends Plugin {
  static pluginName = 'ReactNative';
  static slug = 'react-native';

}

BR.Configs.set('plugins.user-management.logos.default.src', '/image');
BR.Configs.set('plugins.user-management.logos.default.width', 20);
BR.Configs.set('plugins.user-management.logos.default.height', 40);

BR.Components.set('View', () => null);
BR.Components.set('Image', () => null);
BR.Components.set('Button', () => null);
BR.Components.set('TextInput', () => null);
BR.Components.set('IntlConsumer', () => null);
BR.Components.set('TaskbarActions', () => null);
BR.Components.set('GraphqlMutation', () => null);
BR.Components.set('Route', () => null);
BR.Components.set('Link', () => null);
BR.Components.set('Body2', () => null);
BR.Components.set('Body1', () => null);
BR.Components.set('StatefulComponent', () => null);
BR.Components.set('Caption', () => null);
BR.Components.set('Caption', () => null);
BR.Components.set('ActivityIndicator', () => null);
BR.Components.set('Text', () => null);
BR.Components.set('List', () => null);
BR.Components.set('ListItem', () => null);
BR.Components.set('Menu', () => null);
BR.Components.set('MenuItem', () => null);
BR.Components.set('Avatar', () => null);
BR.Components.set('RouterSwitch', () => null);
BR.Components.set('Store', () => null);
BR.Components.set('GraphqlQuery', () => null);
BR.Components.set('IconEnhanced', () => null);
BR.Components.set('Redirect', () => null);
BR.Components.set('Divider', () => null);

export const BluerainBoot = () => {
  return BR.boot({ platform: [ReactNative], renderApp: false });
};