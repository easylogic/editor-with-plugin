import Color from '@easylogic/color';
import { BaseProperty, CLICK, DEBOUNCE, DRAGSTART, icon, LOAD, SUBSCRIBE } from "@easylogic/editor";

import colors from "./colors";
import i18n from "./i18n";

import'./scss/color-assets.scss';

export default class ColorAssetsProperty extends BaseProperty {

  getTitle() {
    return i18n.get('color.asset.property.title', {}, this.$editor.locale);
  }

  initState() {
    return {
      mode: 'grid',
      preset: 'random',
      isLoaded: false,
    }
  }

  getTools() {
    return /*html*/`<div ref="$tools"></div>`
  }

  [LOAD('$tools')]() {
    const options = colors.map(it => `${it.key}:${it.title}`)

    return /*html*/`
      <object refClass="SelectEditor"  key="preset" value="${this.state.preset}" options="${options}" onchange="changePreset"  />
    `
  }

  [SUBSCRIBE('changePreset')](key, value) {

    this.setState({
      [key]: value
    })
  }

  getClassName() {
    return 'color-assets-property'
  }

  [SUBSCRIBE('refreshSelection') + DEBOUNCE(100)]() {
    this.show();
  }

  getBody() {
    return /*html*/`
      <div class='property-item color-assets'>
        <div class='color-list' ref='$colorList' data-view-mode='${this.state.mode}'></div>
      </div>
    `;
  }


  [DRAGSTART('$colorList .color-item')](e) {
    const color = e.$dt.attr('data-color');
    e.dataTransfer.effectAllowed = "copy";
    e.dataTransfer.setData("text/color", color);
  }

  [LOAD("$colorList")]() {
    var preset = colors.find(it => it.key === this.state.preset);

    if (!preset) {
      return '';
    }

    var results = preset.execute().map((item, index) => {

      return /*html*/`
        <div class='color-item' data-index="${index}" data-color="${item.color}" data-custom="${item.custom}">
          <div class='preview' draggable="true" title="${item.color}" data-index="${index}">
            <div class='color-view' style='background-color: ${item.color};'></div>
          </div>
        </div>
      `
    })

    if (preset.edit) {
      results.push(`<div class='add-color-item'><butto type="button">${icon.add}</button></div>`)
    }

    return results
  }

  executeColor(callback, isRefresh = true, isEmit = true) {
    var project = this.$selection.currentProject;

    if (project) {

      callback && callback(project)

      if (isRefresh) this.refresh();
      if (isEmit) this.emit('refreshColorAssets');
    } else {
      alert('Please select a project.')
    }
  }

  [CLICK('$colorList .add-color-item')]() {

    this.executeColor((project) => {
      project.createColor({
        color: Color.random(),
        name: '',
        variable: ''
      })
    })
  }

  [CLICK("$colorList .preview")](e) {

    const color = e.$dt.$('.color-view').css('background-color');

    // view 에 따라 다른 속성을 가진다. 
    if (this.$editor.modeView === 'CanvasView') {
      this.emit('addBackgroundColor', color)
    } else {
      this.emit('setColorAsset', { color })
    }
  }
}