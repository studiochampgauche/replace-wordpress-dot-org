/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/core-commands/build-module/admin-navigation-commands.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/admin-navigation-commands.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAdminNavigationCommands: () => (/* binding */ useAdminNavigationCommands)
/* harmony export */ });
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/router */ "@wordpress/router");
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/core-commands/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */

const {
  useHistory
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_8__.unlock)(_wordpress_router__WEBPACK_IMPORTED_MODULE_7__.privateApis);
function useAddNewPageCommand() {
  const isSiteEditor = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.getPath)(window.location.href)?.includes('site-editor.php');
  const history = useHistory();
  const isBlockBasedTheme = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store).getCurrentTheme()?.is_block_theme;
  }, []);
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.store);
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);
  const createPageEntity = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useCallback)(async ({
    close
  }) => {
    try {
      const page = await saveEntityRecord('postType', 'page', {
        status: 'draft'
      }, {
        throwOnError: true
      });
      if (page?.id) {
        history.push({
          postId: page.id,
          postType: 'page',
          canvas: 'edit'
        });
      }
    } catch (error) {
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An error occurred while creating the item.');
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
    } finally {
      close();
    }
  }, [createErrorNotice, history, saveEntityRecord]);
  const commands = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useMemo)(() => {
    const addNewPage = isSiteEditor && isBlockBasedTheme ? createPageEntity : () => document.location.href = 'post-new.php?post_type=page';
    return [{
      name: 'core/add-new-page',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add new page'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
      callback: addNewPage
    }];
  }, [createPageEntity, isSiteEditor, isBlockBasedTheme]);
  return {
    isLoading: false,
    commands
  };
}
function useAdminNavigationCommands() {
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommand)({
    name: 'core/add-new-post',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add new post'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
    callback: () => {
      document.location.href = 'post-new.php';
    }
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/add-new-page',
    hook: useAddNewPageCommand
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/core-commands/build-module/lock-unlock.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/lock-unlock.js ***!
  \***************************************************************************/
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
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/core-commands');


/***/ }),

/***/ "./node_modules/@wordpress/core-commands/build-module/private-apis.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/private-apis.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   privateApis: () => (/* binding */ privateApis)
/* harmony export */ });
/* harmony import */ var _admin_navigation_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-navigation-commands */ "./node_modules/@wordpress/core-commands/build-module/admin-navigation-commands.js");
/* harmony import */ var _site_editor_navigation_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-editor-navigation-commands */ "./node_modules/@wordpress/core-commands/build-module/site-editor-navigation-commands.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/core-commands/build-module/lock-unlock.js");
/**
 * Internal dependencies
 */



function useCommands() {
  (0,_admin_navigation_commands__WEBPACK_IMPORTED_MODULE_0__.useAdminNavigationCommands)();
  (0,_site_editor_navigation_commands__WEBPACK_IMPORTED_MODULE_1__.useSiteEditorNavigationCommands)();
}
const privateApis = {};
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_2__.lock)(privateApis, {
  useCommands
});


/***/ }),

/***/ "./node_modules/@wordpress/core-commands/build-module/site-editor-navigation-commands.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/site-editor-navigation-commands.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSiteEditorNavigationCommands: () => (/* binding */ useSiteEditorNavigationCommands)
/* harmony export */ });
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/post.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/page.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/layout.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/symbol-filled.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/navigation.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/styles.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/symbol.js");
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/router */ "@wordpress/router");
/* harmony import */ var _wordpress_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/core-commands/build-module/lock-unlock.js");
/* harmony import */ var _utils_order_entity_records_by_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/order-entity-records-by-search */ "./node_modules/@wordpress/core-commands/build-module/utils/order-entity-records-by-search.js");
/**
 * WordPress dependencies
 */











/**
 * Internal dependencies
 */


