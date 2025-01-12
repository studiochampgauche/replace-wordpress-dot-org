/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/url/build-module/add-query-args.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/add-query-args.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQueryArgs: () => (/* binding */ addQueryArgs)
/* harmony export */ });
/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-args */ "./node_modules/@wordpress/url/build-module/get-query-args.js");
/* harmony import */ var _build_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-query-string */ "./node_modules/@wordpress/url/build-module/build-query-string.js");
/**
 * Internal dependencies
 */



/**
 * Appends arguments as querystring to the provided URL. If the URL already
 * includes query arguments, the arguments are merged with (and take precedent
 * over) the existing set.
 *
 * @param {string} [url=''] URL to which arguments should be appended. If omitted,
 *                          only the resulting querystring is returned.
 * @param {Object} [args]   Query arguments to apply to URL.
 *
 * @example
 * ```js
 * const newURL = addQueryArgs( 'https://google.com', { q: 'test' } ); // https://google.com/?q=test
 * ```
 *
 * @return {string} URL with arguments applied.
 */
function addQueryArgs(url = '', args) {
  // If no arguments are to be appended, return original URL.
  if (!args || !Object.keys(args).length) {
    return url;
  }
  let baseUrl = url;

  // Determine whether URL already had query arguments.
  const queryStringIndex = url.indexOf('?');
  if (queryStringIndex !== -1) {
    // Merge into existing query arguments.
    args = Object.assign((0,_get_query_args__WEBPACK_IMPORTED_MODULE_0__.getQueryArgs)(url), args);

    // Change working base URL to omit previous query arguments.
    baseUrl = baseUrl.substr(0, queryStringIndex);
  }
  return baseUrl + '?' + (0,_build_query_string__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(args);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/build-query-string.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/build-query-string.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildQueryString: () => (/* binding */ buildQueryString)
/* harmony export */ });
/**
 * Generates URL-encoded query string using input query data.
 *
 * It is intended to behave equivalent as PHP's `http_build_query`, configured
 * with encoding type PHP_QUERY_RFC3986 (spaces as `%20`).
 *
 * @example
 * ```js
 * const queryString = buildQueryString( {
 *    simple: 'is ok',
 *    arrays: [ 'are', 'fine', 'too' ],
 *    objects: {
 *       evenNested: {
 *          ok: 'yes',
 *       },
 *    },
 * } );
 * // "simple=is%20ok&arrays%5B0%5D=are&arrays%5B1%5D=fine&arrays%5B2%5D=too&objects%5BevenNested%5D%5Bok%5D=yes"
 * ```
 *
 * @param {Record<string,*>} data Data to encode.
 *
 * @return {string} Query string.
 */
function buildQueryString(data) {
  let string = '';
  const stack = Object.entries(data);
  let pair;
  while (pair = stack.shift()) {
    let [key, value] = pair;

    // Support building deeply nested data, from array or object values.
    const hasNestedData = Array.isArray(value) || value && value.constructor === Object;
    if (hasNestedData) {
      // Push array or object values onto the stack as composed of their
      // original key and nested index or key, retaining order by a
      // combination of Array#reverse and Array#unshift onto the stack.
      const valuePairs = Object.entries(value).reverse();
      for (const [member, memberValue] of valuePairs) {
        stack.unshift([`${key}[${member}]`, memberValue]);
      }
    } else if (value !== undefined) {
      // Null is treated as special case, equivalent to empty string.
      if (value === null) {
        value = '';
      }
      string += '&' + [key, value].map(encodeURIComponent).join('=');
    }
  }

  // Loop will concatenate with leading `&`, but it's only expected for all
  // but the first query parameter. This strips the leading `&`, while still
  // accounting for the case that the string may in-fact be empty.
  return string.substr(1);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/clean-for-slug.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/clean-for-slug.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanForSlug: () => (/* binding */ cleanForSlug)
/* harmony export */ });
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-accents */ "./node_modules/remove-accents/index.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */


/**
 * Performs some basic cleanup of a string for use as a post slug.
 *
 * This replicates some of what `sanitize_title()` does in WordPress core, but
 * is only designed to approximate what the slug will be.
 *
 * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin
 * letters. Removes combining diacritical marks. Converts whitespace, periods,
 * and forward slashes to hyphens. Removes any remaining non-word characters
 * except hyphens. Converts remaining string to lowercase. It does not account
 * for octets, HTML entities, or other encoded characters.
 *
 * @param {string} string Title or slug to be processed.
 *
 * @return {string} Processed string.
 */
