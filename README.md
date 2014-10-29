Full Screen
---------------------

Small javascript plugin to show/hide items from a html screen

Usage
---------------

Include the fullscreen.js file in your html page

	<script src="fullscreen.js" type="text/javascript"></script>

Add a trigger element to your html:

	<button type="button" class="btn" id="full-screen">
	  <span class="glyphicon glyphicon-fullscreen"></span>
	</button>

At the moment the button uses the bootstrap glyphicon styles but will add customization for this later

Add `full-screen-hide` class to any elements in your html that you want to hide in full screen mode

	<div class="full-screen-hide">.....</div>

Initialize the plugin using

	fullScreenTool.init(options)

Click your button!



Options
-----------------

* **triggerButton** (string): id of element used to trigger the full screen toggle, defaults to "#full-screen"
* **targetElement** (string): class of elements to be hidden, defaults to ".full-screen-hide"
* **onComplete** (function): callback function to call when the full screen mode has been toggled