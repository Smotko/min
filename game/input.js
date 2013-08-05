define(function() {
    var game = null;
        var startGame = function(){
        if(!game.started){
            game.start();
            return true;
        }
        return false;
    }
    var input = {
        init : function(g){
            game = g;
            $(document).keydown(this.keydown);
            Hammer(document).on("tap", this.tap);
            Hammer(document).on("swipe", this.swipe);
            Hammer(document).on("touch", function(ev) {
                ev.gesture.preventDefault();
            });
        },
        tap : function(event){
            if(startGame()) return;
            event.gesture.preventDefault();
            var posX = event.gesture.center.pageX;
            var posY = event.gesture.center.pageY;
            
            var docX = $(document).width();
            var docY = $(document).height();
            
            if(posX < docX/2) {
                game.player.move(-1, 0);
            }
            else{
                game.player.move(1,0);
            }
            if(posY < docY/2) {
                game.player.move(0, 1);
            }
            else{
                game.player.move(0, -1);
            }
        },
        swipe : function(event){
            event.gesture.preventDefault();
            game.camera.nextPerspective();
            game.score.changes += 1;
        },
        keydown : function(key) {
            //key.preventDefault();
            if(startGame()) return;

            if(game.ended && false){
                lockout = true;
                game.level.stage = 0;
                game.loadLevel(0);
                game.start();
                game.ended = false;
                game.score.reset();
                game.text.setTextBottom("cheat enabled", 3000);
                return;
            }
            switch (key.which) {
            case 32:
                key.preventDefault();
                game.camera.nextPerspective();
                game.score.changes += 1;
                break;
            case 37:
                key.preventDefault();
                game.player.move(-1, 0);
                break;
            case 39:
                key.preventDefault();
                game.player.move(1, 0);
                break;
            case 38:
                key.preventDefault();
                game.player.move(0, 1);
                break;
            case 40:
                key.preventDefault();
                game.player.move(0, -1);
                break;
            case 67:
                game.player.cheat = !game.player.cheat;
                break;
            case 78:
                game.loadLevel(++game.level.stage);
                break;
            }
        }
    };
    return input;
});
