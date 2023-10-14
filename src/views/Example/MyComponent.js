import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tan Nguyen",
    birthday: "10/05/2003",
  };

  render() {
    return (
      <>
        <div className="frist">My name is {this.state["name"]}</div>
        <div className="second">My birthday is {this.state.birthday}</div>
      </>
    );
  }
}

export default MyComponent;
