<?php

requireHeroSectionIfExists();

if ( have_rows( 'flexible_content_services_page' ) ) :

	while ( have_rows( 'flexible_content_services_page' ) ) :
		the_row();

		// Load flexible modules here
		require 'services/services-section.php';
		require 'services/single-services-section.php';

	endwhile;

endif;
