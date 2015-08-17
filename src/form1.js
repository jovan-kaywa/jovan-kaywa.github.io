var Form = MyFormComponent;

var App = (
  <Form>
    <Form.Row>
      <Form.Label />
      <Form.Input />
    </Form.Row>
  </Form>
);

var MyFormComponent = React.createClass({  
 render: function() {
    return <input type="text" value="Hello!" />;
  } });

MyFormComponent.Row = React.createClass({ 
  render: function() {
    return <input type="text" value="Hello!" />;
  } });
MyFormComponent.Label = React.createClass({ 
  render: function() {
    return <input type="text" value="Hello!" />;
  }});
MyFormComponent.Input = React.createClass({ 
  render: function() {
    return <input type="text" value="Hello!" />;
  } });


React.render(<Form />, document.getElementById('form1'));