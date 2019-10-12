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
<html <?php language_attributes();?>>

<head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head();?>
</head>

<body <?php body_class();?>>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'my_theme');?></a>

        <header id="masthead" class="site-header">

            <img class="logo" src="<?php get_template_directory_uri();?>images/logo.svg" alt="logo" />

            <nav id="site-navigation" class="main-navigation">
                <?php
					wp_nav_menu(array(
						'theme_location' => 'menu-1',
						'menu_id' => 'primary-menu',
						'menu_class' => 'nav__links',
					));
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
                        <!--                             <a href="#">Services</a>
                            <a href="#">Projects</a>
							<a href="#">About Us</a> -->
                        <?php
							wp_nav_menu(array(
								'theme_location' => 'menu-1',
								'menu_id' => 'primary-menu',
								'container_class' => 'hamburger__nav__items',
								'container' => 'nav',
							));
						?>
                    </div>
                </div>
            </div>
            <!-- #site-navigation -->
        </header><!-- #masthead -->


        <div id="content" class="site-content">