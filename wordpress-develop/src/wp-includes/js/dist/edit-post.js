/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/edit-post/build-module/commands/use-commands.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/commands/use-commands.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useCommands)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/fullscreen.js");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */






function useCommands() {
  const {
    isFullscreen
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      get
    } = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store);
    return {
      isFullscreen: get('core/edit-post', 'fullscreenMode')
    };
  }, []);
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    createInfoNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_2__.useCommand)({
    name: 'core/toggle-fullscreen-mode',
    label: isFullscreen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Exit fullscreen') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter fullscreen'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
    callback: ({
      close
    }) => {
      toggle('core/edit-post', 'fullscreenMode');
      close();
      createInfoNotice(isFullscreen ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fullscreen off.') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fullscreen on.'), {
        id: 'core/edit-post/toggle-fullscreen-mode/notice',
        type: 'snackbar',
        actions: [{
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Undo'),
          onClick: () => {
            toggle('core/edit-post', 'fullscreenMode');
          }
        }]
      });
    }
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/back-button/fullscreen-mode-close.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/back-button/fullscreen-mode-close.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/wordpress.js");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









function FullscreenModeClose({
  showTooltip,
  icon,
  href,
  initialPost
}) {
  var _postType$labels$view;
  const {
    isRequestingSiteIcon,
    postType,
    siteIconUrl
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getCurrentPostType
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getEntityRecord,
      getPostType,
      isResolving
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    const _postType = initialPost?.type || getCurrentPostType();
    return {
      isRequestingSiteIcon: isResolving('getEntityRecord', ['root', '__unstableBase', undefined]),
      postType: getPostType(_postType),
      siteIconUrl: siteData.site_icon_url
    };
  }, []);
  const disableMotion = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.useReducedMotion)();
  if (!postType) {
    return null;
  }
  let buttonIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
    size: "36px",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
  });
  const effect = {
    expand: {
      scale: 1.25,
      transition: {
        type: 'tween',
        duration: '0.3'
      }
    }
  };
  if (siteIconUrl) {
    buttonIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.img, {
      variants: !disableMotion && effect,
      alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Site Icon'),
      className: "edit-post-fullscreen-mode-close_site-icon",
      src: siteIconUrl
    });
  }
  if (isRequestingSiteIcon) {
    buttonIcon = null;
  }

  // Override default icon if custom icon is provided via props.
  if (icon) {
    buttonIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      size: "36px",
      icon: icon
    });
  }
  const classes = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('edit-post-fullscreen-mode-close', {
    'has-icon': siteIconUrl
  });
  const buttonHref = href !== null && href !== void 0 ? href : (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)('edit.php', {
    post_type: postType.slug
  });
  const buttonLabel = (_postType$labels$view = postType?.labels?.view_items) !== null && _postType$labels$view !== void 0 ? _postType$labels$view : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Back');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__unstableMotion.div, {
    whileHover: "expand",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button
    // TODO: Switch to `true` (40px size) if possible
    , {
      __next40pxDefaultSize: false,
      className: classes,
      href: buttonHref,
      label: buttonLabel,
      showTooltip: showTooltip,
      children: buttonIcon
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FullscreenModeClose);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/back-button/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/back-button/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreen-mode-close */ "./node_modules/@wordpress/edit-post/build-module/components/back-button/fullscreen-mode-close.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



const {
  BackButton: BackButtonFill
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.privateApis);
const slideX = {
  hidden: {
    x: '-100%'
  },
  distractionFreeInactive: {
    x: 0
  },
  hover: {
    x: 0,
    transition: {
      type: 'tween',
      delay: 0.2
    }
  }
};
function BackButton({
  initialPost
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BackButtonFill, {
    children: ({
      length
    }) => length <= 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__unstableMotion.div, {
      variants: slideX,
      transition: {
        type: 'tween',
        delay: 0.8
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_2__["default"], {
        showTooltip: true,
        initialPost: initialPost
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackButton);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/browser-url/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/browser-url/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserURL: () => (/* binding */ BrowserURL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getPostEditURL: () => (/* binding */ getPostEditURL)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */





/**
 * Returns the Post's Edit URL.
 *
 * @param {number} postId Post ID.
 *
 * @return {string} Post edit URL.
 */
function getPostEditURL(postId) {
  return (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.addQueryArgs)('post.php', {
    post: postId,
    action: 'edit'
  });
}
class BrowserURL extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      historyId: null
    };
  }
  componentDidUpdate(prevProps) {
    const {
      postId,
      postStatus,
      hasHistory
    } = this.props;
    const {
      historyId
    } = this.state;
    if ((postId !== prevProps.postId || postId !== historyId) && postStatus !== 'auto-draft' && postId && !hasHistory) {
      this.setBrowserURL(postId);
    }
  }

  /**
   * Replaces the browser URL with a post editor link for the given post ID.
   *
   * Note it is important that, since this function may be called when the
   * editor first loads, the result generated `getPostEditURL` matches that
   * produced by the server. Otherwise, the URL will change unexpectedly.
   *
   * @param {number} postId Post ID for which to generate post editor URL.
   */
  setBrowserURL(postId) {
    window.history.replaceState({
      id: postId
    }, 'Post ' + postId, getPostEditURL(postId));
    this.setState(() => ({
      historyId: postId
    }));
  }
  render() {
    return null;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => {
  const {
    getCurrentPost
  } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const post = getCurrentPost();
  let {
    id,
    status,
    type
  } = post;
  const isTemplate = ['wp_template', 'wp_template_part'].includes(type);
  if (isTemplate) {
    id = post.wp_id;
  }
  return {
    postId: id,
    postStatus: status
  };
})(BrowserURL));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditorInitialization)
/* harmony export */ });
/* harmony import */ var _listener_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listener-hooks */ "./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/listener-hooks.js");
/**
 * Internal dependencies
 */


/**
 * Data component used for initializing the editor and re-initializes
 * when postId changes or on unmount.
 *
 * @return {null} This is a data component so does not render any ui.
 */
function EditorInitialization() {
  (0,_listener_hooks__WEBPACK_IMPORTED_MODULE_0__.useUpdatePostLinkListener)();
  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/listener-hooks.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/listener-hooks.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useUpdatePostLinkListener: () => (/* binding */ useUpdatePostLinkListener)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/constants */ "./node_modules/@wordpress/edit-post/build-module/store/constants.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * This listener hook monitors any change in permalink and updates the view
 * post link in the admin bar.
 */
const useUpdatePostLinkListener = () => {
  const {
    newPermalink
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    newPermalink: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getCurrentPost().link
  }), []);
  const nodeToUpdateRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    nodeToUpdateRef.current = document.querySelector(_store_constants__WEBPACK_IMPORTED_MODULE_3__.VIEW_AS_PREVIEW_LINK_SELECTOR) || document.querySelector(_store_constants__WEBPACK_IMPORTED_MODULE_3__.VIEW_AS_LINK_SELECTOR);
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!newPermalink || !nodeToUpdateRef.current) {
      return;
    }
    nodeToUpdateRef.current.setAttribute('href', newPermalink);
  }, [newPermalink]);
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/init-pattern-modal/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/init-pattern-modal/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitPatternModal)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */








function InitPatternModal() {
  const {
    editPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store);
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [syncType, setSyncType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    postType,
    isNewPost
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getEditedPostAttribute,
      isCleanNewPost
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    return {
      postType: getEditedPostAttribute('type'),
      isNewPost: isCleanNewPost()
    };
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (isNewPost && postType === 'wp_block') {
      setIsModalOpen(true);
    }
    // We only want the modal to open when the page is first loaded.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (postType !== 'wp_block' || !isNewPost) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: isModalOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Create pattern'),
      onRequestClose: () => {
        setIsModalOpen(false);
      },
      overlayClassName: "reusable-blocks-menu-items__convert-modal",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("form", {
        onSubmit: event => {
          event.preventDefault();
          setIsModalOpen(false);
          editPost({
            title,
            meta: {
              wp_pattern_sync_status: syncType
            }
          });
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalVStack, {
          spacing: "5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name'),
            value: title,
            onChange: setTitle,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('My pattern'),
            className: "patterns-create-modal__name-input",
            __nextHasNoMarginBottom: true,
            __next40pxDefaultSize: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
            __nextHasNoMarginBottom: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Synced', 'pattern (singular)'),
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sync this pattern across multiple locations.'),
            checked: !syncType,
            onChange: () => {
              setSyncType(!syncType ? 'unsynced' : undefined);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalHStack, {
            justify: "right",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button
            // TODO: Switch to `true` (40px size) if possible
            , {
              __next40pxDefaultSize: false,
              variant: "primary",
              type: "submit",
              disabled: !title,
              accessibleWhenDisabled: true,
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Create')
            })
          })]
        })
      })
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcuts/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcuts/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

function KeyboardShortcuts() {
  const {
    toggleFeature
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerShortcut({
      name: 'core/edit-post/toggle-fullscreen',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Toggle fullscreen mode.'),
      keyCombination: {
        modifier: 'secondary',
        character: 'f'
      }
    });
  }, []);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_2__.useShortcut)('core/edit-post/toggle-fullscreen', () => {
    toggleFeature('fullscreenMode');
  });
  return null;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyboardShortcuts);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/layout/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/layout/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-up.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_core_commands__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/core-commands */ "@wordpress/core-commands");
/* harmony import */ var _wordpress_core_commands__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_commands__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _back_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../back-button */ "./node_modules/@wordpress/edit-post/build-module/components/back-button/index.js");
/* harmony import */ var _editor_initialization__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../editor-initialization */ "./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/index.js");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../keyboard-shortcuts */ "./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcuts/index.js");
/* harmony import */ var _init_pattern_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../init-pattern-modal */ "./node_modules/@wordpress/edit-post/build-module/components/init-pattern-modal/index.js");
/* harmony import */ var _browser_url__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../browser-url */ "./node_modules/@wordpress/edit-post/build-module/components/browser-url/index.js");
/* harmony import */ var _meta_boxes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../meta-boxes */ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/index.js");
/* harmony import */ var _more_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../more-menu */ "./node_modules/@wordpress/edit-post/build-module/components/more-menu/index.js");
/* harmony import */ var _welcome_guide__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../welcome-guide */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var _commands_use_commands__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../commands/use-commands */ "./node_modules/@wordpress/edit-post/build-module/commands/use-commands.js");
/* harmony import */ var _use_padding_appender__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./use-padding-appender */ "./node_modules/@wordpress/edit-post/build-module/components/layout/use-padding-appender.js");
/* harmony import */ var _use_should_iframe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./use-should-iframe */ "./node_modules/@wordpress/edit-post/build-module/components/layout/use-should-iframe.js");
/* harmony import */ var _hooks_use_navigate_to_entity_record__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../hooks/use-navigate-to-entity-record */ "./node_modules/@wordpress/edit-post/build-module/hooks/use-navigate-to-entity-record.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


















/**
 * Internal dependencies
 */

















