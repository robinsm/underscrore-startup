<?php
if( get_row_layout() == 'map_section' ):
?>
<div class="map_section">

    <?php 

            $map_image = get_sub_field('map_image');

            if( !empty($map_image) ) {
                $map_image_url = $map_image['url'];
                $map_image_title = $map_image['title'];
                $map_image_alt = $map_image['alt'];
                $map_image_size = 'large';
                $imap_image_large = $map_image['sizes'][ $map_image_size ];
            }
            
        ?>

    <div class="wide-container">
        <div class="map-image">
            <img src="<?php echo $map_image_url;?>" alt="<?php echo $map_image_alt;?>" />
        </div>
    </div>

</div>
<?php endif; ?>