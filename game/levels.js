define(['line'], function(line){
	
	var level = function(){
		
		return {
			startPosition : {x: 0, y: 0, z: 0},
			linePositions : [],
			cubePositions : []
		};
	};
	var l1 = new level();
	l1.linePositions = [
		//line.create([-70, 16], [70, 16]),
		line.create([14, -40], [14, 40]),
	];
	l1.cubePositions = [
	    {x : 30, y : 20, z : 0},
	];
	
	var l2 = new level();
	l2.linePositions = [
		line.create([-70, 16], [70, 16]),
//		line.create([14, -40], [14, 40]),
	];
	l2.cubePositions = [
	    {x : 20, y : -10, z : 0},
	    {x : 30, y : -20, z : 0},
	    {x : 40, y : -30, z : 0},
	];
	l2.startPosition = {x: 0, y: 40, z: 0};
	
	
	var levels = [l1, l2];
	
	return {
		get : function(l){
			return levels[l];
		}
	};
});