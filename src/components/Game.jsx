import React, { useState, useRef } from 'react';
import Game from 'kelsi3D';
import './Game.css';

const GameWindow = () => {
  const [withMusic, setWithMusic] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [game, setGame] = useState(null);
  const frame = useRef(null);

  const toggleMusic = () => {
    if (game && game.audio) {
      const { music } = game.audio;
      music.isPlaying ? music.stop() : music.play();
    }
  };

  const startGame = () => {
    const newGame = new Game(false);
    newGame.mount(frame.current);
    newGame.play(withMusic);
    setGame(newGame);
    setPlaying(true);
  };

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
      <div ref={frame} className="game-frame"></div>
      <div className="options">
        <label>With Music: </label>
        { playing && <input type="checkbox" onChange={toggleMusic} value={withMusic}/> }
        { !playing && <input type="checkbox" onChange={() => setWithMusic(!withMusic)} value={withMusic}/> }
        { !playing && <button onClick={startGame}>START GAME</button> }
      </div>
    </div>
  );
}

export default GameWindow;