<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package My_Theme
 */

?>

</div><!-- #content -->

<?php
if ( ! is_page( 'holding-page' ) ) {
	?>
<footer id="colophon" class="site-footer">


	<div class="wide-container">
		<div class="footer_logo_and_menu">
			<div class="footer_logo">

				<img src="<?php echo get_template_directory_uri(); ?>/dist/images/consultants-associes-sa-marque-blanche.svg"
					alt="logo" />
			</div>
			<div class="footer_menu">
				<?php
					wp_nav_menu(
						array(
							'theme_location' => 'footer-menu',
							'menu_id'        => 'footer-menu',
							'menu_class'     => 'nav__links__footer',
						)
					);
				?>
			</div>
		</div>

		<div class="copyright_notice">
			Copyright 2019 Consultants Associés SA. All rights reserved.
		</div>
	</div>



</footer><!-- #colophon -->
<?php } ?>
</div><!-- #page -->

<?php wp_footer(); ?>

</body>

</html>