const {
  getLayoutStyles
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_26__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.privateApis);
const {
  useCommands
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_26__.unlock)(_wordpress_core_commands__WEBPACK_IMPORTED_MODULE_10__.privateApis);
const {
  useCommandContext
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_26__.unlock)(_wordpress_commands__WEBPACK_IMPORTED_MODULE_9__.privateApis);
const {
  Editor,
  FullscreenMode,
  NavigableRegion
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_26__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.privateApis);
const {
  BlockKeyboardShortcuts
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_26__.unlock)(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_11__.privateApis);
const DESIGN_POST_TYPES = ['wp_template', 'wp_template_part', 'wp_block', 'wp_navigation'];
function useEditorStyles() {
  const {
    hasThemeStyleSupport,
    editorSettings,
    isZoomedOutView,
    renderingMode,
    postType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      __unstableGetEditorMode
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const {
      getCurrentPostType,
      getRenderingMode
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.store);
    const _postType = getCurrentPostType();
    return {
      hasThemeStyleSupport: select(_store__WEBPACK_IMPORTED_MODULE_25__.store).isFeatureActive('themeStyles'),
      editorSettings: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.store).getEditorSettings(),
      isZoomedOutView: __unstableGetEditorMode() === 'zoom-out',
      renderingMode: getRenderingMode(),
      postType: _postType
    };
  }, []);

  // Compute the default styles.
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    var _editorSettings$style, _editorSettings$defau, _editorSettings$style2, _editorSettings$style3;
    const presetStyles = (_editorSettings$style = editorSettings.styles?.filter(style => style.__unstableType && style.__unstableType !== 'theme')) !== null && _editorSettings$style !== void 0 ? _editorSettings$style : [];
    const defaultEditorStyles = [...((_editorSettings$defau = editorSettings?.defaultEditorStyles) !== null && _editorSettings$defau !== void 0 ? _editorSettings$defau : []), ...presetStyles];

    // Has theme styles if the theme supports them and if some styles were not preset styles (in which case they're theme styles).
    const hasThemeStyles = hasThemeStyleSupport && presetStyles.length !== ((_editorSettings$style2 = editorSettings.styles?.length) !== null && _editorSettings$style2 !== void 0 ? _editorSettings$style2 : 0);

    // If theme styles are not present or displayed, ensure that
    // base layout styles are still present in the editor.
    if (!editorSettings.disableLayoutStyles && !hasThemeStyles) {
      defaultEditorStyles.push({
        css: getLayoutStyles({
          style: {},
          selector: 'body',
          hasBlockGapSupport: false,
          hasFallbackGapSupport: true,
          fallbackGapValue: '0.5em'
        })
      });
    }
    const baseStyles = hasThemeStyles ? (_editorSettings$style3 = editorSettings.styles) !== null && _editorSettings$style3 !== void 0 ? _editorSettings$style3 : [] : defaultEditorStyles;

    // Add a space for the typewriter effect. When typing in the last block,
    // there needs to be room to scroll up.
    if (!isZoomedOutView && renderingMode === 'post-only' && !DESIGN_POST_TYPES.includes(postType)) {
      return [...baseStyles, {
        css: ':root :where(.editor-styles-wrapper)::after {content: ""; display: block; height: 40vh;}'
      }];
    }
    return baseStyles;
  }, [editorSettings.defaultEditorStyles, editorSettings.disableLayoutStyles, editorSettings.styles, hasThemeStyleSupport, postType]);
}

/**
 * @param {Object}  props
 * @param {boolean} props.isLegacy True when the editor canvas is not in an iframe.
 */
function MetaBoxesMain({
  isLegacy
}) {
  const [isOpen, openHeight, hasAnyVisible] = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      get
    } = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__.store);
    const {
      isMetaBoxLocationVisible
    } = select(_store__WEBPACK_IMPORTED_MODULE_25__.store);
    return [get('core/edit-post', 'metaBoxesMainIsOpen'), get('core/edit-post', 'metaBoxesMainOpenHeight'), isMetaBoxLocationVisible('normal') || isMetaBoxLocationVisible('advanced') || isMetaBoxLocationVisible('side')];
  }, []);
  const {
    set: setPreference
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__.store);
  const metaBoxesMainRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  const isShort = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_16__.useMediaQuery)('(max-height: 549px)');
  const [{
    min,
    max
  }, setHeightConstraints] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(() => ({}));
  // Keeps the resizable area’s size constraints updated taking into account
  // editor notices. The constraints are also used to derive the value for the
  // aria-valuenow attribute on the seperator.
  const effectSizeConstraints = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_16__.useRefEffect)(node => {
    const container = node.closest('.interface-interface-skeleton__content');
    const noticeLists = container.querySelectorAll(':scope > .components-notice-list');
    const resizeHandle = container.querySelector('.edit-post-meta-boxes-main__presenter');
    const deriveConstraints = () => {
      const fullHeight = container.offsetHeight;
      let nextMax = fullHeight;
      for (const element of noticeLists) {
        nextMax -= element.offsetHeight;
      }
      const nextMin = resizeHandle.offsetHeight;
      setHeightConstraints({
        min: nextMin,
        max: nextMax
      });
    };
    const observer = new window.ResizeObserver(deriveConstraints);
    observer.observe(container);
    for (const element of noticeLists) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  const separatorRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useRef)();
  const separatorHelpId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useId)();
  const [isUntouched, setIsUntouched] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const applyHeight = (candidateHeight, isPersistent, isInstant) => {
    const nextHeight = Math.min(max, Math.max(min, candidateHeight));
    if (isPersistent) {
      setPreference('core/edit-post', 'metaBoxesMainOpenHeight', nextHeight);
    } else {
      separatorRef.current.ariaValueNow = getAriaValueNow(nextHeight);
    }
    if (isInstant) {
      metaBoxesMainRef.current.updateSize({
        height: nextHeight,
        // Oddly, when the event that triggered this was not from the mouse (e.g. keydown),
        // if `width` is left unspecified a subsequent drag gesture applies a fixed
        // width and the pane fails to widen/narrow with parent width changes from
        // sidebars opening/closing or window resizes.
        width: 'auto'
      });
    }
  };
  if (!hasAnyVisible) {
    return;
  }
  const contents = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(
    // The class name 'edit-post-layout__metaboxes' is retained because some plugins use it.
    'edit-post-layout__metaboxes', !isLegacy && 'edit-post-meta-boxes-main__liner'),
    hidden: !isLegacy && isShort && !isOpen,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_meta_boxes__WEBPACK_IMPORTED_MODULE_22__["default"], {
      location: "normal"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_meta_boxes__WEBPACK_IMPORTED_MODULE_22__["default"], {
      location: "advanced"
    })]
  });
  if (isLegacy) {
    return contents;
  }
  const isAutoHeight = openHeight === undefined;
  let usedMax = '50%'; // Approximation before max has a value.
  if (max !== undefined) {
    // Halves the available max height until a user height is set.
    usedMax = isAutoHeight && isUntouched ? max / 2 : max;
  }
  const getAriaValueNow = height => Math.round((height - min) / (max - min) * 100);
  const usedAriaValueNow = max === undefined || isAutoHeight ? 50 : getAriaValueNow(openHeight);
  const toggle = () => setPreference('core/edit-post', 'metaBoxesMainIsOpen', !isOpen);

  // TODO: Support more/all keyboard interactions from the window splitter pattern:
  // https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/
  const onSeparatorKeyDown = event => {
    const delta = {
      ArrowUp: 20,
      ArrowDown: -20
    }[event.key];
    if (delta) {
      const pane = metaBoxesMainRef.current.resizable;
      const fromHeight = isAutoHeight ? pane.offsetHeight : openHeight;
      const nextHeight = delta + fromHeight;
      applyHeight(nextHeight, true, true);
      event.preventDefault();
    }
  };
  const className = 'edit-post-meta-boxes-main';
  const paneLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Meta Boxes');
  let Pane, paneProps;
  if (isShort) {
    Pane = NavigableRegion;
    paneProps = {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(className, 'is-toggle-only')
    };
  } else {
    Pane = _wordpress_components__WEBPACK_IMPORTED_MODULE_15__.ResizableBox;
    paneProps = /** @type {Parameters<typeof ResizableBox>[0]} */{
      as: NavigableRegion,
      ref: metaBoxesMainRef,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])(className, 'is-resizable'),
      defaultSize: {
        height: openHeight
      },
      minHeight: min,
      maxHeight: usedMax,
      enable: {
        top: true,
        right: false,
        bottom: false,
        left: false,
        topLeft: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false
      },
      handleClasses: {
        top: 'edit-post-meta-boxes-main__presenter'
      },
      handleComponent: {
        top: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__.Tooltip, {
            text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Drag to resize'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("button", {
              // eslint-disable-line jsx-a11y/role-supports-aria-props
              ref: separatorRef,
              role: "separator" // eslint-disable-line jsx-a11y/no-interactive-element-to-noninteractive-role
              ,
              "aria-valuenow": usedAriaValueNow,
              "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Drag to resize'),
              "aria-describedby": separatorHelpId,
              onKeyDown: onSeparatorKeyDown
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__.VisuallyHidden, {
            id: separatorHelpId,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Use up and down arrow keys to resize the meta box panel.')
          })]
        })
      },
      // Avoids hiccups while dragging over objects like iframes and ensures that
      // the event to end the drag is captured by the target (resize handle)
      // whether or not it’s under the pointer.
      onPointerDown: ({
        pointerId,
        target
      }) => {
        target.setPointerCapture(pointerId);
      },
      onResizeStart: (event, direction, elementRef) => {
        if (isAutoHeight) {
          // Sets the starting height to avoid visual jumps in height and
          // aria-valuenow being `NaN` for the first (few) resize events.
          applyHeight(elementRef.offsetHeight, false, true);
          setIsUntouched(false);
        }
      },
      onResize: () => applyHeight(metaBoxesMainRef.current.state.height),
      onResizeStop: () => applyHeight(metaBoxesMainRef.current.state.height, true)
    };
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(Pane, {
    "aria-label": paneLabel,
    ...paneProps,
    children: [isShort ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("button", {
      "aria-expanded": isOpen,
      className: "edit-post-meta-boxes-main__presenter",
      onClick: toggle,
      children: [paneLabel, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__.Icon, {
        icon: isOpen ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_32__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_33__["default"]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("meta", {
      ref: effectSizeConstraints
    }), contents]
  });
}
function Layout({
  postId: initialPostId,
  postType: initialPostType,
  settings,
  initialEdits
}) {
  useCommands();
  (0,_commands_use_commands__WEBPACK_IMPORTED_MODULE_27__["default"])();
  const paddingAppenderRef = (0,_use_padding_appender__WEBPACK_IMPORTED_MODULE_28__.usePaddingAppender)();
  const shouldIframe = (0,_use_should_iframe__WEBPACK_IMPORTED_MODULE_29__.useShouldIframe)();
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    currentPost: {
      postId: currentPostId,
      postType: currentPostType
    },
    onNavigateToEntityRecord,
    onNavigateToPreviousEntityRecord
  } = (0,_hooks_use_navigate_to_entity_record__WEBPACK_IMPORTED_MODULE_30__["default"])(initialPostId, initialPostType, 'post-only');
  const isEditingTemplate = currentPostType === 'wp_template';
  const {
    mode,
    isFullscreenActive,
    hasActiveMetaboxes,
    hasBlockSelected,
    showIconLabels,
    isDistractionFree,
    showMetaBoxes,
    hasHistory,
    isWelcomeGuideVisible,
    templateId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    var _getPostType$viewable;
    const {
      get
    } = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_8__.store);
    const {
      isFeatureActive,
      getEditedPostTemplateId
    } = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_26__.unlock)(select(_store__WEBPACK_IMPORTED_MODULE_25__.store));
    const {
      canUser,
      getPostType
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_14__.store);
    const {
      __unstableGetEditorMode
    } = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_26__.unlock)(select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store));
    const supportsTemplateMode = settings.supportsTemplateMode;
    const isViewable = (_getPostType$viewable = getPostType(currentPostType)?.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false;
    const canViewTemplate = canUser('read', {
      kind: 'postType',
      name: 'wp_template'
    });
    const isZoomOut = __unstableGetEditorMode() === 'zoom-out';
    return {
      mode: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.store).getEditorMode(),
      isFullscreenActive: select(_store__WEBPACK_IMPORTED_MODULE_25__.store).isFeatureActive('fullscreenMode'),
      hasActiveMetaboxes: select(_store__WEBPACK_IMPORTED_MODULE_25__.store).hasMetaBoxes(),
      hasBlockSelected: !!select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store).getBlockSelectionStart(),
      showIconLabels: get('core', 'showIconLabels'),
      isDistractionFree: get('core', 'distractionFree'),
      showMetaBoxes: !DESIGN_POST_TYPES.includes(currentPostType) && select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.store).getRenderingMode() === 'post-only' && !isZoomOut,
      isWelcomeGuideVisible: isFeatureActive('welcomeGuide'),
      templateId: supportsTemplateMode && isViewable && canViewTemplate && !isEditingTemplate ? getEditedPostTemplateId() : null
    };
  }, [currentPostType, isEditingTemplate, settings.supportsTemplateMode]);

  // Set the right context for the command palette
  const commandContext = hasBlockSelected ? 'block-selection-edit' : 'entity-edit';
  useCommandContext(commandContext);
  const editorSettings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => ({
    ...settings,
    onNavigateToEntityRecord,
    onNavigateToPreviousEntityRecord,
    defaultRenderingMode: 'post-only'
  }), [settings, onNavigateToEntityRecord, onNavigateToPreviousEntityRecord]);
  const styles = useEditorStyles();

  // We need to add the show-icon-labels class to the body element so it is applied to modals.
  if (showIconLabels) {
    document.body.classList.add('show-icon-labels');
  } else {
    document.body.classList.remove('show-icon-labels');
  }
  const navigateRegionsProps = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_15__.__unstableUseNavigateRegions)();
  const className = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('edit-post-layout', 'is-mode-' + mode, {
    'has-metaboxes': hasActiveMetaboxes
  });
  function onPluginAreaError(name) {
    createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)( /* translators: %s: plugin name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('The "%s" plugin has encountered an error and cannot be rendered.'), name));
  }
  const {
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__.store);
  const onActionPerformed = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useCallback)((actionId, items) => {
    switch (actionId) {
      case 'move-to-trash':
        {
          document.location.href = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_12__.addQueryArgs)('edit.php', {
            trashed: 1,
            post_type: items[0].type,
            ids: items[0].id
          });
        }
        break;
      case 'duplicate-post':
        {
          const newItem = items[0];
          const title = typeof newItem.title === 'string' ? newItem.title : newItem.title?.rendered;
          createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)(
          // translators: %s: Title of the created post or template, e.g: "Hello world".
          (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('"%s" successfully created.'), (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_13__.decodeEntities)(title)), {
            type: 'snackbar',
            id: 'duplicate-post-action',
            actions: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit'),
              onClick: () => {
                const postId = newItem.id;
                document.location.href = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_12__.addQueryArgs)('post.php', {
                  post: postId,
                  action: 'edit'
                });
              }
            }]
          });
        }
        break;
    }
  }, [createSuccessNotice]);
  const initialPost = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    return {
      type: initialPostType,
      id: initialPostId
    };
  }, [initialPostType, initialPostId]);
  const backButton = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_16__.useViewportMatch)('medium') && isFullscreenActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_back_button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    initialPost: initialPost
  }) : null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_15__.SlotFillProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_commands__WEBPACK_IMPORTED_MODULE_9__.CommandMenu, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_welcome_guide__WEBPACK_IMPORTED_MODULE_24__["default"], {
        postType: currentPostType
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
        className: navigateRegionsProps.className,
        ...navigateRegionsProps,
        ref: navigateRegionsProps.ref,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(Editor, {
          settings: editorSettings,
          initialEdits: initialEdits,
          postType: currentPostType,
          postId: currentPostId,
          templateId: templateId,
          className: className,
          styles: styles,
          forceIsDirty: hasActiveMetaboxes,
          contentRef: paddingAppenderRef,
          disableIframe: !shouldIframe
          // We should auto-focus the canvas (title) on load.
          // eslint-disable-next-line jsx-a11y/no-autofocus
          ,
          autoFocus: !isWelcomeGuideVisible,
          onActionPerformed: onActionPerformed,
          extraSidebarPanels: showMetaBoxes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_meta_boxes__WEBPACK_IMPORTED_MODULE_22__["default"], {
            location: "side"
          }),
          extraContent: !isDistractionFree && showMetaBoxes && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(MetaBoxesMain, {
            isLegacy: !shouldIframe
          }),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.PostLockedModal, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_editor_initialization__WEBPACK_IMPORTED_MODULE_18__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(FullscreenMode, {
            isActive: isFullscreenActive
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_browser_url__WEBPACK_IMPORTED_MODULE_21__["default"], {
            hasHistory: hasHistory
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.UnsavedChangesWarning, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.AutosaveMonitor, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.LocalAutosaveMonitor, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_19__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.EditorKeyboardShortcutsRegister, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(BlockKeyboardShortcuts, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_init_pattern_modal__WEBPACK_IMPORTED_MODULE_20__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_4__.PluginArea, {
            onError: onPluginAreaError
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_more_menu__WEBPACK_IMPORTED_MODULE_23__["default"], {}), backButton, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_1__.EditorSnackbars, {})]
        })
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/layout/use-padding-appender.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/layout/use-padding-appender.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePaddingAppender: () => (/* binding */ usePaddingAppender)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