function cleanForSlug(string) {
  if (!string) {
    return '';
  }
  return remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(string)
  // Convert each group of whitespace, periods, and forward slashes to a hyphen.
  .replace(/[\s\./]+/g, '-')
  // Remove anything that's not a letter, number, underscore or hyphen.
  .replace(/[^\p{L}\p{N}_-]+/gu, '')
  // Convert to lowercase
  .toLowerCase()
  // Replace multiple hyphens with a single one.
  .replace(/-+/g, '-')
  // Remove any remaining leading or trailing hyphens.
  .replace(/(^-+)|(-+$)/g, '');
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/filter-url-for-display.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/filter-url-for-display.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterURLForDisplay: () => (/* binding */ filterURLForDisplay)
/* harmony export */ });
/**
 * Returns a URL for display.
 *
 * @param {string}      url       Original URL.
 * @param {number|null} maxLength URL length.
 *
 * @example
 * ```js
 * const displayUrl = filterURLForDisplay( 'https://www.wordpress.org/gutenberg/' ); // wordpress.org/gutenberg
 * const imageUrl = filterURLForDisplay( 'https://www.wordpress.org/wp-content/uploads/img.png', 20 ); // …ent/uploads/img.png
 * ```
 *
 * @return {string} Displayed URL.
 */
function filterURLForDisplay(url, maxLength = null) {
  if (!url) {
    return '';
  }

  // Remove protocol and www prefixes.
  let filteredURL = url.replace(/^[a-z\-.\+]+[0-9]*:(\/\/)?/i, '').replace(/^www\./i, '');

  // Ends with / and only has that single slash, strip it.
  if (filteredURL.match(/^[^\/]+\/$/)) {
    filteredURL = filteredURL.replace('/', '');
  }

  // capture file name from URL
  const fileRegexp = /\/([^\/?]+)\.(?:[\w]+)(?=\?|$)/;
  if (!maxLength || filteredURL.length <= maxLength || !filteredURL.match(fileRegexp)) {
    return filteredURL;
  }

  // If the file is not greater than max length, return last portion of URL.
  filteredURL = filteredURL.split('?')[0];
  const urlPieces = filteredURL.split('/');
  const file = urlPieces[urlPieces.length - 1];
  if (file.length <= maxLength) {
    return '…' + filteredURL.slice(-maxLength);
  }

  // If the file is greater than max length, truncate the file.
  const index = file.lastIndexOf('.');
  const [fileName, extension] = [file.slice(0, index), file.slice(index + 1)];
  const truncatedFile = fileName.slice(-3) + '.' + extension;
  return file.slice(0, maxLength - truncatedFile.length - 1) + '…' + truncatedFile;
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-authority.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-authority.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAuthority: () => (/* binding */ getAuthority)
/* harmony export */ });
/**
 * Returns the authority part of the URL.
 *
 * @param {string} url The full URL.
 *
 * @example
 * ```js
 * const authority1 = getAuthority( 'https://wordpress.org/help/' ); // 'wordpress.org'
 * const authority2 = getAuthority( 'https://localhost:8080/test/' ); // 'localhost:8080'
 * ```
 *
 * @return {string|void} The authority part of the URL.
 */
