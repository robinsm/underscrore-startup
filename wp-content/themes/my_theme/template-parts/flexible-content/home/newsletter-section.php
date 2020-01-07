<?php if ( get_row_layout() == 'newsletter_section' ) : ?>
	<section class="newsletter_section">
		<div class="container">
			<div class="newsletter_container">

				<?php

				$illustration_video_newsletter = get_sub_field( 'illustration_video_newsletter' );
				$illustration_newsletter = get_sub_field( 'illustration_newsletter' );

				if ( $illustration_video_newsletter ) {
					$illustration_video_newsletter_url = $illustration_video_newsletter['url'];
				}

				if ( ! empty( $illustration_newsletter ) ) {
					$illustration_newsletter_url   = $illustration_newsletter['url'];
					$illustration_newsletter_title = $illustration_newsletter['title'];
					$illustration_newsletter_alt   = $illustration_newsletter['alt'];
					$illustration_newsletter_size  = 'large';
					$illustration_newsletter_large = $illustration_newsletter['sizes'][ $illustration_newsletter_size ];
				}

				$message        = get_sub_field( 'message' );
				$ninja_forms_id = get_sub_field( 'ninja_forms_id' );
				?>

				<div class="illustration">
					<?php if ( ! empty( $illustration_video_newsletter_url ) ) : ?>
						<video autoplay loop muted>
							<source src="<?php echo esc_url( $illustration_video_newsletter_url ); ?>" type="video/mp4">
							<!-- <source src="movie.ogg" type="video/ogg"> -->
							Your browser does not support the video tag.
						</video>
						<?php
					else :
						if ( ! empty( $illustration_newsletter_url ) ) :
							?>
							<img src="<?php echo esc_url( $illustration_newsletter_url ); ?>" alt="<?php echo esc_html( $illustration_newsletter_alt ); ?>"/>
							<?php
						endif;
					endif;
					?>
				</div>

				<div class="form">
					<div class="message">
						<p><?php echo esc_html( $message ); ?></p>
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