function usePaddingAppender() {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useRegistry)();
  return (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useRefEffect)(node => {
    function onMouseDown(event) {
      if (event.target !== node &&
      // Tests for the parent element because in the iframed editor if the click is
      // below the padding the target will be the parent element (html) and should
      // still be treated as intent to append.
      event.target !== node.parentElement) {
        return;
      }
      const {
        ownerDocument
      } = node;
      const {
        defaultView
      } = ownerDocument;
      const pseudoHeight = defaultView.parseInt(defaultView.getComputedStyle(node, ':after').height, 10);
      if (!pseudoHeight) {
        return;
      }

      // Only handle clicks under the last child.
      const lastChild = node.lastElementChild;
      if (!lastChild) {
        return;
      }
      const lastChildRect = lastChild.getBoundingClientRect();
      if (event.clientY < lastChildRect.bottom) {
        return;
      }
      event.preventDefault();
      const blockOrder = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlockOrder('');
      const lastBlockClientId = blockOrder[blockOrder.length - 1];
      const lastBlock = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlock(lastBlockClientId);
      const {
        selectBlock,
        insertDefaultBlock
      } = registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
      if (lastBlock && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.isUnmodifiedDefaultBlock)(lastBlock)) {
        selectBlock(lastBlockClientId);
      } else {
        insertDefaultBlock();
      }
    }
    const {
      ownerDocument
    } = node;
    // Adds the listener on the document so that in the iframed editor clicks below the
    // padding can be handled as they too should be treated as intent to append.
    ownerDocument.addEventListener('mousedown', onMouseDown);
    return () => {
      ownerDocument.removeEventListener('mousedown', onMouseDown);
    };
  }, [registry]);
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/layout/use-should-iframe.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/layout/use-should-iframe.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useShouldIframe: () => (/* binding */ useShouldIframe)
/* harmony export */ });
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




const isGutenbergPlugin =  false ? 0 : false;
function useShouldIframe() {
  const {
    isBlockBasedTheme,
    hasV3BlocksOnly,
    isEditingTemplate,
    isZoomOutMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getEditorSettings,
      getCurrentPostType
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.store);
    const {
      __unstableGetEditorMode
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
    const {
      getBlockTypes
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.store);
    const editorSettings = getEditorSettings();
    return {
      isBlockBasedTheme: editorSettings.__unstableIsBlockBasedTheme,
      hasV3BlocksOnly: getBlockTypes().every(type => {
        return type.apiVersion >= 3;
      }),
      isEditingTemplate: getCurrentPostType() === 'wp_template',
      isZoomOutMode: __unstableGetEditorMode() === 'zoom-out'
    };
  }, []);
  return hasV3BlocksOnly || isGutenbergPlugin && isBlockBasedTheme || isEditingTemplate || isZoomOutMode;
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MetaBoxes)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meta_boxes_area__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta-boxes-area */ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js");
/* harmony import */ var _meta_box_visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta-box-visibility */ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-box-visibility.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */






function MetaBoxes({
  location
}) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useRegistry)();
  const {
    metaBoxes,
    areMetaBoxesInitialized,
    isEditorReady
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      __unstableIsEditorReady
    } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      getMetaBoxesPerLocation,
      areMetaBoxesInitialized: _areMetaBoxesInitialized
    } = select(_store__WEBPACK_IMPORTED_MODULE_5__.store);
    return {
      metaBoxes: getMetaBoxesPerLocation(location),
      areMetaBoxesInitialized: _areMetaBoxesInitialized(),
      isEditorReady: __unstableIsEditorReady()
    };
  }, [location]);
  const hasMetaBoxes = !!metaBoxes?.length;

  // When editor is ready, initialize postboxes (wp core script) and metabox
  // saving. This initializes all meta box locations, not just this specific
  // one.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isEditorReady && hasMetaBoxes && !areMetaBoxesInitialized) {
      registry.dispatch(_store__WEBPACK_IMPORTED_MODULE_5__.store).initializeMetaBoxes();
    }
  }, [isEditorReady, hasMetaBoxes, areMetaBoxesInitialized]);
  if (!areMetaBoxesInitialized) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [(metaBoxes !== null && metaBoxes !== void 0 ? metaBoxes : []).map(({
      id
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_meta_box_visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: id
    }, id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_meta_boxes_area__WEBPACK_IMPORTED_MODULE_3__["default"], {
      location: location
    })]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-box-visibility.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-box-visibility.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



class MetaBoxVisibility extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  componentDidMount() {
    this.updateDOM();
  }
  componentDidUpdate(prevProps) {
    if (this.props.isVisible !== prevProps.isVisible) {
      this.updateDOM();
    }
  }
  updateDOM() {
    const {
      id,
      isVisible
    } = this.props;
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    if (isVisible) {
      element.classList.remove('is-hidden');
    } else {
      element.classList.add('is-hidden');
    }
  }
  render() {
    return null;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, {
  id
}) => ({
  isVisible: select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).isEditorPanelEnabled(`meta-box-${id}`)
}))(MetaBoxVisibility));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Render metabox area.
 *
 * @param {Object} props          Component props.
 * @param {string} props.location metabox location.
 * @return {Component} The component to be rendered.
 */


function MetaBoxesArea({
  location
}) {
  const container = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const formRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    formRef.current = document.querySelector('.metabox-location-' + location);
    if (formRef.current) {
      container.current.appendChild(formRef.current);
    }
    return () => {
      if (formRef.current) {
        document.querySelector('#metaboxes').appendChild(formRef.current);
      }
    };
  }, [location]);
  const isSaving = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select(_store__WEBPACK_IMPORTED_MODULE_4__.store).isSavingMetaBoxes();
  }, []);
  const classes = (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('edit-post-meta-boxes-area', `is-${location}`, {
    'is-loading': isSaving
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: classes,
    children: [isSaving && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Spinner, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "edit-post-meta-boxes-area__container",
      ref: container
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "edit-post-meta-boxes-area__clear"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaBoxesArea);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/more-menu/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/more-menu/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var _manage_patterns_menu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-patterns-menu-item */ "./node_modules/@wordpress/edit-post/build-module/components/more-menu/manage-patterns-menu-item.js");
/* harmony import */ var _welcome_guide_menu_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome-guide-menu-item */ "./node_modules/@wordpress/edit-post/build-module/components/more-menu/welcome-guide-menu-item.js");
/* harmony import */ var _preferences_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../preferences-modal */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */







const {
  ToolsMoreMenuGroup,
  ViewMoreMenuGroup
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_5__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.privateApis);
const MoreMenu = () => {
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useViewportMatch)('large');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [isLargeViewport && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ViewMoreMenuGroup, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.PreferenceToggleMenuItem, {
        scope: "core/edit-post",
        name: "fullscreenMode",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fullscreen mode'),
        info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show and hide the admin user interface'),
        messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fullscreen mode activated'),
        messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fullscreen mode deactivated'),
        shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.secondary('f')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(ToolsMoreMenuGroup, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_manage_patterns_menu_item__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_welcome_guide_menu_item__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_preferences_modal__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoreMenu);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/more-menu/manage-patterns-menu-item.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/more-menu/manage-patterns-menu-item.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */






function ManagePatternsMenuItem() {
  const url = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    const defaultUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)('edit.php', {
      post_type: 'wp_block'
    });
    const patternsUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.addQueryArgs)('site-editor.php', {
      path: '/patterns'
    });

    // The site editor and templates both check whether the user has
    // edit_theme_options capabilities. We can leverage that here and not
    // display the manage patterns link if the user can't access it.
    return canUser('create', {
      kind: 'postType',
      name: 'wp_template'
    }) ? patternsUrl : defaultUrl;
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
    role: "menuitem",
    href: url,
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Manage patterns')
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManagePatternsMenuItem);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/more-menu/welcome-guide-menu-item.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/more-menu/welcome-guide-menu-item.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeGuideMenuItem)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */





