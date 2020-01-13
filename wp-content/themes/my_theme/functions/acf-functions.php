<?php

function requireHeroSectionIfExists() {

    if ( have_rows( 'flexible_content_hero_section' ) ) :

        while ( have_rows( 'flexible_content_hero_section' ) ) :
            the_row();
    
            // Load flexible modules here
            require __DIR__ . '/../template-parts/flexible-content/shared/hero-section.php';
    
        endwhile;
    endif;

}

?>