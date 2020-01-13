<?php

requireHeroSectionIfExists();

if ( have_rows( 'flexible_content_contact_page' ) ) :

	while ( have_rows( 'flexible_content_contact_page' ) ) :
		the_row();

		// Load flexible modules here
		require 'contact/contact-section.php';

	endwhile;

endif;
