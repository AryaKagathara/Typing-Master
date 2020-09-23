import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";
import ResetButton from "./components/ResetButton";
import Speed from "./components/Speed";
import StartButton from "./components/StartButton";
import TextArea from "./components/TextArea";

import list from './List';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      flag: false,
      color: false,
      input: "",
      disabled: true,
      passage: "Lorem Epsum",
      wpm: 0,
      cis: 0,
    };
  }

  componentDidMount() {
    let listLen = list.length;
    let random = Math.floor(Math.random() * listLen);
    this.setState({ passage: list[random] });
  }

  counterHandler = () => {
    let len = this.state.passage.split(" ").length;
    if (!this.state.flag) {
      this.setState({ flag: true, disabled: false });
      this.interval = setInterval(() => {
        this.setState((prevState) => ({
          count: prevState.count + 1,
        }));
      }, 1000);

      this.myinterval = setInterval(() => {
        let final = Math.round((len * 60) / this.state.count);
        this.setState({ cis: this.state.wpm });
        this.setState({ wpm: final });
      }, 1);
      this.setState({ timer: this.state.count });
    } else {
      this.setState({ disabled: true, clear: true });
      clearInterval(this.interval);
      clearInterval(this.myinterval);
    }
  };

  inputHandler = (e) => {
    this.setState({ input: e.target.value });
    for (let i = 0; i < this.state.input.length; i++) {
      if (this.state.passage[i] !== this.state.input[i]) {
        this.setState({ color: true });
        return;
      } else {
        this.setState({ color: false });
      }
    }
    if (this.state.passage.length === this.state.input.length) {
      clearInterval(this.interval);
      clearInterval(this.myinterval);
      e.target.value = "";
      this.setState({ disabled: true, clear: true, wpm: this.state.cis });
    }
  };

  resetHandler = () => {
    let listLen = list.length;
    let random = Math.floor(Math.random() * listLen);
    this.setState({
      count: 0,
      flag: false,
      color: false,
      input: "",
      disabled: true,
      passage: list[random],
      wpm: 0,
    });
    clearInterval(this.interval);
    clearInterval(this.myinterval);
  };

  render() {
    const { count, flag, color, passage, wpm, input, disabled } = this.state;
    return (
      <div className="App">
        <div className="dock">
          <Counter count={count} />
          <Speed wpm={wpm} />
        </div>
        <div className="dock">
          <p class="std">Timer</p>
          <p class="std">WPM</p>
        </div>
        <p class="hint">
          Original speed will be count when you have completed a paragraph.
          <br />
          Do Not Forget to put a space if you have completed a paragraph.
        </p>
        <div>
          <Paragraph passage={passage} />
        </div>
        <div className="dock">
          <StartButton counterHandler={this.counterHandler} flag={flag} />
          <ResetButton resetHandler={this.resetHandler} />
        </div>
        <br />
        <TextArea
          inputHandler={this.inputHandler}
          input={input}
          color={color}
          disabled={disabled}
        />
      </div>
    );
  }
}

export default App;
