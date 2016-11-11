/// <reference path = "../libs/phaser.d.ts" />

module TurtleGame {
  export class Turtle extends Phaser.Sprite {
    turtle: Phaser.Sprite;
    game: Phaser.Game;
    goLeft: any;
    goRight: any;
    stop: any;

    constructor(game) {
      super(game, 200, 200, 'turtle');
      this.animations.add('walk', null, 1);
      this.anchor.setTo(.5, 1);
      this.scale.x *= -1;
      this.game = game;
      this.body = new Phaser.Physics.Arcade.Body(this);
      console.log(this);
    }
  }

  Turtle.prototype.goLeft = function() {

    this.body.velocity.x = -300;
    if (this.scale.x < 0) this.scale.x *= -1;
    this.animations.play('walk', 15, true);
  }

  Turtle.prototype.goRight = function() {
    this.body.velocity.x = 300;
    if (this.scale.x > 0) this.scale.x *= -1;
    this.animations.play('walk', 15, true);
  }

  Turtle.prototype.stop = function() {
    this.body.velocity.x = 0;
    this.animations.stop();
  }

  Turtle.prototype.shoot = function() {
     let g = this.game.add.graphics(220, 160);
      // console.log(g);
      g.beginFill(0xFF0000);
      g.drawRect(0, 0, 20, 2);
      g.rotation = -0.5;
      var t = this.game.add.tween(g).to({
          width: 20,
          x: 570,
          y:70
        }, 500)
        .to({
            width: 0
          }, 10)
        .start()

  }
}
