/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/copy.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/copy.js ***!
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


const copy = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 4.5h11a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5ZM3 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm17 3v10.75c0 .69-.56 1.25-1.25 1.25H6v1.5h12.75a2.75 2.75 0 0 0 2.75-2.75V8H20Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copy);


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

/***/ "./node_modules/@wordpress/patterns/build-module/api/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/api/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasOverridableBlocks: () => (/* binding */ hasOverridableBlocks),
/* harmony export */   isOverridableBlock: () => (/* binding */ isOverridableBlock)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/patterns/build-module/constants.js");
/**
 * Internal dependencies
 */


/**
 * Determines whether a block is overridable.
 *
 * @param {WPBlock} block The block to test.
 *
 * @return {boolean} `true` if a block is overridable, `false` otherwise.
 */
function isOverridableBlock(block) {
  return Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__.PARTIAL_SYNCING_SUPPORTED_BLOCKS).includes(block.name) && !!block.attributes.metadata?.name && !!block.attributes.metadata?.bindings && Object.values(block.attributes.metadata.bindings).some(binding => binding.source === 'core/pattern-overrides');
}

/**
 * Determines whether the blocks list has overridable blocks.
 *
 * @param {WPBlock[]} blocks The blocks list.
 *
 * @return {boolean} `true` if the list has overridable blocks, `false` otherwise.
 */
function hasOverridableBlocks(blocks) {
  return blocks.some(block => {
    if (isOverridableBlock(block)) {
      return true;
    }
    return hasOverridableBlocks(block.innerBlocks);
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/allow-overrides-modal.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/allow-overrides-modal.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllowOverridesModal: () => (/* binding */ AllowOverridesModal),
/* harmony export */   DisallowOverridesModal: () => (/* binding */ DisallowOverridesModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */






function AllowOverridesModal({
  placeholder,
  initialName = '',
  onClose,
  onSave
}) {
  const [editedBlockName, setEditedBlockName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(initialName);
  const descriptionId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const isNameValid = !!editedBlockName.trim();
  const handleSubmit = () => {
    if (editedBlockName !== initialName) {
      const message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s: new name/label for the block */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block name changed to: "%s".'), editedBlockName);

      // Must be assertive to immediately announce change.
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_3__.speak)(message, 'assertive');
    }
    onSave(editedBlockName);

    // Immediate close avoids ability to hit save multiple times.
    onClose();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable overrides'),
    onRequestClose: onClose,
    focusOnMount: "firstContentElement",
    aria: {
      describedby: descriptionId
    },
    size: "small",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
      onSubmit: event => {
        event.preventDefault();
        if (!isNameValid) {
          return;
        }
        handleSubmit();
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
        spacing: "6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalText, {
          id: descriptionId,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Overrides are changes you make to a block within a synced pattern instance. Use overrides to customize a synced pattern instance to suit its new context. Name this block to specify an override.')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true,
          value: editedBlockName,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name'),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('For example, if you are creating a recipe pattern, you use "Recipe Title", "Recipe Description", etc.'),
          placeholder: placeholder,
          onChange: setEditedBlockName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
          justify: "right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: onClose,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            "aria-disabled": !isNameValid,
            variant: "primary",
            type: "submit",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable')
          })]
        })]
      })
    })
  });
}
function DisallowOverridesModal({
  onClose,
  onSave
}) {
  const descriptionId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useId)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Disable overrides'),
    onRequestClose: onClose,
    aria: {
      describedby: descriptionId
    },
    size: "small",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("form", {
      onSubmit: event => {
        event.preventDefault();
        onSave();
        onClose();
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
        spacing: "6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalText, {
          id: descriptionId,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Are you sure you want to disable overrides? Disabling overrides will revert all applied overrides for this block throughout instances of this pattern.')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
          justify: "right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: onClose,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "primary",
            type: "submit",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Disable')
          })]
        })]
      })
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/category-selector.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/category-selector.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CATEGORY_SLUG: () => (/* binding */ CATEGORY_SLUG),
/* harmony export */   "default": () => (/* binding */ CategorySelector)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */






