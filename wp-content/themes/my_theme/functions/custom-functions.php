<?php

function _themename_assets() {
	
	wp_enqueue_style( '_themename-stylesheet', get_stylesheet_directory_uri() . '/dist/css/style.css', array(), '1.0.0', 'all' );

	wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:400,400i,500,500i,700,700i&display=swap', false ); 
	
	// https://wplift.com/make-wordpress-themes-retina-display-ready
	wp_enqueue_script('retina_images_script', get_stylesheet_directory_uri() . '/dist/js/retina-1.3.0/retina.min.js', NULL, '1.3', true);
}
add_action('wp_enqueue_scripts', '_themename_assets');