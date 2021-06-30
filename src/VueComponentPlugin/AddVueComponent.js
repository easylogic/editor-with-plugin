
import { MenuItem } from "@easylogic/editor";
import { VUE_COMPONENT_TYPE } from "./constants";

export default class AddReactComponent extends MenuItem {
  getIconString() {
    return 'add_box';
  }

  getTitle() {
    return this.props.title || "React Component";
  }

  isHideTitle() {
    return true; 
  }  

  clickButton(e) {
    this.emit('addLayerView', VUE_COMPONENT_TYPE);
  }

}