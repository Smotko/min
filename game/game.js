define(['cube', 'camera', 'player'], function (cube, camera, player) {
    
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer(); 
	
	// background:
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshBasicMaterial({ color: 0xEEEEEE}));
	plane.material.side = THREE.DoubleSide;
	
	
	
	var c2 = cube.create(0x555555);
	c2.position.x += 20;
	c2.position.y += 10;

	var game = {
		player : player,
		scene : scene,
		camera : camera,
			
		init : function(){
			
			renderer.setSize(window.innerWidth, window.innerHeight); 
			camera.update();
			document.body.appendChild(renderer.domElement);
			
			 
			scene.add(player.mesh); 
			scene.add(c2); 
			scene.add(plane);
			
		},
			
		render : function(){
			camera.tick();
			requestAnimationFrame(game.render); 
			renderer.render(scene, camera.get());
			plane.position = {x:0, y:0, z:-5};
			
		},
	};
	
	return game;
});