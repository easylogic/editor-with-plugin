import editor from '@easylogic/editor';
import '@easylogic/editor/dist/editor.css';

import VuewComponentPlugin from './VueComponentPlugin';

editor.createDesignEditor({
    container: document.getElementById('app'),
    plugins: [
        VuewComponentPlugin
    ]
})