function getAuthority(url) {
  const matches = /^[^\/\s:]+:(?:\/\/)?\/?([^\/\s#?]+)[\/#?]{0,1}\S*$/.exec(url);
  if (matches) {
    return matches[1];
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-filename.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-filename.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFilename: () => (/* binding */ getFilename)
/* harmony export */ });
/* wp:polyfill */
/**
 * Returns the filename part of the URL.
 *
 * @param {string} url The full URL.
 *
 * @example
 * ```js
 * const filename1 = getFilename( 'http://localhost:8080/this/is/a/test.jpg' ); // 'test.jpg'
 * const filename2 = getFilename( '/this/is/a/test.png' ); // 'test.png'
 * ```
 *
 * @return {string|void} The filename part of the URL.
 */
function getFilename(url) {
  let filename;
  if (!url) {
    return;
  }
  try {
    filename = new URL(url, 'http://example.com').pathname.split('/').pop();
  } catch (error) {}
  if (filename) {
    return filename;
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-fragment.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-fragment.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFragment: () => (/* binding */ getFragment)
/* harmony export */ });
/**
 * Returns the fragment part of the URL.
 *
 * @param {string} url The full URL
 *
 * @example
 * ```js
 * const fragment1 = getFragment( 'http://localhost:8080/this/is/a/test?query=true#fragment' ); // '#fragment'
 * const fragment2 = getFragment( 'https://wordpress.org#another-fragment?query=true' ); // '#another-fragment'
 * ```
 *
 * @return {string|void} The fragment part of the URL.
 */
function getFragment(url) {
  const matches = /^\S+?(#[^\s\?]*)/.exec(url);
  if (matches) {
    return matches[1];
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-path-and-query-string.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-path-and-query-string.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPathAndQueryString: () => (/* binding */ getPathAndQueryString)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./node_modules/@wordpress/url/build-module/get-path.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./node_modules/@wordpress/url/build-module/get-query-string.js");
/**
 * Internal dependencies
 */


/**
 * Returns the path part and query string part of the URL.
 *
 * @param {string} url The full URL.
 *
 * @example
 * ```js
 * const pathAndQueryString1 = getPathAndQueryString( 'http://localhost:8080/this/is/a/test?query=true' ); // '/this/is/a/test?query=true'
 * const pathAndQueryString2 = getPathAndQueryString( 'https://wordpress.org/help/faq/' ); // '/help/faq'
 * ```
 *
 * @return {string} The path part and query string part of the URL.
 */
function getPathAndQueryString(url) {
  const path = (0,___WEBPACK_IMPORTED_MODULE_0__.getPath)(url);
  const queryString = (0,___WEBPACK_IMPORTED_MODULE_1__.getQueryString)(url);
  let value = '/';
  if (path) {
    value += path;
  }
  if (queryString) {
    value += `?${queryString}`;
  }
  return value;
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-path.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-path.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPath: () => (/* binding */ getPath)
/* harmony export */ });
/**
 * Returns the path part of the URL.
 *
 * @param {string} url The full URL.
 *
 * @example
 * ```js
 * const path1 = getPath( 'http://localhost:8080/this/is/a/test?query=true' ); // 'this/is/a/test'
 * const path2 = getPath( 'https://wordpress.org/help/faq/' ); // 'help/faq'
 * ```
 *
 * @return {string|void} The path part of the URL.
 */
function getPath(url) {
  const matches = /^[^\/\s:]+:(?:\/\/)?[^\/\s#?]+[\/]([^\s#?]+)[#?]{0,1}\S*$/.exec(url);
  if (matches) {
    return matches[1];
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-protocol.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-protocol.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProtocol: () => (/* binding */ getProtocol)
/* harmony export */ });
/**
 * Returns the protocol part of the URL.
 *
 * @param {string} url The full URL.
 *
 * @example
 * ```js
 * const protocol1 = getProtocol( 'tel:012345678' ); // 'tel:'
 * const protocol2 = getProtocol( 'https://wordpress.org' ); // 'https:'
 * ```
 *
 * @return {string|void} The protocol part of the URL.
 */
function getProtocol(url) {
  const matches = /^([^\s:]+:)/.exec(url);
  if (matches) {
    return matches[1];
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-query-arg.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-query-arg.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryArg: () => (/* binding */ getQueryArg)
/* harmony export */ });
/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-args */ "./node_modules/@wordpress/url/build-module/get-query-args.js");
/**
 * Internal dependencies
 */


/**
 * @typedef {{[key: string]: QueryArgParsed}} QueryArgObject
 */

/**
 * @typedef {string|string[]|QueryArgObject} QueryArgParsed
 */

/**
 * Returns a single query argument of the url
 *
 * @param {string} url URL.
 * @param {string} arg Query arg name.
 *
 * @example
 * ```js
 * const foo = getQueryArg( 'https://wordpress.org?foo=bar&bar=baz', 'foo' ); // bar
 * ```
 *
 * @return {QueryArgParsed|void} Query arg value.
 */
function getQueryArg(url, arg) {
  return (0,_get_query_args__WEBPACK_IMPORTED_MODULE_0__.getQueryArgs)(url)[arg];
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-query-args.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-query-args.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryArgs: () => (/* binding */ getQueryArgs)
/* harmony export */ });
/* harmony import */ var _safe_decode_uri_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safe-decode-uri-component */ "./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js");
/* harmony import */ var _get_query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-string */ "./node_modules/@wordpress/url/build-module/get-query-string.js");
/**
 * Internal dependencies
 */



/** @typedef {import('./get-query-arg').QueryArgParsed} QueryArgParsed */

/**
 * @typedef {Record<string,QueryArgParsed>} QueryArgs
 */

/**
 * Sets a value in object deeply by a given array of path segments. Mutates the
 * object reference.
 *
 * @param {Record<string,*>} object Object in which to assign.
 * @param {string[]}         path   Path segment at which to set value.
 * @param {*}                value  Value to set.
 */
function setPath(object, path, value) {
  const length = path.length;
  const lastIndex = length - 1;
  for (let i = 0; i < length; i++) {
    let key = path[i];
    if (!key && Array.isArray(object)) {
      // If key is empty string and next value is array, derive key from
      // the current length of the array.
      key = object.length.toString();
    }
    key = ['__proto__', 'constructor', 'prototype'].includes(key) ? key.toUpperCase() : key;

    // If the next key in the path is numeric (or empty string), it will be
    // created as an array. Otherwise, it will be created as an object.
    const isNextKeyArrayIndex = !isNaN(Number(path[i + 1]));
    object[key] = i === lastIndex ?
    // If at end of path, assign the intended value.
    value :
    // Otherwise, advance to the next object in the path, creating
    // it if it does not yet exist.
    object[key] || (isNextKeyArrayIndex ? [] : {});
    if (Array.isArray(object[key]) && !isNextKeyArrayIndex) {
      // If we current key is non-numeric, but the next value is an
      // array, coerce the value to an object.
      object[key] = {
        ...object[key]
      };
    }

    // Update working reference object to the next in the path.
    object = object[key];
  }
}

/**
 * Returns an object of query arguments of the given URL. If the given URL is
 * invalid or has no querystring, an empty object is returned.
 *
 * @param {string} url URL.
 *
 * @example
 * ```js
 * const foo = getQueryArgs( 'https://wordpress.org?foo=bar&bar=baz' );
 * // { "foo": "bar", "bar": "baz" }
 * ```
 *
 * @return {QueryArgs} Query args object.
 */
function getQueryArgs(url) {
  return ((0,_get_query_string__WEBPACK_IMPORTED_MODULE_0__.getQueryString)(url) || ''
  // Normalize space encoding, accounting for PHP URL encoding
  // corresponding to `application/x-www-form-urlencoded`.
  //
  // See: https://tools.ietf.org/html/rfc1866#section-8.2.1
  ).replace(/\+/g, '%20').split('&').reduce((accumulator, keyValue) => {
    const [key, value = ''] = keyValue.split('=')
    // Filtering avoids decoding as `undefined` for value, where
    // default is restored in destructuring assignment.
    .filter(Boolean).map(_safe_decode_uri_component__WEBPACK_IMPORTED_MODULE_1__.safeDecodeURIComponent);
    if (key) {
      const segments = key.replace(/\]/g, '').split('[');
      setPath(accumulator, segments, value);
    }
    return accumulator;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-query-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-query-string.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQueryString: () => (/* binding */ getQueryString)
/* harmony export */ });
/* wp:polyfill */
/**
 * Returns the query string part of the URL.
 *
 * @param {string} url The full URL.
 *
 * @example
 * ```js
 * const queryString = getQueryString( 'http://localhost:8080/this/is/a/test?query=true#fragment' ); // 'query=true'
 * ```
 *
 * @return {string|void} The query string part of the URL.
 */
function getQueryString(url) {
  let query;
  try {
    query = new URL(url, 'http://example.com').search.substring(1);
  } catch (error) {}
  if (query) {
    return query;
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/has-query-arg.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/has-query-arg.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasQueryArg: () => (/* binding */ hasQueryArg)
/* harmony export */ });
/* harmony import */ var _get_query_arg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-arg */ "./node_modules/@wordpress/url/build-module/get-query-arg.js");
/**
 * Internal dependencies
 */


