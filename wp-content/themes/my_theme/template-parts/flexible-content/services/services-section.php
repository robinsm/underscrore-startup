<?php if ( get_row_layout() == 'services_section' ) : ?>
	<div class="services_page_services_section">
		<?php
		if ( have_rows( 'services_repeater' ) ) :

			$counter = 0;
			while ( have_rows( 'services_repeater' ) ) :
				the_row();

				$counter++;

				$image = get_sub_field( 'image' );

				if ( ! empty( $image ) ) {
					$image_url   = $image['url'];
					$image_title = $image['title'];
					$image_alt   = $image['alt'];
					$image_size  = 'large';
					$image_large = $image['sizes'][ $image_size ];
				}

				$title = get_sub_field( 'title' );
				?>

				<div class="service">
					<div class="symbol">
						<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/dist/images/icons/vertical-line-dark.svg"
							alt=""/>
					</div>
					<div class="on_hover">
						<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/dist/images/icons/plus-dark.svg"
								alt=""/>
					</div>
					<div class="title">
						<a href="#<?php echo $counter; ?>"><?php echo esc_html( $title ); ?></a>
					</div>
				</div>

			<?php endwhile; ?>`
		<?php endif; ?>
	</div>
<?php endif; ?>
