var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
      <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
    <p>
        Hello, <input type="text" placeholder="Your name here" />!
        It is {this.props.date.toTimeString()}
      </p>
      </div>
    );
  }
});

setInterval(function() {
  React.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('hello')
  );
}, 500);