/**
 * Determines whether the URL contains a given query arg.
 *
 * @param {string} url URL.
 * @param {string} arg Query arg name.
 *
 * @example
 * ```js
 * const hasBar = hasQueryArg( 'https://wordpress.org?foo=bar&bar=baz', 'bar' ); // true
 * ```
 *
 * @return {boolean} Whether or not the URL contains the query arg.
 */
function hasQueryArg(url, arg) {
  return (0,_get_query_arg__WEBPACK_IMPORTED_MODULE_0__.getQueryArg)(url, arg) !== undefined;
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-email.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-email.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmail: () => (/* binding */ isEmail)
/* harmony export */ });
const EMAIL_REGEXP = /^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\.[a-z]{2,63}$/i;

/**
 * Determines whether the given string looks like an email.
 *
 * @param {string} email The string to scrutinise.
 *
 * @example
 * ```js
 * const isEmail = isEmail( 'hello@wordpress.org' ); // true
 * ```
 *
 * @return {boolean} Whether or not it looks like an email.
 */
function isEmail(email) {
  return EMAIL_REGEXP.test(email);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-phone-number.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-phone-number.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isPhoneNumber: () => (/* binding */ isPhoneNumber)
/* harmony export */ });
const PHONE_REGEXP = /^(tel:)?(\+)?\d{6,15}$/;

/**
 * Determines whether the given string looks like a phone number.
 *
 * @param {string} phoneNumber The string to scrutinize.
 *
 * @example
 * ```js
 * const isPhoneNumber = isPhoneNumber('+1 (555) 123-4567'); // true
 * ```
 *
 * @return {boolean} Whether or not it looks like a phone number.
 */
function isPhoneNumber(phoneNumber) {
  // Remove any seperator from phone number.
  phoneNumber = phoneNumber.replace(/[-.() ]/g, '');
  return PHONE_REGEXP.test(phoneNumber);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-url.js":
/*!************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-url.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isURL: () => (/* binding */ isURL)
/* harmony export */ });
/* wp:polyfill */
/**
 * Determines whether the given string looks like a URL.
 *
 * @param {string} url The string to scrutinise.
 *
 * @example
 * ```js
 * const isURL = isURL( 'https://wordpress.org' ); // true
 * ```
 *
 * @see https://url.spec.whatwg.org/
 * @see https://url.spec.whatwg.org/#valid-url-string
 *
 * @return {boolean} Whether or not it looks like a URL.
 */
