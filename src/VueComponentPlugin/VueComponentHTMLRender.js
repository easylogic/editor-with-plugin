import { HTMLLayerRender } from '@easylogic/editor';
import { VUE_COMPONENT_TYPE } from './constants';
import createMyComponent from './createMyComponent';
  
export default class VueComponentHTMLRender extends HTMLLayerRender {

  async update (item, currentElement) {

    let $vueComponentArea = currentElement.$(".vue-component-area");
    if ($vueComponentArea) {
      createMyComponent(item.attrs('value', 'background-color'), $vueComponentArea.el);
    }

    await super.update(item, currentElement);
  }    



  /**
  * 
  * @param {Item} item 
  */
  render (item) {
    var {id} = item;

    return /*html*/`
      <div class='element-item ${VUE_COMPONENT_TYPE}' data-id="${id}">
        ${this.toDefString(item)}
        <div class='vue-component-area' data-domdiff-pass="true" style="width:100%;height:100%;"></div>
      </div>`
  }

}