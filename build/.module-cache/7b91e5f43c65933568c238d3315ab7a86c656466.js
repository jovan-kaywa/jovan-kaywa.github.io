var MyComponent = React.createClass({displayName: "MyComponent",
    getInitialState: function(){
        return {
            count: 5
        }
    },
    render: function(){
        return (
            React.createElement("h1", null, this.state.count)
        )
    }
});