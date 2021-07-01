import { EditorInstance } from "@easylogic/editor";
import FeatherIconsProperty from "./FeatherIconsProperty";
 

/**
 * 
 * initialize Feather Icons Plugin 
 * 
 * @param {EditorInstance} editor 
 */
export default function (editor) {

    // register control ui 
    editor.registerMenuItem('library', { 
        FeatherIconsProperty,
    })
}
