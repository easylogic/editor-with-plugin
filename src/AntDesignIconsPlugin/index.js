import { EditorInstance } from "@easylogic/editor";
import AntDesignIconsSelectProperty from "./AntDesignIconsSelectProperty";
 

/**
 * 
 * initialize Feather Icons Plugin 
 * 
 * @param {EditorInstance} editor 
 */
export default function (editor) {

    // register control ui 
    editor.registerMenuItem('library', { 
        AntDesignIconsSelectProperty,
    })
}
