"use strict";
class WhatsYourName extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.onNameChange = this.onNameChange.bind(this);
  }
  onNameChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    var textD;
    if (this.state.name.length>0){
     textD= "Hello "+this.state.name
    }
    else {
      textD="Hey there. Enter your name."
    }
    return (
      <div>
        <p>{textD}</p>
        <input type="text" name="name" onChange={this.onNameChange} />
      </div>
    );
  }
}



React.render(<WhatsYourName/>, document.getElementById('click'));