function WelcomeGuideMenuItem() {
  const isEditingTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentPostType() === 'wp_template', []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.PreferenceToggleMenuItem, {
    scope: "core/edit-post",
    name: isEditingTemplate ? 'welcomeGuideTemplate' : 'welcomeGuide',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome Guide')
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/enable-custom-fields.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/enable-custom-fields.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomFieldsConfirmation: () => (/* binding */ CustomFieldsConfirmation),
/* harmony export */   EnableCustomFieldsOption: () => (/* binding */ EnableCustomFieldsOption),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




const {
  PreferenceBaseOption
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_7__.unlock)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.privateApis);
function submitCustomFieldsForm() {
  const customFieldsForm = document.getElementById('toggle-custom-fields-form');

  // Ensure the referrer values is up to update with any
  customFieldsForm.querySelector('[name="_wp_http_referer"]').setAttribute('value', (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.getPathAndQueryString)(window.location.href));
  customFieldsForm.submit();
}
function CustomFieldsConfirmation({
  willEnable
}) {
  const [isReloading, setIsReloading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
      className: "edit-post-preferences-modal__custom-fields-confirmation-message",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('A page reload is required for this change. Make sure your content is saved before reloading.')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button
    // TODO: Switch to `true` (40px size) if possible
    , {
      __next40pxDefaultSize: false,
      className: "edit-post-preferences-modal__custom-fields-confirmation-button",
      variant: "secondary",
      isBusy: isReloading,
      accessibleWhenDisabled: true,
      disabled: isReloading,
      onClick: () => {
        setIsReloading(true);
        submitCustomFieldsForm();
      },
      children: willEnable ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show & Reload Page') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide & Reload Page')
    })]
  });
}
function EnableCustomFieldsOption({
  label,
  areCustomFieldsEnabled
}) {
  const [isChecked, setIsChecked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(areCustomFieldsEnabled);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(PreferenceBaseOption, {
    label: label,
    isChecked: isChecked,
    onChange: setIsChecked,
    children: isChecked !== areCustomFieldsEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(CustomFieldsConfirmation, {
      willEnable: isChecked
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(select => ({
  areCustomFieldsEnabled: !!select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_4__.store).getEditorSettings().enableCustomFields
}))(EnableCustomFieldsOption));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/enable-panel.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/enable-panel.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const {
  PreferenceBaseOption
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_4__.unlock)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.privateApis);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)((select, {
  panelName
}) => {
  const {
    isEditorPanelEnabled,
    isEditorPanelRemoved
  } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  return {
    isRemoved: isEditorPanelRemoved(panelName),
    isChecked: isEditorPanelEnabled(panelName)
  };
}), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.ifCondition)(({
  isRemoved
}) => !isRemoved), (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withDispatch)((dispatch, {
  panelName
}) => ({
  onChange: () => dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).toggleEditorPanelEnabled(panelName)
})))(PreferenceBaseOption));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPostPreferencesModal)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var _meta_boxes_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta-boxes-section */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/meta-boxes-section.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



const {
  PreferenceToggleControl
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.privateApis);
const {
  PreferencesModal
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.privateApis);
function EditPostPreferencesModal() {
  const extraSections = {
    general: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_meta_boxes_section__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Advanced')
    }),
    appearance: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PreferenceToggleControl, {
      scope: "core/edit-post",
      featureName: "themeStyles",
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the editor look like your theme.'),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use theme styles')
    })
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(PreferencesModal, {
    extraSections: extraSections
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/meta-boxes-section.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/meta-boxes-section.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetaBoxesSection: () => (/* binding */ MetaBoxesSection),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _enable_custom_fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enable-custom-fields */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/enable-custom-fields.js");
/* harmony import */ var _enable_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enable-panel */ "./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/enable-panel.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






const {
  PreferencesModalSection
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_7__.unlock)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.privateApis);
function MetaBoxesSection({
  areCustomFieldsRegistered,
  metaBoxes,
  ...sectionProps
}) {
  // The 'Custom Fields' meta box is a special case that we handle separately.
  const thirdPartyMetaBoxes = metaBoxes.filter(({
    id
  }) => id !== 'postcustom');
  if (!areCustomFieldsRegistered && thirdPartyMetaBoxes.length === 0) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(PreferencesModalSection, {
    ...sectionProps,
    children: [areCustomFieldsRegistered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_enable_custom_fields__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Custom fields')
    }), thirdPartyMetaBoxes.map(({
      id,
      title
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_enable_panel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: title,
      panelName: `meta-box-${id}`
    }, id))]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.withSelect)(select => {
  const {
    getEditorSettings
  } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    getAllMetaBoxes
  } = select(_store__WEBPACK_IMPORTED_MODULE_6__.store);
  return {
    // This setting should not live in the block editor's store.
    areCustomFieldsRegistered: getEditorSettings().enableCustomFields !== undefined,
    metaBoxes: getAllMetaBoxes()
  };
})(MetaBoxesSection));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/default.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/default.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeGuideDefault)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/image.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





function WelcomeGuideDefault() {
  const {
    toggleFeature
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_5__.store);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Guide, {
    className: "edit-post-welcome-guide",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome to the block editor'),
    finishButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Get started'),
    onFinish: () => toggleFeature('welcomeGuide'),
    pages: [{
      image: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-canvas.gif"
      }),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          className: "edit-post-welcome-guide__heading",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome to the block editor')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "edit-post-welcome-guide__text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('In the WordPress editor, each paragraph, image, or video is presented as a distinct “block” of content.')
        })]
      })
    }, {
      image: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-editor.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-editor.gif"
      }),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          className: "edit-post-welcome-guide__heading",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Make each block your own')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "edit-post-welcome-guide__text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected.')
        })]
      })
    }, {
      image: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-library.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-library.gif"
      }),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          className: "edit-post-welcome-guide__heading",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Get to know the block library')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "edit-post-welcome-guide__text",
          children: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('All of the blocks available to you live in the block library. You’ll find it wherever you see the <InserterIconImage /> icon.'), {
            InserterIconImage: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
              alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('inserter'),
              src: "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='18' height='18' rx='2' fill='%231E1E1E'/%3E%3Cpath d='M9.22727 4V14M4 8.77273H14' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E%0A"
            })
          })
        })]
      })
    }, {
      image: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-documentation.gif"
      }),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          className: "edit-post-welcome-guide__heading",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Learn how to use the block editor')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
          className: "edit-post-welcome-guide__text",
          children: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createInterpolateElement)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("New to the block editor? Want to learn more about using it? <a>Here's a detailed guide.</a>"), {
            a: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
              href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('https://wordpress.org/documentation/article/wordpress-block-editor/')
            })
          })
        })]
      })
    }]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/image.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/image.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeGuideImage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function WelcomeGuideImage({
  nonAnimatedSrc,
  animatedSrc
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("picture", {
    className: "edit-post-welcome-guide__image",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", {
      srcSet: nonAnimatedSrc,
      media: "(prefers-reduced-motion: reduce)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
      src: animatedSrc,
      width: "312",
      height: "240",
      alt: ""
    })]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/index.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeGuide)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/default.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/template.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




function WelcomeGuide({
  postType
}) {
  const {
    isActive,
    isEditingTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      isFeatureActive
    } = select(_store__WEBPACK_IMPORTED_MODULE_3__.store);
    const _isEditingTemplate = postType === 'wp_template';
    const feature = _isEditingTemplate ? 'welcomeGuideTemplate' : 'welcomeGuide';
    return {
      isActive: isFeatureActive(feature),
      isEditingTemplate: _isEditingTemplate
    };
  }, [postType]);
  if (!isActive) {
    return null;
  }
  return isEditingTemplate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_template__WEBPACK_IMPORTED_MODULE_2__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_default__WEBPACK_IMPORTED_MODULE_1__["default"], {});
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/template.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/template.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeGuideTemplate)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image */ "./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/image.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





function WelcomeGuideTemplate() {
  const {
    toggleFeature
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_4__.store);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Guide, {
    className: "edit-template-welcome-guide",
    contentLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome to the template editor'),
    finishButtonText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Get started'),
    onFinish: () => toggleFeature('welcomeGuideTemplate'),
    pages: [{
      image: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
        nonAnimatedSrc: "https://s.w.org/images/block-editor/welcome-template-editor.svg",
        animatedSrc: "https://s.w.org/images/block-editor/welcome-template-editor.gif"
      }),
      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h1", {
          className: "edit-post-welcome-guide__heading",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome to the template editor')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "edit-post-welcome-guide__text",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Templates help define the layout of the site. You can customize all aspects of your posts and pages using blocks and patterns in this editor.')
        })]
      })
    }]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/deprecated.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/deprecated.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginBlockSettingsMenuItem: () => (/* binding */ PluginBlockSettingsMenuItem),
/* harmony export */   PluginDocumentSettingPanel: () => (/* binding */ PluginDocumentSettingPanel),
/* harmony export */   PluginMoreMenuItem: () => (/* binding */ PluginMoreMenuItem),
/* harmony export */   PluginPostPublishPanel: () => (/* binding */ PluginPostPublishPanel),
/* harmony export */   PluginPostStatusInfo: () => (/* binding */ PluginPostStatusInfo),
/* harmony export */   PluginPrePublishPanel: () => (/* binding */ PluginPrePublishPanel),
/* harmony export */   PluginSidebar: () => (/* binding */ PluginSidebar),
/* harmony export */   PluginSidebarMoreMenuItem: () => (/* binding */ PluginSidebarMoreMenuItem),
/* harmony export */   __experimentalPluginPostExcerpt: () => (/* binding */ __experimentalPluginPostExcerpt)
/* harmony export */ });
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


const {
  PluginPostExcerpt
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.privateApis);
const isSiteEditor = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.getPath)(window.location.href)?.includes('site-editor.php');
const deprecateSlot = name => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()(`wp.editPost.${name}`, {
    since: '6.6',
    alternative: `wp.editor.${name}`
  });
};

/* eslint-disable jsdoc/require-param */
/**
 * @see PluginBlockSettingsMenuItem in @wordpress/editor package.
 */
function PluginBlockSettingsMenuItem(props) {
  if (isSiteEditor) {
    return null;
  }
  deprecateSlot('PluginBlockSettingsMenuItem');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginBlockSettingsMenuItem, {
    ...props
  });
}

/**
 * @see PluginDocumentSettingPanel in @wordpress/editor package.
 */
function PluginDocumentSettingPanel(props) {
  if (isSiteEditor) {
    return null;
  }
  deprecateSlot('PluginDocumentSettingPanel');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginDocumentSettingPanel, {
    ...props
  });
}

/**
 * @see PluginMoreMenuItem in @wordpress/editor package.
 */
function PluginMoreMenuItem(props) {
  if (isSiteEditor) {
    return null;
  }
  deprecateSlot('PluginMoreMenuItem');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginMoreMenuItem, {
    ...props
  });
}

/**
 * @see PluginPrePublishPanel in @wordpress/editor package.
 */
