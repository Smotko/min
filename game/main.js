require(["game", "input"], function(game, input) {

	game.init();
	input.init(game);
	$(window).resize(game.camera.update);
	game.render();
});