function isURL(url) {
  // A URL can be considered value if the `URL` constructor is able to parse
  // it. The constructor throws an error for an invalid URL.
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-authority.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-authority.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidAuthority: () => (/* binding */ isValidAuthority)
/* harmony export */ });
/**
 * Checks for invalid characters within the provided authority.
 *
 * @param {string} authority A string containing the URL authority.
 *
 * @example
 * ```js
 * const isValid = isValidAuthority( 'wordpress.org' ); // true
 * const isNotValid = isValidAuthority( 'wordpress#org' ); // false
 * ```
 *
 * @return {boolean} True if the argument contains a valid authority.
 */
function isValidAuthority(authority) {
  if (!authority) {
    return false;
  }
  return /^[^\s#?]+$/.test(authority);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-fragment.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-fragment.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidFragment: () => (/* binding */ isValidFragment)
/* harmony export */ });
/**
 * Checks for invalid characters within the provided fragment.
 *
 * @param {string} fragment The url fragment.
 *
 * @example
 * ```js
 * const isValid = isValidFragment( '#valid-fragment' ); // true
 * const isNotValid = isValidFragment( '#invalid-#fragment' ); // false
 * ```
 *
 * @return {boolean} True if the argument contains a valid fragment.
 */
function isValidFragment(fragment) {
  if (!fragment) {
    return false;
  }
  return /^#[^\s#?\/]*$/.test(fragment);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-path.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-path.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidPath: () => (/* binding */ isValidPath)
/* harmony export */ });
/**
 * Checks for invalid characters within the provided path.
 *
 * @param {string} path The URL path.
 *
 * @example
 * ```js
 * const isValid = isValidPath( 'test/path/' ); // true
 * const isNotValid = isValidPath( '/invalid?test/path/' ); // false
 * ```
 *
 * @return {boolean} True if the argument contains a valid path
 */
function isValidPath(path) {
  if (!path) {
    return false;
  }
  return /^[^\s#?]+$/.test(path);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-protocol.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidProtocol: () => (/* binding */ isValidProtocol)
/* harmony export */ });
/**
 * Tests if a url protocol is valid.
 *
 * @param {string} protocol The url protocol.
 *
 * @example
 * ```js
 * const isValid = isValidProtocol( 'https:' ); // true
 * const isNotValid = isValidProtocol( 'https :' ); // false
 * ```
 *
 * @return {boolean} True if the argument is a valid protocol (e.g. http:, tel:).
 */
function isValidProtocol(protocol) {
  if (!protocol) {
    return false;
  }
  return /^[a-z\-.\+]+[0-9]*:$/i.test(protocol);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-query-string.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-query-string.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidQueryString: () => (/* binding */ isValidQueryString)
/* harmony export */ });
/**
 * Checks for invalid characters within the provided query string.
 *
 * @param {string} queryString The query string.
 *
 * @example
 * ```js
 * const isValid = isValidQueryString( 'query=true&another=false' ); // true
 * const isNotValid = isValidQueryString( 'query=true?another=false' ); // false
 * ```
 *
 * @return {boolean} True if the argument contains a valid query string.
 */
function isValidQueryString(queryString) {
  if (!queryString) {
    return false;
  }
  return /^[^\s#?\/]+$/.test(queryString);
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/normalize-path.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/normalize-path.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizePath: () => (/* binding */ normalizePath)
/* harmony export */ });
/**
 * Given a path, returns a normalized path where equal query parameter values
 * will be treated as identical, regardless of order they appear in the original
 * text.
 *
 * @param {string} path Original path.
 *
 * @return {string} Normalized path.
 */
function normalizePath(path) {
  const splitted = path.split('?');
  const query = splitted[1];
  const base = splitted[0];
  if (!query) {
    return base;
  }

  // 'b=1%2C2&c=2&a=5'
  return base + '?' + query
  // [ 'b=1%2C2', 'c=2', 'a=5' ]
  .split('&')
  // [ [ 'b, '1%2C2' ], [ 'c', '2' ], [ 'a', '5' ] ]
  .map(entry => entry.split('='))
  // [ [ 'b', '1,2' ], [ 'c', '2' ], [ 'a', '5' ] ]
  .map(pair => pair.map(decodeURIComponent))
  // [ [ 'a', '5' ], [ 'b, '1,2' ], [ 'c', '2' ] ]
  .sort((a, b) => a[0].localeCompare(b[0]))
  // [ [ 'a', '5' ], [ 'b, '1%2C2' ], [ 'c', '2' ] ]
  .map(pair => pair.map(encodeURIComponent))
  // [ 'a=5', 'b=1%2C2', 'c=2' ]
  .map(pair => pair.join('='))
  // 'a=5&b=1%2C2&c=2'
  .join('&');
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/prepend-http.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/prepend-http.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prependHTTP: () => (/* binding */ prependHTTP)
/* harmony export */ });
/* harmony import */ var _is_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-email */ "./node_modules/@wordpress/url/build-module/is-email.js");
/**
 * Internal dependencies
 */

