//These libraries will be appended by Browserify
//var $ = require('jquery');
//var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');

class MainInterface extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      type: "w",
      dateArray: getDateArray("m")
    }
  }

render() {
  var chosenDates = this.state.dateArray;
  chosenDates = chosenDates.map(function(item, index) {
    return(
      <th key={index}>{ this.state.dateArray[index]}</th>
    ) //return
  }.bind(this)); //chosenDates.map
  return (
    <div>
      <table className="res-table">
        <thead>
          <tr>
            {chosenDates}
          </tr>
        </thead>
      </table>
    </div>
  )
}

};

ReactDOM.render(
  <MainInterface />,
  document.getElementById('contentArea')
);
