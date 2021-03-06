define(function(){
	
	var text = document.createElement('div');
	text.innerHTML = "";
	document.body.appendChild(text);
	$text = $('div');
	
	var text2 = document.createElement('p');
	text2.innerHTML = "";
	document.body.appendChild(text2);
	$text2 = $('p');
	
	
	var timeout = null;
	var timeout2 = null;
	var lastLevel = -1;
	return {
		
		setText : function(t, duration){
			clearTimeout(timeout);
			$text.animate({'opacity': 0.0}, { queue: true, duration: 0 });
            $text.html(t);
			$text.animate({'opacity': 0.7}, { queue: true, duration: 300 });
			
			if(duration != null){
				timeout = setTimeout(function(){
				   $text.animate({'opacity': 0.0},{ queue: false, duration: 1000 });
				}, duration);
			};
			
		},
		setTextBottom : function(t, duration){
			clearTimeout(timeout2);
			$text2.animate({'opacity': 0.0}, { queue: true, duration: 0 });
            $text2.html(t);
			$text2.animate({'opacity': 0.7}, { queue: true, duration: 300 });
			
			if(duration != null){
				timeout2 = setTimeout(function(){
				   $text2.animate({'opacity': 0.0},{ queue: false, duration: 1000 });
				}, duration);
			}
		},
		hideTextBottom : function(){
			$text2.animate({'opacity': 0.0});
		},
		update : function(){
			var pressSpace2 = "<strong>space</strong>"; 
			if(game.level.stage != 0) return;
			if($text.html()  == "<strong>space</strong> changes perspective" && game.camera.isMovableX()){
				this.setText("move <strong>right</strong>");
			}
			if($text.html()  != pressSpace2 && game.player.position.x == 30 && game.camera.isMovableX()){
				this.setText(pressSpace2);
			}
			if($text.html() != "move <strong>right</strong>" && game.player.position.x < 30 && game.camera.isMovableX()){
				this.setText("move <strong>right</strong>");
			}
			if($text.html() != "move <strong>left</strong>" && game.player.position.x > 30 && game.camera.isMovableX()){
				this.setText("move <strong>left</strong>");
			}
			if($text.html() == pressSpace2 && !game.camera.isMovableX()){
				this.setText("there is another <strong>perspective</strong>");
			}
			if($text.html() != "now move <strong>up</strong>" && game.camera.isMovableY() && game.player.position.x == 30 && game.player.position.y < 20){
				this.setText("now move <strong>up</strong>");
			}
			if($text.html() != "move <strong>down</strong>" && game.camera.isMovableY() && game.player.position.x == 30 && game.player.position.y > 20){
				this.setText("move <strong>down</strong>");
			}
			if($text.html() != "align other perspective" && game.camera.isMovableY() && game.player.position.x != 30){
				this.setText("align other perspective");
			}
		},
		loadLevelText : function(){
			if(game.level.stage == lastLevel){
				return;
			}
			lastLevel = game.level.stage;
			this.setText(game.level.text);
			
//			if(game.level.stage == 1){
//				this.setText('<span style="color:red">red</span> is not minimalistic', 3000);
//			}
//			if(game.level.stage == 2){
//				this.setText('slide through multiple blocks', 3000);
//			}
//			if(game.level.stage == 3){
//				this.setText('tasty', 3000);
//			}
//			if(game.level.stage == 4){
//				this.setText('think outside the box', 3000);
//			}
//			if(game.level.stage == 5){
//				this.setText('up & down', 3000);
//			}
//			if(game.level.stage == 6){
//				this.setText('balance is everything', 3000);
//			}
//			if(game.level.stage == 7){
//				this.setText('i sense a new block', 3000);
//			}
//			if(game.level.stage == 8){
//				this.setText('you are not the only thing that <span style="color:blue">moves</span>', 3000);
//			}
//			if(game.level.stage == 9){
//				this.setText('dancing with blocks', 3000);
//			}
//			if(game.level.stage == 10){
//				this.setText('lava lamp', 3000);
//			}
		}
	};
});