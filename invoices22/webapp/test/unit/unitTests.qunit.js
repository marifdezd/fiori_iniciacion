/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Mari/invoices22/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
