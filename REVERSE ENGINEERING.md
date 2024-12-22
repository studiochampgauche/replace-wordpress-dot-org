# About update checker
Source : `/wp-includes/update.php`

WordPress use this source file for check if core, installed themes, installed plugins and translation need an update.

On this file, you can find these URLs:
- http://api.wordpress.org/core/version-check/1.7/
- http://api.wordpress.org/plugins/update-check/1.1/
- http://api.wordpress.org/themes/update-check/1.1/


http://api.wordpress.org/core/version-check/1.7/ receive this request:

From real url: https://api.wordpress.org/core/version-check/1.7/?version=6.7.1&php=8.3.9&locale=en_CA&mysql=8.0.30&local_package=en_CA&blogs=3&users=1&multisite_enabled=1&initial_db_version=58975&extensions%5Bbcmath%5D=8.3.9&extensions%5Bcalendar%5D=8.3.9&extensions%5Bcgi-fcgi%5D=8.3.9&extensions%5BCore%5D=8.3.9&extensions%5Bctype%5D=8.3.9&extensions%5Bcurl%5D=8.3.9&extensions%5Bdate%5D=8.3.9&extensions%5Bdom%5D=20031129&extensions%5Bexif%5D=8.3.9&extensions%5Bfileinfo%5D=8.3.9&extensions%5Bfilter%5D=8.3.9&extensions%5Bgd%5D=8.3.9&extensions%5Bhash%5D=8.3.9&extensions%5Biconv%5D=8.3.9&extensions%5Bintl%5D=8.3.9&extensions%5Bjson%5D=8.3.9&extensions%5Blibxml%5D=8.3.9&extensions%5Bmbstring%5D=8.3.9&extensions%5Bmysqli%5D=8.3.9&extensions%5Bmysqlnd%5D=mysqlnd+8.3.9&extensions%5Bopenssl%5D=8.3.9&extensions%5Bpcre%5D=8.3.9&extensions%5BPDO%5D=8.3.9&extensions%5Bpdo_mysql%5D=8.3.9&extensions%5BPhar%5D=8.3.9&extensions%5Brandom%5D=8.3.9&extensions%5Breadline%5D=8.3.9&extensions%5BReflection%5D=8.3.9&extensions%5Bsession%5D=8.3.9&extensions%5BSimpleXML%5D=8.3.9&extensions%5BSPL%5D=8.3.9&extensions%5Bstandard%5D=8.3.9&extensions%5Btokenizer%5D=8.3.9&extensions%5Bxml%5D=8.3.9&extensions%5Bxmlreader%5D=8.3.9&extensions%5Bxmlwriter%5D=8.3.9&extensions%5Bxsl%5D=8.3.9&extensions%5Bzlib%5D=8.3.9&platform_flags%5Bos%5D=WINNT&platform_flags%5Bbits%5D=64&image_support%5Bgd%5D%5B0%5D=webp&image_support%5Bgd%5D%5B1%5D=avif

```
Array
(
    [timeout] => 3
    [user-agent] => WordPress/6.7; https://wordpress-develop.test/
    [headers] => Array
        (
            [wp_install] => https://wordpress-develop.test/
            [wp_blog] => https://wordpress-develop.test/
        )

    [body] => Array
        (
            [translations] => {"admin":{"en_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2024-12-04 17:25:09+0000","Project-Id-Version":"WordPress - 6.7.x - Development - Administration","X-Generator":"GlotPress\/4.0.1"}},"admin-network":{"en_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2024-06-30 06:05:19+0000","Project-Id-Version":"WordPress - 6.7.x - Development - Administration - Network Admin","X-Generator":"GlotPress\/4.0.1"}},"default":{"en_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2024-11-04 22:51:08+0000","Project-Id-Version":"WordPress - 6.7.x - Development","X-Generator":"GlotPress\/4.0.1"}}}
        )

)
```

And respond with this if before latest version:
```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sat, 21 Dec 2024 23:38:27 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [access-control-allow-headers] => wp_install, wp_blog
                    [access-control-expose-headers] => X-Update-Channel, X-Update-Channel-Branch
                    [x-update-channel] => stable
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 4
                )

        )

    [body] => {"offers":[{"response":"upgrade","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"upgrade","download":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","locale":"en_US","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","no_content":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-no-content.zip","new_bundled":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-new-bundled.zip","partial":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-partial-0.zip","rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":"6.7"},{"response":"autoupdate","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false,"new_files":true}],"translations":[]}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"offers":[{"response":"upgrade","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"upgrade","download":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","locale":"en_US","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","no_content":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-no-content.zip","new_bundled":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-new-bundled.zip","partial":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-partial-0.zip","rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":"6.7"},{"response":"autoupdate","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false,"new_files":true}],"translations":[]}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sat, 21 Dec 2024 23:38:27 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: wp_install, wp_blog
Access-Control-Expose-Headers: X-Update-Channel, X-Update-Channel-Branch
X-Update-Channel: stable
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 4

{"offers":[{"response":"upgrade","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"upgrade","download":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","locale":"en_US","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","no_content":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-no-content.zip","new_bundled":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-new-bundled.zip","partial":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-partial-0.zip","rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":"6.7"},{"response":"autoupdate","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false,"new_files":true}],"translations":[]}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sat, 21 Dec 2024 23:38:27 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [access-control-allow-headers] => Array
                                        (
                                            [0] => wp_install, wp_blog
                                        )

                                    [access-control-expose-headers] => Array
                                        (
                                            [0] => X-Update-Channel, X-Update-Channel-Branch
                                        )

                                    [x-update-channel] => Array
                                        (
                                            [0] => stable
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 4
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/core/version-check/1.7/?version=6.7&php=8.3.9&locale=en_CA&mysql=8.0.30&local_package=en_CA&blogs=1&users=1&multisite_enabled=0&initial_db_version=58975&extensions%5Bbcmath%5D=8.3.9&extensions%5Bcalendar%5D=8.3.9&extensions%5Bcgi-fcgi%5D=8.3.9&extensions%5BCore%5D=8.3.9&extensions%5Bctype%5D=8.3.9&extensions%5Bcurl%5D=8.3.9&extensions%5Bdate%5D=8.3.9&extensions%5Bdom%5D=20031129&extensions%5Bexif%5D=8.3.9&extensions%5Bfileinfo%5D=8.3.9&extensions%5Bfilter%5D=8.3.9&extensions%5Bgd%5D=8.3.9&extensions%5Bhash%5D=8.3.9&extensions%5Biconv%5D=8.3.9&extensions%5Bintl%5D=8.3.9&extensions%5Bjson%5D=8.3.9&extensions%5Blibxml%5D=8.3.9&extensions%5Bmbstring%5D=8.3.9&extensions%5Bmysqli%5D=8.3.9&extensions%5Bmysqlnd%5D=mysqlnd+8.3.9&extensions%5Bopenssl%5D=8.3.9&extensions%5Bpcre%5D=8.3.9&extensions%5BPDO%5D=8.3.9&extensions%5Bpdo_mysql%5D=8.3.9&extensions%5BPhar%5D=8.3.9&extensions%5Brandom%5D=8.3.9&extensions%5Breadline%5D=8.3.9&extensions%5BReflection%5D=8.3.9&extensions%5Bsession%5D=8.3.9&extensions%5BSimpleXML%5D=8.3.9&extensions%5BSPL%5D=8.3.9&extensions%5Bstandard%5D=8.3.9&extensions%5Btokenizer%5D=8.3.9&extensions%5Bxml%5D=8.3.9&extensions%5Bxmlreader%5D=8.3.9&extensions%5Bxmlwriter%5D=8.3.9&extensions%5Bxsl%5D=8.3.9&extensions%5Bzlib%5D=8.3.9&platform_flags%5Bos%5D=WINNT&platform_flags%5Bbits%5D=64&image_support%5Bgd%5D%5B0%5D=webp&image_support%5Bgd%5D%5B1%5D=avif
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```


