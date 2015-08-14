var Search = React.createClass({displayName: "Search",
    getInitialState: function() {
        return { showResults: false };
    },
    onChange: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        return (
            React.createElement("div", null, 
            React.createElement("h3", null, "Display new field on onput field change"), 
                React.createElement("input", {type: "text", name: "name", placeholder: "First field", onChange: this.onChange}), 
                 this.state.showResults ? React.createElement(Results, null) : null
            )
        );
    }
});

var Results = React.createClass({displayName: "Results",
    render: function() {
        return (
            React.createElement("div", {id: "results", className: "search-results"}, 
                                React.createElement("input", {type: "text", name: "name", placeholder: "Second field"})
            )
        );
    }
});

React.render(React.createElement(Search, null), document.getElementById('showForm'));