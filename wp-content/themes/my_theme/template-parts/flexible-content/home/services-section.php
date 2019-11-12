<?php
if( get_row_layout() == 'services_section' ):
?>
<div class="services_section">

    <?php if( have_rows('services_repeater') ):

            while ( have_rows('services_repeater') ) : the_row();
                        
                $image = get_sub_field('image');

                if( !empty($image) ) {
                    $image_url = $image['url'];
                    $image_title = $image['title'];
                    $image_alt = $image['alt'];
                    $image_size = 'large';
                    $image_large = $image['sizes'][ $image_size ];
                }	

                $link = get_sub_field('link');
                $title = get_sub_field('title');
                $description = get_sub_field('description');
            ?>



    <a href="<?php echo $link; ?>">
        <div class="service overlay dark"
            style="background-image: url('<?php echo $image_url;?>'); background-size: cover;">
            <div class="service_padding">
                <div class="title">
                    <?php echo $title; ?>
                </div>
                <div class="symbol">
                    |
                </div>
                <div class="on_hover">+</div>
                <div class="description">
                    <?php echo $description; ?>
                </div>
            </div>

        </div>
    </a>


    <?php endwhile; ?>


    <?php endif; ?>

</div>
<?php endif; ?>