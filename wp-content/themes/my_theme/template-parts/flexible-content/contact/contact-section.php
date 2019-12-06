<?php if (get_row_layout() == 'contact_section'): ?>

    <div class="body">
        <div class="sidebar">
            <section class="contact">

                <div class="contact_section wide-container">

                    <?php if (have_rows('contact_repeater')):

                        while (have_rows('contact_repeater')) : the_row();

                            $icon = get_sub_field('icon');

                            if (!empty($icon)) {
                                $icon_url = $icon['url'];
                                $icon_title = $icon['title'];
                                $icon_alt = $icon['alt'];
                                $icon_size = 'large';
                                $icon_large = $icon['sizes'][$icon_size];
                            }

                            $title = get_sub_field('title');
                            $body = get_sub_field('body');
                            ?>

                            <div class="contact_item">
                                <div class="contact_icon_container">
                                    <div class="icon">
                                        <img src="<?php echo $icon_url; ?>" alt=""/>
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

        <div class="main">
            <section class="image">
                <div class="map_section">

                    <?php

                    $map_image = get_sub_field('map_image');

                    if (!empty($map_image)) {
                        $map_image_url = $map_image['url'];
                        $map_image_title = $map_image['title'];
                        $map_image_alt = $map_image['alt'];
                        $map_image_size = 'large';
                        $imap_image_large = $map_image['sizes'][$map_image_size];
                    }

                    ?>

                    <img src="<?php echo $map_image_url; ?>" alt="<?php echo $map_image_alt; ?>"/>

                </div>
            </section>

            <section class="contact">

                <div class="contact_section wide-container">

                    <?php if (have_rows('contact_repeater')):

                        while (have_rows('contact_repeater')) : the_row();

                            $icon = get_sub_field('icon');

                            if (!empty($icon)) {
                                $icon_url = $icon['url'];
                                $icon_title = $icon['title'];
                                $icon_alt = $icon['alt'];
                                $icon_size = 'large';
                                $icon_large = $icon['sizes'][$icon_size];
                            }

                            $title = get_sub_field('title');
                            $body = get_sub_field('body');
                            ?>

                            <div class="contact_item">
                                <div class="contact_icon_container">
                                    <div class="icon">
                                        <img src="<?php echo $icon_url; ?>" alt=""/>
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
                        <?php echo do_shortcode("[ninja_form id=" . $ninja_forms_id . "]"); ?>

                    </div>

                </div>
            </section>
        </div>
    </div>


<?php endif; ?>