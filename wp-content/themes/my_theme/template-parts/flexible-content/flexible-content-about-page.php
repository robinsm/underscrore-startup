<?php

if( have_rows('flexible_content_about_page') ):
    
	    while ( have_rows('flexible_content_about_page') ) : the_row();

			// Load flexible modules here
			require('shared/hero-section.php');
			require('about/intro-section.php');

	    endwhile;
	
endif;