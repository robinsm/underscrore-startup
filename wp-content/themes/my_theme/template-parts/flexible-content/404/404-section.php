<?php if ( get_row_layout() == '404_section' ) : ?>
	<div class="container wide-container">
		<div class="error_section section">

			<?php
				$title = get_sub_field( 'title' );
				$subtitle = get_sub_field( 'subtitle' );
				$link_text = get_sub_field( 'link_text' );
				$illustration = get_sub_field( 'illustration' );

				if ( ! empty( $illustration ) ) {
					$illustration_url   = $illustration['url'];
					$illustration_title = $illustration['title'];
					$illustration_alt   = $illustration['alt'];
					$illustration_size  = 'large';
					$illustration_large = $illustration['sizes'][ $illustration_size ];
				}
			?>

			<?php if ( ! empty( $illustration ) ) : ?>
				<div class="illustration">
					<img src="<?php echo esc_url( $illustration_url ); ?>" alt="<?php echo esc_html( $illustration_alt ); ?>"/>
				</div>
			<?php endif; ?>
			<div class="title">
				<h2><?php echo esc_html( $title ); ?></h2>
			</div>
			<div class="subtitle">
				<p><?php echo esc_html( $subtitle ); ?></p>
			</div>
			<div class="link">
				<p><a href="/"><?php echo esc_html( $link_text ); ?></a></p>
			</div>

		</div>
	</div>
<?php endif; ?>
