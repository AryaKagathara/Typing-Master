import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";
import ResetButton from "./components/ResetButton";
import Speed from "./components/Speed";
import StartButton from "./components/StartButton";
import TextArea from "./components/TextArea";

const list = [
  "This work is subject to copyright. All rights are reserved by the Publisher, whether the whole or part of the material is concerned, specifically the rights of translation, reprinting, reuse of illustrations, recitation, broadcasting, reproduction on microfilms or in any other physical way, and transmission or information storage and retrieval, electronic adaptation, computer software, or by similar or dissimilar methodology now known or hereafter developed.",
  "Most companies conduct their interviews in very similar ways. We will offer an overview of how companies interview and what they're looking for. This information should guide your interview preparation and your reactions during and after the interview.",
  "Understanding the common sorting and searching algorithms is incredibly valuable, as many of sorting and searching problems are tweaks of the well-known algorithms. A good approach is therefore to run through the different sorting algorithms and see if one applies particularly well",
  "GAYLE LAAKMANN MCDOWELL is the author of The Google Resume and the founder and CEO of CareerCup.com, which helps candidates prepare for technical interviews. She has worked at Microsoft, Google, and Apple as a software engineer, served on Google's hiring committee, and has interviewed over 150 software engineering candidates",
  "As soon as we've allowed for a while loop, our work gets much easier. We just need to generate a range of values where each value is equally likely (and where the range has at least seven elements). If we can do this, then we can discard the elements greater than the previous multiple of 7, and mod the rest of them by 7. This will get us a value within the range of 0 to 6, with each value being equally likely.",
  "Declaring the constructor private will ensure that no one outside of the class can directly instantiate the class. In this case, the only way to create an instance of the class is to provide a static public method, as is done when using the Factory Method Pattern.",
  "Hello World",
];

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
