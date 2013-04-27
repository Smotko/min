define(['input', 'cube'], function (input, cube) {
    
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
	var renderer = new THREE.WebGLRenderer(); 
	
	var c = cube.create(0xCC0000);
	var c2 = cube.create(0x0000CC);
	c2.position.x += 20;
	var pointLight = new THREE.PointLight(0xFFFFFF);

	
	var game = {
		
		WIDTH : WIDTH,
		HEIGHT : HEIGHT,
		scene : scene,
		camera : camera,
			
		init : function(){
			
			renderer.setSize(WIDTH, HEIGHT); 
			window.onkeydown = game.keydown;
			document.body.appendChild(renderer.domElement);
			
			 
			scene.add(c); 
			scene.add(c2); 
			camera.position.z = 40;
			

			// set its position
			pointLight.position.x = 10;
			pointLight.position.y = 50;
			pointLight.position.z = 130;

			// add to the scene
			scene.add(pointLight);
			
		},
			
		render : function(){
			requestAnimationFrame(game.render); 
			renderer.render(scene, camera);
		},
		
		changePerspective : function() {
			
			console.log("ChangePerspective");
		},
		keydown : function(key) {
			switch (key.which) {
			case key.DOM_VK_SPACE:
				game.changePerspective();
				break;
			}
		}
	};
	
	return game;
});