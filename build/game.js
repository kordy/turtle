var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TurtleGame;
(function (TurtleGame_1) {
    var TurtleGame = (function (_super) {
        __extends(TurtleGame, _super);
        function TurtleGame() {
            var _this;
            _this.shoot = function () { };
            _this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
                preload: _this.preload,
                create: _this.create,
                update: _this.update,
                render: _this.render
            });
            _this = _super.call(this, 800, 600, Phaser.AUTO, 'phaserDemo', { create: _this.create }) || this;
            return _this;
        }
        TurtleGame.prototype.preload = function () {
            this.game.load.spritesheet('turtle', 'images/turtle.png', 112, 77, 5);
        };
        TurtleGame.prototype.shoot = function () {
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
        TurtleGame.prototype.create = function () {
            var _this = this;
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.graphics = this.game.add.graphics(0, 0);
            this.graphics.beginFill(0xFFFF00, 1);
            this.graphics.drawCircle(600, 50, 40);
            this.game.physics.enable(this.graphics, Phaser.Physics.ARCADE);
            this.graphics.body.collideWorldBounds = true;
            this.graphics.body.bounce.set(1.1);
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.turtle = this.game.add.sprite(200, 200, 'turtle');
            this.turtle.animations.add('walk', null, 1);
            this.turtle.anchor.setTo(.5, 1);
            this.turtle.scale.x *= -1;
            this.turtle.animations.play('walk', 15, true);
            console.log(this);
            this.shoot();
            setInterval(function () {
                _this.shoot();
            }, 1000);
        };
        TurtleGame.prototype.update = function () {
            if (this.cursors.up.isDown) {
                this.graphics.body.velocity.y = -300;
            }
            if (this.cursors.down.isDown) {
                this.graphics.body.velocity.y = 300;
            }
            if (this.cursors.left.isDown) {
                this.graphics.body.velocity.x = -300;
            }
            if (this.cursors.right.isDown) {
                this.graphics.body.velocity.x = 300;
            }
        };
        TurtleGame.prototype.render = function () {
        };
        return TurtleGame;
    }(Phaser.Game));
})(TurtleGame || (TurtleGame = {}));
window.onload = function () {
    var game = new TurtleGame();
};
//# sourceMappingURL=game.js.map
