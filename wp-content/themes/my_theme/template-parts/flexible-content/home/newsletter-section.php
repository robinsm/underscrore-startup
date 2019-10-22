<?php
if( get_row_layout() == 'newsletter_section' ):
?>
<div class="container">
    <div class="newsletter_section">

        <?php 

            $illustration = get_sub_field('illustration');

            if( !empty($illustration) ) {
                $illustration_url = $illustration['url'];
                $illustration_title = $illustration['title'];
                $illustration_alt = $illustration['alt'];
                $illustration_size = 'large';
                $illustration_large = $illustration['sizes'][ $illustration_size ];
            }
            
            $message = get_sub_field('message');
        ?>

        <div class="illustration">
            <img src="<?php echo $illustration_url;?>" alt="<?php echo $illustration_alt;?>" />
        </div>

        <div class="form">
            <div class="message">
                <?php echo $message; ?>
            </div>

            <!-- Call plugin to insert newsletter signup form -->
            <?php nsu_form(); ?>

        </div>

    </div>
</div>
<?php endif; ?>