And respond with this if latest:
```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sat, 21 Dec 2024 23:43:42 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [access-control-allow-headers] => wp_install, wp_blog
                    [access-control-expose-headers] => X-Update-Channel, X-Update-Channel-Branch
                    [x-update-channel] => stable
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 2
                )

        )

    [body] => {"offers":[{"response":"latest","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false}],"translations":[]}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"offers":[{"response":"latest","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false}],"translations":[]}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sat, 21 Dec 2024 23:43:42 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: wp_install, wp_blog
Access-Control-Expose-Headers: X-Update-Channel, X-Update-Channel-Branch
X-Update-Channel: stable
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 2

{"offers":[{"response":"latest","download":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","locale":"en_CA","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/en_CA\/wordpress-6.7.1.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false}],"translations":[]}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sat, 21 Dec 2024 23:43:42 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [access-control-allow-headers] => Array
                                        (
                                            [0] => wp_install, wp_blog
                                        )

                                    [access-control-expose-headers] => Array
                                        (
                                            [0] => X-Update-Channel, X-Update-Channel-Branch
                                        )

                                    [x-update-channel] => Array
                                        (
                                            [0] => stable
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 2
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/core/version-check/1.7/?version=6.7.1&php=8.3.9&locale=en_CA&mysql=8.0.30&local_package=en_CA&blogs=1&users=1&multisite_enabled=0&initial_db_version=58975&extensions%5Bbcmath%5D=8.3.9&extensions%5Bcalendar%5D=8.3.9&extensions%5Bcgi-fcgi%5D=8.3.9&extensions%5BCore%5D=8.3.9&extensions%5Bctype%5D=8.3.9&extensions%5Bcurl%5D=8.3.9&extensions%5Bdate%5D=8.3.9&extensions%5Bdom%5D=20031129&extensions%5Bexif%5D=8.3.9&extensions%5Bfileinfo%5D=8.3.9&extensions%5Bfilter%5D=8.3.9&extensions%5Bgd%5D=8.3.9&extensions%5Bhash%5D=8.3.9&extensions%5Biconv%5D=8.3.9&extensions%5Bintl%5D=8.3.9&extensions%5Bjson%5D=8.3.9&extensions%5Blibxml%5D=8.3.9&extensions%5Bmbstring%5D=8.3.9&extensions%5Bmysqli%5D=8.3.9&extensions%5Bmysqlnd%5D=mysqlnd+8.3.9&extensions%5Bopenssl%5D=8.3.9&extensions%5Bpcre%5D=8.3.9&extensions%5BPDO%5D=8.3.9&extensions%5Bpdo_mysql%5D=8.3.9&extensions%5BPhar%5D=8.3.9&extensions%5Brandom%5D=8.3.9&extensions%5Breadline%5D=8.3.9&extensions%5BReflection%5D=8.3.9&extensions%5Bsession%5D=8.3.9&extensions%5BSimpleXML%5D=8.3.9&extensions%5BSPL%5D=8.3.9&extensions%5Bstandard%5D=8.3.9&extensions%5Btokenizer%5D=8.3.9&extensions%5Bxml%5D=8.3.9&extensions%5Bxmlreader%5D=8.3.9&extensions%5Bxmlwriter%5D=8.3.9&extensions%5Bxsl%5D=8.3.9&extensions%5Bzlib%5D=8.3.9&platform_flags%5Bos%5D=WINNT&platform_flags%5Bbits%5D=64&image_support%5Bgd%5D%5B0%5D=webp&image_support%5Bgd%5D%5B1%5D=avif
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```


And respond with this if after latest:
```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sat, 21 Dec 2024 23:46:35 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [access-control-allow-headers] => wp_install, wp_blog
                    [access-control-expose-headers] => X-Update-Channel, X-Update-Channel-Branch
                    [x-update-channel] => development
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 8
                )

        )

    [body] => {"offers":[{"response":"development","download":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","locale":"en_US","packages":{"full":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.8-alpha-59551","version":"6.8-alpha-59551","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"latest","download":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","locale":"en_US","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","no_content":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-no-content.zip","new_bundled":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-new-bundled.zip","partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"autoupdate","download":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","locale":"en_US","packages":{"full":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.8-alpha-59551","version":"6.8-alpha-59551","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false,"new_files":true}],"translations":[]}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"offers":[{"response":"development","download":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","locale":"en_US","packages":{"full":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.8-alpha-59551","version":"6.8-alpha-59551","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"latest","download":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","locale":"en_US","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","no_content":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-no-content.zip","new_bundled":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-new-bundled.zip","partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"autoupdate","download":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","locale":"en_US","packages":{"full":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.8-alpha-59551","version":"6.8-alpha-59551","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false,"new_files":true}],"translations":[]}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sat, 21 Dec 2024 23:46:35 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: wp_install, wp_blog
Access-Control-Expose-Headers: X-Update-Channel, X-Update-Channel-Branch
X-Update-Channel: development
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 8

{"offers":[{"response":"development","download":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","locale":"en_US","packages":{"full":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.8-alpha-59551","version":"6.8-alpha-59551","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"latest","download":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","locale":"en_US","packages":{"full":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1.zip","no_content":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-no-content.zip","new_bundled":"https:\/\/downloads.wordpress.org\/release\/wordpress-6.7.1-new-bundled.zip","partial":false,"rollback":false},"current":"6.7.1","version":"6.7.1","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false},{"response":"autoupdate","download":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","locale":"en_US","packages":{"full":"https:\/\/wordpress.org\/nightly-builds\/wordpress-latest.zip","no_content":false,"new_bundled":false,"partial":false,"rollback":false},"current":"6.8-alpha-59551","version":"6.8-alpha-59551","php_version":"7.2.24","mysql_version":"5.5.5","new_bundled":"6.7","partial_version":false,"new_files":true}],"translations":[]}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sat, 21 Dec 2024 23:46:35 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [access-control-allow-headers] => Array
                                        (
                                            [0] => wp_install, wp_blog
                                        )

                                    [access-control-expose-headers] => Array
                                        (
                                            [0] => X-Update-Channel, X-Update-Channel-Branch
                                        )

                                    [x-update-channel] => Array
                                        (
                                            [0] => development
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 8
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/core/version-check/1.7/?version=6.8-alpha-59551&php=8.3.9&locale=en_CA&mysql=8.0.30&local_package=&blogs=1&users=1&multisite_enabled=0&initial_db_version=58975&extensions%5Bbcmath%5D=8.3.9&extensions%5Bcalendar%5D=8.3.9&extensions%5Bcgi-fcgi%5D=8.3.9&extensions%5BCore%5D=8.3.9&extensions%5Bctype%5D=8.3.9&extensions%5Bcurl%5D=8.3.9&extensions%5Bdate%5D=8.3.9&extensions%5Bdom%5D=20031129&extensions%5Bexif%5D=8.3.9&extensions%5Bfileinfo%5D=8.3.9&extensions%5Bfilter%5D=8.3.9&extensions%5Bgd%5D=8.3.9&extensions%5Bhash%5D=8.3.9&extensions%5Biconv%5D=8.3.9&extensions%5Bintl%5D=8.3.9&extensions%5Bjson%5D=8.3.9&extensions%5Blibxml%5D=8.3.9&extensions%5Bmbstring%5D=8.3.9&extensions%5Bmysqli%5D=8.3.9&extensions%5Bmysqlnd%5D=mysqlnd+8.3.9&extensions%5Bopenssl%5D=8.3.9&extensions%5Bpcre%5D=8.3.9&extensions%5BPDO%5D=8.3.9&extensions%5Bpdo_mysql%5D=8.3.9&extensions%5BPhar%5D=8.3.9&extensions%5Brandom%5D=8.3.9&extensions%5Breadline%5D=8.3.9&extensions%5BReflection%5D=8.3.9&extensions%5Bsession%5D=8.3.9&extensions%5BSimpleXML%5D=8.3.9&extensions%5BSPL%5D=8.3.9&extensions%5Bstandard%5D=8.3.9&extensions%5Btokenizer%5D=8.3.9&extensions%5Bxml%5D=8.3.9&extensions%5Bxmlreader%5D=8.3.9&extensions%5Bxmlwriter%5D=8.3.9&extensions%5Bxsl%5D=8.3.9&extensions%5Bzlib%5D=8.3.9&platform_flags%5Bos%5D=WINNT&platform_flags%5Bbits%5D=64&image_support%5Bgd%5D%5B0%5D=webp&image_support%5Bgd%5D%5B1%5D=avif
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```

