var MyComponent = React.createClass({displayName: "MyComponent",
    render: function(){
        return (
            React.createElement("h1", null, "Hello, worl2d!")
        );
    }
});

React.render(
    React.createElement(MyComponent, null),
    document.getElementById('myDiv')
);