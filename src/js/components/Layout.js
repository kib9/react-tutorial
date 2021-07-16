import React from "react";
import Header from "./Hader";
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.testValue = 'test value';
    this.state = {
      title: "title",
      name: "sato",
      inputTitle: "default",
    }
  }

  /* <- public class fields syntax を使用することでbind の記載を省略する場合 関数の宣言をこのようにする */
  changeTitle = (inputTitle) => {
    this.setState({inputTitle});
  }

  render() {
    const name = "sato";
    const title = "Welcome Sato!";
    const components = [
      <Header title={title} />,
      <Header title={"Welcome"} name={this.state.name} />,
      <Header changeTitle={this.changeTitle} inputTitle={this.state.inputTitle} />,
      <input />,
      <Footer />,
      <Footer />,
    ];

    setTimeout(() => { this.setState({name: "sato taro"}); }, 2000);

    return (
      <div>
        <h1>Welcome!</h1>
        <p>It's {name}</p>
        <p>It's {this.state.name}</p>
        <p>1 + 2 = {1 + 2}</p>
        <p>getResult: {this.getResult(2)}</p>
        <p>匿名関数 { ((num) => { return 1 + num; })(3) }</p>
        <p>testValue {this.testValue}</p>
        {components}
      </div>
    );
  }

  getResult(num) {
    return 1 + num;
  }
}
