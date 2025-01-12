<?php

/*
* Replace http://api.wordpress.org/plugins/update-check/1.1/
*/


require_once '../admin/wp-load.php';

if(!isset($_SERVER['REQUEST_METHOD']) || $_SERVER['REQUEST_METHOD'] !== 'POST'){

	wp_send_json_error(null, 405);

	exit;

}


$databaseURL = 'http://api.reactwp.com/plugins/database/'; // http://raw.githubusercontent.com/studiochampgauche/replace-wordpress-dot-org/master/api.domain.com/plugins/database/

$mh = curl_multi_init();
$curl_handles = [];


$pluginsData = json_decode(stripslashes($_POST['plugins']), true);
$active_plugins = array_intersect_key($pluginsData['plugins'], array_flip($pluginsData['active']));

$return = [
	'plugins' => [],
	'translations' => [],
	'no_update' => []
];

if($active_plugins){

	$x = 0;
	foreach ($active_plugins as $k => $v) {
		
		if($v['UpdateURI']) continue;

		$slug = explode('/', $k)[0];

		$url = $databaseURL . $slug . '.json';

		$curl_handles[$x] = curl_init($url);
	    curl_setopt($curl_handles[$x], CURLOPT_RETURNTRANSFER, true);
	    curl_setopt($curl_handles[$x], CURLOPT_FOLLOWLOCATION, true);
	    curl_multi_add_handle($mh, $curl_handles[$x]);

		$x++;
	}

	do {
		$status = curl_multi_exec($mh, $active);
	} while ($active);

	$responses = [];
	foreach ($curl_handles as $i => $ch) {
	    $responses[$i] = json_decode(curl_multi_getcontent($ch), true);
	    curl_multi_remove_handle($mh, $ch);


	   	if($responses[$i]['new_version'] > array_values($active_plugins)[$i]['Version']){

	   		$return['plugins'][] = $responses[$i];

	   	} else {

	   		$return['no_update'][] = $responses[$i];

	   	}



	}

	curl_multi_close($mh);

}


echo wp_json_encode($return);


exit;