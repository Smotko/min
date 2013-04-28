define(function() {
	var game = null;
	var input = {
		init : function(g){
			game = g;
			$(document).keydown(this.keydown);
		},
		
		keydown : function(key) {
			//key.preventDefault();
			if(!game.started){
				game.start();
				return;
			}
			if(game.ended){
				game.level.stage = 0;
				game.loadLevel(0);
				game.start();
				game.ended = false;
				game.score.reset();
				game.text.setTextBottom("cheat enabled", 3000);
				return;
			}
			switch (key.which) {
			case 32:
				key.preventDefault();
				game.camera.nextPerspective();
				game.score.changes += 1;
				break;
			case 37:
				key.preventDefault();
				game.player.move(-1, 0);
				game.score.steps += 1;
				break;
			case 39:
				key.preventDefault();
				game.player.move(1, 0);
				game.score.steps += 1;
				break;
			case 38:
				key.preventDefault();
				game.player.move(0, 1);
				game.score.steps += 1;
				break;
			case 40:
				key.preventDefault();
				game.player.move(0, -1);
				game.score.steps += 1;
				break;
			case 67:
				game.player.cheat = !game.player.cheat;
				break;
			case 78:
				game.loadLevel(++game.level.stage);
				break;
			}
		}
	};
	return input;
});