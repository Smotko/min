define(function(){
	return {
		
		init: function(game){
			// Lights:
			var cornerLight =  new THREE.PointLight( 0xFFFFFF);
			cornerLight.position = {x:100,y:-100,z:10};
			var topLight =  new THREE.PointLight( 0xFFFFFF);
			topLight.position = {x:0,y:0,z:1000};
			
			// add to the scene
			game.scene.add(cornerLight);
			game.scene.add(topLight);
		}
	}
});