<?php if ( get_row_layout() == 'intro_section' ) : ?>
	<div class="container wide-container">
		<div class="about_intro_section section">

			<div class="intro_copy">

				<?php
				$title = get_sub_field( 'title' );
				?>
				<div class="title">
					<h2><?php echo esc_html( $title ); ?></h2>
				</div>

				<?php if ( have_rows( 'active_areas_repeater' ) ) : ?>
					<div class="active_areas">
						<?php
						while ( have_rows( 'active_areas_repeater' ) ) :
							the_row();
							$area = get_sub_field( 'area' );
							?>
							<div class="area">
								<div class="vertical_bar">|</div>
								<div class="area-text"><?php echo esc_html( $area ); ?></div>
							</div>

						<?php endwhile; ?>
					</div>
				<?php endif; ?>

				<?php $body = get_sub_field( 'body' ); ?>
				<div class="body">
					<p><?php echo $body; ?></p>
				</div>
			</div>

			<?php if ( have_rows( 'icons_repeater' ) ) : ?>
				<div class="icons">
					<?php
					while ( have_rows( 'icons_repeater' ) ) :
						the_row();

						$icon        = get_sub_field( 'icon' );
						$icon_height = get_sub_field( 'icon_height' );

						if ( ! empty( $icon ) ) {
							$icon_url   = $icon['url'];
							$icon_title = $icon['title'];
							$icon_alt   = $icon['alt'];
							$icon_size  = 'large';
							$icon_large = $icon['sizes'][ $icon_size ];
						}

						?>

						<div class="icon">
							<img src="<?php echo esc_url( $icon_url ); ?>" alt="" style="height: <?php echo $icon_height; ?>px"/>
						</div>

					<?php endwhile; ?>

				</div>
			<?php endif; ?>

		</div>
	</div>
<?php endif; ?>
