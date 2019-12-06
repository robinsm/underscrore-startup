<?php if ( get_row_layout() == 'contact_section' ) :

	class ContactSection {

		public $contact_repeater_array = array();
		public $map_image;
		public $message;
		public $ninja_forms_id;
	}

	class ContactRepeaterItem {

		public $icon_image;
		public $title;
		public $body;
	}

	$contact_section                 = new ContactSection();
	$contact_section->map_image      = get_sub_field( 'map_image' );
	$contact_section->message        = get_sub_field( 'message' );
	$contact_section->ninja_forms_id = get_sub_field( 'ninja_forms_id' );

	if ( have_rows( 'contact_repeater' ) ) :
		while ( have_rows( 'contact_repeater' ) ) :
			the_row();

			$contact_repeater_item             = new ContactRepeaterItem();
			$contact_repeater_item->icon_image = get_sub_field( 'icon' );
			$contact_repeater_item->title      = get_sub_field( 'title' );
			$contact_repeater_item->body       = get_sub_field( 'body' );

			// pushing the same object over and over and over to the array.
			$contact_section->$contact_repeater_array[] = $contact_repeater_item;
		endwhile;
	endif;

	function display_contact_items( $contact_section ) {

		if ( ! empty( $contact_section->$contact_repeater_array ) ) :
			foreach ( $contact_section->$contact_repeater_array as $item ) {
				?>

					<div class="contact_item">
						<div class="contact_icon_container">
							<div class="icon">
								<img src="<?php echo esc_url( $item->icon_image['url'] ); ?>" alt=""/>
							</div>
						</div>
						<div class="contact_detail_container">
							<div class="title">
								<?php echo esc_html( $item->title ); ?>
							</div>
							<div class="body">
								<?php echo esc_html( $item->body ); ?>
							</div>
						</div>
					</div>

				<?php
			}
		endif;
	}

	?>


	<div class="body">
		<div class="sidebar">
			<section class="contact">

				<div class="contact_section wide-container">

				<?php echo esc_html( display_contact_items( $contact_section ) ); ?>
					
				</div>
			</section>
		</div>

		<div class="main">
			<section class="image">
				<div class="map_section">

					<?php if ( ! empty( $contact_section->map_image ) ) : ?>
						<img src="<?php echo esc_html( $contact_section->map_image['url'] ); ?>"
							 alt="<?php echo esc_html( $contact_section->map_image['alt'] ); ?>"/>
					<?php endif; ?>

				</div>
			</section>

			<section class="contact">

				<div class="contact_section wide-container">

					<?php echo esc_html( display_contact_items( $contact_section ) ); ?>
					
				</div>
			</section>

			<section class="form">
				<div class="form_section container">

					<div class="form">
						<div class="message">
							<?php echo esc_html( $contact_section->message ); ?>
						</div>

						<!-- Call plugin to insert newsletter signup form -->
						<?php echo do_shortcode( '[ninja_form id=' . $contact_section->ninja_forms_id . ']' ); ?>

					</div>

				</div>
			</section>
		</div>
	</div>

<?php endif; ?>
