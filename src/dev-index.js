import editor from '@easylogic/editor';
import '@easylogic/editor/dist/editor.css';

import LineChart from './LineChart';
import AreaChart from './AreaChart';
import BarChart from './BarChart';

editor.createDesignEditor({
    container: document.getElementById('app'),
    plugins: [
        LineChart,
        AreaChart,
        BarChart
    ]
})