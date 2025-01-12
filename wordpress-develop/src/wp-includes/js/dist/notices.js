/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/notices/build-module/store/actions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/notices/build-module/store/actions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createErrorNotice: () => (/* binding */ createErrorNotice),
/* harmony export */   createInfoNotice: () => (/* binding */ createInfoNotice),
/* harmony export */   createNotice: () => (/* binding */ createNotice),
/* harmony export */   createSuccessNotice: () => (/* binding */ createSuccessNotice),
/* harmony export */   createWarningNotice: () => (/* binding */ createWarningNotice),
/* harmony export */   removeAllNotices: () => (/* binding */ removeAllNotices),
/* harmony export */   removeNotice: () => (/* binding */ removeNotice),
/* harmony export */   removeNotices: () => (/* binding */ removeNotices)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/notices/build-module/store/constants.js");
/**
 * Internal dependencies
 */


/**
 * @typedef {Object} WPNoticeAction Object describing a user action option associated with a notice.
 *
 * @property {string}    label   Message to use as action label.
 * @property {?string}   url     Optional URL of resource if action incurs
 *                               browser navigation.
 * @property {?Function} onClick Optional function to invoke when action is
 *                               triggered by user.
 */

let uniqueId = 0;

/**
 * Returns an action object used in signalling that a notice is to be created.
 *
 * @param {string|undefined}      status                       Notice status ("info" if undefined is passed).
 * @param {string}                content                      Notice message.
 * @param {Object}                [options]                    Notice options.
 * @param {string}                [options.context='global']   Context under which to
 *                                                             group notice.
 * @param {string}                [options.id]                 Identifier for notice.
 *                                                             Automatically assigned
 *                                                             if not specified.
 * @param {boolean}               [options.isDismissible=true] Whether the notice can
 *                                                             be dismissed by user.
 * @param {string}                [options.type='default']     Type of notice, one of
 *                                                             `default`, or `snackbar`.
 * @param {boolean}               [options.speak=true]         Whether the notice
 *                                                             content should be
 *                                                             announced to screen
 *                                                             readers.
 * @param {Array<WPNoticeAction>} [options.actions]            User actions to be
 *                                                             presented with notice.
 * @param {string}                [options.icon]               An icon displayed with the notice.
 *                                                             Only used when type is set to `snackbar`.
 * @param {boolean}               [options.explicitDismiss]    Whether the notice includes
 *                                                             an explicit dismiss button and
 *                                                             can't be dismissed by clicking
 *                                                             the body of the notice. Only applies
 *                                                             when type is set to `snackbar`.
 * @param {Function}              [options.onDismiss]          Called when the notice is dismissed.
 *
 * @example
 * ```js
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 * import { Button } from '@wordpress/components';
 *
 * const ExampleComponent = () => {
 *     const { createNotice } = useDispatch( noticesStore );
 *     return (
 *         <Button
 *             onClick={ () => createNotice( 'success', __( 'Notice message' ) ) }
 *         >
 *             { __( 'Generate a success notice!' ) }
 *         </Button>
 *     );
 * };
 * ```
 *
 * @return {Object} Action object.
 */
function createNotice(status = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_STATUS, content, options = {}) {
  const {
    speak = true,
    isDismissible = true,
    context = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONTEXT,
    id = `${context}${++uniqueId}`,
    actions = [],
    type = 'default',
    __unstableHTML,
    icon = null,
    explicitDismiss = false,
    onDismiss
  } = options;

  // The supported value shape of content is currently limited to plain text
  // strings. To avoid setting expectation that e.g. a React Element could be
  // supported, cast to a string.
  content = String(content);
  return {
    type: 'CREATE_NOTICE',
    context,
    notice: {
      id,
      status,
      content,
      spokenMessage: speak ? content : null,
      __unstableHTML,
      isDismissible,
      actions,
      type,
      icon,
      explicitDismiss,
      onDismiss
    }
  };
}