function PluginPrePublishPanel(props) {
  if (isSiteEditor) {
    return null;
  }
  deprecateSlot('PluginPrePublishPanel');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginPrePublishPanel, {
    ...props
  });
}

/**
 * @see PluginPostPublishPanel in @wordpress/editor package.
 */
function PluginPostPublishPanel(props) {
  if (isSiteEditor) {
    return null;
  }
  deprecateSlot('PluginPostPublishPanel');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginPostPublishPanel, {
    ...props
  });
}

/**
 * @see PluginPostStatusInfo in @wordpress/editor package.
 */
function PluginPostStatusInfo(props) {
  if (isSiteEditor) {
    return null;
  }
  deprecateSlot('PluginPostStatusInfo');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginPostStatusInfo, {
    ...props
  });
}

/**
 * @see PluginSidebar in @wordpress/editor package.
 */
function PluginSidebar(props) {
  if (isSiteEditor) {
    return null;
  }
  deprecateSlot('PluginSidebar');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginSidebar, {
    ...props
  });
}

/**
 * @see PluginSidebarMoreMenuItem in @wordpress/editor package.
 */
function PluginSidebarMoreMenuItem(props) {
  if (isSiteEditor) {
    return null;
  }
  deprecateSlot('PluginSidebarMoreMenuItem');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_0__.PluginSidebarMoreMenuItem, {
    ...props
  });
}

/**
 * @see PluginPostExcerpt in @wordpress/editor package.
 */
function __experimentalPluginPostExcerpt() {
  if (isSiteEditor) {
    return null;
  }
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('wp.editPost.__experimentalPluginPostExcerpt', {
    since: '6.6',
    hint: 'Core and custom panels can be access programmatically using their panel name.',
    link: 'https://developer.wordpress.org/block-editor/reference-guides/slotfills/plugin-document-setting-panel/#accessing-a-panel-programmatically'
  });
  return PluginPostExcerpt;
}

/* eslint-enable jsdoc/require-param */


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/hooks/use-navigate-to-entity-record.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/hooks/use-navigate-to-entity-record.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useNavigateToEntityRecord)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */




/**
 * A hook that records the 'entity' history in the post editor as a user
 * navigates between editing a post and editing the post template or patterns.
 *
 * Implemented as a stack, so a little similar to the browser history API.
 *
 * Used to control displaying UI elements like the back button.
 *
 * @param {number} initialPostId        The post id of the post when the editor loaded.
 * @param {string} initialPostType      The post type of the post when the editor loaded.
 * @param {string} defaultRenderingMode The rendering mode to switch to when navigating.
 *
 * @return {Object} An object containing the `currentPost` variable and
 *                 `onNavigateToEntityRecord` and `onNavigateToPreviousEntityRecord` functions.
 */
function useNavigateToEntityRecord(initialPostId, initialPostType, defaultRenderingMode) {
  const [postHistory, dispatch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useReducer)((historyState, {
    type,
    post,
    previousRenderingMode
  }) => {
    if (type === 'push') {
      return [...historyState, {
        post,
        previousRenderingMode
      }];
    }
    if (type === 'pop') {
      // Try to leave one item in the history.
      if (historyState.length > 1) {
        return historyState.slice(0, -1);
      }
    }
    return historyState;
  }, [{
    post: {
      postId: initialPostId,
      postType: initialPostType
    }
  }]);
  const {
    post,
    previousRenderingMode
  } = postHistory[postHistory.length - 1];
  const {
    getRenderingMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    setRenderingMode
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const onNavigateToEntityRecord = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(params => {
    dispatch({
      type: 'push',
      post: {
        postId: params.postId,
        postType: params.postType
      },
      // Save the current rendering mode so we can restore it when navigating back.
      previousRenderingMode: getRenderingMode()
    });
    setRenderingMode(defaultRenderingMode);
  }, [getRenderingMode, setRenderingMode, defaultRenderingMode]);
  const onNavigateToPreviousEntityRecord = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    dispatch({
      type: 'pop'
    });
    if (previousRenderingMode) {
      setRenderingMode(previousRenderingMode);
    }
  }, [setRenderingMode, previousRenderingMode]);
  return {
    currentPost: post,
    onNavigateToEntityRecord,
    onNavigateToPreviousEntityRecord: postHistory.length > 1 ? onNavigateToPreviousEntityRecord : undefined
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/lock-unlock.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lock: () => (/* binding */ lock),
/* harmony export */   unlock: () => (/* binding */ unlock)
/* harmony export */ });
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/private-apis */ "@wordpress/private-apis");
/* harmony import */ var _wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const {
  lock,
  unlock
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/edit-post');


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/actions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalSetPreviewDeviceType: () => (/* binding */ __experimentalSetPreviewDeviceType),
/* harmony export */   __unstableCreateTemplate: () => (/* binding */ __unstableCreateTemplate),
/* harmony export */   closeGeneralSidebar: () => (/* binding */ closeGeneralSidebar),
/* harmony export */   closeModal: () => (/* binding */ closeModal),
/* harmony export */   closePublishSidebar: () => (/* binding */ closePublishSidebar),
/* harmony export */   hideBlockTypes: () => (/* binding */ hideBlockTypes),
/* harmony export */   initializeMetaBoxes: () => (/* binding */ initializeMetaBoxes),
/* harmony export */   metaBoxUpdatesFailure: () => (/* binding */ metaBoxUpdatesFailure),
/* harmony export */   metaBoxUpdatesSuccess: () => (/* binding */ metaBoxUpdatesSuccess),
/* harmony export */   openGeneralSidebar: () => (/* binding */ openGeneralSidebar),
/* harmony export */   openModal: () => (/* binding */ openModal),
/* harmony export */   openPublishSidebar: () => (/* binding */ openPublishSidebar),
/* harmony export */   removeEditorPanel: () => (/* binding */ removeEditorPanel),
/* harmony export */   requestMetaBoxUpdates: () => (/* binding */ requestMetaBoxUpdates),
/* harmony export */   setAvailableMetaBoxesPerLocation: () => (/* binding */ setAvailableMetaBoxesPerLocation),
/* harmony export */   setIsEditingTemplate: () => (/* binding */ setIsEditingTemplate),
/* harmony export */   setIsInserterOpened: () => (/* binding */ setIsInserterOpened),
/* harmony export */   setIsListViewOpened: () => (/* binding */ setIsListViewOpened),
/* harmony export */   showBlockTypes: () => (/* binding */ showBlockTypes),
/* harmony export */   switchEditorMode: () => (/* binding */ switchEditorMode),
/* harmony export */   toggleDistractionFree: () => (/* binding */ toggleDistractionFree),
/* harmony export */   toggleEditorPanelEnabled: () => (/* binding */ toggleEditorPanelEnabled),
/* harmony export */   toggleEditorPanelOpened: () => (/* binding */ toggleEditorPanelOpened),
/* harmony export */   toggleFeature: () => (/* binding */ toggleFeature),
/* harmony export */   togglePinnedPluginItem: () => (/* binding */ togglePinnedPluginItem),
/* harmony export */   togglePublishSidebar: () => (/* binding */ togglePublishSidebar),
/* harmony export */   updatePreferredStyleVariations: () => (/* binding */ updatePreferredStyleVariations)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_meta_boxes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/meta-boxes */ "./node_modules/@wordpress/edit-post/build-module/utils/meta-boxes.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


const {
  interfaceStore
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_7__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.privateApis);

/**
 * Returns an action object used in signalling that the user opened an editor sidebar.
 *
 * @param {?string} name Sidebar name to be opened.
 */
const openGeneralSidebar = name => ({
  registry
}) => {
  registry.dispatch(interfaceStore).enableComplementaryArea('core', name);
};

/**
 * Returns an action object signalling that the user closed the sidebar.
 */
const closeGeneralSidebar = () => ({
  registry
}) => registry.dispatch(interfaceStore).disableComplementaryArea('core');

/**
 * Returns an action object used in signalling that the user opened a modal.
 *
 * @deprecated since WP 6.3 use `core/interface` store's action with the same name instead.
 *
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */
const openModal = name => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("select( 'core/edit-post' ).openModal( name )", {
    since: '6.3',
    alternative: "select( 'core/interface').openModal( name )"
  });
  return registry.dispatch(interfaceStore).openModal(name);
};

/**
 * Returns an action object signalling that the user closed a modal.
 *
 * @deprecated since WP 6.3 use `core/interface` store's action with the same name instead.
 *
 * @return {Object} Action object.
 */
const closeModal = () => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("select( 'core/edit-post' ).closeModal()", {
    since: '6.3',
    alternative: "select( 'core/interface').closeModal()"
  });
  return registry.dispatch(interfaceStore).closeModal();
};

/**
 * Returns an action object used in signalling that the user opened the publish
 * sidebar.
 * @deprecated
 *
 * @return {Object} Action object
 */
const openPublishSidebar = () => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).openPublishSidebar", {
    since: '6.6',
    alternative: "dispatch( 'core/editor').openPublishSidebar"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).openPublishSidebar();
};

/**
 * Returns an action object used in signalling that the user closed the
 * publish sidebar.
 * @deprecated
 *
 * @return {Object} Action object.
 */
const closePublishSidebar = () => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).closePublishSidebar", {
    since: '6.6',
    alternative: "dispatch( 'core/editor').closePublishSidebar"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).closePublishSidebar();
};

/**
 * Returns an action object used in signalling that the user toggles the publish sidebar.
 * @deprecated
 *
 * @return {Object} Action object
 */
const togglePublishSidebar = () => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).togglePublishSidebar", {
    since: '6.6',
    alternative: "dispatch( 'core/editor').togglePublishSidebar"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).togglePublishSidebar();
};

/**
 * Returns an action object used to enable or disable a panel in the editor.
 *
 * @deprecated
 *
 * @param {string} panelName A string that identifies the panel to enable or disable.
 *
 * @return {Object} Action object.
 */
const toggleEditorPanelEnabled = panelName => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).toggleEditorPanelEnabled", {
    since: '6.5',
    alternative: "dispatch( 'core/editor').toggleEditorPanelEnabled"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).toggleEditorPanelEnabled(panelName);
};

/**
 * Opens a closed panel and closes an open panel.
 *
 * @deprecated
 *
 * @param {string} panelName A string that identifies the panel to open or close.
 */
const toggleEditorPanelOpened = panelName => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).toggleEditorPanelOpened", {
    since: '6.5',
    alternative: "dispatch( 'core/editor').toggleEditorPanelOpened"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).toggleEditorPanelOpened(panelName);
};

/**
 * Returns an action object used to remove a panel from the editor.
 *
 * @deprecated
 *
 * @param {string} panelName A string that identifies the panel to remove.
 *
 * @return {Object} Action object.
 */
const removeEditorPanel = panelName => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).removeEditorPanel", {
    since: '6.5',
    alternative: "dispatch( 'core/editor').removeEditorPanel"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).removeEditorPanel(panelName);
};

/**
 * Triggers an action used to toggle a feature flag.
 *
 * @param {string} feature Feature name.
 */
const toggleFeature = feature => ({
  registry
}) => registry.dispatch(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).toggle('core/edit-post', feature);

/**
 * Triggers an action used to switch editor mode.
 *
 * @deprecated
 *
 * @param {string} mode The editor mode.
 */
const switchEditorMode = mode => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).switchEditorMode", {
    since: '6.6',
    alternative: "dispatch( 'core/editor').switchEditorMode"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).switchEditorMode(mode);
};

/**
 * Triggers an action object used to toggle a plugin name flag.
 *
 * @param {string} pluginName Plugin name.
 */
const togglePinnedPluginItem = pluginName => ({
  registry
}) => {
  const isPinned = registry.select(interfaceStore).isItemPinned('core', pluginName);
  registry.dispatch(interfaceStore)[isPinned ? 'unpinItem' : 'pinItem']('core', pluginName);
};

