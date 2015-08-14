
var ShowForm = React.createClass ({ 
 render: function() {
    return (
    	<div>
    	<h3>To Do</h3>
    	<ol>
    	<li className="checked">Show next element</li>
    	<li>Validation</li>
    	</ol>
    	</div>
    	);
    

  }
});


React.render(<ShowForm/>, document.getElementById('toDo'));
