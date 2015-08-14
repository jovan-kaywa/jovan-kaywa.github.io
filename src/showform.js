var Search = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onChange: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
            <h3>Display new field on onput field change</h3>
                <input type="text" name="name" placeholder="First field" onChange={this.onChange} />
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
});

var Results = React.createClass({
    render: function() {
        return (
            <div id="results" className="search-results">
                                <input type="text" name="name" placeholder="Second field" />
            </div>
        );
    }
});

React.render(<Search />, document.getElementById('showForm'));