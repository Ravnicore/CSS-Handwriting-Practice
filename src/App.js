import React, { Component } from 'react';
// import WaterfallFootage from './Outside-Files/Waterfalls_cross_transitions_no-audio.mp4';
import WaterfallFootage from './Outside-Files/Waterfalls1.mp4';
import PauseButton from './Components/PauseButton/PauseButton.js';
import Name from './Components/Christina-Name/name.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }



  toggleVideo() {
    this.refs.vidRef.classList.toggle("stopfade");
    if (this.refs.vidRef.paused) 
      this.refs.vidRef.play(); 
    else {
      this.refs.vidRef.pause();
      this.refs.vidRef.classList.add("stopfade");
    }
  }
  


  render() {
    return (
      <div className="App">
        <video ref="vidRef" autoPlay muted loop id="myVideo">
          <source src={ WaterfallFootage } type="video/mp4" />
        </video>
        <div className="content">
          <div className="centeredContent">
            <Name />
            <h1 className="happyText">Look at the beautiful waterfall!</h1>
            <div className="abutton">
              <PauseButton toggleVideo={this.toggleVideo.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
