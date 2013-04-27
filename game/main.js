require(["game", "input", "lights"], function(game, input, lights) {

	game.init();
	input.init(game);
	lights.init(game);
	$(window).resize(game.camera.update);
	game.render();
});