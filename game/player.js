define(['cube'], function(cube){
	var mesh = cube.create(0x999999);
	var step = 2;
	var player = {
		size : 5,
		mesh : mesh,
		cheat : false,
		position : _.extend({}, mesh.position),
		move : function(x, y){
			if(this.cheat){
				this.position.x += x*step;
				this.position.y += y*step;
				game.checkCollisions();
				return;
			}
			
			if(game.camera.isMovableX()){
				if(Math.abs(this.position.x+x*step) < 71){
					this.position.x += x*step;
					game.checkCollisions();
				}
			}
			else if(game.camera.isMovableY()){
				if(Math.abs(this.position.y+y*step) < 71){
					this.position.y += y*step;
					game.checkCollisions();
				}
			}
		},
		tick : function(delta){
			for(var k in this.position){
				mesh.position[k] = 0.8*mesh.position[k] + 0.2*this.position[k];
				if(Math.abs(Math.abs(mesh.position[k]-Math.abs(this.position[k])))<0.01){
					mesh.position[k] = this.position[k];
				}
			}
		}
	};
	
	return {init: function(){return player;}};
});