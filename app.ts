/// <reference path = "libs/phaser.d.ts" />
/// <reference path = "states/Game.ts" />

module TurtleGame {
  class TurtleGame extends Phaser.Game {
      constructor() {
          super(400, 200, Phaser.AUTO, 'content', Game);
          console.log('content');
      }

      preload() {
      
        this.state.add("Game", Game, true);
        this.state.start("Game");
        console.log('start');
      }

      render() {
          // game.debug.spriteInfo(sprite, 32, 32);
      }
  }
  window.onload = () => {
      var game = new TurtleGame();
  };
}
