<?php if (get_row_layout() == 'services_section'): ?>
    <div class="services_page_services_section">
        <?php if (have_rows('services_repeater')):

            $counter = 0;
            while (have_rows('services_repeater')) : the_row();

                $counter++;

                $image = get_sub_field('image');

                if (!empty($image)) {
                    $image_url = $image['url'];
                    $image_title = $image['title'];
                    $image_alt = $image['alt'];
                    $image_size = 'large';
                    $image_large = $image['sizes'][$image_size];
                }

                $title = get_sub_field('title');
                $subtitle = get_sub_field('subtitle');
                ?>

                <div class="service">
                    <div class="symbol">
                        |
                    </div>
                    <div class="title">
                        <a href="#<?php echo $counter; ?>"><?php echo $title; ?></a>
                    </div>
                </div>

            <?php endwhile; ?>`
        <?php endif; ?>
    </div>
<?php endif; ?>