const unescapeString = arg => {
  return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(arg);
};
const CATEGORY_SLUG = 'wp_pattern_category';
function CategorySelector({
  categoryTerms,
  onChange,
  categoryMap
}) {
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const debouncedSearch = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useDebounce)(setSearch, 500);
  const suggestions = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return Array.from(categoryMap.values()).map(category => unescapeString(category.label)).filter(category => {
      if (search !== '') {
        return category.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    }).sort((a, b) => a.localeCompare(b));
  }, [search, categoryMap]);
  function handleChange(termNames) {
    const uniqueTerms = termNames.reduce((terms, newTerm) => {
      if (!terms.some(term => term.toLowerCase() === newTerm.toLowerCase())) {
        terms.push(newTerm);
      }
      return terms;
    }, []);
    onChange(uniqueTerms);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
    className: "patterns-menu-items__convert-modal-categories",
    value: categoryTerms,
    suggestions: suggestions,
    onChange: handleChange,
    onInputChange: debouncedSearch,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Categories'),
    tokenizeOnBlur: true,
    __experimentalExpandOnFocus: true,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/create-pattern-modal.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/create-pattern-modal.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePatternModalContents: () => (/* binding */ CreatePatternModalContents),
/* harmony export */   "default": () => (/* binding */ CreatePatternModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/patterns/build-module/constants.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/patterns/build-module/store/index.js");
/* harmony import */ var _category_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category-selector */ "./node_modules/@wordpress/patterns/build-module/components/category-selector.js");
/* harmony import */ var _private_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../private-hooks */ "./node_modules/@wordpress/patterns/build-module/private-hooks.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/patterns/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */







function CreatePatternModal({
  className = 'patterns-menu-items__convert-modal',
  modalTitle,
  ...restProps
}) {
  const defaultModalTitle = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getPostType(_constants__WEBPACK_IMPORTED_MODULE_8__.PATTERN_TYPES.user)?.labels?.add_new_item, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: modalTitle || defaultModalTitle,
    onRequestClose: restProps.onClose,
    overlayClassName: className,
    focusOnMount: "firstContentElement",
    size: "small",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(CreatePatternModalContents, {
      ...restProps
    })
  });
}
function CreatePatternModalContents({
  confirmLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add'),
  defaultCategories = [],
  content,
  onClose,
  onError,
  onSuccess,
  defaultSyncType = _constants__WEBPACK_IMPORTED_MODULE_8__.PATTERN_SYNC_TYPES.full,
  defaultTitle = ''
}) {
  const [syncType, setSyncType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultSyncType);
  const [categoryTerms, setCategoryTerms] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultCategories);
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultTitle);
  const [isSaving, setIsSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    createPattern
  } = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_9__.unlock)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_6__.store));
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);
  const {
    categoryMap,
    findOrCreateTerm
  } = (0,_private_hooks__WEBPACK_IMPORTED_MODULE_10__.useAddPatternCategory)();
  async function onCreate(patternTitle, sync) {
    if (!title || isSaving) {
      return;
    }
    try {
      setIsSaving(true);
      const categories = await Promise.all(categoryTerms.map(termName => findOrCreateTerm(termName)));
      const newPattern = await createPattern(patternTitle, sync, typeof content === 'function' ? content() : content, categories);
      onSuccess({
        pattern: newPattern,
        categoryId: _constants__WEBPACK_IMPORTED_MODULE_8__.PATTERN_DEFAULT_CATEGORY
      });
    } catch (error) {
      createErrorNotice(error.message, {
        type: 'snackbar',
        id: 'pattern-create'
      });
      onError?.();
    } finally {
      setIsSaving(false);
      setCategoryTerms([]);
      setTitle('');
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("form", {
    onSubmit: event => {
      event.preventDefault();
      onCreate(title, syncType);
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
      spacing: "5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Name'),
        value: title,
        onChange: setTitle,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('My pattern'),
        className: "patterns-create-modal__name-input",
        __nextHasNoMarginBottom: true,
        __next40pxDefaultSize: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_category_selector__WEBPACK_IMPORTED_MODULE_11__["default"], {
        categoryTerms: categoryTerms,
        onChange: setCategoryTerms,
        categoryMap: categoryMap
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
        __nextHasNoMarginBottom: true,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._x)('Synced', 'pattern (singular)'),
        help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Sync this pattern across multiple locations.'),
        checked: syncType === _constants__WEBPACK_IMPORTED_MODULE_8__.PATTERN_SYNC_TYPES.full,
        onChange: () => {
          setSyncType(syncType === _constants__WEBPACK_IMPORTED_MODULE_8__.PATTERN_SYNC_TYPES.full ? _constants__WEBPACK_IMPORTED_MODULE_8__.PATTERN_SYNC_TYPES.unsynced : _constants__WEBPACK_IMPORTED_MODULE_8__.PATTERN_SYNC_TYPES.full);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
        justify: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: () => {
            onClose();
            setTitle('');
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Cancel')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          type: "submit",
          "aria-disabled": !title || isSaving,
          isBusy: isSaving,
          children: confirmLabel
        })]
      })]
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/duplicate-pattern-modal.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/duplicate-pattern-modal.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DuplicatePatternModal),
/* harmony export */   useDuplicatePatternProps: () => (/* binding */ useDuplicatePatternProps)
/* harmony export */ });
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _create_pattern_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-pattern-modal */ "./node_modules/@wordpress/patterns/build-module/components/create-pattern-modal.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/patterns/build-module/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */



function getTermLabels(pattern, categories) {
  // Theme patterns rely on core pattern categories.
  if (pattern.type !== _constants__WEBPACK_IMPORTED_MODULE_5__.PATTERN_TYPES.user) {
    return categories.core?.filter(category => pattern.categories?.includes(category.name)).map(category => category.label);
  }
  return categories.user?.filter(category => pattern.wp_pattern_category.includes(category.id)).map(category => category.label);
}
function useDuplicatePatternProps({
  pattern,
  onSuccess
}) {
  const {
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
  const categories = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const {
      getUserPatternCategories,
      getBlockPatternCategories
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store);
    return {
      core: getBlockPatternCategories(),
      user: getUserPatternCategories()
    };
  });
  if (!pattern) {
    return null;
  }
  return {
    content: pattern.content,
    defaultCategories: getTermLabels(pattern, categories),
    defaultSyncType: pattern.type !== _constants__WEBPACK_IMPORTED_MODULE_5__.PATTERN_TYPES.user // Theme patterns are unsynced by default.
    ? _constants__WEBPACK_IMPORTED_MODULE_5__.PATTERN_SYNC_TYPES.unsynced : pattern.wp_pattern_sync_status || _constants__WEBPACK_IMPORTED_MODULE_5__.PATTERN_SYNC_TYPES.full,
    defaultTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)( /* translators: %s: Existing pattern title */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('%s (Copy)', 'pattern'), typeof pattern.title === 'string' ? pattern.title : pattern.title.raw),
    onSuccess: ({
      pattern: newPattern
    }) => {
      createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
      // translators: %s: The new pattern's title e.g. 'Call to action (copy)'.
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('"%s" duplicated.', 'pattern'), newPattern.title.raw), {
        type: 'snackbar',
        id: 'patterns-create'
      });
      onSuccess?.({
        pattern: newPattern
      });
    }
  };
}
function DuplicatePatternModal({
  pattern,
  onClose,
  onSuccess
}) {
  const duplicatedProps = useDuplicatePatternProps({
    pattern,
    onSuccess
  });
  if (!pattern) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_create_pattern_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    modalTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Duplicate pattern'),
    confirmLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Duplicate'),
    onClose: onClose,
    onError: onClose,
    ...duplicatedProps
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternsMenuItems)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pattern_convert_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pattern-convert-button */ "./node_modules/@wordpress/patterns/build-module/components/pattern-convert-button.js");
/* harmony import */ var _patterns_manage_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns-manage-button */ "./node_modules/@wordpress/patterns/build-module/components/patterns-manage-button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function PatternsMenuItems({
  rootClientId
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockSettingsMenuControls, {
    children: ({
      selectedClientIds,
      onClose
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_pattern_convert_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        clientIds: selectedClientIds,
        rootClientId: rootClientId,
        closeBlockSettingsMenu: onClose
      }), selectedClientIds.length === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_patterns_manage_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        clientId: selectedClientIds[0]
      })]
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/overrides-panel.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/overrides-panel.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OverridesPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./node_modules/@wordpress/patterns/build-module/api/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/patterns/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



