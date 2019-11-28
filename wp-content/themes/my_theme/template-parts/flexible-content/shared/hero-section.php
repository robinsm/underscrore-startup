<?php
if( get_row_layout() == 'hero_section' ):
?>
<div class="hero_section">

    <?php 

            $illustration = get_sub_field('illustration');

            if( !empty($illustration) ) {
                $illustration_url = $illustration['url'];
                $illustration_title = $illustration['title'];
                $illustration_alt = $illustration['alt'];
                $illustration_size = 'large';
                $illustration_large = $illustration['sizes'][ $illustration_size ];
            }
            
            $title = get_sub_field('title');
            $subtitle = get_sub_field('subtitle');

            $reduce_padding = get_sub_field('reduce_padding');
        ?>

    <div class="wide-container <?php echo $reduce_padding ? 'reduce-padding' : '' ?>">
        <div class="illustration">
            <img src="<?php echo $illustration_url;?>" alt="<?php echo $illustration_alt;?>" />
        </div>

        <div class="title_and_subtitle">
            <h1><?php echo $title; ?></h1>
            <p><?php echo $subtitle; ?></p>
        </div>
    </div>

</div>
<?php endif; ?>