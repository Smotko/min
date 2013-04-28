define(function(){
	return {
		
		changes : 0,
		steps : 0,
		deaths : 0,
		
		reset : function(){
			this.changePerspective = 0;
			this.step = [0,0,0,0];
			this.deaths = 0;
		}
	};
});