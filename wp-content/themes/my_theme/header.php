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

            <img class="logo"
                src="<?php echo get_template_directory_uri();?>/dist/images/consultants-associes-sa-marque.svg"
                alt="logo" />

            <nav id="site-navigation" class="main-navigation">
                <?php
					wp_nav_menu(array(
						'theme_location' => 'menu-1',
						'menu_id' => 'primary-menu',
						'menu_class' => 'nav__links',
					));
                ?>

                <ul class="nav__links__language">
                    <li id="" class="">
                        <a href="/">EN</a></li>
                    <li id="" class="">
                        <a href="/fr">FR</a></li>
                    <li id="" class="">
                        <a href="/de">DE</a></li>
                    </li>
                </ul>
            </nav>

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
                            <?php
                                wp_nav_menu(array(
                                    'theme_location' => 'menu-1',
                                    'menu_id' => 'primary-menu',
                                ));
                            ?>

                            <ul class="hamburger__nav__items__language">
                                <li id="" class="">
                                    <a href="/">EN</a></li>
                                <li id="" class="">
                                    <a href="/fr">FR</a></li>
                                <li id="" class="">
                                    <a href="/de">DE</a></li>
                                </li>
                            </ul>

                        </nav>



                    </div>
                </div>
            </div>
            <!-- #site-navigation -->
        </header><!-- #masthead -->


        <div id="content" class="site-content">