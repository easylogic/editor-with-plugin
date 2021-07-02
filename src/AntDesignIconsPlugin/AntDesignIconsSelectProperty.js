
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';
import * as ant from '@ant-design/icons-svg';
import { BaseProperty, CLICK, DOMDIFF, Length, LOAD, SUBSCRIBE } from '@easylogic/editor';

function toSVG(icon, extraSVGAttrs = {}) {
  return renderIconDefinitionToSVGElement(icon, { extraSVGAttrs })
}

export default class AntDesignIconsSelectProperty extends BaseProperty {

  getClassName() {
    return 'ant-design-icons'
  }

  async afterRender() {
    this.show();
  }

  getTitle() {
    return 'AntDesign Icons';
  }

  getBody() {
    return /*html*/`
      <div class="icons-group" ref="$body"></div>
    `;
  }

  renderIcon(icon, key) {

    return /*html*/`
      <div class='icon-item' data-key="${key}"  title="${icon.name || key}">
        <div class="icon-svg">${toSVG(icon, { fill: 'currentColor' })}</div>
        <div class='title'>${icon.name || key}</div>
      </div>    
    `
  }


  [LOAD('$body') + DOMDIFF]() {

    const icons = ant;

    const keys = Object.keys(icons);

    if (this.state.search) {
      return keys
        .filter(key => {
          return icons[key].name.includes(this.state.search) || key.includes(this.state.search)
        })
        .map(key => this.renderIcon(icons[key], key))
    } else {
      return keys
        .map(key => this.renderIcon(icons[key], key))
    }

  }

  [CLICK('$body .icon-item')](e) {
    var key = e.$dt.data('key');

    const center = this.$viewport.center;

    this.emit('newComponent', 'template', {
      x: Length.px(center[0] - 100),
      y: Length.px(center[1] - 100),
      width: Length.px(200),
      height: Length.px(200),
      'background-color': 'transparent',
      template: toSVG(ant[key], { fill: 'currentColor' })
    });

  }

  [SUBSCRIBE('search')](value) {
    this.setState({
      search: value
    })
  }
}