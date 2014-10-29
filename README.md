Full Screen
---------------------

Small javascript plugin to show/hide items from a html screen

Usage
---------------

Include the fullscreen.js file in your html page

Initialize the plugin using

	fullScreenTool.init(options)

Options
-----------------

* **triggerButton** (string): id of element used to trigger the full screen toggle, defaults to "#full_screen"
* **targetElement** (string): class of elements to be hidden, defaults to ".full_screen_hide"
* **onComplete** (function): callback function to call when the full screen mode has been toggled