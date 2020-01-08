<?php if ( have_rows( 'flexible_content_404_page' ) ) :
	while ( have_rows( 'flexible_content_404_page' ) ) :
		the_row();

		// Load flexible modules here
		require '404/404-section.php';

	endwhile;
endif;
