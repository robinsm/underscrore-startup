<?php

if( have_rows('flexible_content_page') ):
    
	    while ( have_rows('flexible_content_page') ) : the_row();

			// Load flexible modules here
			require('intro-section.php');
			require('services-section.php');
			require('features-section.php');
			require('partners-section.php');
			require('newsletter-section.php');


	    endwhile;
	
endif;