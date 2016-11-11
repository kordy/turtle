var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TurtleGame;
(function (TurtleGame) {
    var Turtle = (function (_super) {
        __extends(Turtle, _super);
        function Turtle(game) {
            var _this = _super.call(this, game, 200, 200, 'turtle') || this;
            _this.animations.add('walk', null, 1);
            _this.anchor.setTo(.5, 1);
            _this.scale.x *= -1;
            _this.game = game;
            _this.body = new Phaser.Physics.Arcade.Body(_this);
            console.log(_this);
            return _this;
        }
        return Turtle;
    }(Phaser.Sprite));
    TurtleGame.Turtle = Turtle;
    Turtle.prototype.goLeft = function () {
        this.body.velocity.x = -300;
        if (this.scale.x < 0)
            this.scale.x *= -1;
        this.animations.play('walk', 15, true);
    };
    Turtle.prototype.goRight = function () {
        this.body.velocity.x = 300;
        if (this.scale.x > 0)
            this.scale.x *= -1;
        this.animations.play('walk', 15, true);
    };
    Turtle.prototype.stop = function () {
        this.body.velocity.x = 0;
        this.animations.stop();
    };
    Turtle.prototype.shoot = function () {
        var g = this.game.add.graphics(220, 160);
        g.beginFill(0xFF0000);
        g.drawRect(0, 0, 20, 2);
        g.rotation = -0.5;
        var t = this.game.add.tween(g).to({
            width: 20,
            x: 570,
            y: 70
        }, 500)
            .to({
            width: 0
        }, 10)
            .start();
    };
})(TurtleGame || (TurtleGame = {}));
var TurtleGame;
(function (TurtleGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            return _super.apply(this, arguments) || this;
        }
        Game.prototype.preload = function () {
            this.game.load.spritesheet('turtle', '../images/turtle.png', 112, 77, 5);
        };
        Game.prototype.create = function () {
            this.turtle = new TurtleGame.Turtle(this.game);
            this.game.add.existing(this.turtle);
            this.cursors = this.game.input.keyboard.createCursorKeys();
        };
        Game.prototype.update = function () {
            if (this.cursors.left.isDown) {
                this.turtle.goLeft();
            }
            else if (this.cursors.right.isDown) {
                this.turtle.goRight();
            }
            else {
                this.turtle.stop();
            }
        };
        return Game;
    }(Phaser.State));
    TurtleGame.Game = Game;
})(TurtleGame || (TurtleGame = {}));
var TurtleGame;
(function (TurtleGame_1) {
    var TurtleGame = (function (_super) {
        __extends(TurtleGame, _super);
        function TurtleGame() {
            var _this = _super.call(this, 400, 200, Phaser.AUTO, 'content', TurtleGame_1.Game) || this;
            console.log('content');
            return _this;
        }
        TurtleGame.prototype.preload = function () {
            this.state.add("Game", TurtleGame_1.Game, true);
            this.state.start("Game");
            console.log('start');
        };
        TurtleGame.prototype.render = function () {
        };
        return TurtleGame;
    }(Phaser.Game));
    window.onload = function () {
        var game = new TurtleGame();
    };
})(TurtleGame || (TurtleGame = {}));
//# sourceMappingURL=app.js.map