/**
 * Returns an action object used in signaling that a style should be auto-applied when a block is created.
 *
 * @deprecated
 */
function updatePreferredStyleVariations() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).updatePreferredStyleVariations", {
    since: '6.6',
    hint: 'Preferred Style Variations are not supported anymore.'
  });
  return {
    type: 'NOTHING'
  };
}

/**
 * Update the provided block types to be visible.
 *
 * @param {string[]} blockNames Names of block types to show.
 */
const showBlockTypes = blockNames => ({
  registry
}) => {
  (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_7__.unlock)(registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store)).showBlockTypes(blockNames);
};

/**
 * Update the provided block types to be hidden.
 *
 * @param {string[]} blockNames Names of block types to hide.
 */
const hideBlockTypes = blockNames => ({
  registry
}) => {
  (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_7__.unlock)(registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store)).hideBlockTypes(blockNames);
};

/**
 * Stores info about which Meta boxes are available in which location.
 *
 * @param {Object} metaBoxesPerLocation Meta boxes per location.
 */
function setAvailableMetaBoxesPerLocation(metaBoxesPerLocation) {
  return {
    type: 'SET_META_BOXES_PER_LOCATIONS',
    metaBoxesPerLocation
  };
}

/**
 * Update a metabox.
 */
const requestMetaBoxUpdates = () => async ({
  registry,
  select,
  dispatch
}) => {
  dispatch({
    type: 'REQUEST_META_BOX_UPDATES'
  });

  // Saves the wp_editor fields.
  if (window.tinyMCE) {
    window.tinyMCE.triggerSave();
  }

  // We gather the base form data.
  const baseFormData = new window.FormData(document.querySelector('.metabox-base-form'));
  const postId = baseFormData.get('post_ID');
  const postType = baseFormData.get('post_type');

  // Additional data needed for backward compatibility.
  // If we do not provide this data, the post will be overridden with the default values.
  // We cannot rely on getCurrentPost because right now on the editor we may be editing a pattern or a template.
  // We need to retrieve the post that the base form data is referring to.
  const post = registry.select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEditedEntityRecord('postType', postType, postId);
  const additionalData = [post.comment_status ? ['comment_status', post.comment_status] : false, post.ping_status ? ['ping_status', post.ping_status] : false, post.sticky ? ['sticky', post.sticky] : false, post.author ? ['post_author', post.author] : false].filter(Boolean);

  // We gather all the metaboxes locations.
  const activeMetaBoxLocations = select.getActiveMetaBoxLocations();
  const formDataToMerge = [baseFormData, ...activeMetaBoxLocations.map(location => new window.FormData((0,_utils_meta_boxes__WEBPACK_IMPORTED_MODULE_6__.getMetaBoxContainer)(location)))];

  // Merge all form data objects into a single one.
  const formData = formDataToMerge.reduce((memo, currentFormData) => {
    for (const [key, value] of currentFormData) {
      memo.append(key, value);
    }
    return memo;
  }, new window.FormData());
  additionalData.forEach(([key, value]) => formData.append(key, value));
  try {
    // Save the metaboxes.
    await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      url: window._wpMetaBoxUrl,
      method: 'POST',
      body: formData,
      parse: false
    });
    dispatch.metaBoxUpdatesSuccess();
  } catch {
    dispatch.metaBoxUpdatesFailure();
  }
};

/**
 * Returns an action object used to signal a successful meta box update.
 *
 * @return {Object} Action object.
 */
function metaBoxUpdatesSuccess() {
  return {
    type: 'META_BOX_UPDATES_SUCCESS'
  };
}

/**
 * Returns an action object used to signal a failed meta box update.
 *
 * @return {Object} Action object.
 */
function metaBoxUpdatesFailure() {
  return {
    type: 'META_BOX_UPDATES_FAILURE'
  };
}

/**
 * Action that changes the width of the editing canvas.
 *
 * @deprecated
 *
 * @param {string} deviceType
 */
const __experimentalSetPreviewDeviceType = deviceType => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).__experimentalSetPreviewDeviceType", {
    since: '6.5',
    version: '6.7',
    hint: 'registry.dispatch( editorStore ).setDeviceType'
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).setDeviceType(deviceType);
};

/**
 * Returns an action object used to open/close the inserter.
 *
 * @deprecated
 *
 * @param {boolean|Object} value Whether the inserter should be opened (true) or closed (false).
 */
const setIsInserterOpened = value => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).setIsInserterOpened", {
    since: '6.5',
    alternative: "dispatch( 'core/editor').setIsInserterOpened"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).setIsInserterOpened(value);
};

/**
 * Returns an action object used to open/close the list view.
 *
 * @deprecated
 *
 * @param {boolean} isOpen A boolean representing whether the list view should be opened or closed.
 */
const setIsListViewOpened = isOpen => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).setIsListViewOpened", {
    since: '6.5',
    alternative: "dispatch( 'core/editor').setIsListViewOpened"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).setIsListViewOpened(isOpen);
};

/**
 * Returns an action object used to switch to template editing.
 *
 * @deprecated
 */
function setIsEditingTemplate() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).setIsEditingTemplate", {
    since: '6.5',
    alternative: "dispatch( 'core/editor').setRenderingMode"
  });
  return {
    type: 'NOTHING'
  };
}

/**
 * Create a block based template.
 *
 * @deprecated
 */
function __unstableCreateTemplate() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).__unstableCreateTemplate", {
    since: '6.5'
  });
  return {
    type: 'NOTHING'
  };
}
let metaBoxesInitialized = false;

/**
 * Initializes WordPress `postboxes` script and the logic for saving meta boxes.
 */
const initializeMetaBoxes = () => ({
  registry,
  select,
  dispatch
}) => {
  const isEditorReady = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).__unstableIsEditorReady();
  if (!isEditorReady) {
    return;
  }
  // Only initialize once.
  if (metaBoxesInitialized) {
    return;
  }
  const postType = registry.select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getCurrentPostType();
  if (window.postboxes.page !== postType) {
    window.postboxes.add_postbox_toggles(postType);
  }
  metaBoxesInitialized = true;

  // Save metaboxes on save completion, except for autosaves.
  (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.addAction)('editor.savePost', 'core/edit-post/save-metaboxes', async (post, options) => {
    if (!options.isAutosave && select.hasMetaBoxes()) {
      await dispatch.requestMetaBoxUpdates();
    }
  });
  dispatch({
    type: 'META_BOXES_INITIALIZED'
  });
};

/**
 * Action that toggles Distraction free mode.
 * Distraction free mode expects there are no sidebars, as due to the
 * z-index values set, you can't close sidebars.
 *
 * @deprecated
 */
const toggleDistractionFree = () => ({
  registry
}) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_3___default()("dispatch( 'core/edit-post' ).toggleDistractionFree", {
    since: '6.6',
    alternative: "dispatch( 'core/editor').toggleDistractionFree"
  });
  registry.dispatch(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).toggleDistractionFree();
};


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/constants.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/constants.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME),
/* harmony export */   VIEW_AS_LINK_SELECTOR: () => (/* binding */ VIEW_AS_LINK_SELECTOR),
/* harmony export */   VIEW_AS_PREVIEW_LINK_SELECTOR: () => (/* binding */ VIEW_AS_PREVIEW_LINK_SELECTOR)
/* harmony export */ });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
const STORE_NAME = 'core/edit-post';

/**
 * CSS selector string for the admin bar view post link anchor tag.
 *
 * @type {string}
 */
const VIEW_AS_LINK_SELECTOR = '#wp-admin-bar-view a';

/**
 * CSS selector string for the admin bar preview post link anchor tag.
 *
 * @type {string}
 */
const VIEW_AS_PREVIEW_LINK_SELECTOR = '#wp-admin-bar-preview a';


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/edit-post/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/edit-post/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/edit-post/build-module/store/selectors.js");
/* harmony import */ var _private_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./private-selectors */ "./node_modules/@wordpress/edit-post/build-module/store/private-selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/edit-post/build-module/store/constants.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







/**
 * Store definition for the edit post namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_5__.STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_6__.unlock)(store).registerPrivateSelectors(_private_selectors__WEBPACK_IMPORTED_MODULE_4__);


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/private-selectors.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/private-selectors.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEditedPostTemplateId: () => (/* binding */ getEditedPostTemplateId)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



const getEditedPostTemplateId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  const {
    id: postId,
    type: postType,
    slug
  } = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getCurrentPost();
  const {
    getEntityRecord,
    getEntityRecords,
    canUser
  } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const siteSettings = canUser('read', {
    kind: 'root',
    name: 'site'
  }) ? getEntityRecord('root', 'site') : undefined;
  // First check if the current page is set as the posts page.
  const isPostsPage = +postId === siteSettings?.page_for_posts;
  if (isPostsPage) {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getDefaultTemplateId({
      slug: 'home'
    });
  }
  const currentTemplate = select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_2__.store).getEditedPostAttribute('template');
  if (currentTemplate) {
    const templateWithSameSlug = getEntityRecords('postType', 'wp_template', {
      per_page: -1
    })?.find(template => template.slug === currentTemplate);
    if (!templateWithSameSlug) {
      return templateWithSameSlug;
    }
    return templateWithSameSlug.id;
  }
  let slugToCheck;
  // In `draft` status we might not have a slug available, so we use the `single`
  // post type templates slug(ex page, single-post, single-product etc..).
  // Pages do not need the `single` prefix in the slug to be prioritized
  // through template hierarchy.
  if (slug) {
    slugToCheck = postType === 'page' ? `${postType}-${slug}` : `single-${postType}-${slug}`;
  } else {
    slugToCheck = postType === 'page' ? 'page' : `single-${postType}`;
  }
  if (postType) {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).getDefaultTemplateId({
      slug: slugToCheck
    });
  }
});


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/reducer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/reducer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSavingMetaBoxes: () => (/* binding */ isSavingMetaBoxes),
/* harmony export */   metaBoxLocations: () => (/* binding */ metaBoxLocations)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Reducer keeping track of the meta boxes isSaving state.
 * A "true" value means the meta boxes saving request is in-flight.
 *
 *
 * @param {boolean} state  Previous state.
 * @param {Object}  action Action Object.
 *
 * @return {Object} Updated state.
 */
function isSavingMetaBoxes(state = false, action) {
  switch (action.type) {
    case 'REQUEST_META_BOX_UPDATES':
      return true;
    case 'META_BOX_UPDATES_SUCCESS':
    case 'META_BOX_UPDATES_FAILURE':
      return false;
    default:
      return state;
  }
}
function mergeMetaboxes(metaboxes = [], newMetaboxes) {
  const mergedMetaboxes = [...metaboxes];
  for (const metabox of newMetaboxes) {
    const existing = mergedMetaboxes.findIndex(box => box.id === metabox.id);
    if (existing !== -1) {
      mergedMetaboxes[existing] = metabox;
    } else {
      mergedMetaboxes.push(metabox);
    }
  }
  return mergedMetaboxes;
}

/**
 * Reducer keeping track of the meta boxes per location.
 *
 * @param {boolean} state  Previous state.
 * @param {Object}  action Action Object.
 *
 * @return {Object} Updated state.
 */
function metaBoxLocations(state = {}, action) {
  switch (action.type) {
    case 'SET_META_BOXES_PER_LOCATIONS':
      {
        const newState = {
          ...state
        };
        for (const [location, metaboxes] of Object.entries(action.metaBoxesPerLocation)) {
          newState[location] = mergeMetaboxes(newState[location], metaboxes);
        }
        return newState;
      }
  }
  return state;
}

/**
 * Reducer tracking whether meta boxes are initialized.
 *
 * @param {boolean} state
 * @param {Object}  action
 *
 * @return {boolean} Updated state.
 */
