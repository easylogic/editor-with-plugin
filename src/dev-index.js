import editor from '@easylogic/editor';
import '@easylogic/editor/dist/editor.css';

import FeatherIconsPlugin from './FeatherIconsPlugin';

editor.createDesignEditor({
    container: document.getElementById('app'),
    plugins: [
        FeatherIconsPlugin,
    ]
})