______________________________________________________________

http://api.wordpress.org/plugins/update-check/1.1/ receive this request:
```
Array
(
    [timeout] => 3
    [body] => Array
        (
            [plugins] => {"plugins":{"reactwp-acf-local-json\/init.php":{"Name":"ACF Local JSON","PluginURI":"","Version":"1.0.0","Description":"Save ACF field groups, post types, taxonomies, and option pages as JSON files within your theme","Author":"Studio Champ Gauche","AuthorURI":"https:\/\/champgauche.studio","TextDomain":"reactwp-acf-local-json","DomainPath":"","Network":false,"RequiresWP":"6.4.1","RequiresPHP":"8.2","UpdateURI":"","RequiresPlugins":"","Title":"ACF Local JSON","AuthorName":"Studio Champ Gauche"},"reactwp-admin-style-script\/init.php":{"Name":"Admin Styles & Scripts","PluginURI":"","Version":"1.0.0","Description":"A plugin that enqueue style and script files for admin.","Author":"Studio Champ Gauche","AuthorURI":"https:\/\/champgauche.studio","TextDomain":"reactwp-admin-style-script","DomainPath":"","Network":false,"RequiresWP":"6.4.1","RequiresPHP":"8.2","UpdateURI":"","RequiresPlugins":"","Title":"Admin Styles & Scripts","AuthorName":"Studio Champ Gauche"},"buddypress\/bp-loader.php":{"Name":"BuddyPress","PluginURI":"https:\/\/buddypress.org","Version":"14.3.2","Description":"BuddyPress adds community features to WordPress. Member Profiles, Activity Streams, Direct Messaging, Notifications, and more!","Author":"The BuddyPress Community","AuthorURI":"https:\/\/buddypress.org","TextDomain":"buddypress","DomainPath":"\/bp-languages\/","Network":false,"RequiresWP":"6.1","RequiresPHP":"5.6","UpdateURI":"","RequiresPlugins":"","Title":"BuddyPress","AuthorName":"The BuddyPress Community"},"siterapide-ecommerce\/init.php":{"Name":"eCommerce","PluginURI":"","Version":"1.0.0","Description":"A plugin that turn the site to an eCommerce","Author":"siterapide.ca","AuthorURI":"https:\/\/siterapide.ca","TextDomain":"siterapide-ecommerce","DomainPath":"","Network":false,"RequiresWP":"6.4.1","RequiresPHP":"8.2","UpdateURI":"","RequiresPlugins":"","Title":"eCommerce","AuthorName":"siterapide.ca"},"reactwp-forms\/init.php":{"Name":"Forms","PluginURI":"","Version":"1.0.0","Description":"A plugin that manage your forms.","Author":"Studio Champ Gauche","AuthorURI":"https:\/\/champgauche.studio","TextDomain":"reactwp-forms","DomainPath":"","Network":false,"RequiresWP":"6.4.1","RequiresPHP":"8.2","UpdateURI":"","RequiresPlugins":"","Title":"Forms","AuthorName":"Studio Champ Gauche"},"polylang-pro\/polylang.php":{"Name":"Polylang Pro","PluginURI":"https:\/\/polylang.pro","Version":"3.6.3","Description":"Adds multilingual capability to WordPress","Author":"WP SYNTEX","AuthorURI":"https:\/\/polylang.pro","TextDomain":"polylang-pro","DomainPath":"\/languages","Network":false,"RequiresWP":"6.2","RequiresPHP":"7.0","UpdateURI":"","RequiresPlugins":"","Title":"Polylang Pro","AuthorName":"WP SYNTEX"},"siterapide-restaurant\/init.php":{"Name":"Restaurant","PluginURI":"","Version":"1.0.0","Description":"A plugin that add on your site an area for ordering online","Author":"siterapide.ca","AuthorURI":"https:\/\/siterapide.ca","TextDomain":"siterapide-restaurant","DomainPath":"","Network":false,"RequiresWP":"6.4.1","RequiresPHP":"8.2","UpdateURI":"","RequiresPlugins":"","Title":"Restaurant","AuthorName":"siterapide.ca"}},"active":[]}
            [translations] => {"akismet":{"en_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2023-11-29 13:52:40+0000","Project-Id-Version":"Plugins - Akismet Anti-spam: Spam Protection - Stable (latest release)","X-Generator":"GlotPress\/4.0.1"}},"polylang":{"en_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2021-07-27 08:45:00+0000","Project-Id-Version":"Plugins - Polylang - Stable (latest release)","X-Generator":"GlotPress\/4.0.1"},"fr_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2022-11-28 10:26:36+0000","Project-Id-Version":"Plugins - Polylang - Stable (latest release)","X-Generator":"GlotPress\/4.0.1"}}}
            [locale] => ["en_CA","fr_CA"]
            [all] => true
        )

    [user-agent] => WordPress/6.7.1; https://siterapide.test/
)
```

And respond with this if found update:

