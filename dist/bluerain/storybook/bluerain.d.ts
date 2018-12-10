declare const _default: {
    apps: undefined[];
    platform: any[];
    plugins: any[];
} & {
    apps: import("@blueeast/bluerain-os/types/models/App").App<{}>[];
    config: import("@blueeast/bluerain-os/types/config").ConfigType;
    renderApp: boolean;
    plugins: import("@blueeast/bluerain-os/types/models/Plugin").Plugin[];
    platform: import("@blueeast/bluerain-os/types/models/Plugin").Plugin[];
    debuggers: import("@blueeast/bluerain-os/types/models/Debugger").Debugger[];
};
export default _default;
