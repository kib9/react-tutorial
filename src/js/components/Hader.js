import React from "react";
import Title from "./Header/Title"

export default class Header extends React.Component {
  handleChange(e) {
    const input = e.target.value;
    this.props.changeTitle(input);
  }

  render() {
    console.log(this.props);

    return (
      <header>
        <Title title={this.props.title} name={this.props.name} />
        <Title title={this.props.inputTitle} name={this.props.name} />
        <input value={this.props.inputTitle} onChange={this.handleChange.bind(this)} />
      </header>
    );
  }
}
