
<?php if ( get_row_layout() == 'hero_section' ) : ?>
	<div class="hero_section">

		<?php

		$illustration_desktop_url = get_sub_field( 'illustration_desktop_url' );
		$illustration_mobile_url = get_sub_field( 'illustration_mobile_url' );

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
					<video id="hero-video" playsinline autoplay loop muted i>
						<source src="<?php echo esc_url( $illustration_video_url ); ?>" type="video/mp4">
						<!-- <source src="movie.ogg" type="video/ogg"> -->
						Your browser does not support the video tag.
					</video>
					<?php
				else :
					if ( ! empty( $illustration_desktop_url ) ) :
						?>
						<script>
							var illustrationDesktopUrl = '<?php echo esc_url( $illustration_desktop_url ); ?>'; // Don't forget the extra semicolon!
						</script>
						<img id="animated-gif-desktop" src="<!-- replaced by javascript or element removed from DOM -->" alt=""/>
						<?php
					endif;
					if ( ! empty( $illustration_mobile_url ) ) :
						?>
						<script>
							var illustrationMobileUrl = '<?php echo esc_url( $illustration_mobile_url ); ?>'; // Don't forget the extra semicolon!
						</script>
						<img id="animated-gif-mobile" src="<!-- replaced by javascript or element removed from DOM	 -->" alt=""/>
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
