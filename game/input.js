define(function() {
	var game = null;
	var input = {
		init : function(g){
			game = g;
			$(document).keydown(input.keydown);
		},
		
		keydown : function(key) {
			//key.preventDefault();
			if(!game.started){
				game.start();
				return;
			}
			switch (key.which) {
			case 32:
				key.preventDefault();
				game.camera.nextPerspective();
				break;
			case 37:
				key.preventDefault();
				game.player.move(-1, 0);
				break;
			case 39:
				key.preventDefault();
				game.player.move(1, 0);
				break;
			case 38:
				key.preventDefault();
				game.player.move(0, 1);
				break;
			case 40:
				key.preventDefault();
				game.player.move(0, -1);
				break;
			case 67:
				game.player.cheat = !game.player.cheat;
			}
		}
	};
	return input;
});