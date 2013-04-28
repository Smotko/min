define(['cube', 'camera', 'player', 'line', 'levels', 'lights', 'text'], 
		function (cube, camera, player, line, levels, lights, text) {
    
	var scene = new THREE.Scene();
	var renderer = new THREE.WebGLRenderer(); 
	var level = {stage : 0, init : false};
	player = player.init();
	
	game = {	
		player : player,
		scene : scene,
		camera : camera,
		text : text,
		level : level,
		started : false,
			
		init : function(){
			
			renderer.setSize(window.innerWidth, window.innerHeight); 
			camera.update();
			document.body.appendChild(renderer.domElement);
			lights.init(game);
			text.setText("<h1>Min</h1>");
			text.setTextBottom("press a key");
		},
		start : function(){
			this.started = true;
			text.hideTextBottom();
			game.loadLevel(level.stage);
		},
		loadLevel : function(l){
			game._resetScene(level);
			
			level.init = true;
			if(levels.get(l) == null){
				text.setText("<h1>Min</h1>");
				text.setTextBottom("#ld48 <br /><a href='http://twitter.com/smotko/'>@smotko</a>");
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
			
			// load movable cubes:
			_.each(level.movingCubes, function(c){
				c.visible = true;
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
			_.each(l.movingCubes, function(mc){
				scene.remove(mc);
			});
		},
		render : function(){
			camera.tick();
			player.tick();
			text.update();
			_.each(level.movingCubes, function(c){
				c.tick();
			});
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
				if(game._checkCollisions(c)){
					c.visible = false;
					level.removedCnt++;
					if(level.removedCnt == (level.levelCubes.length + level.movingCubes.length)){
						// Level complete:
						game.loadLevel(++level.stage);
					}
				}
			});
			_.each(level.movingCubes, function(c){
				if(!c.visible){
					return;
				}
				if(game._checkCollisions(c)){
					c.visible = false;
					level.removedCnt++;
					if(level.removedCnt == (level.levelCubes.length + level.movingCubes.length)){
						// Level complete:
						game.loadLevel(++level.stage);
					}
				}
			});
			if(game._checkLineCollisions(player)){
				game.collideWithLine();
			} 
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
			return Math.abs(player.position.x - b.position.x) < 0.001 && Math.abs(player.position.y - b.position.y) < 0.5;
		},
		_checkLineCollisions : function(player){
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