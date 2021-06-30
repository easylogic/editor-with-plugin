import { Component } from "@easylogic/editor";
import { LINE_CHART_TYPE } from "./constants";

export class LineChartLayer extends Component {

  getDefaultObject(obj = {}) {
    return super.getDefaultObject({
      itemType: LINE_CHART_TYPE,
      name: "New Chart",
      chartType: 'lineChart',
      chartOption: {},
      chartData: {},
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
    return "Line Chart";
  }

}
