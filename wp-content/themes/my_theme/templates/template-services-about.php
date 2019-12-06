<?php
/**
 * Template Name: About Template
 */
//require(__DIR__."/custom_attributes.php");
get_header();
?>

<?php
require(get_template_directory() . '/template-parts/flexible-content/flexible-content-about-page.php');
?>

<?php get_footer(); ?>