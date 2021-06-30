import { EditorInstance } from "@easylogic/editor";
import AddLineChart from "./AddLineChart";
import { LINE_CHART_TYPE } from "./constants";
import LineChartHTMLRender from "./LineChartHTMLRender";
import { LineChartLayer } from "./LineChartLayer";
import { LineChartLayerInspector  } from "./LineChartLayerInspector";

/**
 * 
 * initialize LineChart Plugin 
 * 
 * @param {EditorInstance} editor 
 */
export default function (editor) {

    // register item layer 
    editor.registerItem(LINE_CHART_TYPE, LineChartLayer )    

    // register inspector editor 
    editor.registerInspector(LINE_CHART_TYPE, LineChartLayerInspector)

    // register html renderer 
    editor.registerRenderer('html', LINE_CHART_TYPE, new LineChartHTMLRender() )    

    // register control ui 
    editor.registerMenuItem('sidebar', { 
        AddLineChart,
    })
}
