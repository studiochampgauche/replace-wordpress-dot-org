<?php

/*
* Replace http://api.wordpress.org/themes/update-check/1.1/
*/


require_once '../admin/wp-load.php';


echo wp_json_encode([
	'themes' => [],
	'translations' => [],
	'no_update' => []
]);


exit;