const {
  BlockQuickNavigation
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_6__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.privateApis);
function OverridesPanel() {
  const allClientIds = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getClientIdsWithDescendants(), []);
  const {
    getBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);
  const clientIdsWithOverrides = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => allClientIds.filter(clientId => {
    const block = getBlock(clientId);
    return (0,_api__WEBPACK_IMPORTED_MODULE_7__.isOverridableBlock)(block);
  }), [allClientIds, getBlock]);
  if (!clientIdsWithOverrides?.length) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Overrides'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(BlockQuickNavigation, {
      clientIds: clientIdsWithOverrides
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/pattern-convert-button.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/pattern-convert-button.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternConvertButton)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/symbol.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/patterns/build-module/store/index.js");
/* harmony import */ var _create_pattern_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-pattern-modal */ "./node_modules/@wordpress/patterns/build-module/components/create-pattern-modal.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/patterns/build-module/lock-unlock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/patterns/build-module/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */





/**
 * Menu control to convert block(s) to a pattern block.
 *
 * @param {Object}   props                        Component props.
 * @param {string[]} props.clientIds              Client ids of selected blocks.
 * @param {string}   props.rootClientId           ID of the currently selected top-level block.
 * @param {()=>void} props.closeBlockSettingsMenu Callback to close the block settings menu dropdown.
 * @return {import('react').ComponentType} The menu control or null.
 */



function PatternConvertButton({
  clientIds,
  rootClientId,
  closeBlockSettingsMenu
}) {
  const {
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_7__.store);
  const {
    replaceBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  // Ignore reason: false positive of the lint rule.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return
  const {
    setEditingPattern
  } = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_10__.unlock)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_8__.store));
  const [isModalOpen, setIsModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const canConvert = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    var _getBlocksByClientId;
    const {
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getBlocksByClientId,
      canInsertBlockType,
      getBlockRootClientId
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
    const rootId = rootClientId || (clientIds.length > 0 ? getBlockRootClientId(clientIds[0]) : undefined);
    const blocks = (_getBlocksByClientId = getBlocksByClientId(clientIds)) !== null && _getBlocksByClientId !== void 0 ? _getBlocksByClientId : [];
    const isReusable = blocks.length === 1 && blocks[0] && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.isReusableBlock)(blocks[0]) && !!select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.store).getEntityRecord('postType', 'wp_block', blocks[0].attributes.ref);
    const _canConvert =
    // Hide when this is already a synced pattern.
    !isReusable &&
    // Hide when patterns are disabled.
    canInsertBlockType('core/block', rootId) && blocks.every(block =>
    // Guard against the case where a regular block has *just* been converted.
    !!block &&
    // Hide on invalid blocks.
    block.isValid &&
    // Hide when block doesn't support being made into a pattern.
    (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.hasBlockSupport)(block.name, 'reusable', true)) &&
    // Hide when current doesn't have permission to do that.
    // Blocks refers to the wp_block post type, this checks the ability to create a post of that type.
    !!canUser('create', {
      kind: 'postType',
      name: 'wp_block'
    });
    return _canConvert;
  }, [clientIds, rootClientId]);
  const {
    getBlocksByClientId
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store);
  const getContent = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.serialize)(getBlocksByClientId(clientIds)), [getBlocksByClientId, clientIds]);
  if (!canConvert) {
    return null;
  }
  const handleSuccess = ({
    pattern
  }) => {
    if (pattern.wp_pattern_sync_status !== _constants__WEBPACK_IMPORTED_MODULE_11__.PATTERN_SYNC_TYPES.unsynced) {
      const newBlock = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/block', {
        ref: pattern.id
      });
      replaceBlocks(clientIds, newBlock);
      setEditingPattern(newBlock.clientId, true);
      closeBlockSettingsMenu();
    }
    createSuccessNotice(pattern.wp_pattern_sync_status === _constants__WEBPACK_IMPORTED_MODULE_11__.PATTERN_SYNC_TYPES.unsynced ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.sprintf)(
    // translators: %s: the name the user has given to the pattern.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Unsynced pattern created: %s'), pattern.title.raw) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.sprintf)(
    // translators: %s: the name the user has given to the pattern.
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Synced pattern created: %s'), pattern.title.raw), {
      type: 'snackbar',
      id: 'convert-to-pattern-success'
    });
    setIsModalOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
      onClick: () => setIsModalOpen(true),
      "aria-expanded": isModalOpen,
      "aria-haspopup": "dialog",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Create pattern')
    }), isModalOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_create_pattern_modal__WEBPACK_IMPORTED_MODULE_13__["default"], {
      content: getContent,
      onSuccess: pattern => {
        handleSuccess(pattern);
      },
      onError: () => {
        setIsModalOpen(false);
      },
      onClose: () => {
        setIsModalOpen(false);
      }
    })]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/pattern-overrides-block-controls.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/pattern-overrides-block-controls.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PatternOverridesBlockControls)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/copy.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/patterns/build-module/lock-unlock.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/patterns/build-module/constants.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




