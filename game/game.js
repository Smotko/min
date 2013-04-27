define(['input', 'cube', 'camera'], function (input, cube, camera) {
    
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer(); 
	
	// background:
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshBasicMaterial({ color: 0xEEEEEE}));
	plane.material.side = THREE.DoubleSide;
	
	var c = cube.create(0xCC0000);
	var c2 = cube.create(0x555555);
	c2.position.x += 20;
	c2.position.y += 10;
	c2.position.z += 5;
	c.position.z += 5;

	// Lights:
	var cornerLight =  new THREE.PointLight( 0xFFFFFF);
	cornerLight.position = {x:100,y:-100,z:10};
	var topLight =  new THREE.PointLight( 0xFFFFFF);
	topLight.position = {x:0,y:0,z:1000};
	
	var game = {
		
		scene : scene,
		camera : camera,
			
		init : function(){
			
			renderer.setSize(window.innerWidth, window.innerHeight); 
			camera.update();
			window.onkeydown = game.keydown;
			document.body.appendChild(renderer.domElement);
			
			 
			scene.add(c); 
			scene.add(c2); 
			scene.add(plane);
			
			// add to the scene
			scene.add(cornerLight);
			scene.add(topLight);
			
		},
			
		render : function(){
			camera.tick();
			requestAnimationFrame(game.render); 
			renderer.render(scene, camera.get());
			plane.overdraw = true;
			plane.position = {x:0, y:0, z:0};
			
		},
		
		keydown : function(key) {
			console.log(key.which);
			key.preventDefault();
			switch (key.which) {
			case 32:
				camera.nextPerspective();
				break;
			case 37:
				c.position.x -= 10;
				break;
			case 39:
				c.position.x += 10;
				break;
			case 38:
				c.position.y += 10;
				break;

			case 40:
				c.position.y -= 10;
				break;
			}
			return false;
		}
	};
	
	return game;
});