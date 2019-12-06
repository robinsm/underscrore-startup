<?php

if (have_rows('flexible_content_news_page')):

    while (have_rows('flexible_content_news_page')) : the_row();

        // Load flexible modules here
        require('shared/hero-section.php');
        require('news/news-section.php');

    endwhile;

endif;