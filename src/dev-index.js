import editor from '@easylogic/editor';
import '@easylogic/editor/dist/editor.css';

import AntDesignIconsPlugin from './AntDesignIconsPlugin';

editor.createDesignEditor({
    container: document.getElementById('app'),
    plugins: [
        AntDesignIconsPlugin,
    ]
})