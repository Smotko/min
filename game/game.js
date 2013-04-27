define(['input', 'cube'], function (input, cube) {
    
	var WIDTH = window.innerWidth;
	var HEIGHT = window.innerHeight;

	var scene = new THREE.Scene();
//	var camera = new THREE.PerspectiveCamera(25, WIDTH / HEIGHT, 0.1, 1000);
	var camera = new THREE.OrthographicCamera( WIDTH / - 8, WIDTH / 8, HEIGHT / 8, HEIGHT / - 8, 1, 1000 );
	var renderer = new THREE.WebGLRenderer(); 
	
	var plane = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshBasicMaterial({ color: 0xEEEEEE}));
	plane.material.side = THREE.DoubleSide;
	var c = cube.create(0xCC0000);
	var c2 = cube.create(0x555555);
	c2.position.x += 20;
	c2.position.y += 10;
	c2.position.z += 5;
	c.position.z += 5;
	var cornerLight =  new THREE.PointLight( 0xFFFFFF);
	cornerLight.position = {x:100,y:-100,z:10};
	var topLight =  new THREE.PointLight( 0xFFFFFF);
	topLight.position = {x:0,y:0,z:1000};
	
	var perspectives = [
	    {x:0,y:0,z:100},
	    {x:0,y:-100,z:0},
	    {x:0,y:0,z:100},
	    {x:100,y:0,z:0}
	];
	var currentPerspective = 0;
	
	
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
			scene.add(plane);
			
			// add to the scene
			scene.add(cornerLight);
			scene.add(topLight);
			
		},
			
		render : function(){
			camera.position.x = 0.8*camera.position.x + 0.2*perspectives[currentPerspective].x;
			camera.position.y = 0.8*camera.position.y + 0.2*perspectives[currentPerspective].y;
			camera.position.z = 0.8*camera.position.z + 0.2*perspectives[currentPerspective].z;
			camera.lookAt({x:0, y:0, z:0});
			
			
			requestAnimationFrame(game.render); 
			renderer.render(scene, camera);
			plane.overdraw = true;
			plane.position = {x:0, y:0, z:0};
			
		},
		
		changePerspective : function() {
			currentPerspective = (currentPerspective + 1) % perspectives.length;
			console.log(perspectives[currentPerspective]);
			
		},
		keydown : function(key) {
			console.log(key.which);
			key.preventDefault();
			switch (key.which) {
			case 32:
				game.changePerspective();
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