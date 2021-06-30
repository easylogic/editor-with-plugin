import { Component } from "@easylogic/editor";
import { BAR_CHART_TYPE } from "./constants";

export class BarChartLayer extends Component {

  getDefaultObject(obj = {}) {
    return super.getDefaultObject({
      itemType: BAR_CHART_TYPE,
      name: "New Chart",
      chartType: 'barChart',
      chartOption: {},
      chartData: {},
      'background-color': 'transparent',
      ...obj
    }); 
  }

  toCloneObject() {

    return {
      ...super.toCloneObject(),
      ...this.attrs(
        'chartType',
        'chartData',
        'chartOption',
      ),
    }
  }

  enableHasChildren() {
    return false; 
  }

  getDefaultTitle() {
    return "Bar Chart";
  }

}
