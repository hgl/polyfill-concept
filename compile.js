(function () {
	var polyfill = document.getElementById("polyfill");
	var code = "var support = " + JSON.stringify(support) + ";\n" + polyfill.innerHTML;
	$.post("http://closure-compiler.appspot.com/compile", {
		js_code: code,
		compilation_level: "ADVANCED_OPTIMIZATIONS",
		output_format: "text",
		output_info: "compiled_code"
	}, function (data) {
		var output = document.getElementById("output");
		output.innerHTML = data;
	}, "text");
})();
