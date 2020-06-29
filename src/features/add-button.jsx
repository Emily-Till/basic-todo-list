import React from "react";

class AddButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>add</button>;
  }
}

export default AddButton;
