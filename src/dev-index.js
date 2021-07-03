import editor from '@easylogic/editor';
import '@easylogic/editor/dist/editor.css';

import ColorAssetPlugin from './ColorAssetPlugin';

editor.createDesignEditor({
    container: document.getElementById('app'),
    plugins: [
        ColorAssetPlugin,
    ]
})