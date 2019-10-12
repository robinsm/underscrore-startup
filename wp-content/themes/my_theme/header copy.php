<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package My_Theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'my_theme' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="site-branding">
			<?php
			the_custom_logo();
			if ( is_front_page() && is_home() ) :
				?>
				<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
				<?php
			else :
				?>
				<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
				<?php
			endif;
			$my_theme_description = get_bloginfo( 'description', 'display' );
			if ( $my_theme_description || is_customize_preview() ) :
				?>
				<p class="site-description"><?php echo $my_theme_description; /* WPCS: xss ok. */ ?></p>
			<?php endif; ?>
		</div><!-- .site-branding -->

		<img class="logo" src="images/logo.svg" alt="logo" />
		<nav id="site-navigation" class="main-navigation">
			<?php
			wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'        => 'primary-menu',
				'menu_class' => 'nav__links',
			) );
			?>
		</nav>
		<a href="#"><button class="med__button">Contact</button></a>
		<div class="mobile__menu">
			<input id="toggle" type="checkbox" />
			<label class="hamburger" for="toggle">
				<div class="hamburger__top"></div>
				<div class="hamburger__meat"></div>
				<div class="hamburger__bottom"></div>
			</label>

			<div class="hamburger__nav">
				<div class="hamburger__nav__wrapper">
					<nav class="hamburger__nav__items">
						<a href="#">Services</a>
						<a href="#">Projects</a>
						<a href="#">About Us</a>
					</nav>
				</div>
			</div>
		</div>
		<!-- #site-navigation -->
	</header><!-- #masthead -->

	<div id="content" class="site-content">