const USABLE_HREF_REGEXP = /^(?:[a-z]+:|#|\?|\.|\/)/i;

/**
 * Prepends "http://" to a url, if it looks like something that is meant to be a TLD.
 *
 * @param {string} url The URL to test.
 *
 * @example
 * ```js
 * const actualURL = prependHTTP( 'wordpress.org' ); // http://wordpress.org
 * ```
 *
 * @return {string} The updated URL.
 */
function prependHTTP(url) {
  if (!url) {
    return url;
  }
  url = url.trim();
  if (!USABLE_HREF_REGEXP.test(url) && !(0,_is_email__WEBPACK_IMPORTED_MODULE_0__.isEmail)(url)) {
    return 'http://' + url;
  }
  return url;
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/prepend-https.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/prepend-https.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prependHTTPS: () => (/* binding */ prependHTTPS)
/* harmony export */ });
/* harmony import */ var _prepend_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prepend-http */ "./node_modules/@wordpress/url/build-module/prepend-http.js");
/**
 * Internal dependencies
 */


/**
 * Prepends "https://" to a url, if it looks like something that is meant to be a TLD.
 *
 * Note: this will not replace "http://" with "https://".
 *
 * @param {string} url The URL to test.
 *
 * @example
 * ```js
 * const actualURL = prependHTTPS( 'wordpress.org' ); // https://wordpress.org
 * ```
 *
 * @return {string} The updated URL.
 */
function prependHTTPS(url) {
  if (!url) {
    return url;
  }

  // If url starts with http://, return it as is.
  if (url.startsWith('http://')) {
    return url;
  }
  url = (0,_prepend_http__WEBPACK_IMPORTED_MODULE_0__.prependHTTP)(url);
  return url.replace(/^http:/, 'https:');
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/remove-query-args.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/remove-query-args.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeQueryArgs: () => (/* binding */ removeQueryArgs)
/* harmony export */ });
/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-args */ "./node_modules/@wordpress/url/build-module/get-query-args.js");
/* harmony import */ var _build_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-query-string */ "./node_modules/@wordpress/url/build-module/build-query-string.js");
/**
 * Internal dependencies
 */



/**
 * Removes arguments from the query string of the url
 *
 * @param {string}    url  URL.
 * @param {...string} args Query Args.
 *
 * @example
 * ```js
 * const newUrl = removeQueryArgs( 'https://wordpress.org?foo=bar&bar=baz&baz=foobar', 'foo', 'bar' ); // https://wordpress.org?baz=foobar
 * ```
 *
 * @return {string} Updated URL.
 */
function removeQueryArgs(url, ...args) {
  const queryStringIndex = url.indexOf('?');
  if (queryStringIndex === -1) {
    return url;
  }
  const query = (0,_get_query_args__WEBPACK_IMPORTED_MODULE_0__.getQueryArgs)(url);
  const baseURL = url.substr(0, queryStringIndex);
  args.forEach(arg => delete query[arg]);
  const queryString = (0,_build_query_string__WEBPACK_IMPORTED_MODULE_1__.buildQueryString)(query);
  return queryString ? baseURL + '?' + queryString : baseURL;
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeDecodeURIComponent: () => (/* binding */ safeDecodeURIComponent)
/* harmony export */ });
/**
 * Safely decodes a URI component with `decodeURIComponent`. Returns the URI component unmodified if
 * `decodeURIComponent` throws an error.
 *
 * @param {string} uriComponent URI component to decode.
 *
 * @return {string} Decoded URI component if possible.
 */
function safeDecodeURIComponent(uriComponent) {
  try {
    return decodeURIComponent(uriComponent);
  } catch (uriComponentError) {
    return uriComponent;
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/safe-decode-uri.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/safe-decode-uri.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeDecodeURI: () => (/* binding */ safeDecodeURI)
/* harmony export */ });
/**
 * Safely decodes a URI with `decodeURI`. Returns the URI unmodified if
 * `decodeURI` throws an error.
 *
 * @param {string} uri URI to decode.
 *
 * @example
 * ```js
 * const badUri = safeDecodeURI( '%z' ); // does not throw an Error, simply returns '%z'
 * ```
 *
 * @return {string} Decoded URI if possible.
 */
function safeDecodeURI(uri) {
  try {
    return decodeURI(uri);
  } catch (uriError) {
    return uri;
  }
}


/***/ }),

/***/ "./node_modules/remove-accents/index.js":
/*!**********************************************!*\
  !*** ./node_modules/remove-accents/index.js ***!
  \**********************************************/
