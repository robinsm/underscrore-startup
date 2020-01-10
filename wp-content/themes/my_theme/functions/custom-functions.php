<?php

function _themename_assets() {

	// wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css?family=Reem+Kufi|Roboto:400,400i,500,500i,700,700i&display=swap', false );

	wp_enqueue_style( '_themename-stylesheet', get_stylesheet_directory_uri() . '/dist/css/style.css', array(), '1.0.0', 'all' );

	wp_enqueue_script( '_themename-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array(), '1.0.0', true );
	wp_enqueue_script( '_themename-custom-scripts', get_template_directory_uri() . '/dist/custom-js/custom.js', array( 'jquery' ), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', '_themename_assets' );

/**
 * START: Disable WordPress emoji's
 * https://kinsta.com/knowledgebase/disable-emojis-wordpress/
 */
function disable_emojis() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'admin_print_styles', 'print_emoji_styles' );
	remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );
	add_filter( 'wp_resource_hints', 'disable_emojis_remove_dns_prefetch', 10, 2 );
}
   add_action( 'init', 'disable_emojis' );

   /**
	* Filter function used to remove the tinymce emoji plugin.
	*
	* @param array $plugins
	* @return array Difference betwen the two arrays
	*/
function disable_emojis_tinymce( $plugins ) {
	if ( is_array( $plugins ) ) {
		return array_diff( $plugins, array( 'wpemoji' ) );
	} else {
		return array();
	}
}

   /**
	* Remove emoji CDN hostname from DNS prefetching hints.
	*
	* @param array  $urls URLs to print for resource hints.
	* @param string $relation_type The relation type the URLs are printed for.
	* @return array Difference betwen the two arrays.
	*/
function disable_emojis_remove_dns_prefetch( $urls, $relation_type ) {
	if ( 'dns-prefetch' == $relation_type ) {
		/** This filter is documented in wp-includes/formatting.php */
		$emoji_svg_url = apply_filters( 'emoji_svg_url', 'https://s.w.org/images/core/emoji/2/svg/' );

		$urls = array_diff( $urls, array( $emoji_svg_url ) );
	}

	return $urls;
}
   /**
	* END: Disable WordPress emoji's
	*/

 /**
  * START: Disable Embeds in WordPress
  * https://kinsta.com/knowledgebase/disable-embeds-wordpress/
  */
function my_deregister_scripts() {
	wp_dequeue_script( 'wp-embed' );
}
add_action( 'wp_footer', 'my_deregister_scripts' );
/**
* END: Disable Embeds in WordPress
*/

/**
 * START: Redirect all 404 errors to a custom page to allow us to use ACFPro to structure the page
 */
add_action( 'template_redirect', 'custom_404_redirect' );
function custom_404_redirect()
{
    // check if is a 404 error, and it's on your jobs custom post type
    if( is_404() )
    {
        // then redirect to yourdomain.com/jobs/
        wp_redirect( home_url( '/error/' ) );
        exit();
    }
}
/**
 * START: Redirect all 404 errors
 */