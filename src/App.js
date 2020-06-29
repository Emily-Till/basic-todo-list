import React from "react";
import List from "./features/list";
import AddButton from "./features/add-button";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listItems: ["two"] };
  }
  render() {
    return (
      <div className="App">
        <List
          items={this.state.listItems}
          onChange={(value, index) => {
            const newListItems = [...this.state.listItems];
            //delete old value and insert new value
            newListItems.splice(index, 1, value);

            this.setState({
              listItems: newListItems,
            });
          }}
          onDelete={(index) => {
            const newListItems = [...this.state.listItems];
            //delete item from list
            newListItems.splice(index, 1);
            this.setState({
              listItems: newListItems,
            });
          }}
        />
        <AddButton
          onClick={() => {
            const newListItems = [...this.state.listItems];
            newListItems.push("");

            this.setState({
              listItems: newListItems,
            });
          }}
        />
      </div>
    );
  }
}
export default App;