/***/ ((module) => {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ả": "A",
	"Ạ": "A",
	"Ẩ": "A",
	"Ẫ": "A",
	"Ậ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ẻ": "E",
	"Ẽ": "E",
	"Ẹ": "E",
	"Ể": "E",
	"Ễ": "E",
	"Ệ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ỉ": "I",
	"Ị": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ỏ": "O",
	"Ọ": "O",
	"Ổ": "O",
	"Ỗ": "O",
	"Ộ": "O",
	"Ờ": "O",
	"Ở": "O",
	"Ỡ": "O",
	"Ớ": "O",
	"Ợ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ủ": "U",
	"Ụ": "U",
	"Ử": "U",
	"Ữ": "U",
	"Ự": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ả": "a",
	"ạ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ậ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ẻ": "e",
	"ẽ": "e",
	"ẹ": "e",
	"ể": "e",
	"ễ": "e",
	"ệ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ỉ": "i",
	"ị": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ỏ": "o",
	"ọ": "o",
	"ổ": "o",
	"ỗ": "o",
	"ộ": "o",
	"ờ": "o",
	"ở": "o",
	"ỡ": "o",
	"ớ": "o",
	"ợ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ủ": "u",
	"ụ": "u",
	"ử": "u",
	"ữ": "u",
	"ự": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
	"й":"и",
	"Й":"И",
	"ё":"е",
	"Ё":"Е",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

function matcher(match) {
	return characterMap[match];
}

var removeAccents = function(string) {
	return string.replace(allAccents, matcher);
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/index.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQueryArgs: () => (/* reexport safe */ _add_query_args__WEBPACK_IMPORTED_MODULE_15__.addQueryArgs),
/* harmony export */   buildQueryString: () => (/* reexport safe */ _build_query_string__WEBPACK_IMPORTED_MODULE_10__.buildQueryString),
/* harmony export */   cleanForSlug: () => (/* reexport safe */ _clean_for_slug__WEBPACK_IMPORTED_MODULE_24__.cleanForSlug),
/* harmony export */   filterURLForDisplay: () => (/* reexport safe */ _filter_url_for_display__WEBPACK_IMPORTED_MODULE_23__.filterURLForDisplay),
/* harmony export */   getAuthority: () => (/* reexport safe */ _get_authority__WEBPACK_IMPORTED_MODULE_5__.getAuthority),
/* harmony export */   getFilename: () => (/* reexport safe */ _get_filename__WEBPACK_IMPORTED_MODULE_25__.getFilename),
/* harmony export */   getFragment: () => (/* reexport safe */ _get_fragment__WEBPACK_IMPORTED_MODULE_13__.getFragment),
/* harmony export */   getPath: () => (/* reexport safe */ _get_path__WEBPACK_IMPORTED_MODULE_7__.getPath),
/* harmony export */   getPathAndQueryString: () => (/* reexport safe */ _get_path_and_query_string__WEBPACK_IMPORTED_MODULE_12__.getPathAndQueryString),
/* harmony export */   getProtocol: () => (/* reexport safe */ _get_protocol__WEBPACK_IMPORTED_MODULE_3__.getProtocol),
/* harmony export */   getQueryArg: () => (/* reexport safe */ _get_query_arg__WEBPACK_IMPORTED_MODULE_16__.getQueryArg),
/* harmony export */   getQueryArgs: () => (/* reexport safe */ _get_query_args__WEBPACK_IMPORTED_MODULE_17__.getQueryArgs),
/* harmony export */   getQueryString: () => (/* reexport safe */ _get_query_string__WEBPACK_IMPORTED_MODULE_9__.getQueryString),
/* harmony export */   hasQueryArg: () => (/* reexport safe */ _has_query_arg__WEBPACK_IMPORTED_MODULE_18__.hasQueryArg),
/* harmony export */   isEmail: () => (/* reexport safe */ _is_email__WEBPACK_IMPORTED_MODULE_1__.isEmail),
/* harmony export */   isPhoneNumber: () => (/* reexport safe */ _is_phone_number__WEBPACK_IMPORTED_MODULE_2__.isPhoneNumber),
/* harmony export */   isURL: () => (/* reexport safe */ _is_url__WEBPACK_IMPORTED_MODULE_0__.isURL),
/* harmony export */   isValidAuthority: () => (/* reexport safe */ _is_valid_authority__WEBPACK_IMPORTED_MODULE_6__.isValidAuthority),
/* harmony export */   isValidFragment: () => (/* reexport safe */ _is_valid_fragment__WEBPACK_IMPORTED_MODULE_14__.isValidFragment),
/* harmony export */   isValidPath: () => (/* reexport safe */ _is_valid_path__WEBPACK_IMPORTED_MODULE_8__.isValidPath),
/* harmony export */   isValidProtocol: () => (/* reexport safe */ _is_valid_protocol__WEBPACK_IMPORTED_MODULE_4__.isValidProtocol),
/* harmony export */   isValidQueryString: () => (/* reexport safe */ _is_valid_query_string__WEBPACK_IMPORTED_MODULE_11__.isValidQueryString),
/* harmony export */   normalizePath: () => (/* reexport safe */ _normalize_path__WEBPACK_IMPORTED_MODULE_26__.normalizePath),
/* harmony export */   prependHTTP: () => (/* reexport safe */ _prepend_http__WEBPACK_IMPORTED_MODULE_20__.prependHTTP),
/* harmony export */   prependHTTPS: () => (/* reexport safe */ _prepend_https__WEBPACK_IMPORTED_MODULE_27__.prependHTTPS),
/* harmony export */   removeQueryArgs: () => (/* reexport safe */ _remove_query_args__WEBPACK_IMPORTED_MODULE_19__.removeQueryArgs),
/* harmony export */   safeDecodeURI: () => (/* reexport safe */ _safe_decode_uri__WEBPACK_IMPORTED_MODULE_21__.safeDecodeURI),
/* harmony export */   safeDecodeURIComponent: () => (/* reexport safe */ _safe_decode_uri_component__WEBPACK_IMPORTED_MODULE_22__.safeDecodeURIComponent)
/* harmony export */ });
/* harmony import */ var _is_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-url */ "./node_modules/@wordpress/url/build-module/is-url.js");
/* harmony import */ var _is_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-email */ "./node_modules/@wordpress/url/build-module/is-email.js");
/* harmony import */ var _is_phone_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-phone-number */ "./node_modules/@wordpress/url/build-module/is-phone-number.js");
/* harmony import */ var _get_protocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-protocol */ "./node_modules/@wordpress/url/build-module/get-protocol.js");
/* harmony import */ var _is_valid_protocol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-valid-protocol */ "./node_modules/@wordpress/url/build-module/is-valid-protocol.js");
/* harmony import */ var _get_authority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-authority */ "./node_modules/@wordpress/url/build-module/get-authority.js");
/* harmony import */ var _is_valid_authority__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./is-valid-authority */ "./node_modules/@wordpress/url/build-module/is-valid-authority.js");
/* harmony import */ var _get_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-path */ "./node_modules/@wordpress/url/build-module/get-path.js");
/* harmony import */ var _is_valid_path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is-valid-path */ "./node_modules/@wordpress/url/build-module/is-valid-path.js");
/* harmony import */ var _get_query_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-query-string */ "./node_modules/@wordpress/url/build-module/get-query-string.js");
/* harmony import */ var _build_query_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./build-query-string */ "./node_modules/@wordpress/url/build-module/build-query-string.js");
/* harmony import */ var _is_valid_query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./is-valid-query-string */ "./node_modules/@wordpress/url/build-module/is-valid-query-string.js");
/* harmony import */ var _get_path_and_query_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-path-and-query-string */ "./node_modules/@wordpress/url/build-module/get-path-and-query-string.js");
/* harmony import */ var _get_fragment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-fragment */ "./node_modules/@wordpress/url/build-module/get-fragment.js");
/* harmony import */ var _is_valid_fragment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./is-valid-fragment */ "./node_modules/@wordpress/url/build-module/is-valid-fragment.js");
/* harmony import */ var _add_query_args__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-query-args */ "./node_modules/@wordpress/url/build-module/add-query-args.js");
/* harmony import */ var _get_query_arg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./get-query-arg */ "./node_modules/@wordpress/url/build-module/get-query-arg.js");
/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./get-query-args */ "./node_modules/@wordpress/url/build-module/get-query-args.js");
/* harmony import */ var _has_query_arg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./has-query-arg */ "./node_modules/@wordpress/url/build-module/has-query-arg.js");
/* harmony import */ var _remove_query_args__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./remove-query-args */ "./node_modules/@wordpress/url/build-module/remove-query-args.js");
/* harmony import */ var _prepend_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./prepend-http */ "./node_modules/@wordpress/url/build-module/prepend-http.js");
/* harmony import */ var _safe_decode_uri__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./safe-decode-uri */ "./node_modules/@wordpress/url/build-module/safe-decode-uri.js");
/* harmony import */ var _safe_decode_uri_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./safe-decode-uri-component */ "./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js");
/* harmony import */ var _filter_url_for_display__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./filter-url-for-display */ "./node_modules/@wordpress/url/build-module/filter-url-for-display.js");
/* harmony import */ var _clean_for_slug__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./clean-for-slug */ "./node_modules/@wordpress/url/build-module/clean-for-slug.js");
/* harmony import */ var _get_filename__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./get-filename */ "./node_modules/@wordpress/url/build-module/get-filename.js");
/* harmony import */ var _normalize_path__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./normalize-path */ "./node_modules/@wordpress/url/build-module/normalize-path.js");
/* harmony import */ var _prepend_https__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./prepend-https */ "./node_modules/@wordpress/url/build-module/prepend-https.js");





























})();

(window.wp = window.wp || {}).url = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=url.js.map