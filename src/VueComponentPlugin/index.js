import { VueComponentLayer } from "./VueComponentLayer";
import { VueComponentLayerInspector } from "./VueComponentLayerInspector";
import { VUE_COMPONENT_TYPE } from "./constants";
import AddVueComponent from "./AddVueComponent";
import VueComponentHTMLRender from "./VueComponentHTMLRender";
import { EditorInstance } from "@easylogic/editor";

/**
 * 
 * initialize ReactComponent Plugin 
 * 
 * @param {EditorInstance} editor 
 */
export default function (editor) {

    // register item layer 
    editor.registerItem(VUE_COMPONENT_TYPE, VueComponentLayer )    

    // register inspector editor 
    editor.registerInspector(VUE_COMPONENT_TYPE, VueComponentLayerInspector)

    // register html renderer 
    editor.registerRenderer('html', VUE_COMPONENT_TYPE, new VueComponentHTMLRender() )    

    // register control ui 
    editor.registerMenuItem('sidebar', { 
        AddVueComponent,
    })
}
