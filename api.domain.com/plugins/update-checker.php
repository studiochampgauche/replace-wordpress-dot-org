<?php

/*
* Replace http://api.wordpress.org/plugins/update-check/1.1/
*/


require_once '../admin/wp-load.php';


echo wp_json_encode([
	'plugins' => [],
	'translations' => [],
	'no_update' => []
]);


exit;