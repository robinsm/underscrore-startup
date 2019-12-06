<?php

if ( have_rows( 'flexible_content_page' ) ) :

	while ( have_rows( 'flexible_content_page' ) ) :
		the_row();

		// Load flexible modules here
		require 'shared/hero-section.php';
		require 'home/intro-section.php';
		require 'home/services-section.php';
		require 'home/features-section.php';
		require 'home/partners-section.php';
		require 'home/newsletter-section.php';

		endwhile;

endif;
