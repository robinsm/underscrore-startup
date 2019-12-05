<?php

if( have_rows('flexible_content_contact_page') ):
    
	    while ( have_rows('flexible_content_contact_page') ) : the_row();

			// Load flexible modules here
			require('shared/hero-section.php');
			require('contact/map-section.php');
			require('contact/contact-section.php');
			require('contact/form-section.php');

	    endwhile;
	
endif;