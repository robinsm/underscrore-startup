<?php

if( have_rows('flexible_content_page') ):
    
	    while ( have_rows('flexible_content_page') ) : the_row();

			// Load flexible modules here

			require('services-section.php');
			require('features-section.php');

			/*
			require('small-offer-text.php');
			require('three-key-points-with-image.php');
			require('club-carousel.php');
			require('features-grid.php');
			require('two-testimonials.php');
			require('price-table-carousel.php');
			require('four-other-benefits.php');*/


	    endwhile;
	
endif;