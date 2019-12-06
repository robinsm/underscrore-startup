<?php if ( get_row_layout() == 'holding_page_section' ) : ?>
	<div class="holding_page_section">

		<?php

		$logo         = get_sub_field( 'logo' );
		$illustration = get_sub_field( 'illustration' );

		if ( ! empty( $logo ) ) {
			$logo_url   = $logo['url'];
			$logo_title = $logo['title'];
			$logo_alt   = $logo['alt'];
			$logo_size  = 'large';
			$logo_large = $logo['sizes'][ $logo_size ];
		}

		if ( ! empty( $illustration ) ) {
			$illustration_url   = $illustration['url'];
			$illustration_title = $illustration['title'];
			$illustration_alt   = $illustration['alt'];
			$illustration_size  = 'large';
			$illustration_large = $illustration['sizes'][ $illustration_size ];
		}

		$title_english   = get_sub_field( 'title_english' );
		$message_english = get_sub_field( 'message_english' );
		$title_french    = get_sub_field( 'title_french' );
		$message_french  = get_sub_field( 'message_french' );
		$title_german    = get_sub_field( 'title_german' );
		$message_german  = get_sub_field( 'message_german' );

		$tel = get_sub_field( 'tel' );
		if ( ! empty( $tel ) ) {
			$tel = str_replace( ' ', '&nbsp;', $tel );
		}
		$email   = get_sub_field( 'email' );
		$address = get_sub_field( 'address' );
		?>

		<div class="container">

			<div class="logo">
				<div>
					<img src="<?php echo esc_url( get_template_directory_uri() ); ?>/dist/images/consultants-associes-sa-marque-full-white.svg"
						 alt="logo"/>
				</div>

			</div>


			<div class="illustration_and_copy">
				<div class="illustration">
					<img src="<?php echo esc_url( $illustration_url ); ?>" alt="<?php echo esc_html( $illustration_alt ); ?>"/>
				</div>

				<div class="copy">

					<div class="english">
						<h2><?php echo esc_html( $title_english ); ?></h2>
						<p><?php echo esc_html( $message_english ); ?></p>
					</div>
					<div class="french">
						<h2><?php echo esc_html( $title_french ); ?></h2>
						<p><?php echo esc_html( $message_french ); ?></p>
					</div>
					<div class="german">
						<h2><?php echo esc_html( $title_german ); ?></h2>
						<p><?php echo esc_html( $message_german ); ?></p>
					</div>

					<div class="location_details">
						<div class="tel">
							<div class="icon"><img
										src="<?php echo esc_url( get_template_directory_uri() ); ?>/dist/images/icons/icon-tel.png"
										alt="telephone"/></div>
							<div class="copy"><a href="tel:<?php echo $tel; ?>"><?php echo esc_html( $tel ); ?></a></div>
						</div>
						<div class="email">
							<div class="icon"><img
										src="<?php echo esc_url( get_template_directory_uri() ); ?>/dist/images/icons/icon-mail.png"
										alt="email"/></div>
							<div class="copy"><a href="mailto:<?php echo $email; ?>"><?php echo esc_html( $email ); ?></a></div>
						</div>


						<div class="address">
							<div class="icon"><img
										src="<?php echo esc_url( get_template_directory_uri() ); ?>/dist/images/icons/icon-location.png"
										alt="location"/></div>
							<div class="copy"><?php echo esc_html( $address ); ?></div>
						</div>

					</div>

				</div>
			</div>


		</div>

	</div>
<?php endif; ?>
