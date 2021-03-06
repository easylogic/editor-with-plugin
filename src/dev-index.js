import 'babel-polyfill';

import '@easylogic/editor/dist/editor.css';

async function start() {
    const editor = await import (/* webpackPrefetch: true */ '@easylogic/editor');
    const FeatherIconsPlugin = (await import(/* webpackPrefetch: true */ '@easylogic/editor-plugin-feather-icons')).default;
    const ColorAssetPlugin = (await import(/* webpackPrefetch: true */ '@easylogic/editor-plugin-color-asset')).default;
    const AntDesignIconsPlugin = (await import(/* webpackPrefetch: true */ '@easylogic/editor-plugin-ant-design-icons')).default;
    const PrimerOctIconsPlugin = (await import(/* webpackPrefetch: true */ '@easylogic/editor-plugin-primer-oct-icons')).default;
    const ReactPlugin = (await import(/* webpackPrefetch: true */ '@easylogic/editor-plugin-react')).default;

    editor.createDesignEditor({
        container: document.getElementById('app'),
        plugins: [
            ColorAssetPlugin,
            FeatherIconsPlugin,
            AntDesignIconsPlugin,
            PrimerOctIconsPlugin,
            ReactPlugin
        ]
    })
}

(async () => {
    await start()
})()

