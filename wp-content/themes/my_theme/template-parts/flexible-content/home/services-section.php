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

                $default_background_color = "#909090";
                $background_color = get_sub_field('background-color');
                $link = get_sub_field('link');
                $title = get_sub_field('title');
                $description = get_sub_field('description');

                // determine style for the background, an image or a colour
                if( !empty($image) ) {
                    $style = "background-image: url('" . $image_url . "'); background-size: cover; ";
                } else {
                    $style = !empty($background_color) ? "background-color: " . $background_color : "background-color: " . $default_background_color;
                }
            ?>



    <a href="<?php echo $link; ?>">
        <div class="service" style="<?php echo $style;?>">
            <div class="service_padding">
                <div class="title">
                    <?php echo $title; ?>
                </div>
                <div class="symbol">
                    <img src="<?php echo get_template_directory_uri();?>/dist/images/icons/vertical-line.svg" alt="" />
                </div>
                <div class="on_hover">
                    <img src="<?php echo get_template_directory_uri();?>/dist/images/icons/plus.svg" alt="" />
                </div>
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