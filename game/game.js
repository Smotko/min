define(['cube', 'camera', 'player', 'line'], function (cube, camera, player, line) {
    
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer(); 
	
	// background:
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshBasicMaterial({ color: 0xEEEEEE}));
	plane.material.side = THREE.DoubleSide;
	
	var lines = [
	             line.create([-70, 16], [70, 16]),
	             line.create([14, -70], [14, 70]),
	];
	
	var c2 = cube.create(0x555555);
	c2.position.x += 20;
	c2.position.y += 10;

	player = player.init();
	
	game = {
		player : player,
		scene : scene,
		camera : camera,
			
		init : function(){
			
			renderer.setSize(window.innerWidth, window.innerHeight); 
			camera.update();
			document.body.appendChild(renderer.domElement);
			
			 
			scene.add(player.mesh); 
			scene.add(c2); 
			//scene.add(plane);
			_.each(lines, function(line){scene.add(line);});
			
		},
			
		render : function(){
			camera.tick();
			requestAnimationFrame(game.render); 
			renderer.render(scene, camera.get());
			plane.position = {x:0, y:0, z:-5};
			
		},
		
		checkCollisions : function(){
			console.log(player.mesh.position.x, c2.position.x,  player.mesh.position.y, c2.position.y);
			if(player.mesh.position.x == c2.position.x && player.mesh.position.y == c2.position.y){
				console.log("remove");
				scene.remove(c2);
			}
		}
	};
	
	return game;
});