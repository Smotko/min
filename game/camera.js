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
			camera.lookAt({x:0, y:0, z:0});
		},
		nextPerspective : function(){
			currentPerspective = (currentPerspective + 1) % perspectives.length;
		}
	};
});