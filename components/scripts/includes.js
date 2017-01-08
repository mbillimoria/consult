//These libraries will be appended by Browserify
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  render: function() {
    return (
    <div>
      <h1>CONTENT AREA</h1>
      <table className="res-table">
        <tr></tr>
          <th>1</th>
      </table>
    </div>
  )
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('contentArea')
);
