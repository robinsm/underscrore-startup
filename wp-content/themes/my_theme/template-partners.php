<?php
/**
* Template Name: Partners Page Template
*
* @package WordPress
*/
get_header();
?>

<?php
get_template_part( 'template-parts/content-hero', 'page' );
?>

<div class="container">

    <?php 

	$partner_logo = get_field('partner_logo');

	if( $partner_logo ) {
		
	?>

    <div class="row center-xs">
        <div class="col-md-12">
            <img src="<?php echo $partner_logo['url']; ?>" alt="<?php echo $partner_logo['alt']; ?>" />
        </div>
    </div>


    <?php  } ?>

    <?php 

	$body_copy = get_field('body_copy');

	if( $body_copy ) {
		
	?>

    <div class="row">
        <div class="col-md-12 center-xs">
            <?php echo $body_copy; ?>
        </div>
    </div>


    <?php  } ?>



</div>


<?php
get_sidebar();
get_footer();