//These libraries will be appended by Browserify
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      type: "Some content here"
    } //return
  }, //getInitialState

  render: function() {
    return (
    <div>
      <h1>CONTENT AREA</h1>
      <table className="res-table">
        <thead>
          <tr>
            <th>{ this.state.type }</th>
          </tr>
        </thead>
      </table>
    </div>
  )
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('contentArea')
);
