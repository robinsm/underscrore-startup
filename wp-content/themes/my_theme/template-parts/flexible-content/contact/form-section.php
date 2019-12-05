<?php
if( get_row_layout() == 'form_section' ):
?>
<section class="form">
    <div class="form_section container">

        <?php 
            $message = get_sub_field('message');
            $ninja_forms_id = get_sub_field('ninja_forms_id');
        ?>

        <div class="form">
            <div class="message">
                <?php echo $message; ?>
            </div>

            <!-- Call plugin to insert newsletter signup form -->
            <?php
                echo do_shortcode("[ninja_form id=" . $ninja_forms_id . "]");        
            ?>

        </div>

    </div>
</section>
<?php endif; ?>