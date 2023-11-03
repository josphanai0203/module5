import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      items: [],
    };
  }
  handleClick = () => {
    if (this.state.data !== "") {
      this.setState((pre) => {
        return {
          data: "",
          items: [
            ...pre.items,
            {
              text: this.state.data,
            },
          ],
        };
      });
    }
  };
  handleDelete = (index) => {
    this.setState((pre) => {
      pre.items.splice(index, 1);
      return {
        items: [...pre.items],
      };
    });
  };
  render() {
    return (
      <div className="App">
        <p style={{ padding: "20px", alignItems: "center" }}>
          <b>Todo List</b>
        </p>
        <input
          type="text"
          value={this.state.data}
          onChange={(e) => this.setState({ data: e.target.value })}
        ></input>
        <button type="button" onClick={() => this.handleClick()}>
          add
        </button>
        <div style={{ marginTop: "20px" }}>
          {this.state.items.map((item, index) => (
            <span
              key={index}
              style={{
                padding: "4px",
                alignItems: "center",
                border: "1px solid #000",
                borderRadius: "8px",
                marginRight: "8px",
              }}
            >
              {item.text}
              <button
                style={{ border: "none", backgroundColor: "#FFF" }}
                onClick={() => this.handleDelete(index)}
              >
                X
              </button>
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
