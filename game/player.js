define(['cube'], function(cube){
	var mesh = cube.create(0xCC0000);
	var step = 2;
	var player = {
		mesh : mesh,
		cheat : false,
		move : function(x, y){
			
			if(player.cheat){
				mesh.position.x += x*step;
				mesh.position.y += y*step;
				game.checkCollisions();
				return;
			}
			
			if(game.camera.isMovableX()){
				if(Math.abs(mesh.position.x+x*step) < 71){
					mesh.position.x += x*step;
					game.checkCollisions();
				}
			}
			else if(game.camera.isMovableY()){
				if(Math.abs(mesh.position.y+y*step) < 71){
					mesh.position.y += y*step;
					game.checkCollisions();
				}
			}
			// console.log("Player pos: ", mesh.position.x, mesh.position.y);
		}
	};
	
	return {init: function(){return player;}};
});