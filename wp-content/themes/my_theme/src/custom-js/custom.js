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
