<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset=<?php bloginfo('charset');?>>
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
	<style>
		:lang(ar) {
			direction: rtl;
		}
	</style>
	<?php wp_head(); ?>
</head>
<body <?php body_class('example'); ?>>
	<?php wp_body_open(); ?>

	<p>Hello World!</p>

	<?php wp_footer(); ?>
</body>
</html>