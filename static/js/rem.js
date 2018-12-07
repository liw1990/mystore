+ function() {
	remLayout();
	function remLayout() {
		var w = document.documentElement.clientWidth;
		w = w > 640 ? 640 : w;
		w = w <= 320 ? 320 : w;
		document.documentElement.style.fontSize = w / 6.4 + 'px';
	}
	window.addEventListener('resize', function() {
		remLayout();
	}, false);
}();