/// <reference path = "../libs/phaser.d.ts" />
/// <reference path = "../gameObjects/Turtle.ts" />
module TurtleGame {
  export class Game extends Phaser.State {
    turtle: Phaser.Sprite
    cursors: Phaser.CursorKeys

    preload() {
      this.game.load.spritesheet('turtle', '../images/turtle.png', 112, 77, 5);
    }
    create() {
      this.turtle = new Turtle(this.game);
      this.game.add.existing(this.turtle);

      this.cursors = this.game.input.keyboard.createCursorKeys();

    }
    update() {
         if (this.cursors.left.isDown) {
           this.turtle.goLeft();
         }
         else if (this.cursors.right.isDown)
         {
            this.turtle.goRight();

         } else {
           this.turtle.stop();
         }
      // this.game.physics.arcade.moveToPointer(this.graphics, 60, this.game.input.activePointer, 500);
    }
  }
}
