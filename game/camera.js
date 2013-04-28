define(function() {
	var camera = null;

	var perspectives = [
	    {x:0,y:0,z:100},
	    {x:0,y:-100,z:0},
	    {x:0,y:0,z:100},
	    {x:100,y:0,z:0}
	];
	var currentPerspective = 0;
	
	return {
		get : function() {return  camera;},
		update : function() {
			var w = window.innerWidth, h = window.innerHeight;
			camera = new THREE.OrthographicCamera(w / -8, w / 8, h / 8, h / -8,
					1, 1000);
		},
		tick : function(delta){
			if(camera == null) return;
			camera.position.x = 0.8*camera.position.x + 0.2*perspectives[currentPerspective].x;
			camera.position.y = 0.8*camera.position.y + 0.2*perspectives[currentPerspective].y;
			camera.position.z = 0.8*camera.position.z + 0.2*perspectives[currentPerspective].z;
			if(Math.abs(Math.abs(camera.position.x) - Math.abs(perspectives[currentPerspective].x))<1){
				camera.position.x = perspectives[currentPerspective].x;
			}
			if(Math.abs(Math.abs(camera.position.y) - Math.abs(perspectives[currentPerspective].y))<1){
				camera.position.y = perspectives[currentPerspective].y;
			}
			if(Math.abs(Math.abs(camera.position.z) - Math.abs(perspectives[currentPerspective].z))<1){
				camera.position.z = perspectives[currentPerspective].z+0.001;
			}
			camera.lookAt({x:0, y:0, z:0});
		},
		resetPerspective : function(){
			currentPerspective = 0;
			camera.position = {x:0,y:0,z:100};
		},
		nextPerspective : function(){
			currentPerspective = (currentPerspective + 1) % perspectives.length;
			game.checkCollisions();
		}, 
		
		isMovableX : function(){
			return currentPerspective == 1;
		},
		isMovableY : function(){
			return currentPerspective == 3;
		}
	};
});