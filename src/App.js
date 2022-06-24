import React, { Component } from "react";
import Profile from "./Profile";

export default class componentName extends Component 
{
  state = { show: false };

  handleShow = () => {
    this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
    console.log(this.state.show);
  }
  componentDidMount(){
    console.log('mounting')
 }
 componentDidUpdate(){
   console.log('updating')
 }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={this.handleShow}>Show</button>
        {this.state.show? <Profile/>:null}
      </div>
    );
  }
}