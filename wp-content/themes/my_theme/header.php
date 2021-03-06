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

        <?php
            if (!is_page('holding-page')) {
        ?>
        <header id="masthead" class="site-header">

            <a href="<?php echo get_option('home'); ?>"><img class="logo"
                    src="<?php echo get_template_directory_uri();?>/dist/images/consultants-associes-sa-marque.svg"
                    alt="logo" /></a>

            <nav id="site-navigation" class="main-navigation">
                <?php
                        wp_nav_menu(array(
                            'theme_location' => 'header-menu',
                            'menu_id' => 'primary-menu',
                            'menu_class' => 'nav__links',
                        ));
                    ?>
            </nav>

            <div class="mobile__menu__telephone">
                <div class="icon">
                    <a href="tel: +41 22 979 25 50">
                        <img
                            src="<?php echo esc_url( get_template_directory_uri() ); ?>/dist/images/icons/icon-tel.png"
                            alt="telephone"
                        />
                    </a>
                </div>
            </div>

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
                        </nav>

                        <div class="mobile__nav__switcher">

                            <?php
                                wp_nav_menu(array(
                                    'theme_location' => 'mobile-language-menu',
                                    'menu_class' => 'mobile-language-menu',
                                    'menu_id' => 'mobile-language-menu',
                                ));
                            ?>
                        </div>

                    </div>
                </div>
            </div>
            <!-- #site-navigation -->
        </header><!-- #masthead -->
        <?php } ?>



        <div id="content" class="site-content">