/**
 * Returns an action object used in signalling that a success notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @example
 * ```js
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 * import { Button } from '@wordpress/components';
 *
 * const ExampleComponent = () => {
 *     const { createSuccessNotice } = useDispatch( noticesStore );
 *     return (
 *         <Button
 *             onClick={ () =>
 *                 createSuccessNotice( __( 'Success!' ), {
 *                     type: 'snackbar',
 *                     icon: '🔥',
 *                 } )
 *             }
 *         >
 *             { __( 'Generate a snackbar success notice!' ) }
 *        </Button>
 *     );
 * };
 * ```
 *
 * @return {Object} Action object.
 */
function createSuccessNotice(content, options) {
  return createNotice('success', content, options);
}

/**
 * Returns an action object used in signalling that an info notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @example
 * ```js
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 * import { Button } from '@wordpress/components';
 *
 * const ExampleComponent = () => {
 *     const { createInfoNotice } = useDispatch( noticesStore );
 *     return (
 *         <Button
 *             onClick={ () =>
 *                createInfoNotice( __( 'Something happened!' ), {
 *                   isDismissible: false,
 *                } )
 *             }
 *         >
 *         { __( 'Generate a notice that cannot be dismissed.' ) }
 *       </Button>
 *       );
 * };
 *```
 *
 * @return {Object} Action object.
 */
function createInfoNotice(content, options) {
  return createNotice('info', content, options);
}

/**
 * Returns an action object used in signalling that an error notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @example
 * ```js
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 * import { Button } from '@wordpress/components';
 *
 * const ExampleComponent = () => {
 *     const { createErrorNotice } = useDispatch( noticesStore );
 *     return (
 *         <Button
 *             onClick={ () =>
 *                 createErrorNotice( __( 'An error occurred!' ), {
 *                     type: 'snackbar',
 *                     explicitDismiss: true,
 *                 } )
 *             }
 *         >
 *             { __(
 *                 'Generate an snackbar error notice with explicit dismiss button.'
 *             ) }
 *         </Button>
 *     );
 * };
 * ```
 *
 * @return {Object} Action object.
 */
function createErrorNotice(content, options) {
  return createNotice('error', content, options);
}

/**
 * Returns an action object used in signalling that a warning notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string} content   Notice message.
 * @param {Object} [options] Optional notice options.
 *
 * @example
 * ```js
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 * import { Button } from '@wordpress/components';
 *
 * const ExampleComponent = () => {
 *     const { createWarningNotice, createInfoNotice } = useDispatch( noticesStore );
 *     return (
 *         <Button
 *             onClick={ () =>
 *                 createWarningNotice( __( 'Warning!' ), {
 *                     onDismiss: () => {
 *                         createInfoNotice(
 *                             __( 'The warning has been dismissed!' )
 *                         );
 *                     },
 *                 } )
 *             }
 *         >
 *             { __( 'Generates a warning notice with onDismiss callback' ) }
 *         </Button>
 *     );
 * };
 * ```
 *
 * @return {Object} Action object.
 */
function createWarningNotice(content, options) {
  return createNotice('warning', content, options);
}

/**
 * Returns an action object used in signalling that a notice is to be removed.
 *
 * @param {string} id                 Notice unique identifier.
 * @param {string} [context='global'] Optional context (grouping) in which the notice is
 *                                    intended to appear. Defaults to default context.
 *
 * @example
 * ```js
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 * import { Button } from '@wordpress/components';
 *
 * const ExampleComponent = () => {
 *    const notices = useSelect( ( select ) => select( noticesStore ).getNotices() );
 *    const { createWarningNotice, removeNotice } = useDispatch( noticesStore );
 *
 *    return (
 *         <>
 *             <Button
 *                 onClick={ () =>
 *                     createWarningNotice( __( 'Warning!' ), {
 *                         isDismissible: false,
 *                     } )
 *                 }
 *             >
 *                 { __( 'Generate a notice' ) }
 *             </Button>
 *             { notices.length > 0 && (
 *                 <Button onClick={ () => removeNotice( notices[ 0 ].id ) }>
 *                     { __( 'Remove the notice' ) }
 *                 </Button>
 *             ) }
 *         </>
 *     );
 *};
 * ```
 *
 * @return {Object} Action object.
 */
function removeNotice(id, context = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONTEXT) {
  return {
    type: 'REMOVE_NOTICE',
    id,
    context
  };
}

