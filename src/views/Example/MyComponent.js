import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Tan Nguyen",
    birthday: "10/05/2003",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    console.log("hit the button");
    alert("click me");
  };

  render() {
    return (
      <>
        <div className="frist">
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
          My name is {this.state["name"]}
        </div>
        <div className="second">My birthday is {this.state.birthday}</div>
        <div className="third">
          <button onClick={() => this.handleClickButton()}>Click me!</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
