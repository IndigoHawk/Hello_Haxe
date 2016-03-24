(function (console) { "use strict";
var Main = function() { };
Main.main = function() {
	console.log("Hello World !");
};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