/**
 * Removes all notices from a given context. Defaults to the default context.
 *
 * @param {string} noticeType The context to remove all notices from.
 * @param {string} context    The context to remove all notices from.
 *
 * @example
 * ```js
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch, useSelect } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 * import { Button } from '@wordpress/components';
 *
 * export const ExampleComponent = () => {
 * 	const notices = useSelect( ( select ) =>
 * 		select( noticesStore ).getNotices()
 * 	);
 * 	const { removeAllNotices } = useDispatch( noticesStore );
 * 	return (
 * 		<>
 * 			<ul>
 * 				{ notices.map( ( notice ) => (
 * 					<li key={ notice.id }>{ notice.content }</li>
 * 				) ) }
 * 			</ul>
 * 			<Button
 * 				onClick={ () =>
 * 					removeAllNotices()
 * 				}
 * 			>
 * 				{ __( 'Clear all notices', 'woo-gutenberg-products-block' ) }
 * 			</Button>
 * 			<Button
 * 				onClick={ () =>
 * 					removeAllNotices( 'snackbar' )
 * 				}
 * 			>
 * 				{ __( 'Clear all snackbar notices', 'woo-gutenberg-products-block' ) }
 * 			</Button>
 * 		</>
 * 	);
 * };
 * ```
 *
 * @return {Object} 	   Action object.
 */
function removeAllNotices(noticeType = 'default', context = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONTEXT) {
  return {
    type: 'REMOVE_ALL_NOTICES',
    noticeType,
    context
  };
}

/**
 * Returns an action object used in signalling that several notices are to be removed.
 *
 * @param {string[]} ids                List of unique notice identifiers.
 * @param {string}   [context='global'] Optional context (grouping) in which the notices are
 *                                      intended to appear. Defaults to default context.
 * @example
 * ```js
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch, useSelect } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 * import { Button } from '@wordpress/components';
 *
 * const ExampleComponent = () => {
 * 	const notices = useSelect( ( select ) =>
 * 		select( noticesStore ).getNotices()
 * 	);
 * 	const { removeNotices } = useDispatch( noticesStore );
 * 	return (
 * 		<>
 * 			<ul>
 * 				{ notices.map( ( notice ) => (
 * 					<li key={ notice.id }>{ notice.content }</li>
 * 				) ) }
 * 			</ul>
 * 			<Button
 * 				onClick={ () =>
 * 					removeNotices( notices.map( ( { id } ) => id ) )
 * 				}
 * 			>
 * 				{ __( 'Clear all notices' ) }
 * 			</Button>
 * 		</>
 * 	);
 * };
 * ```
 * @return {Object} Action object.
 */
function removeNotices(ids, context = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONTEXT) {
  return {
    type: 'REMOVE_NOTICES',
    ids,
    context
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/notices/build-module/store/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/notices/build-module/store/constants.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_CONTEXT: () => (/* binding */ DEFAULT_CONTEXT),
/* harmony export */   DEFAULT_STATUS: () => (/* binding */ DEFAULT_STATUS)
/* harmony export */ });
/**
 * Default context to use for notice grouping when not otherwise specified. Its
 * specific value doesn't hold much meaning, but it must be reasonably unique
 * and, more importantly, referenced consistently in the store implementation.
 *
 * @type {string}
 */
const DEFAULT_CONTEXT = 'global';

/**
 * Default notice status.
 *
 * @type {string}
 */
const DEFAULT_STATUS = 'info';


/***/ }),

/***/ "./node_modules/@wordpress/notices/build-module/store/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/notices/build-module/store/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/notices/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/notices/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/notices/build-module/store/selectors.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Store definition for the notices namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('core/notices', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/notices/build-module/store/reducer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/notices/build-module/store/reducer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_on_sub_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/on-sub-key */ "./node_modules/@wordpress/notices/build-module/store/utils/on-sub-key.js");
/**
 * Internal dependencies
 */


