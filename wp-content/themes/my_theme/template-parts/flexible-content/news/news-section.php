<?php if ( get_row_layout() == 'news_section' ) : ?>
	<div class="news_section">

		<?php

		$most_recent_news_image = get_sub_field( 'most_recent_news_image' );

		if ( ! empty( $most_recent_news_image ) ) {
			$most_recent_news_image_url   = $most_recent_news_image['url'];
			$most_recent_news_image_title = $most_recent_news_image['title'];
			$most_recent_news_image_alt   = $most_recent_news_image['alt'];
			$most_recent_news_image_size  = 'large';
			$most_recent_news_image_large = $most_recent_news_image['sizes'][ $most_recent_news_image_size ];
		}

		$older_news_image = get_sub_field( 'older_news_image' );

		if ( ! empty( $older_news_image ) ) {
			$older_news_image_url   = $older_news_image['url'];
			$older_news_image_title = $older_news_image['title'];
			$older_news_image_alt   = $older_news_image['alt'];
			$older_news_image_size  = 'large';
			$older_news_image_large = $older_news_image['sizes'][ $older_news_image_size ];
		}

		$most_recent_news_image_source = get_sub_field( 'most_recent_news_image_source' );
		$older_news_image_source = get_sub_field( 'older_news_image_source' );

		$most_recent_news_title = get_sub_field( 'most_recent_news_title' );
		$older_news_title       = get_sub_field( 'older_news_title' );

		$num_recent_news_items_to_show = get_sub_field( 'num_recent_news_items_to_show' );

		if ( have_rows( 'news_items_repeater' ) ) :

			// now lets make an empty array
			$news_items_array = array();

			class NewsItem {

				public $title;
				public $source;
				public $body;
				public $publish_date;
				public $link;
			}

			while ( have_rows( 'news_items_repeater' ) ) :
				the_row();

				$news_item               = new NewsItem();
				$news_item->title        = get_sub_field( 'title' );
				$news_item->body         = get_sub_field( 'body' );
				$news_item->source       = get_sub_field( 'source' );
				$news_item->publish_date = get_sub_field( 'publish_date' );
				$news_item->link         = get_sub_field( 'link' );

				// pushing the same object over and over and over to the array $news_items_array
				$news_items_array[] = $news_item;

			endwhile;
		endif;
		?>

		<?php
		function display_news_article( $news_items_array, $index ) {
			?>

			<div class="title">
				<h2><?php echo $news_items_array[ $index ]->title; ?></h2>
			</div>
			<div class="body">
				<p><?php echo $news_items_array[ $index ]->body; ?></p>
			</div>
			<div class="source">
				<?php echo $news_items_array[ $index ]->source; ?>
			</div>
			<div class="publish-date">
				Publié le <?php echo $news_items_array[ $index ]->publish_date; ?>
			</div>

			<div class="link">
				<a href="<?php echo $news_items_array[ $index ]->link; ?>" target="new">Lire l'article</a>
			</div>

		<?php } ?>

		<section>
			<div class="wide-container">
				<div class="most-recent-news">
					<div class="most-recent-news-title">
						<h2><?php echo $most_recent_news_title; ?></h2>
					</div>
					<div class="most-recent-news-image-wrapper">
						<div class="most-recent-news-image">
							<img src="<?php echo $most_recent_news_image_url; ?>"
								alt="<?php echo $most_recent_news_image_alt; ?>"/>
						</div>
						<div class="most-recent-news-image-source">
							<?php echo $most_recent_news_image_source; ?>
						</div>
					</div>
				</div>

				<div class="news-articles">

					<?php
					if ( ! empty( $news_items_array ) ) :
						for ( $index = 0; $index < $num_recent_news_items_to_show; $index++ ) {
							?>
							<div class="most-recent-news-article">
								<?php display_news_article( $news_items_array, $index ); ?>
							</div>
							<?php
						}
					endif;
					?>
				</div>

			</div>
		</section>

		<section class="older-news-section">
			<div class="wide-container">
				<div class="older-news">
					<div class="older-news-title">
						<h2><?php echo $older_news_title; ?></h2>
					</div>

					<div class="older-news-image-wrapper">
						<div class="older-news-image">
							<img src="<?php echo $older_news_image_url; ?>" alt="<?php echo $older_news_image_alt; ?>"/>
						</div>
						<div class="older-news-image-source">
							<?php echo $older_news_image_source; ?>
						</div>
					</div>

				</div>

				<div class="news-articles">
					<?php
					if ( ! empty( $news_items_array ) ) :
						for ( $index = $num_recent_news_items_to_show; $index <= count( $news_items_array ) - 1; $index++ ) {
							?>

							<div class="older-news-article">
								<?php display_news_article( $news_items_array, $index ); ?>
							</div>
							<?php
						}
					endif;
					?>
				</div>


			</div>
		</section>

	</div>
<?php endif; ?>