const {
  useBlockDisplayTitle
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_7__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.privateApis);
function PatternOverridesToolbarIndicator({
  clientIds
}) {
  const isSingleBlockSelected = clientIds.length === 1;
  const {
    icon,
    firstBlockName
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getBlockAttributes,
      getBlockNamesByClientId
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const {
      getBlockType,
      getActiveBlockVariation
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.store);
    const blockTypeNames = getBlockNamesByClientId(clientIds);
    const _firstBlockTypeName = blockTypeNames[0];
    const firstBlockType = getBlockType(_firstBlockTypeName);
    let _icon;
    if (isSingleBlockSelected) {
      const match = getActiveBlockVariation(_firstBlockTypeName, getBlockAttributes(clientIds[0]));
      // Take into account active block variations.
      _icon = match?.icon || firstBlockType.icon;
    } else {
      const isSelectionOfSameType = new Set(blockTypeNames).size === 1;
      // When selection consists of blocks of multiple types, display an
      // appropriate icon to communicate the non-uniformity.
      _icon = isSelectionOfSameType ? firstBlockType.icon : _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
    return {
      icon: _icon,
      firstBlockName: getBlockAttributes(clientIds[0]).metadata.name
    };
  }, [clientIds, isSingleBlockSelected]);
  const firstBlockTitle = useBlockDisplayTitle({
    clientId: clientIds[0],
    maximumLength: 35
  });
  const blockDescription = isSingleBlockSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: 1: The block type's name. 2: The block's user-provided name (the same as the override name). */
  (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This %1$s is editable using the "%2$s" override.'), firstBlockTitle.toLowerCase(), firstBlockName) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('These blocks are editable using overrides.');
  const descriptionId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useId)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarItem, {
    children: toggleProps => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {
      className: "patterns-pattern-overrides-toolbar-indicator",
      label: firstBlockTitle,
      popoverProps: {
        placement: 'bottom-start',
        className: 'patterns-pattern-overrides-toolbar-indicator__popover'
      },
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockIcon, {
          icon: icon,
          className: "patterns-pattern-overrides-toolbar-indicator-icon",
          showColors: true
        })
      }),
      toggleProps: {
        description: blockDescription,
        ...toggleProps
      },
      menuProps: {
        orientation: 'both',
        'aria-describedby': descriptionId
      },
      children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalText, {
        id: descriptionId,
        children: blockDescription
      })
    })
  });
}
function PatternOverridesBlockControls() {
  const {
    clientIds,
    hasPatternOverrides,
    hasParentPattern
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getBlockAttributes,
      getSelectedBlockClientIds,
      getBlockParentsByBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.store);
    const selectedClientIds = getSelectedBlockClientIds();
    const _hasPatternOverrides = selectedClientIds.every(clientId => {
      var _getBlockAttributes$m;
      return Object.values((_getBlockAttributes$m = getBlockAttributes(clientId)?.metadata?.bindings) !== null && _getBlockAttributes$m !== void 0 ? _getBlockAttributes$m : {}).some(binding => binding?.source === _constants__WEBPACK_IMPORTED_MODULE_9__.PATTERN_OVERRIDES_BINDING_SOURCE);
    });
    const _hasParentPattern = selectedClientIds.every(clientId => getBlockParentsByBlockName(clientId, 'core/block', true).length > 0);
    return {
      clientIds: selectedClientIds,
      hasPatternOverrides: _hasPatternOverrides,
      hasParentPattern: _hasParentPattern
    };
  }, []);
  return hasPatternOverrides && hasParentPattern ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.BlockControls, {
    group: "parent",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PatternOverridesToolbarIndicator, {
      clientIds: clientIds
    })
  }) : null;
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/pattern-overrides-controls.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/pattern-overrides-controls.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/patterns/build-module/constants.js");
/* harmony import */ var _allow_overrides_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allow-overrides-modal */ "./node_modules/@wordpress/patterns/build-module/components/allow-overrides-modal.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





function PatternOverridesControls({
  attributes,
  setAttributes,
  name: blockName
}) {
  const controlId = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useId)();
  const [showAllowOverridesModal, setShowAllowOverridesModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showDisallowOverridesModal, setShowDisallowOverridesModal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const hasName = !!attributes.metadata?.name;
  const defaultBindings = attributes.metadata?.bindings?.__default;
  const hasOverrides = hasName && defaultBindings?.source === _constants__WEBPACK_IMPORTED_MODULE_5__.PATTERN_OVERRIDES_BINDING_SOURCE;
  const isConnectedToOtherSources = defaultBindings?.source && defaultBindings.source !== _constants__WEBPACK_IMPORTED_MODULE_5__.PATTERN_OVERRIDES_BINDING_SOURCE;
  const {
    updateBlockBindings
  } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockBindingsUtils)();
  function updateBindings(isChecked, customName) {
    if (customName) {
      setAttributes({
        metadata: {
          ...attributes.metadata,
          name: customName
        }
      });
    }
    updateBlockBindings({
      __default: isChecked ? {
        source: _constants__WEBPACK_IMPORTED_MODULE_5__.PATTERN_OVERRIDES_BINDING_SOURCE
      } : undefined
    });
  }

  // Avoid overwriting other (e.g. meta) bindings.
  if (isConnectedToOtherSources) {
    return null;
  }
  const hasUnsupportedImageAttributes = blockName === 'core/image' && (!!attributes.caption?.length || !!attributes.href?.length);
  const helpText = !hasOverrides && hasUnsupportedImageAttributes ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Overrides currently don't support image captions or links. Remove the caption or link first before enabling overrides.`) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Allow changes to this block throughout instances of this pattern.');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      group: "advanced",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
        __nextHasNoMarginBottom: true,
        id: controlId,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Overrides'),
        help: helpText,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          __next40pxDefaultSize: true,
          className: "pattern-overrides-control__allow-overrides-button",
          variant: "secondary",
          "aria-haspopup": "dialog",
          onClick: () => {
            if (hasOverrides) {
              setShowDisallowOverridesModal(true);
            } else {
              setShowAllowOverridesModal(true);
            }
          },
          disabled: !hasOverrides && hasUnsupportedImageAttributes,
          accessibleWhenDisabled: true,
          children: hasOverrides ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Disable overrides') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Enable overrides')
        })
      })
    }), showAllowOverridesModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_allow_overrides_modal__WEBPACK_IMPORTED_MODULE_6__.AllowOverridesModal, {
      initialName: attributes.metadata?.name,
      onClose: () => setShowAllowOverridesModal(false),
      onSave: newName => {
        updateBindings(true, newName);
      }
    }), showDisallowOverridesModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_allow_overrides_modal__WEBPACK_IMPORTED_MODULE_6__.DisallowOverridesModal, {
      onClose: () => setShowDisallowOverridesModal(false),
      onSave: () => updateBindings(false)
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternOverridesControls);


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/patterns-manage-button.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/patterns-manage-button.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/patterns/build-module/store/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/patterns/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





