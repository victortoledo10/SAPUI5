/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"esvictor/sapui5cero/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
