import { EditorInstance } from "@easylogic/editor";
import ColorAssetProperty from "./ColorAssetProperty";
 

/**
 * 
 * initialize Feather Icons Plugin 
 * 
 * @param {EditorInstance} editor 
 */
export default function (editor) {

    // register control ui 
    editor.registerMenuItem('asset', { 
        ColorAssetProperty,
    })
}
