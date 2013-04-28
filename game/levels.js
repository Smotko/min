define(['line', 'movingCube'], function(line, movingCube){
	
	var level = function(){
		
		return {
			startPosition : {x: 0, y: 0, z: 0},
			linePositions : [],
			cubePositions : [],
			movingCubes : [],
			text : "",
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
	l1.text = "<strong>space</strong> changes perspective";
	
	var l1a = new level();
	l1a.linePositions = [
		//line.create([-70, 16], [70, 16]),
		line.create([-70, 0], [70, 0]),
	];
	l1a.cubePositions = [
	    {x : 0, y : -20, z : 0},
	    {x : 0, y : -30, z : 0},
	    {x : 0, y : -40, z : 0},
	    {x : 0, y : -50, z : 0},
	];
	l1a.startPosition = {x: 0, y: 20, z: 0};
	l1a.text = "slide through <strong>multiple</strong> blocks";
	
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
	l2.text = '<strong><span style="color:#CC0000">red</span></strong> is not minimalistic';
	
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
	l3.text = "a reward for your hard work";
	
	var l4 = new level();
	l4.linePositions = [
	    line.create([30, -2], [30, 40]),
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
	l4.text = "up & down";
	
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
	l5.text = 'balance is everything';
	
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
	l6.text = 'think outside the box';
	
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
	    
	    
	    {x : -20, y : -4, z : 0},
	    {x : -10, y : -4, z : 0},
	    {x :   0, y : -4, z : 0},
	    {x :  10, y : -4, z : 0},
	    {x :  20, y : -4, z : 0},
	    
	    
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
	l7.text = 'start at the <strong>bottom</strong>';
	
	
	var l8 = new level();
	l8.linePositions = [
	    line.create([-20, -34], [20, -34]),
	    line.create([-20, 2], [20, 2]),
	    
	];
	l8.cubePositions = [
	];
	l8.startPosition = {x: -40, y: -10, z: 0};
	l8.movingCubes = [
	    new movingCube({x: 10, y: -10, z: 0}, {x:0,y:0.1}),          
	];
	l8.text = 'you are not the only thing that <strong><span style="color:#0000CC">moves</span></strong>';
	
	var l9 = new level();
	l9.linePositions = [
	    line.create([10, -34], [10.01, -34]),
	    line.create([10, 46], [10.01, 46]),
	    line.create([40,20], [40,20]),
	    line.create([-40,20], [-40,20])
	    
	];
	l9.cubePositions = [
	];
	l9.startPosition = {x: -40, y: -10, z: 0};
	l9.movingCubes = [
	    new movingCube({x: 10, y: -10, z: 0}, {x:0,y:0.2}),     
	    new movingCube({x: 10, y: 20, z: 0}, {x:0.1,y:0}), 
	];
	l9.text = 'dancing with blocks';
	
	var l10 = new level();
	l10.linePositions = [
	    line.create([-6, -34], [20, -34]),
	    line.create([-6, 46], [20, 46]),
	    line.create([-6, 14], [20, 14]),
	    line.create([-10,20], [-10,42]),
	    line.create([2,20], [2,42]),
	    line.create([14,20], [14,42]),
	    line.create([26,-30], [26,42]),
	    line.create([-10,-30], [-10,42]),
	    
	];
	l10.cubePositions = [
	    {x: 20, y: 20, z: 0},
	    {x: -4, y: 20, z: 0},
	    {x: 20, y: 30, z: 0},
	    {x: -4, y: 30, z: 0},
	    {x: 20, y: 40, z: 0},
	    {x: -4, y: 40, z: 0},
	    
	];
	l10.startPosition = {x: 40, y: 0, z: 0};
	l10.movingCubes = [
	    new movingCube({x: 8, y: -10, z: 0}, {x:0,y:0.2}),  
	    new movingCube({x: 8, y: 30, z: 0}, {x:0,y:0.1}),  
	];
	l10.text = 'no way in';
	
	var l11 = new level();
	l11.linePositions = [
	    line.create([-6, -34], [20, -34]),
	    line.create([-6, 46], [20, 46]),
	    line.create([-6, -20], [20, -20]),
	    line.create([26,-30], [26,42]),
	    line.create([-10,-30], [-10,42]),
	    
	];
	l11.cubePositions = [
	    {x: 8, y: -26, z: 0}, 
	    {x: -2, y: -26, z: 0}, 
	    {x: 18, y: -26, z: 0}
	];
	l11.startPosition = {x: -40, y: 0, z: 0};
	l11.movingCubes = [
	    new movingCube({x: 8, y: 30, z: 0}, {x:0,y:0.1}),  
	    
	    new movingCube({x: -2, y: 20, z: 0}, {x:0,y:0.2}),  
	    new movingCube({x: -2, y: 10, z: 0}, {x:0,y:0.1}),  
	    
	    new movingCube({x: 18, y: 20, z: 0}, {x:0,y:0.25}),  
	    new movingCube({x: 18, y: 20, z: 0}, {x:0,y:0.4}),  
	];
	
	l11.text = 'lava lamp';
	
	var l12 = new level();
	l12.linePositions = [
        line.create([-30, -36], [30, -36]),
        line.create([-30, 36], [30, 36]),
	];
	l12.cubePositions = [
	    {x: -30, y: -30, z: 0}, 
	    {x: -0, y: 0, z: 0}, 
	    {x: 30, y: 30, z: 0}, 
	];
	l12.startPosition = {x: -60, y: -30, z: 0};
	l12.movingCubes = [
	     new movingCube({x: -16, y: -30, z: 0}, {x:0,y:0.2}),
	     new movingCube({x: 16, y: 30, z: 0}, {x:0,y:0.2}),
	];
	
	l12.text = 'up the steps';
	
	
	var l13 = new level();
	l13.linePositions = [
        line.create([-30, -60], [30, -60]),
        line.create([-40, -15], [-40, 15]),
        line.create([40, -15], [40, 15]),
	];
	l13.cubePositions = [
	    {x: -0, y: 0, z: 0}, 
	    {x: -30, y: -30, z: 0}, 
	    {x: 30, y: -30, z: 0}, 
	    {x: -0, y: -30, z: 0}, 
	    
	    {x: -30, y: -50, z: 0}, 
	    {x: 30, y: -50, z: 0}, 
	    {x: -0, y: -50, z: 0}, 
	];
	l13.startPosition = {x: 0, y: 30, z: 0};
	l13.movingCubes = [
	     new movingCube({x: -30, y: -15, z: 0}, {x:0.2,y:0}),
	     new movingCube({x: 30, y: 15, z: 0}, {x:-0.2,y:0}),
	];
	
	l13.text = 'down into darkness';
	
	var levels = [l1, l1a,   l6, l2,  l3,  l4, l5, l7, l8, l9, l10, l11, l12, l13];
	
	
	var l14 = new level();
	l14.linePositions = [
        line.create([-60, -40], [60, -40]),
        line.create([-40, -60], [-40, 40]),
	];
	l14.cubePositions = [
	    
	    {x: -30, y: -20, z: 0},
	    {x: -30, y: -30, z: 0}, 
	    
	    {x: -14, y: -30, z: 0},
	    
	    {x: 2, y: 0, z: 0},
	    {x: 2, y: -10, z: 0},
	    {x: 2, y: -30, z: 0}, 
	    {x: 2, y: -20, z: 0}, 

	    {x: 18, y: -30, z: 0},
	    {x: 18, y: -20, z: 0}, 
	    {x: 18, y: -10, z: 0}, 
 
	    {x: 32, y: -30, z: 0}, 
	    {x: 32, y: -10, z: 0}, 
	    {x: 32, y: 0, z: 0}, 
	    {x: 32, y: 10, z: 0}, 
	    {x: 32, y: -20, z: 0}, 

	    
	    {x: 48, y: -30, z: 0}, 
	    {x: 48, y: -20, z: 0}, 
	    {x: 48, y: -10, z: 0}, 
	    {x: 48, y: 0, z: 0}, 
	    {x: 48, y: 10, z: 0}, 
	    {x: 48, y: 20, z: 0},
	    {x: 48, y: 30, z: 0},
	    {x: 48, y: 40, z: 0},
	    
 

	];
	l14.startPosition = {x: -50, y: -30, z: 0};
	l14.movingCubes = [
	];
	
	l14.text = 'stop the <strong>growth</strong>';
	
	var levels = [l1, l1a,   l6, l2,  l3,  l4, l5, l7, l8, l9, l10, l11, l12, l13, l14];
	
	
	return {
		get : function(l){
			return levels[l];
		}
	};
});