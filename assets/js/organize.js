function organize() {
	$(function() {
		var navHeight = (window.innerHeight - $('#nav').height()) / 2 * 0.8;
                console.log($('#nav').height());
		var contentHeight = (window.innerHeight - $('#content').height()) / 2 * 0.8;
		if(contentHeight < 10) contentHeight = 10;
		$('#nav').offset({top: navHeight, left: 10});
		$('#content').offset({top: contentHeight});
		$('body').height(window.innerheight);
	});
}

function organizeResume() {
	$(function() {
		var navHeight = (window.innerHeight - $('#nav').height()) / 2 * 0.8;
		$('#nav').offset({top: navHeight, left: 10});
        console.log(window.innerHeight);
		$('#resume').height(window.innerheight);
        console.log($('#resume').height());
        console.log(window.innerHeight);
	});
}

function organizeContact() {
	$(function() {
		var navHeight = (window.innerHeight - $('#nav').height()) / 2 * 0.8;
                console.log($('#nav').height());
		var contentHeight = (window.innerHeight - $('#content').height()) / 2 * 0.95;
		if(contentHeight < 10) contentHeight = 10;
		$('#nav').offset({top: navHeight, left: 10});
		$('#content').offset({top: contentHeight});
		$('body').height(window.innerheight);
	});
}
