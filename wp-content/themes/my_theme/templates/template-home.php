<?php
/**
 * Template Name: Home Template
 */
	//require(__DIR__."/custom_attributes.php");
	get_header(); 
 ?>

<?php 
	require( get_template_directory()  . '/template-parts/flexible-content/flexible-content.php');
?>

<?php get_footer(); ?>