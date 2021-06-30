
import { Component } from "@easylogic/editor";
import { VUE_COMPONENT_TYPE } from "./constants";

export class VueComponentLayer extends Component {

  getDefaultObject(obj = {}) {
    return super.getDefaultObject({
      itemType: VUE_COMPONENT_TYPE,
      name: "New Vue Component",
      value: 'test',
      ...obj
    }); 
  }

  toCloneObject() {

    return {
      ...super.toCloneObject(),
      ...this.attrs(
        'value'
      ),
    }
  }

  enableHasChildren() {
    return false; 
  }

  getDefaultTitle() {
    return "Vue Component";
  }

}