function metaBoxesInitialized(state = false, action) {
  switch (action.type) {
    case 'META_BOXES_INITIALIZED':
      return true;
  }
  return state;
}
const metaBoxes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  isSaving: isSavingMetaBoxes,
  locations: metaBoxLocations,
  initialized: metaBoxesInitialized
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  metaBoxes
}));


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/store/selectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/store/selectors.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalGetInsertionPoint: () => (/* binding */ __experimentalGetInsertionPoint),
/* harmony export */   __experimentalGetPreviewDeviceType: () => (/* binding */ __experimentalGetPreviewDeviceType),
/* harmony export */   areMetaBoxesInitialized: () => (/* binding */ areMetaBoxesInitialized),
/* harmony export */   getActiveGeneralSidebarName: () => (/* binding */ getActiveGeneralSidebarName),
/* harmony export */   getActiveMetaBoxLocations: () => (/* binding */ getActiveMetaBoxLocations),
/* harmony export */   getAllMetaBoxes: () => (/* binding */ getAllMetaBoxes),
/* harmony export */   getEditedPostTemplate: () => (/* binding */ getEditedPostTemplate),
/* harmony export */   getEditorMode: () => (/* binding */ getEditorMode),
/* harmony export */   getHiddenBlockTypes: () => (/* binding */ getHiddenBlockTypes),
/* harmony export */   getMetaBoxesPerLocation: () => (/* binding */ getMetaBoxesPerLocation),
/* harmony export */   getPreference: () => (/* binding */ getPreference),
/* harmony export */   getPreferences: () => (/* binding */ getPreferences),
/* harmony export */   hasMetaBoxes: () => (/* binding */ hasMetaBoxes),
/* harmony export */   isEditingTemplate: () => (/* binding */ isEditingTemplate),
/* harmony export */   isEditorPanelEnabled: () => (/* binding */ isEditorPanelEnabled),
/* harmony export */   isEditorPanelOpened: () => (/* binding */ isEditorPanelOpened),
/* harmony export */   isEditorPanelRemoved: () => (/* binding */ isEditorPanelRemoved),
/* harmony export */   isEditorSidebarOpened: () => (/* binding */ isEditorSidebarOpened),
/* harmony export */   isFeatureActive: () => (/* binding */ isFeatureActive),
/* harmony export */   isInserterOpened: () => (/* binding */ isInserterOpened),
/* harmony export */   isListViewOpened: () => (/* binding */ isListViewOpened),
/* harmony export */   isMetaBoxLocationActive: () => (/* binding */ isMetaBoxLocationActive),
/* harmony export */   isMetaBoxLocationVisible: () => (/* binding */ isMetaBoxLocationVisible),
/* harmony export */   isModalActive: () => (/* binding */ isModalActive),
/* harmony export */   isPluginItemPinned: () => (/* binding */ isPluginItemPinned),
/* harmony export */   isPluginSidebarOpened: () => (/* binding */ isPluginSidebarOpened),
/* harmony export */   isPublishSidebarOpened: () => (/* binding */ isPublishSidebarOpened),
/* harmony export */   isSavingMetaBoxes: () => (/* binding */ isSavingMetaBoxes)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var _private_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private-selectors */ "./node_modules/@wordpress/edit-post/build-module/store/private-selectors.js");
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


const {
  interfaceStore
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_5__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.privateApis);
const EMPTY_ARRAY = [];
const EMPTY_OBJECT = {};

/**
 * Returns the current editing mode.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Editing mode.
 */
const getEditorMode = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  var _select$get;
  return (_select$get = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get('core', 'editorMode')) !== null && _select$get !== void 0 ? _select$get : 'visual';
});

/**
 * Returns true if the editor sidebar is opened.
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the editor sidebar is opened.
 */
const isEditorSidebarOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  const activeGeneralSidebar = select(interfaceStore).getActiveComplementaryArea('core');
  return ['edit-post/document', 'edit-post/block'].includes(activeGeneralSidebar);
});

/**
 * Returns true if the plugin sidebar is opened.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the plugin sidebar is opened.
 */
const isPluginSidebarOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  const activeGeneralSidebar = select(interfaceStore).getActiveComplementaryArea('core');
  return !!activeGeneralSidebar && !['edit-post/document', 'edit-post/block'].includes(activeGeneralSidebar);
});

/**
 * Returns the current active general sidebar name, or null if there is no
 * general sidebar active. The active general sidebar is a unique name to
 * identify either an editor or plugin sidebar.
 *
 * Examples:
 *
 *  - `edit-post/document`
 *  - `my-plugin/insert-image-sidebar`
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Active general sidebar name.
 */
const getActiveGeneralSidebarName = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  return select(interfaceStore).getActiveComplementaryArea('core');
});

/**
 * Converts panels from the new preferences store format to the old format
 * that the post editor previously used.
 *
 * The resultant converted data should look like this:
 * {
 *     panelName: {
 *         enabled: false,
 *         opened: true,
 *     },
 *     anotherPanelName: {
 *         opened: true
 *     },
 * }
 *
 * @param {string[] | undefined} inactivePanels An array of inactive panel names.
 * @param {string[] | undefined} openPanels     An array of open panel names.
 *
 * @return {Object} The converted panel data.
 */
function convertPanelsToOldFormat(inactivePanels, openPanels) {
  var _ref;
  // First reduce the inactive panels.
  const panelsWithEnabledState = inactivePanels?.reduce((accumulatedPanels, panelName) => ({
    ...accumulatedPanels,
    [panelName]: {
      enabled: false
    }
  }), {});

  // Then reduce the open panels, passing in the result of the previous
  // reduction as the initial value so that both open and inactive
  // panel state is combined.
  const panels = openPanels?.reduce((accumulatedPanels, panelName) => {
    const currentPanelState = accumulatedPanels?.[panelName];
    return {
      ...accumulatedPanels,
      [panelName]: {
        ...currentPanelState,
        opened: true
      }
    };
  }, panelsWithEnabledState !== null && panelsWithEnabledState !== void 0 ? panelsWithEnabledState : {});

  // The panels variable will only be set if openPanels wasn't `undefined`.
  // If it isn't set just return `panelsWithEnabledState`, and if that isn't
  // set return an empty object.
  return (_ref = panels !== null && panels !== void 0 ? panels : panelsWithEnabledState) !== null && _ref !== void 0 ? _ref : EMPTY_OBJECT;
}

/**
 * Returns the preferences (these preferences are persisted locally).
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Preferences Object.
 */
const getPreferences = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).getPreferences`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get`
  });
  const corePreferences = ['editorMode', 'hiddenBlockTypes'].reduce((accumulatedPrefs, preferenceKey) => {
    const value = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get('core', preferenceKey);
    return {
      ...accumulatedPrefs,
      [preferenceKey]: value
    };
  }, {});

  // Panels were a preference, but the data structure changed when the state
  // was migrated to the preferences store. They need to be converted from
  // the new preferences store format to old format to ensure no breaking
  // changes for plugins.
  const inactivePanels = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get('core', 'inactivePanels');
  const openPanels = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get('core', 'openPanels');
  const panels = convertPanelsToOldFormat(inactivePanels, openPanels);
  return {
    ...corePreferences,
    panels
  };
});

/**
 *
 * @param {Object} state         Global application state.
 * @param {string} preferenceKey Preference Key.
 * @param {*}      defaultValue  Default Value.
 *
 * @return {*} Preference Value.
 */
function getPreference(state, preferenceKey, defaultValue) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).getPreference`, {
    since: '6.0',
    alternative: `select( 'core/preferences' ).get`
  });

  // Avoid using the `getPreferences` registry selector where possible.
  const preferences = getPreferences(state);
  const value = preferences[preferenceKey];
  return value === undefined ? defaultValue : value;
}

/**
 * Returns an array of blocks that are hidden.
 *
 * @return {Array} A list of the hidden block types
 */
const getHiddenBlockTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  var _select$get2;
  return (_select$get2 = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get('core', 'hiddenBlockTypes')) !== null && _select$get2 !== void 0 ? _select$get2 : EMPTY_ARRAY;
});

/**
 * Returns true if the publish sidebar is opened.
 *
 * @deprecated
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the publish sidebar is open.
 */
const isPublishSidebarOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).isPublishSidebarOpened`, {
    since: '6.6',
    alternative: `select( 'core/editor' ).isPublishSidebarOpened`
  });
  return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isPublishSidebarOpened();
});

/**
 * Returns true if the given panel was programmatically removed, or false otherwise.
 * All panels are not removed by default.
 *
 * @deprecated
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is removed.
 */
const isEditorPanelRemoved = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, panelName) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).isEditorPanelRemoved`, {
    since: '6.5',
    alternative: `select( 'core/editor' ).isEditorPanelRemoved`
  });
  return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isEditorPanelRemoved(panelName);
});

/**
 * Returns true if the given panel is enabled, or false otherwise. Panels are
 * enabled by default.
 *
 * @deprecated
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is enabled.
 */
const isEditorPanelEnabled = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, panelName) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).isEditorPanelEnabled`, {
    since: '6.5',
    alternative: `select( 'core/editor' ).isEditorPanelEnabled`
  });
  return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isEditorPanelEnabled(panelName);
});

/**
 * Returns true if the given panel is open, or false otherwise. Panels are
 * closed by default.
 *
 * @deprecated
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is open.
 */
const isEditorPanelOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, panelName) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).isEditorPanelOpened`, {
    since: '6.5',
    alternative: `select( 'core/editor' ).isEditorPanelOpened`
  });
  return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isEditorPanelOpened(panelName);
});

/**
 * Returns true if a modal is active, or false otherwise.
 *
 * @deprecated since WP 6.3 use `core/interface` store's selector with the same name instead.
 *
 * @param {Object} state     Global application state.
 * @param {string} modalName A string that uniquely identifies the modal.
 *
 * @return {boolean} Whether the modal is active.
 */
const isModalActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, modalName) => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).isModalActive`, {
    since: '6.3',
    alternative: `select( 'core/interface' ).isModalActive`
  });
  return !!select(interfaceStore).isModalActive(modalName);
});

/**
 * Returns whether the given feature is enabled or not.
 *
 * @param {Object} state   Global application state.
 * @param {string} feature Feature slug.
 *
 * @return {boolean} Is active.
 */
const isFeatureActive = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, feature) => {
  return !!select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_1__.store).get('core/edit-post', feature);
});

/**
 * Returns true if the plugin item is pinned to the header.
 * When the value is not set it defaults to true.
 *
 * @param {Object} state      Global application state.
 * @param {string} pluginName Plugin item name.
 *
 * @return {boolean} Whether the plugin item is pinned.
 */
const isPluginItemPinned = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, pluginName) => {
  return select(interfaceStore).isItemPinned('core', pluginName);
});

/**
 * Returns an array of active meta box locations.
 *
 * @param {Object} state Post editor state.
 *
 * @return {string[]} Active meta box locations.
 */
const getActiveMetaBoxLocations = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)(state => {
  return Object.keys(state.metaBoxes.locations).filter(location => isMetaBoxLocationActive(state, location));
}, state => [state.metaBoxes.locations]);

/**
 * Returns true if a metabox location is active and visible
 *
 * @param {Object} state    Post editor state.
 * @param {string} location Meta box location to test.
 *
 * @return {boolean} Whether the meta box location is active and visible.
 */
const isMetaBoxLocationVisible = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => (state, location) => {
  return isMetaBoxLocationActive(state, location) && getMetaBoxesPerLocation(state, location)?.some(({
    id
  }) => {
    return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isEditorPanelEnabled(`meta-box-${id}`);
  });
});

/**
 * Returns true if there is an active meta box in the given location, or false
 * otherwise.
 *
 * @param {Object} state    Post editor state.
 * @param {string} location Meta box location to test.
 *
 * @return {boolean} Whether the meta box location is active.
 */
function isMetaBoxLocationActive(state, location) {
  const metaBoxes = getMetaBoxesPerLocation(state, location);
  return !!metaBoxes && metaBoxes.length !== 0;
}

