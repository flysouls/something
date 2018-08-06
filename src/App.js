import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Child extends Component{

  constructor(props){
    super(props);
    this.state = this.props;
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps",nextProps);
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  forceItUpdate() {
      this.forceUpdate();
  }

  render() {
    console.log("render");
      return(
          <div>
              <span>{this.props.value}</span>
          </div>
      );
  }

}

class ParentCompoent extends Component{

  constructor(){
    super();
    this.state = {
      show: true,
      value: 0,
      top: 2
    }
  }

  clickBtn(){
    let state = this.state;
    if (state.show && state.value < state.top){
      state.value++;
    } else if (!state.show) {
      state.show = !state.show;
    } else {
      state.show = !state.show;
      state.value = 0;
    }
    this.setState(state);
  }

  getTxt(){
    return !this.state.show ? '显示' : this.state.value === this.state.top ? '隐藏' : '++'
  }

  render(){
    return (
      <div>
        <button onClick={this.clickBtn.bind(this)}>
          {this.getTxt.call(this)}
        </button>
        {this.state.show && <Child value={this.state.value}/>}
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ParentCompoent/>
      </div>
    );
  }
}

export default App;