const {
  useHistory
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_9__.unlock)(_wordpress_router__WEBPACK_IMPORTED_MODULE_5__.privateApis);
const icons = {
  post: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"],
  page: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
  wp_template: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
  wp_template_part: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"]
};
function useDebouncedValue(value) {
  const [debouncedValue, setDebouncedValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const debounced = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__.useDebounce)(setDebouncedValue, 250);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    debounced(value);
    return () => debounced.cancel();
  }, [debounced, value]);
  return debouncedValue;
}
const getNavigationCommandLoaderPerPostType = postType => function useNavigationCommandLoader({
  search
}) {
  const history = useHistory();
  const {
    isBlockBasedTheme,
    canCreateTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      isBlockBasedTheme: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getCurrentTheme()?.is_block_theme,
      canCreateTemplate: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).canUser('create', {
        kind: 'postType',
        name: 'wp_template'
      })
    };
  }, []);
  const delayedSearch = useDebouncedValue(search);
  const {
    records,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    if (!delayedSearch) {
      return {
        isLoading: false
      };
    }
    const query = {
      search: delayedSearch,
      per_page: 10,
      orderby: 'relevance',
      status: ['publish', 'future', 'draft', 'pending', 'private']
    };
    return {
      records: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getEntityRecords('postType', postType, query),
      isLoading: !select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).hasFinishedResolution('getEntityRecords', ['postType', postType, query])
    };
  }, [delayedSearch]);
  const commands = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return (records !== null && records !== void 0 ? records : []).map(record => {
      const command = {
        name: postType + '-' + record.id,
        searchLabel: record.title?.rendered + ' ' + record.id,
        label: record.title?.rendered ? (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_8__.decodeEntities)(record.title?.rendered) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(no title)'),
        icon: icons[postType]
      };
      if (!canCreateTemplate || postType === 'post' || postType === 'page' && !isBlockBasedTheme) {
        return {
          ...command,
          callback: ({
            close
          }) => {
            const args = {
              post: record.id,
              action: 'edit'
            };
            const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('post.php', args);
            document.location = targetUrl;
            close();
          }
        };
      }
      const isSiteEditor = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.getPath)(window.location.href)?.includes('site-editor.php');
      return {
        ...command,
        callback: ({
          close
        }) => {
          const args = {
            postType,
            postId: record.id,
            canvas: 'edit'
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);
          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }
          close();
        }
      };
    });
  }, [canCreateTemplate, records, isBlockBasedTheme, history]);
  return {
    commands,
    isLoading
  };
};
const getNavigationCommandLoaderPerTemplate = templateType => function useNavigationCommandLoader({
  search
}) {
  const history = useHistory();
  const {
    isBlockBasedTheme,
    canCreateTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      isBlockBasedTheme: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getCurrentTheme()?.is_block_theme,
      canCreateTemplate: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).canUser('create', {
        kind: 'postType',
        name: templateType
      })
    };
  }, []);
  const {
    records,
    isLoading
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getEntityRecords
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store);
    const query = {
      per_page: -1
    };
    return {
      records: getEntityRecords('postType', templateType, query),
      isLoading: !select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).hasFinishedResolution('getEntityRecords', ['postType', templateType, query])
    };
  }, []);

  /*
   * wp_template and wp_template_part endpoints do not support per_page or orderby parameters.
   * We need to sort the results based on the search query to avoid removing relevant
   * records below using .slice().
   */
  const orderedRecords = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return (0,_utils_order_entity_records_by_search__WEBPACK_IMPORTED_MODULE_14__.orderEntityRecordsBySearch)(records, search).slice(0, 10);
  }, [records, search]);
  const commands = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!canCreateTemplate || !isBlockBasedTheme && !templateType === 'wp_template_part') {
      return [];
    }
    const isSiteEditor = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.getPath)(window.location.href)?.includes('site-editor.php');
    const result = [];
    result.push(...orderedRecords.map(record => {
      return {
        name: templateType + '-' + record.id,
        searchLabel: record.title?.rendered + ' ' + record.id,
        label: record.title?.rendered ? record.title?.rendered : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('(no title)'),
        icon: icons[templateType],
        callback: ({
          close
        }) => {
          const args = {
            postType: templateType,
            postId: record.id,
            canvas: 'edit'
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);
          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }
          close();
        }
      };
    }));
    if (orderedRecords?.length > 0 && templateType === 'wp_template_part') {
      result.push({
        name: 'core/edit-site/open-template-parts',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Template parts'),
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_13__["default"],
        callback: ({
          close
        }) => {
          const args = {
            postType: 'wp_template_part',
            categoryId: 'all-parts'
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);
          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }
          close();
        }
      });
    }
    return result;
  }, [canCreateTemplate, isBlockBasedTheme, orderedRecords, history]);
  return {
    commands,
    isLoading
  };
};
const usePageNavigationCommandLoader = getNavigationCommandLoaderPerPostType('page');
const usePostNavigationCommandLoader = getNavigationCommandLoaderPerPostType('post');
const useTemplateNavigationCommandLoader = getNavigationCommandLoaderPerTemplate('wp_template');
const useTemplatePartNavigationCommandLoader = getNavigationCommandLoaderPerTemplate('wp_template_part');
function useSiteEditorBasicNavigationCommands() {
  const history = useHistory();
  const isSiteEditor = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.getPath)(window.location.href)?.includes('site-editor.php');
  const {
    isBlockBasedTheme,
    canCreateTemplate
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return {
      isBlockBasedTheme: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).getCurrentTheme()?.is_block_theme,
      canCreateTemplate: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.store).canUser('create', {
        kind: 'postType',
        name: 'wp_template'
      })
    };
  }, []);
  const commands = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const result = [];
    if (canCreateTemplate && isBlockBasedTheme) {
      result.push({
        name: 'core/edit-site/open-navigation',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Navigation'),
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_15__["default"],
        callback: ({
          close
        }) => {
          const args = {
            postType: 'wp_navigation'
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);
          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }
          close();
        }
      });
      result.push({
        name: 'core/edit-site/open-styles',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Styles'),
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_16__["default"],
        callback: ({
          close
        }) => {
          const args = {
            path: '/wp_global_styles'
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);
          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }
          close();
        }
      });
      result.push({
        name: 'core/edit-site/open-pages',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Pages'),
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
        callback: ({
          close
        }) => {
          const args = {
            postType: 'page'
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);
          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }
          close();
        }
      });
      result.push({
        name: 'core/edit-site/open-templates',
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Templates'),
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
        callback: ({
          close
        }) => {
          const args = {
            postType: 'wp_template'
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);
          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }
          close();
        }
      });
    }
    result.push({
      name: 'core/edit-site/open-patterns',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Patterns'),
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_17__["default"],
      callback: ({
        close
      }) => {
        if (canCreateTemplate) {
          const args = {
            postType: 'wp_block'
          };
          const targetUrl = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)('site-editor.php', args);
          if (isSiteEditor) {
            history.push(args);
          } else {
            document.location = targetUrl;
          }
          close();
        } else {
          // If a user cannot access the site editor
          document.location.href = 'edit.php?post_type=wp_block';
        }
      }
    });
    return result;
  }, [history, isSiteEditor, canCreateTemplate, isBlockBasedTheme]);
  return {
    commands,
    isLoading: false
  };
}
function useSiteEditorNavigationCommands() {
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/navigate-pages',
    hook: usePageNavigationCommandLoader
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/navigate-posts',
    hook: usePostNavigationCommandLoader
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/navigate-templates',
    hook: useTemplateNavigationCommandLoader
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/navigate-template-parts',
    hook: useTemplatePartNavigationCommandLoader
  });
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_0__.useCommandLoader)({
    name: 'core/edit-site/basic-navigation',
    hook: useSiteEditorBasicNavigationCommands,
    context: 'site-editor'
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/core-commands/build-module/utils/order-entity-records-by-search.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/utils/order-entity-records-by-search.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orderEntityRecordsBySearch: () => (/* binding */ orderEntityRecordsBySearch)
/* harmony export */ });
function orderEntityRecordsBySearch(records = [], search = '') {
  if (!Array.isArray(records) || !records.length) {
    return [];
  }
  if (!search) {
    return records;
  }
  const priority = [];
  const nonPriority = [];
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    if (record?.title?.raw?.toLowerCase()?.includes(search?.toLowerCase())) {
      priority.push(record);
    } else {
      nonPriority.push(record);
    }
  }
  return priority.concat(nonPriority);
}


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/layout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/layout.js ***!
  \**********************************************************************/
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