/**
 * Reducer returning the next notices state. The notices state is an object
 * where each key is a context, its value an array of notice objects.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
const notices = (0,_utils_on_sub_key__WEBPACK_IMPORTED_MODULE_0__["default"])('context')((state = [], action) => {
  switch (action.type) {
    case 'CREATE_NOTICE':
      // Avoid duplicates on ID.
      return [...state.filter(({
        id
      }) => id !== action.notice.id), action.notice];
    case 'REMOVE_NOTICE':
      return state.filter(({
        id
      }) => id !== action.id);
    case 'REMOVE_NOTICES':
      return state.filter(({
        id
      }) => !action.ids.includes(id));
    case 'REMOVE_ALL_NOTICES':
      return state.filter(({
        type
      }) => type !== action.noticeType);
  }
  return state;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notices);


/***/ }),

/***/ "./node_modules/@wordpress/notices/build-module/store/selectors.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/notices/build-module/store/selectors.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNotices: () => (/* binding */ getNotices)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/notices/build-module/store/constants.js");
/**
 * Internal dependencies
 */


/** @typedef {import('./actions').WPNoticeAction} WPNoticeAction */

/**
 * The default empty set of notices to return when there are no notices
 * assigned for a given notices context. This can occur if the getNotices
 * selector is called without a notice ever having been created for the
 * context. A shared value is used to ensure referential equality between
 * sequential selector calls, since otherwise `[] !== []`.
 *
 * @type {Array}
 */
const DEFAULT_NOTICES = [];

/**
 * @typedef {Object} WPNotice Notice object.
 *
 * @property {string}           id             Unique identifier of notice.
 * @property {string}           status         Status of notice, one of `success`,
 *                                             `info`, `error`, or `warning`. Defaults
 *                                             to `info`.
 * @property {string}           content        Notice message.
 * @property {string}           spokenMessage  Audibly announced message text used by
 *                                             assistive technologies.
 * @property {string}           __unstableHTML Notice message as raw HTML. Intended to
 *                                             serve primarily for compatibility of
 *                                             server-rendered notices, and SHOULD NOT
 *                                             be used for notices. It is subject to
 *                                             removal without notice.
 * @property {boolean}          isDismissible  Whether the notice can be dismissed by
 *                                             user. Defaults to `true`.
 * @property {string}           type           Type of notice, one of `default`,
 *                                             or `snackbar`. Defaults to `default`.
 * @property {boolean}          speak          Whether the notice content should be
 *                                             announced to screen readers. Defaults to
 *                                             `true`.
 * @property {WPNoticeAction[]} actions        User actions to present with notice.
 */

/**
 * Returns all notices as an array, optionally for a given context. Defaults to
 * the global context.
 *
 * @param {Object}  state   Notices state.
 * @param {?string} context Optional grouping context.
 *
 * @example
 *
 *```js
 * import { useSelect } from '@wordpress/data';
 * import { store as noticesStore } from '@wordpress/notices';
 *
 * const ExampleComponent = () => {
 *     const notices = useSelect( ( select ) => select( noticesStore ).getNotices() );
 *     return (
 *         <ul>
 *         { notices.map( ( notice ) => (
 *             <li key={ notice.ID }>{ notice.content }</li>
 *         ) ) }
 *        </ul>
 *    )
 * };
 *```
 *
 * @return {WPNotice[]} Array of notices.
 */
function getNotices(state, context = _constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_CONTEXT) {
  return state[context] || DEFAULT_NOTICES;
}


/***/ }),

/***/ "./node_modules/@wordpress/notices/build-module/store/utils/on-sub-key.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/notices/build-module/store/utils/on-sub-key.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   onSubKey: () => (/* binding */ onSubKey)
/* harmony export */ });
/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {Function} Higher-order reducer.
 */
const onSubKey = actionProperty => reducer => (state = {}, action) => {
  // Retrieve subkey from action. Do not track if undefined; useful for cases
  // where reducer is scoped by action shape.
  const key = action[actionProperty];
  if (key === undefined) {
    return state;
  }

  // Avoid updating state if unchanged. Note that this also accounts for a
  // reducer which returns undefined on a key which is not yet tracked.
  const nextKeyState = reducer(state[key], action);
  if (nextKeyState === state[key]) {
    return state;
  }
  return {
    ...state,
    [key]: nextKeyState
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onSubKey);


/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/notices/build-module/index.js ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.store)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/notices/build-module/store/index.js");


})();

(window.wp = window.wp || {}).notices = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=notices.js.map