var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("div", null, 
      React.createElement("p", null, 
        "Hello, ", React.createElement("input", {type: "text", placeholder: "Your name here"}), "!" + ' ' +
        "It is ", this.props.date.toTimeString()
      ), 
    React.createElement("p", null, 
        "Hello, ", React.createElement("input", {type: "text", placeholder: "Your name here"}), "!" + ' ' +
        "It is ", this.props.date.toTimeString()
      )
      )
    );
  }
});

setInterval(function() {
  React.render(
    React.createElement(HelloWorld, {date: new Date()}),
    document.getElementById('hello')
  );
}, 500);