// Offset for Site Navigation
$('#siteNav').affix({
	offset: {
		top: 100
	}
})

$(window).scroll(function(){
	if($('#siteNav').hasClass('affix-top')){
		$('.navbar-brand img').attr('src','./assets/images/logo.png');
	}else{
		$('.navbar-brand img').attr('src','./assets/images/logo1.png');
	}
})