define(function(){
	return {
		
		create : function(color, position){
			if(position == null){
				position = {x: 0, y:0, z:0};
			}
			
			var geometry = new THREE.CubeGeometry(10,10,10); 
			var material = new THREE.MeshLambertMaterial({ color: color});
			var mesh = new THREE.Mesh( geometry, material);
			mesh.position = position;
			return mesh;
		}
		
	};
});