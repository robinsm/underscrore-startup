<?php
/**
 * Template part for displaying a full width hero image
 *
 * @package My_Theme
 */

?>

<?php 

$hero_image = get_field('hero_image');

if( !empty($hero_image) ): ?>

<section class="hero__image" style="background-image: url('<?php echo $hero_image; ?>');"></section>

<?php endif; ?>