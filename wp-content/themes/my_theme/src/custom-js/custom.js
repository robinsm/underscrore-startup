function mapsSelector() {
	if (
		/* if we're on iOS, open in Apple Maps */
		navigator.platform.indexOf('iPhone') != -1 ||
		navigator.platform.indexOf('iPad') != -1 ||
		navigator.platform.indexOf('iPod') != -1
	) {
		window.open('maps://maps.google.com/maps?daddr=46.195248,6.127361,&amp;ll=');
	} else {
		window.open('https://maps.google.com/maps?daddr=46.195248,6.127361&amp;ll=');
	}
}

jQuery(document).ready(function() {
	var animatedGifDesktopElement = jQuery('#animated-gif-desktop');
	var animatedGifMobileElement = jQuery('#animated-gif-mobile');

	var windowWidth = jQuery(window).width();

	if (windowWidth >= 768 && illustrationDesktopUrl) {
		//It is a large screen
		jQuery('#animated-gif-desktop').attr('src', illustrationDesktopUrl);
		jQuery('#animated-gif-mobile').remove();
	} else {
		//It is a small screen
		jQuery('#animated-gif-mobile').attr('src', illustrationMobileUrl);
		jQuery('#animated-gif-desktop').remove();
	}
});