function PatternsManageButton({
  clientId
}) {
  const {
    canRemove,
    isVisible,
    managePatternsUrl
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getBlock,
      canRemoveBlock,
      getBlockCount
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store);
    const {
      canUser
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_6__.store);
    const reusableBlock = getBlock(clientId);
    return {
      canRemove: canRemoveBlock(clientId),
      isVisible: !!reusableBlock && (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.isReusableBlock)(reusableBlock) && !!canUser('update', {
        kind: 'postType',
        name: 'wp_block',
        id: reusableBlock.attributes.ref
      }),
      innerBlockCount: getBlockCount(clientId),
      // The site editor and templates both check whether the user
      // has edit_theme_options capabilities. We can leverage that here
      // and omit the manage patterns link if the user can't access it.
      managePatternsUrl: canUser('create', {
        kind: 'postType',
        name: 'wp_template'
      }) ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)('site-editor.php', {
        path: '/patterns'
      }) : (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_5__.addQueryArgs)('edit.php', {
        post_type: 'wp_block'
      })
    };
  }, [clientId]);

  // Ignore reason: false positive of the lint rule.
  // eslint-disable-next-line @wordpress/no-unused-vars-before-return
  const {
    convertSyncedPatternToStatic
  } = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_9__.unlock)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_7__.store));
  if (!isVisible) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [canRemove && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
      onClick: () => convertSyncedPatternToStatic(clientId),
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Detach')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
      href: managePatternsUrl,
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage patterns')
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatternsManageButton);


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/rename-pattern-category-modal.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/rename-pattern-category-modal.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RenamePatternCategoryModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _category_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-selector */ "./node_modules/@wordpress/patterns/build-module/components/category-selector.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



function RenamePatternCategoryModal({
  category,
  existingCategories,
  onClose,
  onError,
  onSuccess,
  ...props
}) {
  const id = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useId)();
  const textControlRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  const [name, setName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(category.name));
  const [isSaving, setIsSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [validationMessage, setValidationMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const validationMessageId = validationMessage ? `patterns-rename-pattern-category-modal__validation-message-${id}` : undefined;
  const {
    saveEntityRecord,
    invalidateResolution
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    createErrorNotice,
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);
  const onChange = newName => {
    if (validationMessage) {
      setValidationMessage(undefined);
    }
    setName(newName);
  };
  const onSave = async event => {
    event.preventDefault();
    if (isSaving) {
      return;
    }
    if (!name || name === category.name) {
      const message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Please enter a new name for this category.');
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__.speak)(message, 'assertive');
      setValidationMessage(message);
      textControlRef.current?.focus();
      return;
    }

    // Check existing categories to avoid creating duplicates.
    if (existingCategories.patternCategories.find(existingCategory => {
      // Compare the id so that the we don't disallow the user changing the case of their current category
      // (i.e. renaming 'test' to 'Test').
      return existingCategory.id !== category.id && existingCategory.label.toLowerCase() === name.toLowerCase();
    })) {
      const message = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('This category already exists. Please use a different name.');
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_7__.speak)(message, 'assertive');
      setValidationMessage(message);
      textControlRef.current?.focus();
      return;
    }
    try {
      setIsSaving(true);

      // User pattern category properties may differ as they can be
      // normalized for use alongside template part areas, core pattern
      // categories etc. As a result we won't just destructure the passed
      // category object.
      const savedRecord = await saveEntityRecord('taxonomy', _category_selector__WEBPACK_IMPORTED_MODULE_9__.CATEGORY_SLUG, {
        id: category.id,
        slug: category.slug,
        name
      });
      invalidateResolution('getUserPatternCategories');
      onSuccess?.(savedRecord);
      onClose();
      createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Pattern category renamed.'), {
        type: 'snackbar',
        id: 'pattern-category-update'
      });
    } catch (error) {
      onError?.();
      createErrorNotice(error.message, {
        type: 'snackbar',
        id: 'pattern-category-update'
      });
    } finally {
      setIsSaving(false);
      setName('');
    }
  };
  const onRequestClose = () => {
    onClose();
    setName('');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Rename'),
    onRequestClose: onRequestClose,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("form", {
      onSubmit: onSave,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
        spacing: "5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
          spacing: "2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
            ref: textControlRef,
            __nextHasNoMarginBottom: true,
            __next40pxDefaultSize: true,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Name'),
            value: name,
            onChange: onChange,
            "aria-describedby": validationMessageId,
            required: true
          }), validationMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "patterns-rename-pattern-category-modal__validation-message",
            id: validationMessageId,
            children: validationMessage
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
          justify: "right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: onRequestClose,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "primary",
            type: "submit",
            "aria-disabled": !name || name === category.name || isSaving,
            isBusy: isSaving,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Save')
          })]
        })]
      })
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/rename-pattern-modal.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/rename-pattern-modal.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RenamePatternModal)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */









function RenamePatternModal({
  onClose,
  onError,
  onSuccess,
  pattern,
  ...props
}) {
  const originalName = (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_4__.decodeEntities)(pattern.title);
  const [name, setName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(originalName);
  const [isSaving, setIsSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    editEntityRecord,
    __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEntityEdits
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_6__.store);
  const onRename = async event => {
    event.preventDefault();
    if (!name || name === pattern.title || isSaving) {
      return;
    }
    try {
      await editEntityRecord('postType', pattern.type, pattern.id, {
        title: name
      });
      setIsSaving(true);
      setName('');
      onClose?.();
      const savedRecord = await saveSpecifiedEntityEdits('postType', pattern.type, pattern.id, ['title'], {
        throwOnError: true
      });
      onSuccess?.(savedRecord);
      createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Pattern renamed'), {
        type: 'snackbar',
        id: 'pattern-update'
      });
    } catch (error) {
      onError?.();
      const errorMessage = error.message && error.code !== 'unknown_error' ? error.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('An error occurred while renaming the pattern.');
      createErrorNotice(errorMessage, {
        type: 'snackbar',
        id: 'pattern-update'
      });
    } finally {
      setIsSaving(false);
      setName('');
    }
  };
  const onRequestClose = () => {
    onClose?.();
    setName('');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Rename'),
    ...props,
    onRequestClose: onClose,
    focusOnMount: "firstContentElement",
    size: "small",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("form", {
      onSubmit: onRename,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
        spacing: "5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Name'),
          value: name,
          onChange: setName,
          required: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
          justify: "right",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "tertiary",
            onClick: onRequestClose,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Cancel')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
            __next40pxDefaultSize: true,
            variant: "primary",
            type: "submit",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Save')
          })]
        })]
      })
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/components/reset-overrides-control.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/components/reset-overrides-control.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetOverridesControl)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */





