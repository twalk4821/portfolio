import React from 'react';
import Game from 'kelsi3D';
import './Game.css';

class GameWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      withMusic: false,
      playing: false,
    };

    this.frame = React.createRef();
  }

  toggleMusic = () => {
    const { music } = this.game.audio;
    music.isPlaying ? music.stop() : music.play();
  }

  startGame = () => {
    const { withMusic } = this.state;
    this.game = new Game(false);
    this.game.mount(this.frame.current);
    this.game.play(withMusic);
    this.setState({ playing: true });
  }

  render() {
    const { playing } = this.state;
    return (
      <div className="game-window">
        <h1>Kelsi and the Printer</h1>
        { !playing && 
          <div className="instructions">
            <h3>This is a game I made for my girlfriend with Three.js, the WebGL library</h3>
            <h3>To progress through the story pages, click anywhere.</h3>
            <h3>After that, use WASD on your keyboard to move and mouse + click to attack.</h3>
            <h3>Be sure to disable music if you don't want it by toggling below: (though sound effects will still play, NSFW!)</h3>
            <h3>Sidenote: the music is also mine</h3>
          </div>
        }
        <div ref={this.frame} className="game-frame"></div>
        <div className="options">
          <label>With Music: </label>
          { playing && <input type="checkbox" onChange={this.toggleMusic} value={this.state.withMusic}/> }
          { !playing && <input type="checkbox" onChange={() => this.setState({ withMusic: !this.state.withMusic})} value={this.state.withMusic}/> }
          { !playing && <button onClick={this.startGame}>START GAME</button> }
        </div>
      </div>
    );
  }
}

export default GameWindow;