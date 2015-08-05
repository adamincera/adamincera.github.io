function organize() {
	$(function() {
		var navHeight = (window.innerHeight - $('#nav').height()) / 2 * 0.8;
		var contentHeight = (window.innerHeight - $('#content').height()) / 2 * 0.8;
		if(contentHeight < 10) contentHeight = 10;
		$('#nav').offset({top: navHeight, left: 10});
		$('#content').offset({top: contentHeight});
	});
}