const layout = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/navigation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/navigation.js ***!
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


const navigation = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/page.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/page.js ***!
  \********************************************************************/
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



const page = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M15.5 7.5h-7V9h7V7.5Zm-7 3.5h7v1.5h-7V11Zm7 3.5h-7V16h7v-1.5Z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M17 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM7 5.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5Z"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/plus.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus.js ***!
  \********************************************************************/
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


const plus = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plus);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/post.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/post.js ***!
  \********************************************************************/
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


const post = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (post);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/styles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const styles = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-1.5 0a6.5 6.5 0 0 1-6.5 6.5v-13a6.5 6.5 0 0 1 6.5 6.5Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/symbol-filled.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/symbol-filled.js ***!
  \*****************************************************************************/
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


const symbolFilled = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbolFilled);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/symbol.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/symbol.js ***!
  \**********************************************************************/
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


const symbol = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (symbol);


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/commands":
/*!**********************************!*\
  !*** external ["wp","commands"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["commands"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

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

/***/ "@wordpress/router":
/*!********************************!*\
  !*** external ["wp","router"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["router"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

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
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/core-commands/build-module/index.js ***!
  \*********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   privateApis: () => (/* reexport safe */ _private_apis__WEBPACK_IMPORTED_MODULE_0__.privateApis)
/* harmony export */ });
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private-apis */ "./node_modules/@wordpress/core-commands/build-module/private-apis.js");


})();

(window.wp = window.wp || {}).coreCommands = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=core-commands.js.map