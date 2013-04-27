require([ 'game' ], function(game) {
	return {
		keydown : function(key) {
			switch (key.which) {
			case key.DOM_VK_SPACE:
				game.changePerspective();
				break;
			}
		}
	};
});