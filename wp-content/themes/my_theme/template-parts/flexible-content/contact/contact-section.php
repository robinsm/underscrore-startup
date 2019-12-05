<?php
if( get_row_layout() == 'contact_section' ):
?>

<section class="contact">

    <div class="contact_section wide-container">

        <?php if( have_rows('contact_repeater') ):

            while ( have_rows('contact_repeater') ) : the_row();
                        
                $icon = get_sub_field('icon');

                if( !empty($icon) ) {
                    $icon_url = $icon['url'];
                    $icon_title = $icon['title'];
                    $icon_alt = $icon['alt'];
                    $icon_size = 'large';
                    $icon_large = $icon['sizes'][ $icon_size ];
                }	

                $title = get_sub_field('title');
                $body = get_sub_field('body');
            ?>

        <div class="contact_item">
            <div class="contact_icon_container">
                <div class="icon">
                    <img src="<?php echo $icon_url;?>" alt="" />
                </div>
            </div>
            <div class="contact_detail_container">
                <div class="title">
                    <?php echo $title; ?>
                </div>
                <div class="body">
                    <?php echo $body; ?>
                </div>
            </div>
        </div>
        <?php endwhile; ?>
        <?php endif; ?>
    </div>
</section>

</div>
<?php endif; ?>