const CONTENT = 'content';
function ResetOverridesControl(props) {
  const name = props.attributes.metadata?.name;
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useRegistry)();
  const isOverriden = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    if (!name) {
      return;
    }
    const {
      getBlockAttributes,
      getBlockParentsByBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);
    const [patternClientId] = getBlockParentsByBlockName(props.clientId, 'core/block', true);
    if (!patternClientId) {
      return;
    }
    const overrides = getBlockAttributes(patternClientId)[CONTENT];
    if (!overrides) {
      return;
    }
    return overrides.hasOwnProperty(name);
  }, [props.clientId, name]);
  function onClick() {
    const {
      getBlockAttributes,
      getBlockParentsByBlockName
    } = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);
    const [patternClientId] = getBlockParentsByBlockName(props.clientId, 'core/block', true);
    if (!patternClientId) {
      return;
    }
    const overrides = getBlockAttributes(patternClientId)[CONTENT];
    if (!overrides.hasOwnProperty(name)) {
      return;
    }
    const {
      updateBlockAttributes,
      __unstableMarkLastChangeAsPersistent
    } = registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);
    __unstableMarkLastChangeAsPersistent();
    let newOverrides = {
      ...overrides
    };
    delete newOverrides[name];
    if (!Object.keys(newOverrides).length) {
      newOverrides = undefined;
    }
    updateBlockAttributes(patternClientId, {
      [CONTENT]: newOverrides
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__unstableBlockToolbarLastItem, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
        onClick: onClick,
        disabled: !isOverriden,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Reset')
      })
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/constants.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/constants.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXCLUDED_PATTERN_SOURCES: () => (/* binding */ EXCLUDED_PATTERN_SOURCES),
/* harmony export */   PARTIAL_SYNCING_SUPPORTED_BLOCKS: () => (/* binding */ PARTIAL_SYNCING_SUPPORTED_BLOCKS),
/* harmony export */   PATTERN_DEFAULT_CATEGORY: () => (/* binding */ PATTERN_DEFAULT_CATEGORY),
/* harmony export */   PATTERN_OVERRIDES_BINDING_SOURCE: () => (/* binding */ PATTERN_OVERRIDES_BINDING_SOURCE),
/* harmony export */   PATTERN_SYNC_TYPES: () => (/* binding */ PATTERN_SYNC_TYPES),
/* harmony export */   PATTERN_TYPES: () => (/* binding */ PATTERN_TYPES),
/* harmony export */   PATTERN_USER_CATEGORY: () => (/* binding */ PATTERN_USER_CATEGORY)
/* harmony export */ });
const PATTERN_TYPES = {
  theme: 'pattern',
  user: 'wp_block'
};
const PATTERN_DEFAULT_CATEGORY = 'all-patterns';
const PATTERN_USER_CATEGORY = 'my-patterns';
const EXCLUDED_PATTERN_SOURCES = ['core', 'pattern-directory/core', 'pattern-directory/featured'];
const PATTERN_SYNC_TYPES = {
  full: 'fully',
  unsynced: 'unsynced'
};

// TODO: This should not be hardcoded. Maybe there should be a config and/or an UI.
const PARTIAL_SYNCING_SUPPORTED_BLOCKS = {
  'core/paragraph': ['content'],
  'core/heading': ['content'],
  'core/button': ['text', 'url', 'linkTarget', 'rel'],
  'core/image': ['id', 'url', 'title', 'alt']
};
const PATTERN_OVERRIDES_BINDING_SOURCE = 'core/pattern-overrides';


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/lock-unlock.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/lock-unlock.js ***!
  \**********************************************************************/
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
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/patterns');


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/private-apis.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/private-apis.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   privateApis: () => (/* binding */ privateApis)
/* harmony export */ });
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock-unlock */ "./node_modules/@wordpress/patterns/build-module/lock-unlock.js");
/* harmony import */ var _components_overrides_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/overrides-panel */ "./node_modules/@wordpress/patterns/build-module/components/overrides-panel.js");
/* harmony import */ var _components_create_pattern_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create-pattern-modal */ "./node_modules/@wordpress/patterns/build-module/components/create-pattern-modal.js");
/* harmony import */ var _components_duplicate_pattern_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/duplicate-pattern-modal */ "./node_modules/@wordpress/patterns/build-module/components/duplicate-pattern-modal.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./node_modules/@wordpress/patterns/build-module/api/index.js");
/* harmony import */ var _components_rename_pattern_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/rename-pattern-modal */ "./node_modules/@wordpress/patterns/build-module/components/rename-pattern-modal.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./node_modules/@wordpress/patterns/build-module/components/index.js");
/* harmony import */ var _components_rename_pattern_category_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/rename-pattern-category-modal */ "./node_modules/@wordpress/patterns/build-module/components/rename-pattern-category-modal.js");
/* harmony import */ var _components_pattern_overrides_controls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pattern-overrides-controls */ "./node_modules/@wordpress/patterns/build-module/components/pattern-overrides-controls.js");
/* harmony import */ var _components_reset_overrides_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reset-overrides-control */ "./node_modules/@wordpress/patterns/build-module/components/reset-overrides-control.js");
/* harmony import */ var _components_pattern_overrides_block_controls__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pattern-overrides-block-controls */ "./node_modules/@wordpress/patterns/build-module/components/pattern-overrides-block-controls.js");
/* harmony import */ var _private_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./private-hooks */ "./node_modules/@wordpress/patterns/build-module/private-hooks.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/patterns/build-module/constants.js");
/**
 * Internal dependencies
 */













