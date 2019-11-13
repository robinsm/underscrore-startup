<?php
if( get_row_layout() == 'partners_section' ):

    $title = get_sub_field('title');
    $intro = get_sub_field('intro');
?>
<div class="partners_section section-with-padding">

    <div class="container-fluid">
        <div class="partners_intro">

            <h2><?php echo $title; ?></h2>
            <p><?php echo $intro; ?></p>

        </div>
    </div>


    <div class="partners">
        <?php if( have_rows('partners_repeater') ):

        while ( have_rows('partners_repeater') ) : the_row();
                    
            $icon = get_sub_field('icon');

            if( !empty($icon) ) {
                $icon_url = $icon['url'];
                $icon_title = $icon['title'];
                $icon_alt = $icon['alt'];
                $icon_size = 'large';
                $icon_large = $icon['sizes'][ $icon_size ];
            }	

            
        ?>

        <div class="partner">
            <img src="<?php echo $icon_url;?>" alt="" />
        </div>


        <?php endwhile; ?>


        <?php endif; ?>
    </div>

</div>

<?php endif; ?>