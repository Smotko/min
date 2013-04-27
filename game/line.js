define(function(){
	var thick = 2;
	
	return {
		create : function(from, to){
			var plane;
			if(from[0] == to[0]){
				plane = new THREE.Mesh(new THREE.PlaneGeometry(thick, to[1] - from[1] + 10), new THREE.MeshBasicMaterial({ color: 0x000000}));
				plane.position.y = from[1] + (to[1] - from[1])/2;
				plane.position.x = from[0];
			}
			else if(from[1] == to[1]){
				console.log(to[0] - from[0]);
				plane = new THREE.Mesh(new THREE.PlaneGeometry(to[0] - from[0] + 10, thick), new THREE.MeshBasicMaterial({ color: 0x000000}));
				plane.position.x = from[0] + (to[0] - from[0])/2 ;
				plane.position.y = from[1];
			}
			else{
				console.log("Invalid line", from, to);
				return;
			}
			plane.position.z = -4.5;
			plane.material.side = THREE.DoubleSide;
			
			return plane;
		}
	};
});