const privateApis = {};
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_0__.lock)(privateApis, {
  OverridesPanel: _components_overrides_panel__WEBPACK_IMPORTED_MODULE_1__["default"],
  CreatePatternModal: _components_create_pattern_modal__WEBPACK_IMPORTED_MODULE_2__["default"],
  CreatePatternModalContents: _components_create_pattern_modal__WEBPACK_IMPORTED_MODULE_2__.CreatePatternModalContents,
  DuplicatePatternModal: _components_duplicate_pattern_modal__WEBPACK_IMPORTED_MODULE_3__["default"],
  isOverridableBlock: _api__WEBPACK_IMPORTED_MODULE_4__.isOverridableBlock,
  hasOverridableBlocks: _api__WEBPACK_IMPORTED_MODULE_4__.hasOverridableBlocks,
  useDuplicatePatternProps: _components_duplicate_pattern_modal__WEBPACK_IMPORTED_MODULE_3__.useDuplicatePatternProps,
  RenamePatternModal: _components_rename_pattern_modal__WEBPACK_IMPORTED_MODULE_5__["default"],
  PatternsMenuItems: _components__WEBPACK_IMPORTED_MODULE_6__["default"],
  RenamePatternCategoryModal: _components_rename_pattern_category_modal__WEBPACK_IMPORTED_MODULE_7__["default"],
  PatternOverridesControls: _components_pattern_overrides_controls__WEBPACK_IMPORTED_MODULE_8__["default"],
  ResetOverridesControl: _components_reset_overrides_control__WEBPACK_IMPORTED_MODULE_9__["default"],
  PatternOverridesBlockControls: _components_pattern_overrides_block_controls__WEBPACK_IMPORTED_MODULE_10__["default"],
  useAddPatternCategory: _private_hooks__WEBPACK_IMPORTED_MODULE_11__.useAddPatternCategory,
  PATTERN_TYPES: _constants__WEBPACK_IMPORTED_MODULE_12__.PATTERN_TYPES,
  PATTERN_DEFAULT_CATEGORY: _constants__WEBPACK_IMPORTED_MODULE_12__.PATTERN_DEFAULT_CATEGORY,
  PATTERN_USER_CATEGORY: _constants__WEBPACK_IMPORTED_MODULE_12__.PATTERN_USER_CATEGORY,
  EXCLUDED_PATTERN_SOURCES: _constants__WEBPACK_IMPORTED_MODULE_12__.EXCLUDED_PATTERN_SOURCES,
  PATTERN_SYNC_TYPES: _constants__WEBPACK_IMPORTED_MODULE_12__.PATTERN_SYNC_TYPES,
  PARTIAL_SYNCING_SUPPORTED_BLOCKS: _constants__WEBPACK_IMPORTED_MODULE_12__.PARTIAL_SYNCING_SUPPORTED_BLOCKS
});


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/private-hooks.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/private-hooks.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAddPatternCategory: () => (/* binding */ useAddPatternCategory)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_category_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/category-selector */ "./node_modules/@wordpress/patterns/build-module/components/category-selector.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Helper hook that creates a Map with the core and user patterns categories
 * and removes any duplicates. It's used when we need to create new user
 * categories when creating or importing patterns.
 * This hook also provides a function to find or create a pattern category.
 *
 * @return {Object} The merged categories map and the callback function to find or create a category.
 */
function useAddPatternCategory() {
  const {
    saveEntityRecord,
    invalidateResolution
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    corePatternCategories,
    userPatternCategories
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getUserPatternCategories,
      getBlockPatternCategories
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
    return {
      corePatternCategories: getBlockPatternCategories(),
      userPatternCategories: getUserPatternCategories()
    };
  }, []);
  const categoryMap = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    // Merge the user and core pattern categories and remove any duplicates.
    const uniqueCategories = new Map();
    userPatternCategories.forEach(category => {
      uniqueCategories.set(category.label.toLowerCase(), {
        label: category.label,
        name: category.name,
        id: category.id
      });
    });
    corePatternCategories.forEach(category => {
      if (!uniqueCategories.has(category.label.toLowerCase()) &&
      // There are two core categories with `Post` label so explicitly remove the one with
      // the `query` slug to avoid any confusion.
      category.name !== 'query') {
        uniqueCategories.set(category.label.toLowerCase(), {
          label: category.label,
          name: category.name
        });
      }
    });
    return uniqueCategories;
  }, [userPatternCategories, corePatternCategories]);
  async function findOrCreateTerm(term) {
    try {
      const existingTerm = categoryMap.get(term.toLowerCase());
      if (existingTerm?.id) {
        return existingTerm.id;
      }
      // If we have an existing core category we need to match the new user category to the
      // correct slug rather than autogenerating it to prevent duplicates, eg. the core `Headers`
      // category uses the singular `header` as the slug.
      const termData = existingTerm ? {
        name: existingTerm.label,
        slug: existingTerm.name
      } : {
        name: term
      };
      const newTerm = await saveEntityRecord('taxonomy', _components_category_selector__WEBPACK_IMPORTED_MODULE_3__.CATEGORY_SLUG, termData, {
        throwOnError: true
      });
      invalidateResolution('getUserPatternCategories');
      return newTerm.id;
    } catch (error) {
      if (error.code !== 'term_exists') {
        throw error;
      }
      return error.data.term_id;
    }
  }
  return {
    categoryMap,
    findOrCreateTerm
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/store/actions.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/store/actions.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertSyncedPatternToStatic: () => (/* binding */ convertSyncedPatternToStatic),
/* harmony export */   createPattern: () => (/* binding */ createPattern),
/* harmony export */   createPatternFromFile: () => (/* binding */ createPatternFromFile),
/* harmony export */   setEditingPattern: () => (/* binding */ setEditingPattern)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./node_modules/@wordpress/patterns/build-module/constants.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Returns a generator converting one or more static blocks into a pattern, or creating a new empty pattern.
 *
 * @param {string}             title        Pattern title.
 * @param {'full'|'unsynced'}  syncType     They way block is synced, 'full' or 'unsynced'.
 * @param {string|undefined}   [content]    Optional serialized content of blocks to convert to pattern.
 * @param {number[]|undefined} [categories] Ids of any selected categories.
 */
const createPattern = (title, syncType, content, categories) => async ({
  registry
}) => {
  const meta = syncType === _constants__WEBPACK_IMPORTED_MODULE_3__.PATTERN_SYNC_TYPES.unsynced ? {
    wp_pattern_sync_status: syncType
  } : undefined;
  const reusableBlock = {
    title,
    content,
    status: 'publish',
    meta,
    wp_pattern_category: categories
  };
  const updatedRecord = await registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).saveEntityRecord('postType', 'wp_block', reusableBlock);
  return updatedRecord;
};

