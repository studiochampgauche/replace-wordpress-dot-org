<?php

/*
* Replace http://api.wordpress.org/plugins/update-check/1.1/
*/


require_once '../admin/wp-load.php';

if(!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'POST'){

	wp_send_json_error(null, 405);

	exit;

}


$databaseURL = 'http://raw.githubusercontent.com/studiochampgauche/replace-wordpress-dot-org/master/api.domain.com/plugins/database/';
$databaseURLs = [];

$pluginsData = json_decode(stripslashes($_POST['plugins']), true);
$active_plugins = array_intersect_key($pluginsData['plugins'], array_flip($pluginsData['active']));

$return = [
	'plugins' => [],
	'translations' => [],
	'no_update' => []
];

if($active_plugins){

	foreach ($active_plugins as $k => $v) {
		
		if($v['UpdateURI']) continue;

		$slug = explode('/', $k)[0];

		$databaseURLs[] = $databaseURL . $slug . '.json';

	}

}


echo wp_json_encode($return);


exit;