```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sat, 21 Dec 2024 17:48:16 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 7
                )

        )

    [body] => {"plugins":{"buddypress\/bp-loader.php":{"id":"w.org\/plugins\/buddypress","slug":"buddypress","plugin":"buddypress\/bp-loader.php","new_version":"14.3.3","url":"https:\/\/wordpress.org\/plugins\/buddypress\/","package":"https:\/\/downloads.wordpress.org\/plugin\/buddypress.14.3.3.zip","icons":{"1x":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480","svg":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480"},"banners":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250.png?rev=1854372"},"banners_rtl":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500-rtl.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250-rtl.png?rev=1854372"},"requires":"6.1","tested":"6.7.1","requires_php":"5.6","requires_plugins":[],"compatibility":[],"upgrade_notice":"
See: https:\/\/codex.buddypress.org\/releases\/version-14-3-3\/<\/p>"}},"translations":[{"type":"plugin","slug":"buddypress","language":"en_CA","version":"14.3.1","updated":"2024-05-10 06:22:11","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.1\/en_CA.zip","autoupdate":true},{"type":"plugin","slug":"buddypress","language":"fr_CA","version":"14.3.1","updated":"2020-11-22 00:31:40","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.1\/fr_CA.zip","autoupdate":true}],"no_update":[]}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"plugins":{"buddypress\/bp-loader.php":{"id":"w.org\/plugins\/buddypress","slug":"buddypress","plugin":"buddypress\/bp-loader.php","new_version":"14.3.3","url":"https:\/\/wordpress.org\/plugins\/buddypress\/","package":"https:\/\/downloads.wordpress.org\/plugin\/buddypress.14.3.3.zip","icons":{"1x":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480","svg":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480"},"banners":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250.png?rev=1854372"},"banners_rtl":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500-rtl.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250-rtl.png?rev=1854372"},"requires":"6.1","tested":"6.7.1","requires_php":"5.6","requires_plugins":[],"compatibility":[],"upgrade_notice":"

See: https:\/\/codex.buddypress.org\/releases\/version-14-3-3\/<\/p>"}},"translations":[{"type":"plugin","slug":"buddypress","language":"en_CA","version":"14.3.1","updated":"2024-05-10 06:22:11","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.1\/en_CA.zip","autoupdate":true},{"type":"plugin","slug":"buddypress","language":"fr_CA","version":"14.3.1","updated":"2020-11-22 00:31:40","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.1\/fr_CA.zip","autoupdate":true}],"no_update":[]}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sat, 21 Dec 2024 17:48:16 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 7

{"plugins":{"buddypress\/bp-loader.php":{"id":"w.org\/plugins\/buddypress","slug":"buddypress","plugin":"buddypress\/bp-loader.php","new_version":"14.3.3","url":"https:\/\/wordpress.org\/plugins\/buddypress\/","package":"https:\/\/downloads.wordpress.org\/plugin\/buddypress.14.3.3.zip","icons":{"1x":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480","svg":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480"},"banners":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250.png?rev=1854372"},"banners_rtl":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500-rtl.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250-rtl.png?rev=1854372"},"requires":"6.1","tested":"6.7.1","requires_php":"5.6","requires_plugins":[],"compatibility":[],"upgrade_notice":"

See: https:\/\/codex.buddypress.org\/releases\/version-14-3-3\/<\/p>"}},"translations":[{"type":"plugin","slug":"buddypress","language":"en_CA","version":"14.3.1","updated":"2024-05-10 06:22:11","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.1\/en_CA.zip","autoupdate":true},{"type":"plugin","slug":"buddypress","language":"fr_CA","version":"14.3.1","updated":"2020-11-22 00:31:40","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.1\/fr_CA.zip","autoupdate":true}],"no_update":[]}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sat, 21 Dec 2024 17:48:16 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 7
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/plugins/update-check/1.1/
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```

If no update found: 
```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sat, 21 Dec 2024 17:50:07 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 3
                )

        )

    [body] => {"plugins":[],"translations":[{"type":"plugin","slug":"buddypress","language":"en_CA","version":"14.3.3","updated":"2024-05-10 06:22:11","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.3\/en_CA.zip","autoupdate":true},{"type":"plugin","slug":"buddypress","language":"fr_CA","version":"14.3.3","updated":"2020-11-22 00:31:40","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.3\/fr_CA.zip","autoupdate":true}],"no_update":{"buddypress\/bp-loader.php":{"id":"w.org\/plugins\/buddypress","slug":"buddypress","plugin":"buddypress\/bp-loader.php","new_version":"14.3.3","url":"https:\/\/wordpress.org\/plugins\/buddypress\/","package":"https:\/\/downloads.wordpress.org\/plugin\/buddypress.14.3.3.zip","icons":{"1x":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480","svg":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480"},"banners":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250.png?rev=1854372"},"banners_rtl":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500-rtl.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250-rtl.png?rev=1854372"},"requires":"6.1"}}}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"plugins":[],"translations":[{"type":"plugin","slug":"buddypress","language":"en_CA","version":"14.3.3","updated":"2024-05-10 06:22:11","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.3\/en_CA.zip","autoupdate":true},{"type":"plugin","slug":"buddypress","language":"fr_CA","version":"14.3.3","updated":"2020-11-22 00:31:40","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.3\/fr_CA.zip","autoupdate":true}],"no_update":{"buddypress\/bp-loader.php":{"id":"w.org\/plugins\/buddypress","slug":"buddypress","plugin":"buddypress\/bp-loader.php","new_version":"14.3.3","url":"https:\/\/wordpress.org\/plugins\/buddypress\/","package":"https:\/\/downloads.wordpress.org\/plugin\/buddypress.14.3.3.zip","icons":{"1x":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480","svg":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480"},"banners":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250.png?rev=1854372"},"banners_rtl":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500-rtl.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250-rtl.png?rev=1854372"},"requires":"6.1"}}}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sat, 21 Dec 2024 17:50:07 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 3

{"plugins":[],"translations":[{"type":"plugin","slug":"buddypress","language":"en_CA","version":"14.3.3","updated":"2024-05-10 06:22:11","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.3\/en_CA.zip","autoupdate":true},{"type":"plugin","slug":"buddypress","language":"fr_CA","version":"14.3.3","updated":"2020-11-22 00:31:40","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/buddypress\/14.3.3\/fr_CA.zip","autoupdate":true}],"no_update":{"buddypress\/bp-loader.php":{"id":"w.org\/plugins\/buddypress","slug":"buddypress","plugin":"buddypress\/bp-loader.php","new_version":"14.3.3","url":"https:\/\/wordpress.org\/plugins\/buddypress\/","package":"https:\/\/downloads.wordpress.org\/plugin\/buddypress.14.3.3.zip","icons":{"1x":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480","svg":"https:\/\/ps.w.org\/buddypress\/assets\/icon.svg?rev=977480"},"banners":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250.png?rev=1854372"},"banners_rtl":{"2x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-1544x500-rtl.png?rev=1854372","1x":"https:\/\/ps.w.org\/buddypress\/assets\/banner-772x250-rtl.png?rev=1854372"},"requires":"6.1"}}}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sat, 21 Dec 2024 17:50:07 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 3
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/plugins/update-check/1.1/
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```

