define(['cube'], function(cube){
	
	var mesh = cube.create(0xCC0000);
	var player = {
		mesh : mesh,
		move : function(x, y){
			mesh.position.x += x*10;
			mesh.position.y += y*10;
		}
	};
	return player;
});