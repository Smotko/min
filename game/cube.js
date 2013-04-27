define(function(){
	return {
		
		create : function(color){
			var geometry = new THREE.CubeGeometry(10,10,0.001); 
			var material = new THREE.MeshLambertMaterial({ color: color });
			return new THREE.Mesh( geometry, material );
		}
		
	};
});