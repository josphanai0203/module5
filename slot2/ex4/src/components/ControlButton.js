import React, { Component } from "react";
import Intro from "./Intro";

class ControlButton extends Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
    };
  }
  handleClick = (isExpand) => {
    this.setState({ isExpanded: !isExpand });
  };
  render() {
    return (
      <>
        {this.state.isExpanded ? (
          <>
            <div
              style={{
                backgroundColor: "green",
                textAlign: "center",
                padding: "20px",
              }}
            >
              Conditional Rendering
            </div>
            <button onClick={() => this.handleClick(this.state.isExpanded)}>
              Đóng Giới THiệu
            </button>
            <Intro></Intro>
          </>
        ) : (
          <>
            <div
              style={{
                backgroundColor: "green",
                textAlign: "center",
                padding: "20px",
              }}
            >
              Conditional Rendering
            </div>
            <button onClick={() => this.handleClick(this.state.isExpanded)}>
              Mở Giới THiệu
            </button>
          </>
        )}
      </>
    );
  }
}

export default ControlButton;
