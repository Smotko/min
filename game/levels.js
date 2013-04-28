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
	
	
	var l3 = new level();
	l3.linePositions = [
		line.create([0, 34], [12, 34]),
		line.create([6, 0], [6, 40]),
	];
	l3.cubePositions = [
	    {x : 0, y : 28, z : 0},
	    {x : 12, y : 28, z : 0},
	    {x : 12, y : 40, z : 0},
	];
	l3.startPosition = {x: 0, y: 40, z: 0};
	
	var l4 = new level();
	l4.linePositions = [
	    line.create([30, -2], [30, 40]),
		line.create([18, -2], [18, 40]),
		line.create([6, -2], [6, 40]),
		line.create([12, 44], [24, 44]),
	];
	l4.cubePositions = [
	    {x : 12, y : 18, z : 0},
	    {x : 12, y : 28, z : 0},
	    {x : 12, y : 38, z : 0},
	    {x : 12, y :  8, z : 0},
	    {x : 12, y : -2, z : 0},
	    {x : 24, y : 18, z : 0},
	    {x : 24, y : 28, z : 0},
	    {x : 24, y : 38, z : 0},
	    {x : 24, y :  8, z : 0},
	    {x : 24, y : -2, z : 0},
	];
	l4.startPosition = {x: -40, y: -40, z: 0};
	
	
	var l5 = new level();
	l5.linePositions = [
	    line.create([48, 26], [48, 40]),
		line.create([26,  26], [26, 40]),
		line.create([32, 44], [44, 44]),
		line.create([32,  22], [44, 22]),
		
		line.create([-48, 26], [-48, 40]),
		line.create([-26,  26], [-26, 40]),
		line.create([-44, 44], [-32, 44]),
		line.create([-44,  22], [-32, 22]),
		
		line.create([48, -40], [48, -26]),
		line.create([26,  -40], [26, -26]),
		line.create([32, -44], [44, -44]),
		line.create([32,  -22], [44, -22]),
		
		line.create([-48, -40], [-48, -26]),
		line.create([-26,  -40], [-26, -26]),
		line.create([-44, -44], [-32, -44]),
		line.create([-44,  -22], [-32, -22]),
	];
	l5.cubePositions = [
	    {x : 32, y : 28, z : 0},
	    {x : 32, y : 38, z : 0},
	    {x : 42, y : 28, z : 0},
	    {x : 42, y : 38, z : 0},
	    
	    {x : 32, y : -28, z : 0},
	    {x : 32, y : -38, z : 0},
	    {x : 42, y : -28, z : 0},
	    {x : 42, y : -38, z : 0},
	    
	    {x : -32, y : 28, z : 0},
	    {x : -32, y : 38, z : 0},
	    {x : -42, y : 28, z : 0},
	    {x : -42, y : 38, z : 0},
	];
	l5.startPosition = {x: 0, y: 0, z: 0};
	
	
	var l6 = new level();
	l6.linePositions = [
	    line.create([-6, -2], [-6, 2]),
	    line.create([6, -2], [6, 2]),
	    line.create([-2, 6], [2, 6]),
	    line.create([-2, -6], [2, -6]),
	];
	l6.cubePositions = [
	    {x : 0, y : -12, z : 0},
	    {x : 0, y : 12, z : 0},
	    {x : 12, y : 0, z : 0},
	    {x : -12, y : 0, z : 0},
	    
	];
	l6.startPosition = {x: 0, y: 0, z: 0};
	
	var l7 = new level();
	l7.linePositions = [
	    line.create([-20, -34], [20, -34]),
	    line.create([-20, -22], [20, -22]),
	    line.create([-20, -10], [20, -10]),
	    line.create([-20, 2], [20, 2]),
	    line.create([-20, 14], [20, 14]),
	    line.create([-20, 26], [20, 26]),
	    
	    line.create([-26, -40], [-26, 32]),
	];
	l7.cubePositions = [
	    {x : -10, y : -40, z : 0},
	    {x :   0, y : -40, z : 0},
	    {x :  10, y : -40, z : 0},
	    {x :  20, y : -40, z : 0},
	    
	    {x : -20, y : -28, z : 0},
	    {x : -10, y : -28, z : 0},
	    {x :   0, y : -28, z : 0},
	    {x :  10, y : -28, z : 0},
	    {x :  20, y : -28, z : 0},
	    
	    {x : -20, y : -16, z : 0},
	    {x : -10, y : -16, z : 0},
	    {x :   0, y : -16, z : 0},
	    {x :  10, y : -16, z : 0},
	    {x :  20, y : -16, z : 0},
	    
	    {x : -20, y : -4, z : 0},
	    {x : -10, y : -4, z : 0},
	    {x :   0, y : -4, z : 0},
	    {x :  10, y : -4, z : 0},
	    {x :  20, y : -4, z : 0},
	    
	    {x : -20, y : 8, z : 0},
	    {x : -10, y : 8, z : 0},
	    {x :   0, y : 8, z : 0},
	    {x :  10, y : 8, z : 0},
	    {x :  20, y : 8, z : 0},
	    
	    {x : -20, y : 20, z : 0},
	    {x : -10, y : 20, z : 0},
	    {x :   0, y : 20, z : 0},
	    {x :  10, y : 20, z : 0},
	    {x :  20, y : 20, z : 0},

	    {x : -20, y : 32, z : 0},
	    {x : -10, y : 32, z : 0},
	    {x :   0, y : 32, z : 0},
	    {x :  10, y : 32, z : 0},
	    {x :  20, y : 32, z : 0},
	    
	];
	l7.startPosition = {x: -20, y: -40, z: 0};
	
	
	var levels = [l1, l2, l3, l4, l5, l6, l7];
	
	return {
		get : function(l){
			return levels[l];
		}
	};
});