<?php

add_action('template_redirect', function(){

	if(!is_admin()){

		wp_redirect(admin_url());

		exit;

	}

});