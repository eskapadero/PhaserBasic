var game = new Phaser.Game(600,400,Phaser.Auto);

game.state.add('state0', basic.state0);
game.state.start('state0');