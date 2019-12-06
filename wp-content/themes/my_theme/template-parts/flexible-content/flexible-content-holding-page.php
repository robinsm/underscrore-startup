<?php

if (have_rows('flexible_content_holding_page')):

    while (have_rows('flexible_content_holding_page')) : the_row();

        // Load flexible modules here
        require('holding-page/holding-page-section.php');

    endwhile;

endif;