var game = new Phaser.Game(800,400,AUTO);

game.state.add("GameState",gameState);
game.state.add("GameOverState", gameOverState);

//
game.state.start("GameState");
