import React, { Component } from 'react';
import trump1 from './images/trump1.png';
import trump2 from './images/trump2.png';
import trump3 from './images/trump3.png';
import Trump from './components/Trump';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      number: 0,
      score: 0,
      timeLeft: 30,
      trumps: [
        { id: 'trump1', img_source: trump1 },
        { id: 'trump2', img_source: trump2 },
        { id: 'trump3', img_source: trump3 },
        { id: 'trump4', img_source: trump1 },
        { id: 'trump5', img_source: trump2 },
        { id: 'trump6', img_source: trump3 }
      ]
    }
    

    this.handleClick = this.handleClick.bind(this);
    this.timeClock = this.timeClock.bind(this);

  }

  handleClick() {
    let score = this.state.score + 1;
    this.setState({
      score: score
    });
  }

  timeClock() {
    
  }

  componentDidMount() {
    let self = this;
    setInterval(function(){
      let number = ( Math.floor(Math.random() * 6) + 0 );
      console.log(number);
      self.setState({
        number: number
      });
    }, 3000)
  }

 
  render() {
    return (
        <div id="gameContainer">
          <div id="gameBoard">
             {this.state.trumps.map((data, idx) => {
                if (this.state.number === idx) {
                  return <Trump data={data} handleClick={this.handleClick} />
                }
             })}
             <div id="winMessage">
                <p><span id="winner"></span></p>
             </div>
             <div id="gameTimer">
                <p>Time: <span id="timeLeft">20</span> secs</p>
             </div>
          </div>
          <div id="timeScore">
             <div className="scoreBoard">
                <li>Score: {this.state.score}</li>
             </div>
             <button id="startGame">Start Game</button>
             <button id="resetGame">Reset Game</button>
          </div>
        </div>
    );
  }
}

export default App;
