//These libraries are appended by Browserify
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  render: function() {
    return (
    <div>
      <h1>CONTENT AREA</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  )
  }
});

ReactDOM.render(
  <MainInterface />,
  document.getElementById('contentArea')
);
