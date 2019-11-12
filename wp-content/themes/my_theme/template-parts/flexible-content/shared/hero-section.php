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
        ?>

    <div class="container">
        <div class="illustration">
            <img src="<?php echo $illustration_url;?>" alt="<?php echo $illustration_alt;?>" />
        </div>

        <div class="title_and_subtitle">
            <h1 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000"><?php echo $title; ?></h1>
            <p data-aos="fade-up" data-aos-delay="500"><?php echo $subtitle; ?></p>
        </div>
    </div>

</div>
<?php endif; ?>