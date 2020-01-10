<?php if ( get_row_layout() == 'hero_section' ) : ?>
	<div class="hero_section">

		<?php

		$illustration = get_sub_field( 'illustration' );

		if ( ! empty( $illustration ) ) {
			$illustration_url   = $illustration['url'];
			$illustration_title = $illustration['title'];
			$illustration_alt   = $illustration['alt'];
			$illustration_size  = 'large';
			$illustration_large = $illustration['sizes'][ $illustration_size ];
		}

		$illustration_video = get_sub_field( 'illustration_video' );
		if ( $illustration_video ) {
			$illustration_video_url = $illustration_video['url'];
		}
		$title    = get_sub_field( 'title' );
		$subtitle = get_sub_field( 'subtitle' );

		$reduce_padding = get_sub_field( 'reduce_padding' );

		?>

		<div class="wide-container <?php echo $reduce_padding ? 'reduce-padding' : ''; ?>">
			<div class="illustration">
				<?php if ( ! empty( $illustration_video_url ) ) : ?>
					<video playsinline autoplay loop muted>
						<source src="<?php echo esc_url( $illustration_video_url ); ?>" type="video/mp4">
						<!-- <source src="movie.ogg" type="video/ogg"> -->
						Your browser does not support the video tag.
					</video>
					<?php
				else :
					if ( ! empty( $illustration_url ) ) :
						?>
						<img src="<?php echo esc_url( $illustration_url ); ?>" alt="<?php echo esc_html( $illustration_alt ); ?>"/>
						<?php
					endif;
				endif;
				?>
			</div>

			<div class="title_and_subtitle">
				<h1><?php echo esc_html( $title ); ?></h1>
				<p><?php echo esc_html( $subtitle ); ?></p>
			</div>
		</div>

	</div>
<?php endif; ?>
