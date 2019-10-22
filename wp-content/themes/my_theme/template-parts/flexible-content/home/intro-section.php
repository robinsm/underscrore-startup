<?php
if( get_row_layout() == 'intro_section' ):
?>
<div class="container">
    <div class="intro_section">

        <?php 
            $intro = get_sub_field('intro');
        ?>

        <div class="intro">
            <?php echo $intro; ?>
        </div>

    </div>
</div>
<?php endif; ?>