if translation update found:
```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sun, 22 Dec 2024 00:04:02 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 5
                )

        )

    [body] => {"plugins":{"akismet\/akismet.php":{"id":"w.org\/plugins\/akismet","slug":"akismet","plugin":"akismet\/akismet.php","new_version":"5.3.5","url":"https:\/\/wordpress.org\/plugins\/akismet\/","package":"https:\/\/downloads.wordpress.org\/plugin\/akismet.5.3.5.zip","icons":{"2x":"https:\/\/ps.w.org\/akismet\/assets\/icon-256x256.png?rev=2818463","1x":"https:\/\/ps.w.org\/akismet\/assets\/icon-128x128.png?rev=2818463"},"banners":{"2x":"https:\/\/ps.w.org\/akismet\/assets\/banner-1544x500.png?rev=2900731","1x":"https:\/\/ps.w.org\/akismet\/assets\/banner-772x250.png?rev=2900731"},"banners_rtl":[],"requires":"5.8","tested":"6.7.1","requires_php":"5.6.20","requires_plugins":[],"compatibility":[]}},"translations":[{"type":"plugin","slug":"akismet","language":"fr_CA","version":"5.3.3","updated":"2020-03-22 04:52:48","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/akismet\/5.3.3\/fr_CA.zip","autoupdate":true},{"type":"plugin","slug":"hello-dolly","language":"fr_CA","version":"1.7.2","updated":"2018-08-13 16:24:31","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/hello-dolly\/1.7.2\/fr_CA.zip","autoupdate":true}],"no_update":{"hello.php":{"id":"w.org\/plugins\/hello-dolly","slug":"hello-dolly","plugin":"hello.php","new_version":"1.7.2","url":"https:\/\/wordpress.org\/plugins\/hello-dolly\/","package":"https:\/\/downloads.wordpress.org\/plugin\/hello-dolly.1.7.3.zip","icons":{"2x":"https:\/\/ps.w.org\/hello-dolly\/assets\/icon-256x256.jpg?rev=2052855","1x":"https:\/\/ps.w.org\/hello-dolly\/assets\/icon-128x128.jpg?rev=2052855"},"banners":{"2x":"https:\/\/ps.w.org\/hello-dolly\/assets\/banner-1544x500.jpg?rev=2645582","1x":"https:\/\/ps.w.org\/hello-dolly\/assets\/banner-772x250.jpg?rev=2052855"},"banners_rtl":[],"requires":"4.6"}}}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"plugins":{"akismet\/akismet.php":{"id":"w.org\/plugins\/akismet","slug":"akismet","plugin":"akismet\/akismet.php","new_version":"5.3.5","url":"https:\/\/wordpress.org\/plugins\/akismet\/","package":"https:\/\/downloads.wordpress.org\/plugin\/akismet.5.3.5.zip","icons":{"2x":"https:\/\/ps.w.org\/akismet\/assets\/icon-256x256.png?rev=2818463","1x":"https:\/\/ps.w.org\/akismet\/assets\/icon-128x128.png?rev=2818463"},"banners":{"2x":"https:\/\/ps.w.org\/akismet\/assets\/banner-1544x500.png?rev=2900731","1x":"https:\/\/ps.w.org\/akismet\/assets\/banner-772x250.png?rev=2900731"},"banners_rtl":[],"requires":"5.8","tested":"6.7.1","requires_php":"5.6.20","requires_plugins":[],"compatibility":[]}},"translations":[{"type":"plugin","slug":"akismet","language":"fr_CA","version":"5.3.3","updated":"2020-03-22 04:52:48","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/akismet\/5.3.3\/fr_CA.zip","autoupdate":true},{"type":"plugin","slug":"hello-dolly","language":"fr_CA","version":"1.7.2","updated":"2018-08-13 16:24:31","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/hello-dolly\/1.7.2\/fr_CA.zip","autoupdate":true}],"no_update":{"hello.php":{"id":"w.org\/plugins\/hello-dolly","slug":"hello-dolly","plugin":"hello.php","new_version":"1.7.2","url":"https:\/\/wordpress.org\/plugins\/hello-dolly\/","package":"https:\/\/downloads.wordpress.org\/plugin\/hello-dolly.1.7.3.zip","icons":{"2x":"https:\/\/ps.w.org\/hello-dolly\/assets\/icon-256x256.jpg?rev=2052855","1x":"https:\/\/ps.w.org\/hello-dolly\/assets\/icon-128x128.jpg?rev=2052855"},"banners":{"2x":"https:\/\/ps.w.org\/hello-dolly\/assets\/banner-1544x500.jpg?rev=2645582","1x":"https:\/\/ps.w.org\/hello-dolly\/assets\/banner-772x250.jpg?rev=2052855"},"banners_rtl":[],"requires":"4.6"}}}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sun, 22 Dec 2024 00:04:02 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 5

{"plugins":{"akismet\/akismet.php":{"id":"w.org\/plugins\/akismet","slug":"akismet","plugin":"akismet\/akismet.php","new_version":"5.3.5","url":"https:\/\/wordpress.org\/plugins\/akismet\/","package":"https:\/\/downloads.wordpress.org\/plugin\/akismet.5.3.5.zip","icons":{"2x":"https:\/\/ps.w.org\/akismet\/assets\/icon-256x256.png?rev=2818463","1x":"https:\/\/ps.w.org\/akismet\/assets\/icon-128x128.png?rev=2818463"},"banners":{"2x":"https:\/\/ps.w.org\/akismet\/assets\/banner-1544x500.png?rev=2900731","1x":"https:\/\/ps.w.org\/akismet\/assets\/banner-772x250.png?rev=2900731"},"banners_rtl":[],"requires":"5.8","tested":"6.7.1","requires_php":"5.6.20","requires_plugins":[],"compatibility":[]}},"translations":[{"type":"plugin","slug":"akismet","language":"fr_CA","version":"5.3.3","updated":"2020-03-22 04:52:48","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/akismet\/5.3.3\/fr_CA.zip","autoupdate":true},{"type":"plugin","slug":"hello-dolly","language":"fr_CA","version":"1.7.2","updated":"2018-08-13 16:24:31","package":"https:\/\/downloads.wordpress.org\/translation\/plugin\/hello-dolly\/1.7.2\/fr_CA.zip","autoupdate":true}],"no_update":{"hello.php":{"id":"w.org\/plugins\/hello-dolly","slug":"hello-dolly","plugin":"hello.php","new_version":"1.7.2","url":"https:\/\/wordpress.org\/plugins\/hello-dolly\/","package":"https:\/\/downloads.wordpress.org\/plugin\/hello-dolly.1.7.3.zip","icons":{"2x":"https:\/\/ps.w.org\/hello-dolly\/assets\/icon-256x256.jpg?rev=2052855","1x":"https:\/\/ps.w.org\/hello-dolly\/assets\/icon-128x128.jpg?rev=2052855"},"banners":{"2x":"https:\/\/ps.w.org\/hello-dolly\/assets\/banner-1544x500.jpg?rev=2645582","1x":"https:\/\/ps.w.org\/hello-dolly\/assets\/banner-772x250.jpg?rev=2052855"},"banners_rtl":[],"requires":"4.6"}}}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sun, 22 Dec 2024 00:04:02 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 5
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/plugins/update-check/1.1/
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```
______________________________________________________________

http://api.wordpress.org/themes/update-check/1.1/ receive this request:
```
Array
(
    [timeout] => 3
    [body] => Array
        (
            [themes] => {"active":"siterapide-child","themes":{"azimut":{"Name":"Azimut","Title":"Azimut","Version":"1.0.0","Author":"Studio Champ Gauche","Author URI":"https:\/\/champgauche.studio","UpdateURI":"","Template":"siterapide-core","Stylesheet":"azimut"},"hello-elementor":{"Name":"Hello Elementor","Title":"Hello Elementor","Version":"3.2.1","Author":"Elementor Team","Author URI":"https:\/\/elementor.com\/?utm_source=wp-themes&utm_campaign=author-uri&utm_medium=wp-dash","UpdateURI":"","Template":"hello-elementor","Stylesheet":"hello-elementor"},"siterapide-child":{"Name":"siterapide.ca Child","Title":"siterapide.ca Child","Version":"1.0.0","Author":"siterapide.ca","Author URI":"https:\/\/siterapide.ca","UpdateURI":"","Template":"siterapide-core","Stylesheet":"siterapide-child"},"siterapide-core":{"Name":"siterapide.ca","Title":"siterapide.ca","Version":"1.0.0","Author":"siterapide.ca","Author URI":"https:\/\/siterapide.ca","UpdateURI":"","Template":"siterapide-core","Stylesheet":"siterapide-core"},"the-one":{"Name":"The One","Title":"The One","Version":"1.0.0","Author":"siterapide.ca","Author URI":"https:\/\/siterapide.ca","UpdateURI":"","Template":"siterapide-core","Stylesheet":"the-one"}}}
            [translations] => {"twentytwentyfive":{"en_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2022-02-28 02:48:35+0000","Project-Id-Version":"Themes - Twenty Twenty-Five","X-Generator":"GlotPress\/4.0.1"}},"twentytwentyfour":{"en_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2022-02-28 02:48:35+0000","Project-Id-Version":"Themes - Twenty Twenty-Four","X-Generator":"GlotPress\/4.0.1"}},"twentytwentythree":{"en_CA":{"POT-Creation-Date":"","PO-Revision-Date":"2022-02-28 02:49:11+0000","Project-Id-Version":"Themes - Twenty Twenty-Three","X-Generator":"GlotPress\/4.0.1"}}}
            [locale] => ["en_CA","fr_CA"]
        )

    [user-agent] => WordPress/6.7.1; https://siterapide.test/
)
```

