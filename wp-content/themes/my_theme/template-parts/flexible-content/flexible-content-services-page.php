<?php

if (have_rows('flexible_content_services_page')):

    while (have_rows('flexible_content_services_page')) : the_row();

        // Load flexible modules here
        require('shared/hero-section.php');
        require('services/services-section.php');
        require('services/single-services-section.php');

    endwhile;

endif;