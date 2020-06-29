import React from "react";

class List extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <li key={item}>
          <input
            value={item}
            onChange={(event) => {
              this.props.onChange(event.currentTarget.value, index);
            }}
          />
          <button
            onClick={() => {
              this.props.onDelete(index);
            }}
          >
            Delete
          </button>
        </li>
      );
    });

    return <ul>{items}</ul>;
  }
}

export default List;