/**
 * Returns the list of all the available meta boxes for a given location.
 *
 * @param {Object} state    Global application state.
 * @param {string} location Meta box location to test.
 *
 * @return {?Array} List of meta boxes.
 */
function getMetaBoxesPerLocation(state, location) {
  return state.metaBoxes.locations[location];
}

/**
 * Returns the list of all the available meta boxes.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} List of meta boxes.
 */
const getAllMetaBoxes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)(state => {
  return Object.values(state.metaBoxes.locations).flat();
}, state => [state.metaBoxes.locations]);

/**
 * Returns true if the post is using Meta Boxes
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether there are metaboxes or not.
 */
function hasMetaBoxes(state) {
  return getActiveMetaBoxLocations(state).length > 0;
}

/**
 * Returns true if the Meta Boxes are being saved.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the metaboxes are being saved.
 */
function isSavingMetaBoxes(state) {
  return state.metaBoxes.isSaving;
}

/**
 * Returns the current editing canvas device type.
 *
 * @deprecated
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Device type.
 */
const __experimentalGetPreviewDeviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-site' ).__experimentalGetPreviewDeviceType`, {
    since: '6.5',
    version: '6.7',
    alternative: `select( 'core/editor' ).getDeviceType`
  });
  return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).getDeviceType();
});

/**
 * Returns true if the inserter is opened.
 *
 * @deprecated
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the inserter is opened.
 */
const isInserterOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).isInserterOpened`, {
    since: '6.5',
    alternative: `select( 'core/editor' ).isInserterOpened`
  });
  return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isInserterOpened();
});

/**
 * Get the insertion point for the inserter.
 *
 * @deprecated
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The root client ID, index to insert at and starting filter value.
 */
const __experimentalGetInsertionPoint = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).__experimentalGetInsertionPoint`, {
    since: '6.5',
    version: '6.7'
  });
  return (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_5__.unlock)(select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store)).getInsertionPoint();
});

/**
 * Returns true if the list view is opened.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether the list view is opened.
 */
const isListViewOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).isListViewOpened`, {
    since: '6.5',
    alternative: `select( 'core/editor' ).isListViewOpened`
  });
  return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).isListViewOpened();
});

/**
 * Returns true if the template editing mode is enabled.
 *
 * @deprecated
 */
const isEditingTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => () => {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_4___default()(`select( 'core/edit-post' ).isEditingTemplate`, {
    since: '6.5',
    alternative: `select( 'core/editor' ).getRenderingMode`
  });
  return select(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentPostType() === 'wp_template';
});

/**
 * Returns true if meta boxes are initialized.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether meta boxes are initialized.
 */
function areMetaBoxesInitialized(state) {
  return state.metaBoxes.initialized;
}

/**
 * Retrieves the template of the currently edited post.
 *
 * @return {Object?} Post Template.
 */
const getEditedPostTemplate = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createRegistrySelector)(select => state => {
  const templateId = (0,_private_selectors__WEBPACK_IMPORTED_MODULE_6__.getEditedPostTemplateId)(state);
  if (!templateId) {
    return undefined;
  }
  return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEditedEntityRecord('postType', 'wp_template', templateId);
});


/***/ }),

/***/ "./node_modules/@wordpress/edit-post/build-module/utils/meta-boxes.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/utils/meta-boxes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMetaBoxContainer: () => (/* binding */ getMetaBoxContainer)
/* harmony export */ });
/**
 * Function returning the current Meta Boxes DOM Node in the editor
 * whether the meta box area is opened or not.
 * If the MetaBox Area is visible returns it, and returns the original container instead.
 *
 * @param {string} location Meta Box location.
 *
 * @return {string} HTML content.
 */
const getMetaBoxContainer = location => {
  const area = document.querySelector(`.edit-post-meta-boxes-area.is-${location} .metabox-location-${location}`);
  if (area) {
    return area;
  }
  return document.querySelector('#metaboxes .metabox-location-' + location);
};


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-down.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const chevronDown = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronDown);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/chevron-up.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/chevron-up.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const chevronUp = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronUp);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/fullscreen.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/fullscreen.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const fullscreen = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M6 4a2 2 0 0 0-2 2v3h1.5V6a.5.5 0 0 1 .5-.5h3V4H6Zm3 14.5H6a.5.5 0 0 1-.5-.5v-3H4v3a2 2 0 0 0 2 2h3v-1.5Zm6 1.5v-1.5h3a.5.5 0 0 0 .5-.5v-3H20v3a2 2 0 0 1-2 2h-3Zm3-16a2 2 0 0 1 2 2v3h-1.5V6a.5.5 0 0 0-.5-.5h-3V4h3Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fullscreen);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/wordpress.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/wordpress.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const wordpress = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wordpress);


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/block-library":
/*!**************************************!*\
  !*** external ["wp","blockLibrary"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockLibrary"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/commands":
/*!**********************************!*\
  !*** external ["wp","commands"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["commands"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/core-commands":
/*!**************************************!*\
  !*** external ["wp","coreCommands"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["coreCommands"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["deprecated"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keyboard-shortcuts":
/*!*******************************************!*\
  !*** external ["wp","keyboardShortcuts"] ***!
  \*******************************************/
/***/ ((module) => {

module.exports = window["wp"]["keyboardShortcuts"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["keycodes"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/preferences":
/*!*************************************!*\
  !*** external ["wp","preferences"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["preferences"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "@wordpress/private-apis":
/*!*************************************!*\
  !*** external ["wp","privateApis"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["privateApis"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

/***/ }),

/***/ "@wordpress/widgets":
/*!*********************************!*\
  !*** external ["wp","widgets"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["widgets"];

/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

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
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/edit-post/build-module/index.js ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PluginBlockSettingsMenuItem: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.PluginBlockSettingsMenuItem),
/* harmony export */   PluginDocumentSettingPanel: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.PluginDocumentSettingPanel),
/* harmony export */   PluginMoreMenuItem: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.PluginMoreMenuItem),
/* harmony export */   PluginPostPublishPanel: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.PluginPostPublishPanel),
/* harmony export */   PluginPostStatusInfo: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.PluginPostStatusInfo),
/* harmony export */   PluginPrePublishPanel: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.PluginPrePublishPanel),
/* harmony export */   PluginSidebar: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.PluginSidebar),
/* harmony export */   PluginSidebarMoreMenuItem: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.PluginSidebarMoreMenuItem),
/* harmony export */   __experimentalFullscreenModeClose: () => (/* reexport safe */ _components_back_button_fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   __experimentalMainDashboardButton: () => (/* binding */ __experimentalMainDashboardButton),
/* harmony export */   __experimentalPluginPostExcerpt: () => (/* reexport safe */ _deprecated__WEBPACK_IMPORTED_MODULE_13__.__experimentalPluginPostExcerpt),
/* harmony export */   initializeEditor: () => (/* binding */ initializeEditor),
/* harmony export */   reinitializeEditor: () => (/* binding */ reinitializeEditor),
/* harmony export */   store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_12__.store)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout */ "./node_modules/@wordpress/edit-post/build-module/components/layout/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/edit-post/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_back_button_fullscreen_mode_close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/back-button/fullscreen-mode-close */ "./node_modules/@wordpress/edit-post/build-module/components/back-button/fullscreen-mode-close.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/edit-post/build-module/store/index.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deprecated */ "./node_modules/@wordpress/edit-post/build-module/deprecated.js");
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



const {
  BackButton: __experimentalMainDashboardButton,
  registerCoreBlockBindingsSources
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_9__.unlock)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__.privateApis);

/**
 * Initializes and returns an instance of Editor.
 *
 * @param {string}  id           Unique identifier for editor instance.
 * @param {string}  postType     Post type of the post to edit.
 * @param {Object}  postId       ID of the post to edit.
 * @param {?Object} settings     Editor settings object.
 * @param {Object}  initialEdits Programmatic edits to apply initially, to be
 *                               considered as non-user-initiated (bypass for
 *                               unsaved changes prompt).
 */
function initializeEditor(id, postType, postId, settings, initialEdits) {
  const isMediumOrBigger = window.matchMedia('(min-width: 782px)').matches;
  const target = document.getElementById(id);
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createRoot)(target);
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).setDefaults('core/edit-post', {
    fullscreenMode: true,
    themeStyles: true,
    welcomeGuide: true,
    welcomeGuideTemplate: true
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).setDefaults('core', {
    allowRightClickOverrides: true,
    editorMode: 'visual',
    fixedToolbar: false,
    hiddenBlockTypes: [],
    inactivePanels: [],
    openPanels: ['post-status'],
    showBlockBreadcrumbs: true,
    showIconLabels: false,
    showListViewByDefault: false,
    enableChoosePatternModal: true,
    isPublishSidebarEnabled: true
  });
  if (window.__experimentalMediaProcessing) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).setDefaults('core/media', {
      requireApproval: true,
      optimizeOnUpload: true
    });
  }
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.store).reapplyBlockTypeFilters();

  // Check if the block list view should be open by default.
  // If `distractionFree` mode is enabled, the block list view should not be open.
  // This behavior is disabled for small viewports.
  if (isMediumOrBigger && (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).get('core', 'showListViewByDefault') && !(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).get('core', 'distractionFree')) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_7__.store).setIsListViewOpened(true);
  }
  (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__.registerCoreBlocks)();
  registerCoreBlockBindingsSources();
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__.registerLegacyWidgetBlock)({
    inserter: false
  });
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_6__.registerWidgetGroupBlock)({
    inserter: false
  });
  if (false) {}

  // Show a console log warning if the browser is not in Standards rendering mode.
  const documentMode = document.compatMode === 'CSS1Compat' ? 'Standards' : 'Quirks';
  if (documentMode !== 'Standards') {
    // eslint-disable-next-line no-console
    console.warn("Your browser is using Quirks Mode. \nThis can cause rendering issues such as blocks overlaying meta boxes in the editor. Quirks Mode can be triggered by PHP errors or HTML code appearing before the opening <!DOCTYPE html>. Try checking the raw page source or your site's PHP error log and resolving errors there, removing any HTML before the doctype, or disabling plugins.");
  }

  // This is a temporary fix for a couple of issues specific to Webkit on iOS.
  // Without this hack the browser scrolls the mobile toolbar off-screen.
  // Once supported in Safari we can replace this in favor of preventScroll.
  // For details see issue #18632 and PR #18686
  // Specifically, we scroll `interface-interface-skeleton__body` to enable a fixed top toolbar.
  // But Mobile Safari forces the `html` element to scroll upwards, hiding the toolbar.

  const isIphone = window.navigator.userAgent.indexOf('iPhone') !== -1;
  if (isIphone) {
    window.addEventListener('scroll', event => {
      const editorScrollContainer = document.getElementsByClassName('interface-interface-skeleton__body')[0];
      if (event.target === document) {
        // Scroll element into view by scrolling the editor container by the same amount
        // that Mobile Safari tried to scroll the html element upwards.
        if (window.scrollY > 100) {
          editorScrollContainer.scrollTop = editorScrollContainer.scrollTop + window.scrollY;
        }
        // Undo unwanted scroll on html element, but only in the visual editor.
        if (document.getElementsByClassName('is-mode-visual')[0]) {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  // Prevent the default browser action for files dropped outside of dropzones.
  window.addEventListener('dragover', e => e.preventDefault(), false);
  window.addEventListener('drop', e => e.preventDefault(), false);
  root.render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.StrictMode, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      settings: settings,
      postId: postId,
      postType: postType,
      initialEdits: initialEdits
    })
  }));
  return root;
}

/**
 * Used to reinitialize the editor after an error. Now it's a deprecated noop function.
 */
function reinitializeEditor() {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_2___default()('wp.editPost.reinitializeEditor', {
    since: '6.2',
    version: '6.3'
  });
}





})();

(window.wp = window.wp || {}).editPost = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=edit-post.js.map