And respond with this if found update:
```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sat, 21 Dec 2024 17:57:38 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 4
                )

        )

    [body] => {"themes":{"hello-elementor":{"theme":"hello-elementor","new_version":"3.2.1","url":"https:\/\/wordpress.org\/themes\/hello-elementor\/","package":"https:\/\/downloads.wordpress.org\/theme\/hello-elementor.3.2.1.zip","requires":"6.0","requires_php":"7.4"}},"no_update":[],"translations":[{"type":"theme","slug":"hello-elementor","language":"en_CA","version":"3.2.0","updated":"2023-10-26 09:42:33","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.0\/en_CA.zip","autoupdate":true},{"type":"theme","slug":"hello-elementor","language":"fr_CA","version":"3.2.0","updated":"2023-11-05 13:58:29","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.0\/fr_CA.zip","autoupdate":true}]}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"themes":{"hello-elementor":{"theme":"hello-elementor","new_version":"3.2.1","url":"https:\/\/wordpress.org\/themes\/hello-elementor\/","package":"https:\/\/downloads.wordpress.org\/theme\/hello-elementor.3.2.1.zip","requires":"6.0","requires_php":"7.4"}},"no_update":[],"translations":[{"type":"theme","slug":"hello-elementor","language":"en_CA","version":"3.2.0","updated":"2023-10-26 09:42:33","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.0\/en_CA.zip","autoupdate":true},{"type":"theme","slug":"hello-elementor","language":"fr_CA","version":"3.2.0","updated":"2023-11-05 13:58:29","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.0\/fr_CA.zip","autoupdate":true}]}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sat, 21 Dec 2024 17:57:38 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 4

{"themes":{"hello-elementor":{"theme":"hello-elementor","new_version":"3.2.1","url":"https:\/\/wordpress.org\/themes\/hello-elementor\/","package":"https:\/\/downloads.wordpress.org\/theme\/hello-elementor.3.2.1.zip","requires":"6.0","requires_php":"7.4"}},"no_update":[],"translations":[{"type":"theme","slug":"hello-elementor","language":"en_CA","version":"3.2.0","updated":"2023-10-26 09:42:33","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.0\/en_CA.zip","autoupdate":true},{"type":"theme","slug":"hello-elementor","language":"fr_CA","version":"3.2.0","updated":"2023-11-05 13:58:29","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.0\/fr_CA.zip","autoupdate":true}]}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sat, 21 Dec 2024 17:57:38 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 4
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/themes/update-check/1.1/
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```

if no update found:
```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sat, 21 Dec 2024 17:55:01 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 3
                )

        )

    [body] => {"themes":[],"no_update":{"hello-elementor":{"theme":"hello-elementor","new_version":"3.2.1","url":"https:\/\/wordpress.org\/themes\/hello-elementor\/","package":"https:\/\/downloads.wordpress.org\/theme\/hello-elementor.3.2.1.zip","requires":"6.0","requires_php":"7.4"}},"translations":[{"type":"theme","slug":"hello-elementor","language":"en_CA","version":"3.2.1","updated":"2023-10-26 09:42:33","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.1\/en_CA.zip","autoupdate":true},{"type":"theme","slug":"hello-elementor","language":"fr_CA","version":"3.2.1","updated":"2023-11-05 13:58:29","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.1\/fr_CA.zip","autoupdate":true}]}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"themes":[],"no_update":{"hello-elementor":{"theme":"hello-elementor","new_version":"3.2.1","url":"https:\/\/wordpress.org\/themes\/hello-elementor\/","package":"https:\/\/downloads.wordpress.org\/theme\/hello-elementor.3.2.1.zip","requires":"6.0","requires_php":"7.4"}},"translations":[{"type":"theme","slug":"hello-elementor","language":"en_CA","version":"3.2.1","updated":"2023-10-26 09:42:33","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.1\/en_CA.zip","autoupdate":true},{"type":"theme","slug":"hello-elementor","language":"fr_CA","version":"3.2.1","updated":"2023-11-05 13:58:29","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.1\/fr_CA.zip","autoupdate":true}]}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sat, 21 Dec 2024 17:55:01 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 3

{"themes":[],"no_update":{"hello-elementor":{"theme":"hello-elementor","new_version":"3.2.1","url":"https:\/\/wordpress.org\/themes\/hello-elementor\/","package":"https:\/\/downloads.wordpress.org\/theme\/hello-elementor.3.2.1.zip","requires":"6.0","requires_php":"7.4"}},"translations":[{"type":"theme","slug":"hello-elementor","language":"en_CA","version":"3.2.1","updated":"2023-10-26 09:42:33","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.1\/en_CA.zip","autoupdate":true},{"type":"theme","slug":"hello-elementor","language":"fr_CA","version":"3.2.1","updated":"2023-11-05 13:58:29","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/hello-elementor\/3.2.1\/fr_CA.zip","autoupdate":true}]}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sat, 21 Dec 2024 17:55:01 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 3
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/themes/update-check/1.1/
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```

