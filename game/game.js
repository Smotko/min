define(['cube', 'camera', 'player', 'line', 'levels', 'lights', 'text'], 
		function (cube, camera, player, line, levels, lights, text) {
    
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer(); 
	var level = {stage : 7, init : false};
	player = player.init();
	
	game = {	
		player : player,
		scene : scene,
		camera : camera,
		text : text,
		level : level,
			
		init : function(){
			
			renderer.setSize(window.innerWidth, window.innerHeight); 
			camera.update();
			document.body.appendChild(renderer.domElement);
			lights.init(game);
			game.loadLevel(level.stage);
			
		},
		loadLevel : function(l){
			game._resetScene(level);
			
			level.init = true;
			if(levels.get(l) == null){
				text.setText("<strong>end</strong>");
				return;
			}
			_.extend(level, levels.get(l));
			level.removedCnt = 0;
			
			// reset player:
			player.position = _.extend({}, level.startPosition);
			scene.add(player.mesh); 
			
			// load cubes:
			level.levelCubes = _.map(level.cubePositions, function(p){
				return cube.create(0xCC0000, p);
			});
			_.each(level.levelCubes, function(c){
				scene.add(c);
			});
			
			// load lines:
			_.each(level.linePositions, function(line){scene.add(line);});
			camera.get().position = {x:-1000,y:-10000,z:0};
			
			// load text:
			text.loadLevelText();
			
		},
		_resetScene : function(l){
			if(!l.init){
				return;
			}
			camera.resetPerspective();
			_.each(l.levelCubes, function(c){
				scene.remove(c);
			});
			_.each(l.linePositions, function(l){
				scene.remove(l);
			});
		},
		render : function(){
			camera.tick();
			player.tick();
			text.update();
			requestAnimationFrame(game.render); 
			renderer.render(scene, camera.get());
			
		},
		collideWithLine : function(){
			if(!camera.isMovableX() && !camera.isMovableY()){
				text.setText("<strong>lines</strong> are deadly", 3000);
				game.loadLevel(level.stage);
			}
		},
		// Collisions:
		checkCollisions : function(){
			_.each(level.levelCubes, function(c){
				if(!c.visible){
					return;
				}
				if(!game._checkCollisions(c)){
					c.scale = {x: 1, y:1, z: 1};
				} else {
					c.scale = {x: 0.9, y:0.9, z: 0.9};
					if(game._checkOverlap(c)){
						c.visible = false;
						level.removedCnt++;
						if(level.removedCnt == level.levelCubes.length){
							// Level complete:
							game.loadLevel(++level.stage);
						}
					}
				}
				if(game._checkLineCollisions()){
					game.collideWithLine();
				} 
			});
		},
		_checkCollisions : function(b){
			if(player.position.x + player.size > b.position.x - player.size && player.position.x - player.size < b.position.x + player.size){
				if(player.position.y + player.size > b.position.y - player.size && player.position.y - player.size < b.position.y + player.size){
					return true;
				}
			}
			return false;
		},
		_checkOverlap : function(b) {
			return player.position.x == b.position.x && player.position.y == b.position.y;
		},
		_checkLineCollisions : function(){
			var lines = level.linePositions;
			for(var i = 0; i < lines.length; i++){
				var l = lines[i];
				if(l.lineTo[0] == l.lineFrom[0]){
					if(player.position.y < l.lineTo[1] + player.size*2 && player.position.y > l.lineFrom[1] - player.size*2 ){
						if(player.position.x + player.size > l.lineTo[0] && player.position.x - player.size < l.lineTo[0]){
							return true;
						}
					}
				}
				else{
					if(player.position.x < l.lineTo[0] + player.size*2 && player.position.x > l.lineFrom[0] - player.size*2 ){
						if(player.position.y + player.size > l.lineTo[1] && player.position.y - player.size < l.lineTo[1]){
							return true;
						}
					}
				}
			};
			return false;
		},
	};
	
	return game;
});