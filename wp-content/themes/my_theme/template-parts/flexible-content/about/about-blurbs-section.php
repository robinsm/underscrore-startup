<?php if ( get_row_layout() == 'about_blurb_section' ) : ?>

	<?php if ( have_rows( 'about_blurbs_repeater' ) ) : ?>

		<div class="dual_blurb_section">
			<?php

			$counter = 0;
			while ( have_rows( 'about_blurbs_repeater' ) ) :
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

				$title    = get_sub_field( 'title' );
				$subtitle = get_sub_field( 'subtitle' );
				$body     = get_sub_field( 'body' );
				?>

				<div class="dual_blurb">
					<a name="<?php echo $counter; ?>"></a>
					<div class="title_section"
						 style="background-image: url('<?php echo esc_url( $image_url ); ?>'); background-size: cover;">
						<h2><?php echo $title; ?></h2>
					</div>

					<div class="body_section">
						<div class="subtitle">
							<h2 class="secondary_font"><?php echo esc_html( $subtitle ); ?></h2>
						</div>
						<div class="body">
							<?php echo $body; ?>
						</div>

					</div>
				</div>

			<?php endwhile; ?>

		</div>
	<?php endif; ?>

<?php endif; ?>