if translation update found:
```
Array
(
    [headers] => WpOrg\Requests\Utility\CaseInsensitiveDictionary Object
        (
            [data:protected] => Array
                (
                    [server] => nginx
                    [date] => Sun, 22 Dec 2024 00:05:57 GMT
                    [content-type] => application/json; charset=utf-8
                    [vary] => Accept-Encoding
                    [access-control-allow-origin] => *
                    [x-frame-options] => SAMEORIGIN
                    [content-encoding] => gzip
                    [alt-svc] => h3=":443"; ma=86400
                    [x-nc] => ord 1
                )

        )

    [body] => {"themes":{"twentytwentyfour":{"theme":"twentytwentyfour","new_version":"1.3","url":"https:\/\/wordpress.org\/themes\/twentytwentyfour\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyfour.1.3.zip","requires":"6.4","requires_php":"7.0"},"twentytwentythree":{"theme":"twentytwentythree","new_version":"1.6","url":"https:\/\/wordpress.org\/themes\/twentytwentythree\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentythree.1.6.zip","requires":"6.1","requires_php":"5.6"},"twentytwentytwo":{"theme":"twentytwentytwo","new_version":"1.9","url":"https:\/\/wordpress.org\/themes\/twentytwentytwo\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentytwo.1.9.zip","requires":"5.9","requires_php":"5.6"}},"no_update":{"twentyeleven":{"theme":"twentyeleven","new_version":"4.8","url":"https:\/\/wordpress.org\/themes\/twentyeleven\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyeleven.4.8.zip","requires":"3.2","requires_php":"5.2.4"},"twentyfifteen":{"theme":"twentyfifteen","new_version":"3.9","url":"https:\/\/wordpress.org\/themes\/twentyfifteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyfifteen.3.9.zip","requires":"4.1","requires_php":"5.2.4"},"twentyfourteen":{"theme":"twentyfourteen","new_version":"4.1","url":"https:\/\/wordpress.org\/themes\/twentyfourteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyfourteen.4.1.zip","requires":"3.6","requires_php":"5.2.4"},"twentynineteen":{"theme":"twentynineteen","new_version":"3.0","url":"https:\/\/wordpress.org\/themes\/twentynineteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentynineteen.3.0.zip","requires":"4.7","requires_php":"5.2.4"},"twentyseventeen":{"theme":"twentyseventeen","new_version":"3.8","url":"https:\/\/wordpress.org\/themes\/twentyseventeen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyseventeen.3.8.zip","requires":"4.7","requires_php":"5.2.4"},"twentysixteen":{"theme":"twentysixteen","new_version":"3.4","url":"https:\/\/wordpress.org\/themes\/twentysixteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentysixteen.3.4.zip","requires":"4.4","requires_php":"5.2.4"},"twentyten":{"theme":"twentyten","new_version":"4.3","url":"https:\/\/wordpress.org\/themes\/twentyten\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyten.4.3.zip","requires":"3.0","requires_php":"5.2.4"},"twentythirteen":{"theme":"twentythirteen","new_version":"4.3","url":"https:\/\/wordpress.org\/themes\/twentythirteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentythirteen.4.3.zip","requires":"3.6","requires_php":"5.2.4"},"twentytwelve":{"theme":"twentytwelve","new_version":"4.4","url":"https:\/\/wordpress.org\/themes\/twentytwelve\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwelve.4.4.zip","requires":"3.5","requires_php":"5.2.4"},"twentytwenty":{"theme":"twentytwenty","new_version":"2.8","url":"https:\/\/wordpress.org\/themes\/twentytwenty\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwenty.2.8.zip","requires":"4.7","requires_php":"5.2.4"},"twentytwentyfive":{"theme":"twentytwentyfive","new_version":"1.0","url":"https:\/\/wordpress.org\/themes\/twentytwentyfive\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyfive.1.0.zip","requires":"6.7","requires_php":"7.2"},"twentytwentyone":{"theme":"twentytwentyone","new_version":"2.4","url":"https:\/\/wordpress.org\/themes\/twentytwentyone\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyone.2.4.zip","requires":"5.3","requires_php":"5.6"}},"translations":[{"type":"theme","slug":"twentyeleven","language":"fr_CA","version":"4.8","updated":"2020-04-07 19:28:08","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyeleven\/4.8\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyfifteen","language":"fr_CA","version":"3.9","updated":"2020-04-07 17:43:56","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyfifteen\/3.9\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyfourteen","language":"fr_CA","version":"4.1","updated":"2020-04-07 17:45:48","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyfourteen\/4.1\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentynineteen","language":"fr_CA","version":"3.0","updated":"2020-04-09 21:08:24","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentynineteen\/3.0\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyseventeen","language":"fr_CA","version":"3.8","updated":"2020-04-09 21:08:35","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyseventeen\/3.8\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentysixteen","language":"fr_CA","version":"3.4","updated":"2019-11-01 03:12:19","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentysixteen\/3.4\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyten","language":"fr_CA","version":"4.3","updated":"2020-03-26 16:49:30","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyten\/4.3\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentythirteen","language":"fr_CA","version":"4.3","updated":"2020-04-09 21:05:02","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentythirteen\/4.3\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentytwelve","language":"fr_CA","version":"4.4","updated":"2020-04-09 21:05:14","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentytwelve\/4.4\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentytwenty","language":"fr_CA","version":"2.8","updated":"2020-11-13 20:28:23","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentytwenty\/2.8\/fr_CA.zip","autoupdate":true}]}
    [response] => Array
        (
            [code] => 200
            [message] => OK
        )

    [cookies] => Array
        (
        )

    [filename] => 
    [http_response] => WP_HTTP_Requests_Response Object
        (
            [data] => 
            [headers] => 
            [status] => 
            [response:protected] => WpOrg\Requests\Response Object
                (
                    [body] => {"themes":{"twentytwentyfour":{"theme":"twentytwentyfour","new_version":"1.3","url":"https:\/\/wordpress.org\/themes\/twentytwentyfour\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyfour.1.3.zip","requires":"6.4","requires_php":"7.0"},"twentytwentythree":{"theme":"twentytwentythree","new_version":"1.6","url":"https:\/\/wordpress.org\/themes\/twentytwentythree\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentythree.1.6.zip","requires":"6.1","requires_php":"5.6"},"twentytwentytwo":{"theme":"twentytwentytwo","new_version":"1.9","url":"https:\/\/wordpress.org\/themes\/twentytwentytwo\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentytwo.1.9.zip","requires":"5.9","requires_php":"5.6"}},"no_update":{"twentyeleven":{"theme":"twentyeleven","new_version":"4.8","url":"https:\/\/wordpress.org\/themes\/twentyeleven\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyeleven.4.8.zip","requires":"3.2","requires_php":"5.2.4"},"twentyfifteen":{"theme":"twentyfifteen","new_version":"3.9","url":"https:\/\/wordpress.org\/themes\/twentyfifteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyfifteen.3.9.zip","requires":"4.1","requires_php":"5.2.4"},"twentyfourteen":{"theme":"twentyfourteen","new_version":"4.1","url":"https:\/\/wordpress.org\/themes\/twentyfourteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyfourteen.4.1.zip","requires":"3.6","requires_php":"5.2.4"},"twentynineteen":{"theme":"twentynineteen","new_version":"3.0","url":"https:\/\/wordpress.org\/themes\/twentynineteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentynineteen.3.0.zip","requires":"4.7","requires_php":"5.2.4"},"twentyseventeen":{"theme":"twentyseventeen","new_version":"3.8","url":"https:\/\/wordpress.org\/themes\/twentyseventeen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyseventeen.3.8.zip","requires":"4.7","requires_php":"5.2.4"},"twentysixteen":{"theme":"twentysixteen","new_version":"3.4","url":"https:\/\/wordpress.org\/themes\/twentysixteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentysixteen.3.4.zip","requires":"4.4","requires_php":"5.2.4"},"twentyten":{"theme":"twentyten","new_version":"4.3","url":"https:\/\/wordpress.org\/themes\/twentyten\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyten.4.3.zip","requires":"3.0","requires_php":"5.2.4"},"twentythirteen":{"theme":"twentythirteen","new_version":"4.3","url":"https:\/\/wordpress.org\/themes\/twentythirteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentythirteen.4.3.zip","requires":"3.6","requires_php":"5.2.4"},"twentytwelve":{"theme":"twentytwelve","new_version":"4.4","url":"https:\/\/wordpress.org\/themes\/twentytwelve\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwelve.4.4.zip","requires":"3.5","requires_php":"5.2.4"},"twentytwenty":{"theme":"twentytwenty","new_version":"2.8","url":"https:\/\/wordpress.org\/themes\/twentytwenty\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwenty.2.8.zip","requires":"4.7","requires_php":"5.2.4"},"twentytwentyfive":{"theme":"twentytwentyfive","new_version":"1.0","url":"https:\/\/wordpress.org\/themes\/twentytwentyfive\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyfive.1.0.zip","requires":"6.7","requires_php":"7.2"},"twentytwentyone":{"theme":"twentytwentyone","new_version":"2.4","url":"https:\/\/wordpress.org\/themes\/twentytwentyone\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyone.2.4.zip","requires":"5.3","requires_php":"5.6"}},"translations":[{"type":"theme","slug":"twentyeleven","language":"fr_CA","version":"4.8","updated":"2020-04-07 19:28:08","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyeleven\/4.8\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyfifteen","language":"fr_CA","version":"3.9","updated":"2020-04-07 17:43:56","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyfifteen\/3.9\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyfourteen","language":"fr_CA","version":"4.1","updated":"2020-04-07 17:45:48","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyfourteen\/4.1\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentynineteen","language":"fr_CA","version":"3.0","updated":"2020-04-09 21:08:24","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentynineteen\/3.0\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyseventeen","language":"fr_CA","version":"3.8","updated":"2020-04-09 21:08:35","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyseventeen\/3.8\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentysixteen","language":"fr_CA","version":"3.4","updated":"2019-11-01 03:12:19","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentysixteen\/3.4\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyten","language":"fr_CA","version":"4.3","updated":"2020-03-26 16:49:30","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyten\/4.3\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentythirteen","language":"fr_CA","version":"4.3","updated":"2020-04-09 21:05:02","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentythirteen\/4.3\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentytwelve","language":"fr_CA","version":"4.4","updated":"2020-04-09 21:05:14","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentytwelve\/4.4\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentytwenty","language":"fr_CA","version":"2.8","updated":"2020-11-13 20:28:23","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentytwenty\/2.8\/fr_CA.zip","autoupdate":true}]}
                    [raw] => HTTP/1.1 200 OK
Server: nginx
Date: Sun, 22 Dec 2024 00:05:57 GMT
Content-Type: application/json; charset=utf-8
Transfer-Encoding: chunked
Connection: close
Vary: Accept-Encoding
Access-Control-Allow-Origin: *
X-Frame-Options: SAMEORIGIN
Content-Encoding: gzip
Alt-Svc: h3=":443"; ma=86400
X-nc:  ord 1

{"themes":{"twentytwentyfour":{"theme":"twentytwentyfour","new_version":"1.3","url":"https:\/\/wordpress.org\/themes\/twentytwentyfour\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyfour.1.3.zip","requires":"6.4","requires_php":"7.0"},"twentytwentythree":{"theme":"twentytwentythree","new_version":"1.6","url":"https:\/\/wordpress.org\/themes\/twentytwentythree\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentythree.1.6.zip","requires":"6.1","requires_php":"5.6"},"twentytwentytwo":{"theme":"twentytwentytwo","new_version":"1.9","url":"https:\/\/wordpress.org\/themes\/twentytwentytwo\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentytwo.1.9.zip","requires":"5.9","requires_php":"5.6"}},"no_update":{"twentyeleven":{"theme":"twentyeleven","new_version":"4.8","url":"https:\/\/wordpress.org\/themes\/twentyeleven\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyeleven.4.8.zip","requires":"3.2","requires_php":"5.2.4"},"twentyfifteen":{"theme":"twentyfifteen","new_version":"3.9","url":"https:\/\/wordpress.org\/themes\/twentyfifteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyfifteen.3.9.zip","requires":"4.1","requires_php":"5.2.4"},"twentyfourteen":{"theme":"twentyfourteen","new_version":"4.1","url":"https:\/\/wordpress.org\/themes\/twentyfourteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyfourteen.4.1.zip","requires":"3.6","requires_php":"5.2.4"},"twentynineteen":{"theme":"twentynineteen","new_version":"3.0","url":"https:\/\/wordpress.org\/themes\/twentynineteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentynineteen.3.0.zip","requires":"4.7","requires_php":"5.2.4"},"twentyseventeen":{"theme":"twentyseventeen","new_version":"3.8","url":"https:\/\/wordpress.org\/themes\/twentyseventeen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyseventeen.3.8.zip","requires":"4.7","requires_php":"5.2.4"},"twentysixteen":{"theme":"twentysixteen","new_version":"3.4","url":"https:\/\/wordpress.org\/themes\/twentysixteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentysixteen.3.4.zip","requires":"4.4","requires_php":"5.2.4"},"twentyten":{"theme":"twentyten","new_version":"4.3","url":"https:\/\/wordpress.org\/themes\/twentyten\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentyten.4.3.zip","requires":"3.0","requires_php":"5.2.4"},"twentythirteen":{"theme":"twentythirteen","new_version":"4.3","url":"https:\/\/wordpress.org\/themes\/twentythirteen\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentythirteen.4.3.zip","requires":"3.6","requires_php":"5.2.4"},"twentytwelve":{"theme":"twentytwelve","new_version":"4.4","url":"https:\/\/wordpress.org\/themes\/twentytwelve\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwelve.4.4.zip","requires":"3.5","requires_php":"5.2.4"},"twentytwenty":{"theme":"twentytwenty","new_version":"2.8","url":"https:\/\/wordpress.org\/themes\/twentytwenty\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwenty.2.8.zip","requires":"4.7","requires_php":"5.2.4"},"twentytwentyfive":{"theme":"twentytwentyfive","new_version":"1.0","url":"https:\/\/wordpress.org\/themes\/twentytwentyfive\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyfive.1.0.zip","requires":"6.7","requires_php":"7.2"},"twentytwentyone":{"theme":"twentytwentyone","new_version":"2.4","url":"https:\/\/wordpress.org\/themes\/twentytwentyone\/","package":"https:\/\/downloads.wordpress.org\/theme\/twentytwentyone.2.4.zip","requires":"5.3","requires_php":"5.6"}},"translations":[{"type":"theme","slug":"twentyeleven","language":"fr_CA","version":"4.8","updated":"2020-04-07 19:28:08","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyeleven\/4.8\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyfifteen","language":"fr_CA","version":"3.9","updated":"2020-04-07 17:43:56","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyfifteen\/3.9\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyfourteen","language":"fr_CA","version":"4.1","updated":"2020-04-07 17:45:48","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyfourteen\/4.1\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentynineteen","language":"fr_CA","version":"3.0","updated":"2020-04-09 21:08:24","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentynineteen\/3.0\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyseventeen","language":"fr_CA","version":"3.8","updated":"2020-04-09 21:08:35","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyseventeen\/3.8\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentysixteen","language":"fr_CA","version":"3.4","updated":"2019-11-01 03:12:19","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentysixteen\/3.4\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentyten","language":"fr_CA","version":"4.3","updated":"2020-03-26 16:49:30","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentyten\/4.3\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentythirteen","language":"fr_CA","version":"4.3","updated":"2020-04-09 21:05:02","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentythirteen\/4.3\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentytwelve","language":"fr_CA","version":"4.4","updated":"2020-04-09 21:05:14","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentytwelve\/4.4\/fr_CA.zip","autoupdate":true},{"type":"theme","slug":"twentytwenty","language":"fr_CA","version":"2.8","updated":"2020-11-13 20:28:23","package":"https:\/\/downloads.wordpress.org\/translation\/theme\/twentytwenty\/2.8\/fr_CA.zip","autoupdate":true}]}
                    [headers] => WpOrg\Requests\Response\Headers Object
                        (
                            [data:protected] => Array
                                (
                                    [server] => Array
                                        (
                                            [0] => nginx
                                        )

                                    [date] => Array
                                        (
                                            [0] => Sun, 22 Dec 2024 00:05:57 GMT
                                        )

                                    [content-type] => Array
                                        (
                                            [0] => application/json; charset=utf-8
                                        )

                                    [vary] => Array
                                        (
                                            [0] => Accept-Encoding
                                        )

                                    [access-control-allow-origin] => Array
                                        (
                                            [0] => *
                                        )

                                    [x-frame-options] => Array
                                        (
                                            [0] => SAMEORIGIN
                                        )

                                    [content-encoding] => Array
                                        (
                                            [0] => gzip
                                        )

                                    [alt-svc] => Array
                                        (
                                            [0] => h3=":443"; ma=86400
                                        )

                                    [x-nc] => Array
                                        (
                                            [0] => ord 1
                                        )

                                )

                        )

                    [status_code] => 200
                    [protocol_version] => 1.1
                    [success] => 1
                    [redirects] => 0
                    [url] => https://api.wordpress.org/themes/update-check/1.1/
                    [history] => Array
                        (
                        )

                    [cookies] => WpOrg\Requests\Cookie\Jar Object
                        (
                            [cookies:protected] => Array
                                (
                                )

                        )

                )

            [filename:protected] => 
        )

)
```