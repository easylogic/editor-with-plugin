import { Component } from "@easylogic/editor";
import { AREA_CHART_TYPE } from "./constants";

export class AreaChartLayer extends Component {

  getDefaultObject(obj = {}) {
    return super.getDefaultObject({
      itemType: AREA_CHART_TYPE,
      name: "New Chart",
      chartType: 'areaChart',
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
    return "Area Chart";
  }

}
