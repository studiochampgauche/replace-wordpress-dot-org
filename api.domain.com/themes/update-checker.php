<?php

/*
* Replace http://api.wordpress.org/themes/update-check/1.1/
*/


require_once '../admin/wp-load.php';

if(!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'POST'){

	wp_send_json_error(null, 405);

	exit;

}

echo wp_json_encode([
	'themes' => [],
	'translations' => [],
	'no_update' => []
]);


exit;