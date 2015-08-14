var ShowForm = React.createClass ({displayName: "ShowForm", 
 render: function() {
    return (
    	React.createElement("div", null, 
    	React.createElement("h3", null, "To Do"), 
    	React.createElement("ol", null, 
    	React.createElement("li", null, "Show next element"), 
    	React.createElement("li", null, "Validation")
    	)
    	)
    	);
    

  }
});


React.render(React.createElement(ShowForm, null), document.getElementById('toDo'));
