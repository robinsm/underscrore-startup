<?php if ( get_row_layout() == 'features_section' ) : ?>
	<div class="features_section">

		<?php
		if ( have_rows( 'features_repeater' ) ) :

			while ( have_rows( 'features_repeater' ) ) :
				the_row();

				$icon = get_sub_field( 'icon' );

				if ( ! empty( $icon ) ) {
					$icon_url   = $icon['url'];
					$icon_title = $icon['title'];
					$icon_alt   = $icon['alt'];
					$icon_size  = 'large';
					$icon_large = $icon['sizes'][ $icon_size ];
				}

				$title = get_sub_field( 'title' );
				?>

				<div class="feature">
					<div class="feature-icon-and-title">
						<div class="icon" data-aos="fade-up">
							<img src="<?php echo esc_url( $icon_url ); ?>" alt=""/>
						</div>
						<div class="title" data-aos="fade-up">
							<?php echo esc_html( $title ); ?>
						</div>
					</div>

				</div>


			<?php endwhile; ?>

		<?php endif; ?>

	</div>
<?php endif; ?>
