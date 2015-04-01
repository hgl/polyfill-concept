(function () {
	var support = false;
	if (document.documentElement.classList) {
		support = {};
		var div = document.createElement('div');

		div.classList.add("a", "b");
		support.multipleArguments = div.className === "a b";

		div.className = "a b";
		div.classList.toggle("a", true);
		div.classList.toggle("b", undefined);
		div.classList.toggle("b", undefined);
		support.toggleForceArgument = div.className === "a b";
	}
	window.support = support;
})();