/**
 * Create a pattern from a JSON file.
 * @param {File}               file         The JSON file instance of the pattern.
 * @param {number[]|undefined} [categories] Ids of any selected categories.
 */
const createPatternFromFile = (file, categories) => async ({
  dispatch
}) => {
  const fileContent = await file.text();
  /** @type {import('./types').PatternJSON} */
  let parsedContent;
  try {
    parsedContent = JSON.parse(fileContent);
  } catch (e) {
    throw new Error('Invalid JSON file');
  }
  if (parsedContent.__file !== 'wp_block' || !parsedContent.title || !parsedContent.content || typeof parsedContent.title !== 'string' || typeof parsedContent.content !== 'string' || parsedContent.syncStatus && typeof parsedContent.syncStatus !== 'string') {
    throw new Error('Invalid pattern JSON file');
  }
  const pattern = await dispatch.createPattern(parsedContent.title, parsedContent.syncStatus, parsedContent.content, categories);
  return pattern;
};

/**
 * Returns a generator converting a synced pattern block into a static block.
 *
 * @param {string} clientId The client ID of the block to attach.
 */
const convertSyncedPatternToStatic = clientId => ({
  registry
}) => {
  const patternBlock = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlock(clientId);
  const existingOverrides = patternBlock.attributes?.content;
  function cloneBlocksAndRemoveBindings(blocks) {
    return blocks.map(block => {
      let metadata = block.attributes.metadata;
      if (metadata) {
        metadata = {
          ...metadata
        };
        delete metadata.id;
        delete metadata.bindings;
        // Use overridden values of the pattern block if they exist.
        if (existingOverrides?.[metadata.name]) {
          // Iterate over each overriden attribute.
          for (const [attributeName, value] of Object.entries(existingOverrides[metadata.name])) {
            // Skip if the attribute does not exist in the block type.
            if (!(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockType)(block.name)?.attributes[attributeName]) {
              continue;
            }
            // Update the block attribute with the override value.
            block.attributes[attributeName] = value;
          }
        }
      }
      return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.cloneBlock)(block, {
        metadata: metadata && Object.keys(metadata).length > 0 ? metadata : undefined
      }, cloneBlocksAndRemoveBindings(block.innerBlocks));
    });
  }
  const patternInnerBlocks = registry.select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlocks(patternBlock.clientId);
  registry.dispatch(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).replaceBlocks(patternBlock.clientId, cloneBlocksAndRemoveBindings(patternInnerBlocks));
};

/**
 * Returns an action descriptor for SET_EDITING_PATTERN action.
 *
 * @param {string}  clientId  The clientID of the pattern to target.
 * @param {boolean} isEditing Whether the block should be in editing state.
 * @return {Object} Action descriptor.
 */
function setEditingPattern(clientId, isEditing) {
  return {
    type: 'SET_EDITING_PATTERN',
    clientId,
    isEditing
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/store/constants.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/store/constants.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME)
/* harmony export */ });
/**
 * Module Constants
 */
const STORE_NAME = 'core/patterns';


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/store/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/store/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store),
/* harmony export */   storeConfig: () => (/* binding */ storeConfig)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/patterns/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/patterns/build-module/store/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/patterns/build-module/store/constants.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/patterns/build-module/store/selectors.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lock-unlock */ "./node_modules/@wordpress/patterns/build-module/lock-unlock.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






/**
 * Post editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registerStore
 *
 * @type {Object}
 */
const storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/**
 * Store definition for the editor namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_2__.STORE_NAME, {
  ...storeConfig
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(store).registerPrivateActions(_actions__WEBPACK_IMPORTED_MODULE_4__);
(0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(store).registerPrivateSelectors(_selectors__WEBPACK_IMPORTED_MODULE_5__);


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/store/reducer.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/store/reducer.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isEditingPattern: () => (/* binding */ isEditingPattern)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function isEditingPattern(state = {}, action) {
  if (action?.type === 'SET_EDITING_PATTERN') {
    return {
      ...state,
      [action.clientId]: action.isEditing
    };
  }
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  isEditingPattern
}));


/***/ }),

/***/ "./node_modules/@wordpress/patterns/build-module/store/selectors.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/store/selectors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEditingPattern: () => (/* binding */ isEditingPattern)
/* harmony export */ });
/**
 * Returns true if pattern is in the editing state.
 *
 * @param {Object} state    Global application state.
 * @param {number} clientId the clientID of the block.
 * @return {boolean} Whether the pattern is in the editing state.
 */
function isEditingPattern(state, clientId) {
  return state.isEditingPattern[clientId];
}


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

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
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/patterns/build-module/index.js ***!
  \****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   privateApis: () => (/* reexport safe */ _private_apis__WEBPACK_IMPORTED_MODULE_1__.privateApis),
/* harmony export */   store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.store)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/patterns/build-module/store/index.js");
/* harmony import */ var _private_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./private-apis */ "./node_modules/@wordpress/patterns/build-module/private-apis.js");
/**
 * Internal dependencies
 */



})();

(window.wp = window.wp || {}).patterns = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=patterns.js.map