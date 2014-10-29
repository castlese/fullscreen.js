// Toggle Full Screen Display
// customise what classes to hide/show on maximise/minimise

var fullScreenTool = {
	config: {
		triggerButton: "#full-screen",
		targetElements: ".full-screen-hide",
		onComplete: function(){}
	},
	init: function(config){
		//allow custom configuration via init()
    if (config && typeof(config) == 'object') {
        $.extend(fullScreenTool.config, config);
    }	

    //cache some elements which will be used throughout
    fullScreenTool.$triggerButton = $(fullScreenTool.config.triggerButton);
    fullScreenTool.$targetElements = $(fullScreenTool.config.targetElements);
    
    fullScreenTool.setUp();

	},
	setUp: function(){
		fullScreenTool.$triggerButton.on("click", function(e){
			e.preventDefault();
			fullScreenTool.togggle();
		});
	},
	togggle: function(){
		fullScreenTool.toggleElements();
		fullScreenTool.toggleTriggerButton();
		fullScreenTool.resizeWindow();
		fullScreenTool.config.onComplete();
	},
	toggleElements: function(){
		fullScreenTool.$targetElements.toggle();
	},
	toggleTriggerButton: function(){
		$(fullScreenTool.config.triggerButton).find("span").toggleClass('glyphicon-fullscreen glyphicon-resize-small');
	},	
	resizeWindow: function(){
		$(window).trigger('resize');
	}
}
