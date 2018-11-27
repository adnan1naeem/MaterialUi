/// <reference types="react" />
export default class TestPlugin {
    static pluginName: string;
    static components: {
        DummyComponent: () => JSX.Element;
    };
}
