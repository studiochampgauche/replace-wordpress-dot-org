<?php

/*
* Replace http://api.wordpress.org/core/version-check/1.7/
*/

require_once '../admin/wp-load.php';


echo wp_json_encode([
	'offers' => [],
	'translations' => []
]);


exit;