<?php if ( get_row_layout() == 'newsletter_section' ) : ?>
	<section class="newsletter_section">
		<div class="container">
			<div class="newsletter_container">

				<?php

				$illustration = get_sub_field( 'illustration' );

				if ( ! empty( $illustration ) ) {
					$illustration_url   = $illustration['url'];
					$illustration_title = $illustration['title'];
					$illustration_alt   = $illustration['alt'];
					$illustration_size  = 'large';
					$illustration_large = $illustration['sizes'][ $illustration_size ];
				}

				$message        = get_sub_field( 'message' );
				$ninja_forms_id = get_sub_field( 'ninja_forms_id' );
				?>

				<div class="illustration">
					<img src="<?php echo esc_url( $illustration_url ); ?>" alt="<?php echo esc_html( $illustration_alt ); ?>"/>
				</div>

				<div class="form">
					<div class="message">
						<?php echo esc_html( $message ); ?>
					</div>

					<!-- Call plugin to insert newsletter signup form -->
					<?php
						echo do_shortcode( '[ninja_form id=' . $ninja_forms_id . ']' );
					?>

				</div>

			</div>
		</div>
	</section>

<?php endif; ?>
