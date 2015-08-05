function organize() {
	$(function() {
		var contentHeight = (window.innerHeight - $('.home-content').height()) / 2 * 0.8;
                console.log(window.innerHeight + ' - ' + $('.home-content').height() + ' = ' + contentHeight);
		if(contentHeight < 10) contentHeight = 10;
		$('.home-content').offset({top: contentHeight});
	});
}
