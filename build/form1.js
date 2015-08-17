var Form = MyFormComponent;

var App = (
  React.createElement(Form, null, 
    React.createElement(Form.Row, null, 
      React.createElement(Form.Label, null), 
      React.createElement(Form.Input, null)
    )
  )
);

var MyFormComponent = React.createClass({displayName: "MyFormComponent",  
 render: function() {
    return React.createElement("input", {type: "text", value: "Hello!"});
  } });

MyFormComponent.Row = React.createClass({displayName: "Row", 
  render: function() {
    return React.createElement("input", {type: "text", value: "Hello!"});
  } });
MyFormComponent.Label = React.createClass({displayName: "Label", 
  render: function() {
    return React.createElement("input", {type: "text", value: "Hello!"});
  }});
MyFormComponent.Input = React.createClass({displayName: "Input", 
  render: function() {
    return React.createElement("input", {type: "text", value: "Hello!"});
  } });


React.render(React.createElement(Form, null), document.getElementById('form1'));