import { MenuItem } from "@easylogic/editor";



export default class AddBarChart extends MenuItem {
  getIconString() {
    return 'bar_chart';
  }

  getTitle() {
    return this.props.title || "Bar Chart";
  }

  isHideTitle() {
    return true; 
  }  

  clickButton(e) {

    this.emit('addBarChartLayer')
  }

}