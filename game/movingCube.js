define(['cube'], function(cube){
	
	
	return function(position, s){
		var c = cube.create(0x0000CC, position);
		var speed = s;
		c.size = 5.5;
		
		c.tick = function(delta){
			
			c.position.y += speed.y;
			c.position.x += speed.x;
			game.checkCollisions();
			if(game._checkLineCollisions(c)){
				c.position.y -= speed.y*2;
				c.position.x -= speed.x*2;
				speed.x *= -1;
				speed.y *= -1;
			}
		};
		
		return c;
		
	};
});