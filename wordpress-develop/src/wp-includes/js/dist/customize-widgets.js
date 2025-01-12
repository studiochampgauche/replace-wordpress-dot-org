/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/block-appender/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/block-appender/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlockAppender)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




function BlockAppender(props) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const isBlocksListEmpty = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getBlockCount() === 0);

  // Move the focus to the block appender to prevent focus from
  // being lost when emptying the widget area.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isBlocksListEmpty && ref.current) {
      const {
        ownerDocument
      } = ref.current;
      if (!ownerDocument.activeElement || ownerDocument.activeElement === ownerDocument.body) {
        ref.current.focus();
      }
    }
  }, [isBlocksListEmpty]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ButtonBlockAppender, {
    ...props,
    ref: ref
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/block-inspector-button/index.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/block-inspector-button/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */






function BlockInspectorButton({
  inspector,
  closeMenu,
  ...props
}) {
  const selectedBlockClientId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.store).getSelectedBlockClientId(), []);
  const selectedBlock = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => document.getElementById(`block-${selectedBlockClientId}`), [selectedBlockClientId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.MenuItem, {
    onClick: () => {
      // Open the inspector.
      inspector.open({
        returnFocusWhenClose: selectedBlock
      });
      // Then close the dropdown menu.
      closeMenu();
    },
    ...props,
    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show more settings')
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockInspectorButton);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizeWidgets)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error-boundary */ "./node_modules/@wordpress/customize-widgets/build-module/components/error-boundary/index.js");
/* harmony import */ var _sidebar_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar-block-editor */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/index.js");
/* harmony import */ var _focus_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../focus-control */ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js");
/* harmony import */ var _sidebar_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sidebar-controls */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js");
/* harmony import */ var _use_clear_selected_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-clear-selected-block */ "./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/use-clear-selected-block.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */







function CustomizeWidgets({
  api,
  sidebarControls,
  blockEditorSettings
}) {
  const [activeSidebarControl, setActiveSidebarControl] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const parentContainer = document.getElementById('customize-theme-controls');
  const popoverRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_use_clear_selected_block__WEBPACK_IMPORTED_MODULE_6__["default"])(activeSidebarControl, popoverRef);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const unsubscribers = sidebarControls.map(sidebarControl => sidebarControl.subscribe(expanded => {
      if (expanded) {
        setActiveSidebarControl(sidebarControl);
      }
    }));
    return () => {
      unsubscribers.forEach(unsubscriber => unsubscriber());
    };
  }, [sidebarControls]);
  const activeSidebar = activeSidebarControl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_error_boundary__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_sidebar_block_editor__WEBPACK_IMPORTED_MODULE_3__["default"], {
      blockEditorSettings: blockEditorSettings,
      sidebar: activeSidebarControl.sidebarAdapter,
      inserter: activeSidebarControl.inserter,
      inspector: activeSidebarControl.inspector
    }, activeSidebarControl.id)
  }), activeSidebarControl.container[0]);

  // We have to portal this to the parent of both the editor and the inspector,
  // so that the popovers will appear above both of them.
  const popover = parentContainer && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "customize-widgets-popover",
    ref: popoverRef,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover.Slot, {})
  }), parentContainer);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SlotFillProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_sidebar_controls__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sidebarControls: sidebarControls,
      activeSidebarControl: activeSidebarControl,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_focus_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        api: api,
        sidebarControls: sidebarControls,
        children: [activeSidebar, popover]
      })
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/use-clear-selected-block.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/use-clear-selected-block.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useClearSelectedBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */




/**
 * We can't just use <BlockSelectionClearer> because the customizer has
 * many root nodes rather than just one in the post editor.
 * We need to listen to the focus events in all those roots, and also in
 * the preview iframe.
 * This hook will clear the selected block when focusing outside the editor,
 * with a few exceptions:
 * 1. Focusing on popovers.
 * 2. Focusing on the inspector.
 * 3. Focusing on any modals/dialogs.
 * These cases are normally triggered by user interactions from the editor,
 * not by explicitly focusing outside the editor, hence no need for clearing.
 *
 * @param {Object} sidebarControl The sidebar control instance.
 * @param {Object} popoverRef     The ref object of the popover node container.
 */
function useClearSelectedBlock(sidebarControl, popoverRef) {
  const {
    hasSelectedBlock,
    hasMultiSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    clearSelectedBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (popoverRef.current && sidebarControl) {
      const inspector = sidebarControl.inspector;
      const container = sidebarControl.container[0];
      const ownerDocument = container.ownerDocument;
      const ownerWindow = ownerDocument.defaultView;
      function handleClearSelectedBlock(element) {
        if (
        // 1. Make sure there are blocks being selected.
        (hasSelectedBlock() || hasMultiSelection()) &&
        // 2. The element should exist in the DOM (not deleted).
        element && ownerDocument.contains(element) &&
        // 3. It should also not exist in the container, the popover, nor the dialog.
        !container.contains(element) && !popoverRef.current.contains(element) && !element.closest('[role="dialog"]') &&
        // 4. The inspector should not be opened.
        !inspector.expanded()) {
          clearSelectedBlock();
        }
      }

      // Handle mouse down in the same document.
      function handleMouseDown(event) {
        handleClearSelectedBlock(event.target);
      }
      // Handle focusing outside the current document, like to iframes.
      function handleBlur() {
        handleClearSelectedBlock(ownerDocument.activeElement);
      }
      ownerDocument.addEventListener('mousedown', handleMouseDown);
      ownerWindow.addEventListener('blur', handleBlur);
      return () => {
        ownerDocument.removeEventListener('mousedown', handleMouseDown);
        ownerWindow.removeEventListener('blur', handleBlur);
      };
    }
  }, [popoverRef, sidebarControl, hasSelectedBlock, hasMultiSelection, clearSelectedBlock]);
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/error-boundary/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/error-boundary/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */







function CopyButton({
  text,
  children
}) {
  const ref = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useCopyToClipboard)(text);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button
  // TODO: Switch to `true` (40px size) if possible
  , {
    __next40pxDefaultSize: false,
    variant: "secondary",
    ref: ref,
    children: children
  });
}
class ErrorBoundary extends _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
  }
  componentDidCatch(error) {
    this.setState({
      error
    });
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_5__.doAction)('editor.ErrorBoundary.errorLogged', error);
  }
  render() {
    const {
      error
    } = this.state;
    if (!error) {
      return this.props.children;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.Warning, {
      className: "customize-widgets-error-boundary",
      actions: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CopyButton, {
        text: error.stack,
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Copy Error')
      }, "copy-error")],
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The editor has encountered an unexpected error.')
    });
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FocusControl),
/* harmony export */   useFocusControl: () => (/* binding */ useFocusControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/customize-widgets/build-module/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


const FocusControlContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function FocusControl({
  api,
  sidebarControls,
  children
}) {
  const [focusedWidgetIdRef, setFocusedWidgetIdRef] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    current: null
  });
  const focusWidget = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(widgetId => {
    for (const sidebarControl of sidebarControls) {
      const widgets = sidebarControl.setting.get();
      if (widgets.includes(widgetId)) {
        sidebarControl.sectionInstance.expand({
          // Schedule it after the complete callback so that
          // it won't be overridden by the "Back" button focus.
          completeCallback() {
            // Create a "ref-like" object every time to ensure
            // the same widget id can also triggers the focus control.
            setFocusedWidgetIdRef({
              current: widgetId
            });
          }
        });
        break;
      }
    }
  }, [sidebarControls]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function handleFocus(settingId) {
      const widgetId = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.settingIdToWidgetId)(settingId);
      focusWidget(widgetId);
    }
    let previewBound = false;
    function handleReady() {
      api.previewer.preview.bind('focus-control-for-setting', handleFocus);
      previewBound = true;
    }
    api.previewer.bind('ready', handleReady);
    return () => {
      api.previewer.unbind('ready', handleReady);
      if (previewBound) {
        api.previewer.preview.unbind('focus-control-for-setting', handleFocus);
      }
    };
  }, [api, focusWidget]);
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [focusedWidgetIdRef, focusWidget], [focusedWidgetIdRef, focusWidget]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FocusControlContext.Provider, {
    value: context,
    children: children
  });
}
const useFocusControl = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FocusControlContext);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/use-blocks-focus-control.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/use-blocks-focus-control.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useBlocksFocusControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

function useBlocksFocusControl(blocks) {
  const {
    selectBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  const [focusedWidgetIdRef] = (0,___WEBPACK_IMPORTED_MODULE_4__.useFocusControl)();
  const blocksRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(blocks);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    blocksRef.current = blocks;
  }, [blocks]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (focusedWidgetIdRef.current) {
      const focusedBlock = blocksRef.current.find(block => (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(block) === focusedWidgetIdRef.current);
      if (focusedBlock) {
        selectBlock(focusedBlock.clientId);
        // If the block is already being selected, the DOM node won't
        // get focused again automatically.
        // We select the DOM and focus it manually here.
        const blockNode = document.querySelector(`[data-block="${focusedBlock.clientId}"]`);
        blockNode?.focus();
      }
    }
  }, [focusedWidgetIdRef, selectBlock]);
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/header/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/header/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/undo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/redo.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _inserter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inserter */ "./node_modules/@wordpress/customize-widgets/build-module/components/inserter/index.js");
/* harmony import */ var _more_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../more-menu */ "./node_modules/@wordpress/customize-widgets/build-module/components/more-menu/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





function Header({
  sidebar,
  inserter,
  isInserterOpened,
  setIsInserterOpened,
  isFixedToolbarActive
}) {
  const [[hasUndo, hasRedo], setUndoRedo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([sidebar.hasUndo(), sidebar.hasRedo()]);
  const shortcut = (0,_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.isAppleOS)() ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.primaryShift('z') : _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.primary('y');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    return sidebar.subscribeHistory(() => {
      setUndoRedo([sidebar.hasUndo(), sidebar.hasRedo()]);
    });
  }, [sidebar]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('customize-widgets-header', {
        'is-fixed-toolbar-active': isFixedToolbarActive
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.NavigableToolbar, {
        className: "customize-widgets-header-toolbar",
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Document tools'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
          icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
          /* translators: button label text should, if possible, be under 16 characters. */,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Undo'),
          shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_4__.displayShortcut.primary('z'),
          disabled: !hasUndo,
          onClick: sidebar.undo,
          className: "customize-widgets-editor-history-button undo-button"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
          icon: !(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.isRTL)() ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
          /* translators: button label text should, if possible, be under 16 characters. */,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Redo'),
          shortcut: shortcut,
          disabled: !hasRedo,
          onClick: sidebar.redo,
          className: "customize-widgets-editor-history-button redo-button"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
          className: "customize-widgets-header-toolbar__inserter-toggle",
          isPressed: isInserterOpened,
          variant: "primary",
          icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"],
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__._x)('Add block', 'Generic label for block inserter button'),
          onClick: () => {
            setIsInserterOpened(isOpen => !isOpen);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_more_menu__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createPortal)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inserter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setIsOpened: setIsInserterOpened
    }), inserter.contentContainer[0])]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/inserter/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/inserter/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function Inserter({
  setIsOpened
}) {
  const inserterTitleId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.useInstanceId)(Inserter, 'customize-widget-layout__inserter-panel-title');
  const insertionPoint = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_5__.store).__experimentalGetInsertionPoint(), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "customize-widgets-layout__inserter-panel",
    "aria-labelledby": inserterTitleId,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "customize-widgets-layout__inserter-panel-header",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        id: inserterTitleId,
        className: "customize-widgets-layout__inserter-panel-header-title",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a block')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button
      // TODO: Switch to `true` (40px size) if possible
      , {
        __next40pxDefaultSize: false,
        className: "customize-widgets-layout__inserter-panel-header-close-button",
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"],
        onClick: () => setIsOpened(false),
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Close inserter')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "customize-widgets-layout__inserter-panel-content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalLibrary, {
        rootClientId: insertionPoint.rootClientId,
        __experimentalInsertionIndex: insertionPoint.insertionIndex,
        showInserterHelpPanel: true,
        onSelect: () => setIsOpened(false)
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inserter);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/inserter/use-inserter.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/inserter/use-inserter.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useInserter)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function useInserter(inserter) {
  const isInserterOpened = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_store__WEBPACK_IMPORTED_MODULE_2__.store).isInserterOpened(), []);
  const {
    setIsInserterOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_2__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isInserterOpened) {
      inserter.open();
    } else {
      inserter.close();
    }
  }, [inserter, isInserterOpened]);
  return [isInserterOpened, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(updater => {
    let isOpen = updater;
    if (typeof updater === 'function') {
      isOpen = updater((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.select)(_store__WEBPACK_IMPORTED_MODULE_2__.store).isInserterOpened());
    }
    setIsInserterOpened(isOpen);
  }, [setIsInserterOpened])];
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/config.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/config.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textFormattingShortcuts: () => (/* binding */ textFormattingShortcuts)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const textFormattingShortcuts = [{
  keyCombination: {
    modifier: 'primary',
    character: 'b'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the selected text bold.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'i'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the selected text italic.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'k'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert the selected text into a link.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'k'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove a link.')
}, {
  keyCombination: {
    character: '[['
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert a link to a post or page.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'u'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Underline the selected text.')
}, {
  keyCombination: {
    modifier: 'access',
    character: 'd'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Strikethrough the selected text.')
}, {
  keyCombination: {
    modifier: 'access',
    character: 'x'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Make the selected text inline code.')
}, {
  keyCombination: {
    modifier: 'access',
    character: '0'
  },
  aliases: [{
    modifier: 'access',
    character: '7'
  }],
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert the current heading to a paragraph.')
}, {
  keyCombination: {
    modifier: 'access',
    character: '1-6'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Convert the current paragraph or heading to a heading of level 1 to 6.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'SPACE'
  },
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add non breaking space.')
}];


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function DynamicShortcut({
  name
}) {
  const {
    keyCombination,
    description,
    aliases
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      getShortcutKeyCombination,
      getShortcutDescription,
      getShortcutAliases
    } = select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.store);
    return {
      keyCombination: getShortcutKeyCombination(name),
      aliases: getShortcutAliases(name),
      description: getShortcutDescription(name)
    };
  }, [name]);
  if (!keyCombination) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_shortcut__WEBPACK_IMPORTED_MODULE_2__["default"], {
    keyCombination: keyCombination,
    description: description,
    aliases: aliases
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicShortcut);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/index.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/index.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyboardShortcutHelpModal)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/config.js");
/* harmony import */ var _shortcut__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shortcut */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js");
/* harmony import */ var _dynamic_shortcut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dynamic-shortcut */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





const ShortcutList = ({
  shortcuts
}) =>
/*#__PURE__*/
/*
 * Disable reason: The `list` ARIA role is redundant but
 * Safari+VoiceOver won't announce the list otherwise.
 */
/* eslint-disable jsx-a11y/no-redundant-roles */
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
  className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-list",
  role: "list",
  children: shortcuts.map((shortcut, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("li", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut",
    children: typeof shortcut === 'string' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_dynamic_shortcut__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: shortcut
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_shortcut__WEBPACK_IMPORTED_MODULE_6__["default"], {
      ...shortcut
    })
  }, index))
})
/* eslint-enable jsx-a11y/no-redundant-roles */;
const ShortcutSection = ({
  title,
  shortcuts,
  className
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("section", {
  className: (0,clsx__WEBPACK_IMPORTED_MODULE_0__["default"])('customize-widgets-keyboard-shortcut-help-modal__section', className),
  children: [!!title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
    className: "customize-widgets-keyboard-shortcut-help-modal__section-title",
    children: title
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutList, {
    shortcuts: shortcuts
  })]
});
const ShortcutCategorySection = ({
  title,
  categoryName,
  additionalShortcuts = []
}) => {
  const categoryShortcuts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__.store).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutSection, {
    title: title,
    shortcuts: categoryShortcuts.concat(additionalShortcuts)
  });
};
function KeyboardShortcutHelpModal({
  isModalActive,
  toggleModal
}) {
  const {
    registerShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__.store);
  registerShortcut({
    name: 'core/customize-widgets/keyboard-shortcuts',
    category: 'main',
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display these keyboard shortcuts.'),
    keyCombination: {
      modifier: 'access',
      character: 'h'
    }
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_3__.useShortcut)('core/customize-widgets/keyboard-shortcuts', toggleModal);
  if (!isModalActive) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    className: "customize-widgets-keyboard-shortcut-help-modal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Keyboard shortcuts'),
    onRequestClose: toggleModal,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutSection, {
      className: "customize-widgets-keyboard-shortcut-help-modal__main-shortcuts",
      shortcuts: ['core/customize-widgets/keyboard-shortcuts']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutCategorySection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Global shortcuts'),
      categoryName: "global"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutCategorySection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selection shortcuts'),
      categoryName: "selection"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutCategorySection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block shortcuts'),
      categoryName: "block",
      additionalShortcuts: [{
        keyCombination: {
          character: '/'
        },
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Change the block type after adding a new paragraph.'),
        /* translators: The forward-slash character. e.g. '/'. */
        ariaLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Forward-slash')
      }]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(ShortcutSection, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text formatting'),
      shortcuts: _config__WEBPACK_IMPORTED_MODULE_5__.textFormattingShortcuts
    })]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/shortcut.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */





function KeyCombination({
  keyCombination,
  forceAriaLabel
}) {
  const shortcut = keyCombination.modifier ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.displayShortcutList[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  const ariaLabel = keyCombination.modifier ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.shortcutAriaLabel[keyCombination.modifier](keyCombination.character) : keyCombination.character;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("kbd", {
    className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel,
    children: (Array.isArray(shortcut) ? shortcut : [shortcut]).map((character, index) => {
      if (character === '+') {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: character
        }, index);
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("kbd", {
        className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-key",
        children: character
      }, index);
    })
  });
}
function Shortcut({
  description,
  keyCombination,
  aliases = [],
  ariaLabel
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-description",
      children: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "customize-widgets-keyboard-shortcut-help-modal__shortcut-term",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(KeyCombination, {
        keyCombination: keyCombination,
        forceAriaLabel: ariaLabel
      }), aliases.map((alias, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(KeyCombination, {
        keyCombination: alias,
        forceAriaLabel: ariaLabel
      }, index))]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shortcut);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcuts/index.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcuts/index.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */





function KeyboardShortcuts({
  undo,
  redo,
  save
}) {
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/customize-widgets/undo', event => {
    undo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/customize-widgets/redo', event => {
    redo();
    event.preventDefault();
  });
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.useShortcut)('core/customize-widgets/save', event => {
    event.preventDefault();
    save();
  });
  return null;
}
function KeyboardShortcutsRegister() {
  const {
    registerShortcut,
    unregisterShortcut
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_1__.store);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    registerShortcut({
      name: 'core/customize-widgets/undo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Undo your last changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 'z'
      }
    });
    registerShortcut({
      name: 'core/customize-widgets/redo',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Redo your last undo.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: 'z'
      },
      // Disable on Apple OS because it conflicts with the browser's
      // history shortcut. It's a fine alias for both Windows and Linux.
      // Since there's no conflict for Ctrl+Shift+Z on both Windows and
      // Linux, we keep it as the default for consistency.
      aliases: (0,_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_2__.isAppleOS)() ? [] : [{
        modifier: 'primary',
        character: 'y'
      }]
    });
    registerShortcut({
      name: 'core/customize-widgets/save',
      category: 'global',
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Save your changes.'),
      keyCombination: {
        modifier: 'primary',
        character: 's'
      }
    });
    return () => {
      unregisterShortcut('core/customize-widgets/undo');
      unregisterShortcut('core/customize-widgets/redo');
      unregisterShortcut('core/customize-widgets/save');
    };
  }, [registerShortcut]);
  return null;
}
KeyboardShortcuts.Register = KeyboardShortcutsRegister;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyboardShortcuts);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/more-menu/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/more-menu/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoreMenu)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/keyboard-shortcuts */ "@wordpress/keyboard-shortcuts");
/* harmony import */ var _wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../keyboard-shortcut-help-modal */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcut-help-modal/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




function MoreMenu() {
  const [isKeyboardShortcutsModalActive, setIsKeyboardShortcutsModalVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const toggleKeyboardShortcutsModal = () => setIsKeyboardShortcutsModalVisible(!isKeyboardShortcutsModalActive);
  (0,_wordpress_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_4__.useShortcut)('core/customize-widgets/keyboard-shortcuts', toggleKeyboardShortcutsModal);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToolbarDropdownMenu, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Options'),
      popoverProps: {
        placement: 'bottom-end',
        className: 'more-menu-dropdown__content'
      },
      toggleProps: {
        tooltipPosition: 'bottom',
        size: 'compact'
      },
      children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuGroup, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('View', 'noun'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.PreferenceToggleMenuItem, {
            scope: "core/customize-widgets",
            name: "fixedToolbar",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top toolbar'),
            info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Access all block and document tools in a single place'),
            messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top toolbar activated'),
            messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Top toolbar deactivated')
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuGroup, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tools'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
            onClick: () => {
              setIsKeyboardShortcutsModalVisible(true);
            },
            shortcut: _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_3__.displayShortcut.access('h'),
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Keyboard shortcuts')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.PreferenceToggleMenuItem, {
            scope: "core/customize-widgets",
            name: "welcomeGuide",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Welcome Guide')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {
            role: "menuitem",
            icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"],
            href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('https://wordpress.org/documentation/article/block-based-widgets-editor/'),
            target: "_blank",
            rel: "noopener noreferrer",
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Help'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.VisuallyHidden, {
              as: "span",
              children: /* translators: accessibility text */
              (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('(opens in a new tab)')
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.MenuGroup, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Preferences'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.PreferenceToggleMenuItem, {
            scope: "core/customize-widgets",
            name: "keepCaretInsideBlock",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block'),
            info: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Aids screen readers by stopping text caret from leaving blocks.'),
            messageActivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block activated'),
            messageDeactivated: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Contain text cursor inside block deactivated')
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_keyboard_shortcut_help_modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      isModalActive: isKeyboardShortcutsModalActive,
      toggleModal: toggleKeyboardShortcutsModal
    })]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/index.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarBlockEditor)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _block_inspector_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../block-inspector-button */ "./node_modules/@wordpress/customize-widgets/build-module/components/block-inspector-button/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header */ "./node_modules/@wordpress/customize-widgets/build-module/components/header/index.js");
/* harmony import */ var _inserter_use_inserter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../inserter/use-inserter */ "./node_modules/@wordpress/customize-widgets/build-module/components/inserter/use-inserter.js");
/* harmony import */ var _sidebar_editor_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar-editor-provider */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-editor-provider.js");
/* harmony import */ var _welcome_guide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../welcome-guide */ "./node_modules/@wordpress/customize-widgets/build-module/components/welcome-guide/index.js");
/* harmony import */ var _keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../keyboard-shortcuts */ "./node_modules/@wordpress/customize-widgets/build-module/components/keyboard-shortcuts/index.js");
/* harmony import */ var _block_appender__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../block-appender */ "./node_modules/@wordpress/customize-widgets/build-module/components/block-appender/index.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/customize-widgets/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);
/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */











const {
  ExperimentalBlockCanvas: BlockCanvas
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_15__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.privateApis);
const {
  BlockKeyboardShortcuts
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_15__.unlock)(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_7__.privateApis);
function SidebarBlockEditor({
  blockEditorSettings,
  sidebar,
  inserter,
  inspector
}) {
  const [isInserterOpened, setIsInserterOpened] = (0,_inserter_use_inserter__WEBPACK_IMPORTED_MODULE_10__["default"])(inserter);
  const isMediumViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.useViewportMatch)('small');
  const {
    hasUploadPermissions,
    isFixedToolbarActive,
    keepCaretInsideBlock,
    isWelcomeGuideActive
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    var _select$canUser;
    const {
      get
    } = select(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_6__.store);
    return {
      hasUploadPermissions: (_select$canUser = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store).canUser('create', {
        kind: 'root',
        name: 'media'
      })) !== null && _select$canUser !== void 0 ? _select$canUser : true,
      isFixedToolbarActive: !!get('core/customize-widgets', 'fixedToolbar'),
      keepCaretInsideBlock: !!get('core/customize-widgets', 'keepCaretInsideBlock'),
      isWelcomeGuideActive: !!get('core/customize-widgets', 'welcomeGuide')
    };
  }, []);
  const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    let mediaUploadBlockEditor;
    if (hasUploadPermissions) {
      mediaUploadBlockEditor = ({
        onError,
        ...argumentsObject
      }) => {
        (0,_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_5__.uploadMedia)({
          wpAllowedMimeTypes: blockEditorSettings.allowedMimeTypes,
          onError: ({
            message
          }) => onError(message),
          ...argumentsObject
        });
      };
    }
    return {
      ...blockEditorSettings,
      __experimentalSetIsInserterOpened: setIsInserterOpened,
      mediaUpload: mediaUploadBlockEditor,
      hasFixedToolbar: isFixedToolbarActive || !isMediumViewport,
      keepCaretInsideBlock,
      __unstableHasCustomAppender: true
    };
  }, [hasUploadPermissions, blockEditorSettings, isFixedToolbarActive, isMediumViewport, keepCaretInsideBlock, setIsInserterOpened]);
  if (isWelcomeGuideActive) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_welcome_guide__WEBPACK_IMPORTED_MODULE_12__["default"], {
      sidebar: sidebar
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_13__["default"].Register, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(BlockKeyboardShortcuts, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_sidebar_editor_provider__WEBPACK_IMPORTED_MODULE_11__["default"], {
      sidebar: sidebar,
      settings: settings,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_13__["default"], {
        undo: sidebar.undo,
        redo: sidebar.redo,
        save: sidebar.save
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        sidebar: sidebar,
        inserter: inserter,
        isInserterOpened: isInserterOpened,
        setIsInserterOpened: setIsInserterOpened,
        isFixedToolbarActive: isFixedToolbarActive || !isMediumViewport
      }), (isFixedToolbarActive || !isMediumViewport) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockToolbar, {
        hideDragHandle: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(BlockCanvas, {
        shouldIframe: false,
        styles: settings.defaultEditorStyles,
        height: "100%",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockList, {
          renderAppender: _block_appender__WEBPACK_IMPORTED_MODULE_14__["default"]
        })
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.createPortal)(
      /*#__PURE__*/
      // This is a temporary hack to prevent button component inside <BlockInspector>
      // from submitting form when type="button" is not specified.
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("form", {
        onSubmit: event => event.preventDefault(),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.BlockInspector, {})
      }), inspector.contentContainer[0])]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__unstableBlockSettingsMenuFirstItem, {
      children: ({
        onClose
      }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_block_inspector_button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        inspector: inspector,
        closeMenu: onClose
      })
    })]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-adapter.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-adapter.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarAdapter)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/customize-widgets/build-module/utils.js");
/**
 * Internal dependencies
 */

const {
  wp
} = window;
function parseWidgetId(widgetId) {
  const matches = widgetId.match(/^(.+)-(\d+)$/);
  if (matches) {
    return {
      idBase: matches[1],
      number: parseInt(matches[2], 10)
    };
  }

  // Likely an old single widget.
  return {
    idBase: widgetId
  };
}
function widgetIdToSettingId(widgetId) {
  const {
    idBase,
    number
  } = parseWidgetId(widgetId);
  if (number) {
    return `widget_${idBase}[${number}]`;
  }
  return `widget_${idBase}`;
}

/**
 * This is a custom debounce function to call different callbacks depending on
 * whether it's the _leading_ call or not.
 *
 * @param {Function} leading  The callback that gets called first.
 * @param {Function} callback The callback that gets called after the first time.
 * @param {number}   timeout  The debounced time in milliseconds.
 * @return {Function} The debounced function.
 */
function debounce(leading, callback, timeout) {
  let isLeading = false;
  let timerID;
  function debounced(...args) {
    const result = (isLeading ? callback : leading).apply(this, args);
    isLeading = true;
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      isLeading = false;
    }, timeout);
    return result;
  }
  debounced.cancel = () => {
    isLeading = false;
    clearTimeout(timerID);
  };
  return debounced;
}
class SidebarAdapter {
  constructor(setting, api) {
    this.setting = setting;
    this.api = api;
    this.locked = false;
    this.widgetsCache = new WeakMap();
    this.subscribers = new Set();
    this.history = [this._getWidgetIds().map(widgetId => this.getWidget(widgetId))];
    this.historyIndex = 0;
    this.historySubscribers = new Set();
    // Debounce the input for 1 second.
    this._debounceSetHistory = debounce(this._pushHistory, this._replaceHistory, 1000);
    this.setting.bind(this._handleSettingChange.bind(this));
    this.api.bind('change', this._handleAllSettingsChange.bind(this));
    this.undo = this.undo.bind(this);
    this.redo = this.redo.bind(this);
    this.save = this.save.bind(this);
  }
  subscribe(callback) {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }
  getWidgets() {
    return this.history[this.historyIndex];
  }
  _emit(...args) {
    for (const callback of this.subscribers) {
      callback(...args);
    }
  }
  _getWidgetIds() {
    return this.setting.get();
  }
  _pushHistory() {
    this.history = [...this.history.slice(0, this.historyIndex + 1), this._getWidgetIds().map(widgetId => this.getWidget(widgetId))];
    this.historyIndex += 1;
    this.historySubscribers.forEach(listener => listener());
  }
  _replaceHistory() {
    this.history[this.historyIndex] = this._getWidgetIds().map(widgetId => this.getWidget(widgetId));
  }
  _handleSettingChange() {
    if (this.locked) {
      return;
    }
    const prevWidgets = this.getWidgets();
    this._pushHistory();
    this._emit(prevWidgets, this.getWidgets());
  }
  _handleAllSettingsChange(setting) {
    if (this.locked) {
      return;
    }
    if (!setting.id.startsWith('widget_')) {
      return;
    }
    const widgetId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.settingIdToWidgetId)(setting.id);
    if (!this.setting.get().includes(widgetId)) {
      return;
    }
    const prevWidgets = this.getWidgets();
    this._pushHistory();
    this._emit(prevWidgets, this.getWidgets());
  }
  _createWidget(widget) {
    const widgetModel = wp.customize.Widgets.availableWidgets.findWhere({
      id_base: widget.idBase
    });
    let number = widget.number;
    if (widgetModel.get('is_multi') && !number) {
      widgetModel.set('multi_number', widgetModel.get('multi_number') + 1);
      number = widgetModel.get('multi_number');
    }
    const settingId = number ? `widget_${widget.idBase}[${number}]` : `widget_${widget.idBase}`;
    const settingArgs = {
      transport: wp.customize.Widgets.data.selectiveRefreshableWidgets[widgetModel.get('id_base')] ? 'postMessage' : 'refresh',
      previewer: this.setting.previewer
    };
    const setting = this.api.create(settingId, settingId, '', settingArgs);
    setting.set(widget.instance);
    const widgetId = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.settingIdToWidgetId)(settingId);
    return widgetId;
  }
  _removeWidget(widget) {
    const settingId = widgetIdToSettingId(widget.id);
    const setting = this.api(settingId);
    if (setting) {
      const instance = setting.get();
      this.widgetsCache.delete(instance);
    }
    this.api.remove(settingId);
  }
  _updateWidget(widget) {
    const prevWidget = this.getWidget(widget.id);

    // Bail out update if nothing changed.
    if (prevWidget === widget) {
      return widget.id;
    }

    // Update existing setting if only the widget's instance changed.
    if (prevWidget.idBase && widget.idBase && prevWidget.idBase === widget.idBase) {
      const settingId = widgetIdToSettingId(widget.id);
      this.api(settingId).set(widget.instance);
      return widget.id;
    }

    // Otherwise delete and re-create.
    this._removeWidget(widget);
    return this._createWidget(widget);
  }
  getWidget(widgetId) {
    if (!widgetId) {
      return null;
    }
    const {
      idBase,
      number
    } = parseWidgetId(widgetId);
    const settingId = widgetIdToSettingId(widgetId);
    const setting = this.api(settingId);
    if (!setting) {
      return null;
    }
    const instance = setting.get();
    if (this.widgetsCache.has(instance)) {
      return this.widgetsCache.get(instance);
    }
    const widget = {
      id: widgetId,
      idBase,
      number,
      instance
    };
    this.widgetsCache.set(instance, widget);
    return widget;
  }
  _updateWidgets(nextWidgets) {
    this.locked = true;
    const addedWidgetIds = [];
    const nextWidgetIds = nextWidgets.map(nextWidget => {
      if (nextWidget.id && this.getWidget(nextWidget.id)) {
        addedWidgetIds.push(null);
        return this._updateWidget(nextWidget);
      }
      const widgetId = this._createWidget(nextWidget);
      addedWidgetIds.push(widgetId);
      return widgetId;
    });
    const deletedWidgets = this.getWidgets().filter(widget => !nextWidgetIds.includes(widget.id));
    deletedWidgets.forEach(widget => this._removeWidget(widget));
    this.setting.set(nextWidgetIds);
    this.locked = false;
    return addedWidgetIds;
  }
  setWidgets(nextWidgets) {
    const addedWidgetIds = this._updateWidgets(nextWidgets);
    this._debounceSetHistory();
    return addedWidgetIds;
  }

  /**
   * Undo/Redo related features
   */
  hasUndo() {
    return this.historyIndex > 0;
  }
  hasRedo() {
    return this.historyIndex < this.history.length - 1;
  }
  _seek(historyIndex) {
    const currentWidgets = this.getWidgets();
    this.historyIndex = historyIndex;
    const widgets = this.history[this.historyIndex];
    this._updateWidgets(widgets);
    this._emit(currentWidgets, this.getWidgets());
    this.historySubscribers.forEach(listener => listener());
    this._debounceSetHistory.cancel();
  }
  undo() {
    if (!this.hasUndo()) {
      return;
    }
    this._seek(this.historyIndex - 1);
  }
  redo() {
    if (!this.hasRedo()) {
      return;
    }
    this._seek(this.historyIndex + 1);
  }
  subscribeHistory(listener) {
    this.historySubscribers.add(listener);
    return () => {
      this.historySubscribers.delete(listener);
    };
  }
  save() {
    this.api.previewer.save();
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-editor-provider.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-editor-provider.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarEditorProvider)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _use_sidebar_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-sidebar-block-editor */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/use-sidebar-block-editor.js");
/* harmony import */ var _focus_control_use_blocks_focus_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../focus-control/use-blocks-focus-control */ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/use-blocks-focus-control.js");
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/customize-widgets/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const {
  ExperimentalBlockEditorProvider
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.privateApis);
function SidebarEditorProvider({
  sidebar,
  settings,
  children
}) {
  const [blocks, onInput, onChange] = (0,_use_sidebar_block_editor__WEBPACK_IMPORTED_MODULE_1__["default"])(sidebar);
  (0,_focus_control_use_blocks_focus_control__WEBPACK_IMPORTED_MODULE_2__["default"])(blocks);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ExperimentalBlockEditorProvider, {
    value: blocks,
    onInput: onInput,
    onChange: onChange,
    settings: settings,
    useSubRegistry: false,
    children: children
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/use-sidebar-block-editor.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/use-sidebar-block-editor.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useSidebarBlockEditor)
/* harmony export */ });
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal/es6 */ "./node_modules/fast-deep-equal/es6/index.js");
/* harmony import */ var fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/is-shallow-equal */ "@wordpress/is-shallow-equal");
/* harmony import */ var _wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./node_modules/@wordpress/customize-widgets/build-module/utils.js");
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function widgetsToBlocks(widgets) {
  return widgets.map(widget => (0,_utils__WEBPACK_IMPORTED_MODULE_4__.widgetToBlock)(widget));
}
function useSidebarBlockEditor(sidebar) {
  const [blocks, setBlocks] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(() => widgetsToBlocks(sidebar.getWidgets()));
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return sidebar.subscribe((prevWidgets, nextWidgets) => {
      setBlocks(prevBlocks => {
        const prevWidgetsMap = new Map(prevWidgets.map(widget => [widget.id, widget]));
        const prevBlocksMap = new Map(prevBlocks.map(block => [(0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(block), block]));
        const nextBlocks = nextWidgets.map(nextWidget => {
          const prevWidget = prevWidgetsMap.get(nextWidget.id);

          // Bail out updates.
          if (prevWidget && prevWidget === nextWidget) {
            return prevBlocksMap.get(nextWidget.id);
          }
          return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.widgetToBlock)(nextWidget);
        });

        // Bail out updates.
        if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(prevBlocks, nextBlocks)) {
          return prevBlocks;
        }
        return nextBlocks;
      });
    });
  }, [sidebar]);
  const onChangeBlocks = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(nextBlocks => {
    setBlocks(prevBlocks => {
      if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(prevBlocks, nextBlocks)) {
        return prevBlocks;
      }
      const prevBlocksMap = new Map(prevBlocks.map(block => [(0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(block), block]));
      const nextWidgets = nextBlocks.map(nextBlock => {
        const widgetId = (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.getWidgetIdFromBlock)(nextBlock);

        // Update existing widgets.
        if (widgetId && prevBlocksMap.has(widgetId)) {
          const prevBlock = prevBlocksMap.get(widgetId);
          const prevWidget = sidebar.getWidget(widgetId);

          // Bail out updates by returning the previous widgets.
          // Deep equality is necessary until the block editor's internals changes.
          if (fast_deep_equal_es6__WEBPACK_IMPORTED_MODULE_0___default()(nextBlock, prevBlock) && prevWidget) {
            return prevWidget;
          }
          return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.blockToWidget)(nextBlock, prevWidget);
        }

        // Add a new widget.
        return (0,_utils__WEBPACK_IMPORTED_MODULE_4__.blockToWidget)(nextBlock);
      });

      // Bail out updates if the updated widgets are the same.
      if (_wordpress_is_shallow_equal__WEBPACK_IMPORTED_MODULE_2___default()(sidebar.getWidgets(), nextWidgets)) {
        return prevBlocks;
      }
      const addedWidgetIds = sidebar.setWidgets(nextWidgets);
      return nextBlocks.reduce((updatedNextBlocks, nextBlock, index) => {
        const addedWidgetId = addedWidgetIds[index];
        if (addedWidgetId !== null) {
          // Only create a new instance if necessary to prevent
          // the whole editor from re-rendering on every edit.
          if (updatedNextBlocks === nextBlocks) {
            updatedNextBlocks = nextBlocks.slice();
          }
          updatedNextBlocks[index] = (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_3__.addWidgetIdToBlock)(nextBlock, addedWidgetId);
        }
        return updatedNextBlocks;
      }, nextBlocks);
    });
  }, [sidebar]);
  return [blocks, onChangeBlocks, onChangeBlocks];
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarControlsContext: () => (/* binding */ SidebarControlsContext),
/* harmony export */   "default": () => (/* binding */ SidebarControls),
/* harmony export */   useActiveSidebarControl: () => (/* binding */ useActiveSidebarControl),
/* harmony export */   useSidebarControls: () => (/* binding */ useSidebarControls)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const SidebarControlsContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function SidebarControls({
  sidebarControls,
  activeSidebarControl,
  children
}) {
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    sidebarControls,
    activeSidebarControl
  }), [sidebarControls, activeSidebarControl]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SidebarControlsContext.Provider, {
    value: context,
    children: children
  });
}
function useSidebarControls() {
  const {
    sidebarControls
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(SidebarControlsContext);
  return sidebarControls;
}
function useActiveSidebarControl() {
  const {
    activeSidebarControl
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(SidebarControlsContext);
  return activeSidebarControl;
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/components/welcome-guide/index.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/components/welcome-guide/index.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WelcomeGuide)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress dependencies
 */






function WelcomeGuide({
  sidebar
}) {
  const {
    toggle
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_3__.store);
  const isEntirelyBlockWidgets = sidebar.getWidgets().every(widget => widget.id.startsWith('block-'));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "customize-widgets-welcome-guide",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "customize-widgets-welcome-guide__image__wrapper",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("picture", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("source", {
          srcSet: "https://s.w.org/images/block-editor/welcome-editor.svg",
          media: "(prefers-reduced-motion: reduce)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          className: "customize-widgets-welcome-guide__image",
          src: "https://s.w.org/images/block-editor/welcome-editor.gif",
          width: "312",
          height: "240",
          alt: ""
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
      className: "customize-widgets-welcome-guide__heading",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Welcome to block Widgets')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: "customize-widgets-welcome-guide__text",
      children: isEntirelyBlockWidgets ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Your theme provides different “block” areas for you to add and edit content. Try adding a search bar, social icons, or other types of blocks here and see how they’ll look on your site.') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('You can now add any block to your site’s widget areas. Don’t worry, all of your favorite widgets still work flawlessly.')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button
    // TODO: Switch to `true` (40px size) if possible
    , {
      __next40pxDefaultSize: false,
      className: "customize-widgets-welcome-guide__button",
      variant: "primary",
      onClick: () => toggle('core/customize-widgets', 'welcomeGuide'),
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Got it')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", {
      className: "customize-widgets-welcome-guide__separator"
    }), !isEntirelyBlockWidgets && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
      className: "customize-widgets-welcome-guide__more-info",
      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Want to stick with the old widgets?'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
        href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('https://wordpress.org/plugins/classic-widgets/'),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Get the Classic Widgets plugin.')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
      className: "customize-widgets-welcome-guide__more-info",
      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('New to the block editor?'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
        href: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('https://wordpress.org/documentation/article/wordpress-block-editor/'),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Here's a detailed guide.")
      })]
    })]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/controls/inserter-outer-section.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/controls/inserter-outer-section.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getInserterOuterSection)
/* harmony export */ });
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom */ "@wordpress/dom");
/* harmony import */ var _wordpress_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function getInserterOuterSection() {
  const {
    wp: {
      customize
    }
  } = window;
  const OuterSection = customize.OuterSection;
  // Override the OuterSection class to handle multiple outer sections.
  // It closes all the other outer sections whenever one is opened.
  // The result is that at most one outer section can be opened at the same time.
  customize.OuterSection = class extends OuterSection {
    onChangeExpanded(expanded, args) {
      if (expanded) {
        customize.section.each(section => {
          if (section.params.type === 'outer' && section.id !== this.id) {
            if (section.expanded()) {
              section.collapse();
            }
          }
        });
      }
      return super.onChangeExpanded(expanded, args);
    }
  };
  // Handle constructor so that "params.type" can be correctly pointed to "outer".
  customize.sectionConstructor.outer = customize.OuterSection;
  return class InserterOuterSection extends customize.OuterSection {
    constructor(...args) {
      super(...args);

      // This is necessary since we're creating a new class which is not identical to the original OuterSection.
      // @See https://github.com/WordPress/wordpress-develop/blob/42b05c397c50d9dc244083eff52991413909d4bd/src/js/_enqueues/wp/customize/controls.js#L1427-L1436
      this.params.type = 'outer';
      this.activeElementBeforeExpanded = null;
      const ownerWindow = this.contentContainer[0].ownerDocument.defaultView;

      // Handle closing the inserter when pressing the Escape key.
      ownerWindow.addEventListener('keydown', event => {
        if (this.expanded() && (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__.ESCAPE || event.code === 'Escape') && !event.defaultPrevented) {
          event.preventDefault();
          event.stopPropagation();
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store).setIsInserterOpened(false);
        }
      },
      // Use capture mode to make this run before other event listeners.
      true);
      this.contentContainer.addClass('widgets-inserter');

      // Set a flag if the state is being changed from open() or close().
      // Don't propagate the event if it's an internal action to prevent infinite loop.
      this.isFromInternalAction = false;
      this.expanded.bind(() => {
        if (!this.isFromInternalAction) {
          // Propagate the event to React to sync the state.
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store).setIsInserterOpened(this.expanded());
        }
        this.isFromInternalAction = false;
      });
    }
    open() {
      if (!this.expanded()) {
        const contentContainer = this.contentContainer[0];
        this.activeElementBeforeExpanded = contentContainer.ownerDocument.activeElement;
        this.isFromInternalAction = true;
        this.expand({
          completeCallback() {
            // We have to do this in a "completeCallback" or else the elements will not yet be visible/tabbable.
            // The first one should be the close button,
            // we want to skip it and choose the second one instead, which is the search box.
            const searchBox = _wordpress_dom__WEBPACK_IMPORTED_MODULE_1__.focus.tabbable.find(contentContainer)[1];
            if (searchBox) {
              searchBox.focus();
            }
          }
        });
      }
    }
    close() {
      if (this.expanded()) {
        const contentContainer = this.contentContainer[0];
        const activeElement = contentContainer.ownerDocument.activeElement;
        this.isFromInternalAction = true;
        this.collapse({
          completeCallback() {
            // Return back the focus when closing the inserter.
            // Only do this if the active element which triggers the action is inside the inserter,
            // (the close button for instance). In that case the focus will be lost.
            // Otherwise, we don't hijack the focus when the user is focusing on other elements
            // (like the quick inserter).
            if (contentContainer.contains(activeElement)) {
              // Return back the focus when closing the inserter.
              if (this.activeElementBeforeExpanded) {
                this.activeElementBeforeExpanded.focus();
              }
            }
          }
        });
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/controls/inspector-section.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/controls/inspector-section.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getInspectorSection)
/* harmony export */ });
function getInspectorSection() {
  const {
    wp: {
      customize
    }
  } = window;
  return class InspectorSection extends customize.Section {
    constructor(id, options) {
      super(id, options);
      this.parentSection = options.parentSection;
      this.returnFocusWhenClose = null;
      this._isOpen = false;
    }
    get isOpen() {
      return this._isOpen;
    }
    set isOpen(value) {
      this._isOpen = value;
      this.triggerActiveCallbacks();
    }
    ready() {
      this.contentContainer[0].classList.add('customize-widgets-layout__inspector');
    }
    isContextuallyActive() {
      return this.isOpen;
    }
    onChangeExpanded(expanded, args) {
      super.onChangeExpanded(expanded, args);
      if (this.parentSection && !args.unchanged) {
        if (expanded) {
          this.parentSection.collapse({
            manualTransition: true
          });
        } else {
          this.parentSection.expand({
            manualTransition: true,
            completeCallback: () => {
              // Return focus after finishing the transition.
              if (this.returnFocusWhenClose && !this.contentContainer[0].contains(this.returnFocusWhenClose)) {
                this.returnFocusWhenClose.focus();
              }
            }
          });
        }
      }
    }
    open({
      returnFocusWhenClose
    } = {}) {
      this.isOpen = true;
      this.returnFocusWhenClose = returnFocusWhenClose;
      this.expand({
        allowMultiple: true
      });
    }
    close() {
      this.collapse({
        allowMultiple: true
      });
    }
    collapse(options) {
      // Overridden collapse() function. Mostly call the parent collapse(), but also
      // move our .isOpen to false.
      // Initially, I tried tracking this with onChangeExpanded(), but it doesn't work
      // because the block settings sidebar is a layer "on top of" the G editor sidebar.
      //
      // For example, when closing the block settings sidebar, the G
      // editor sidebar would display, and onChangeExpanded in
      // inspector-section would run with expanded=true, but I want
      // isOpen to be false when the block settings is closed.
      this.isOpen = false;
      super.collapse(options);
    }
    triggerActiveCallbacks() {
      // Manually fire the callbacks associated with moving this.active
      // from false to true.  "active" is always true for this section,
      // and "isContextuallyActive" reflects if the block settings
      // sidebar is currently visible, that is, it has replaced the main
      // Gutenberg view.
      // The WP customizer only checks ".isContextuallyActive()" when
      // ".active" changes values. But our ".active" never changes value.
      // The WP customizer never foresaw a section being used a way we
      // fit the block settings sidebar into a section. By manually
      // triggering the "this.active" callbacks, we force the WP
      // customizer to query our .isContextuallyActive() function and
      // update its view of our status.
      this.active.callbacks.fireWith(this.active, [false, true]);
    }
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-control.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-control.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSidebarControl)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sidebar_block_editor_sidebar_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sidebar-block-editor/sidebar-adapter */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-block-editor/sidebar-adapter.js");
/* harmony import */ var _inserter_outer_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inserter-outer-section */ "./node_modules/@wordpress/customize-widgets/build-module/controls/inserter-outer-section.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const getInserterId = controlId => `widgets-inserter-${controlId}`;
function getSidebarControl() {
  const {
    wp: {
      customize
    }
  } = window;
  return class SidebarControl extends customize.Control {
    constructor(...args) {
      super(...args);
      this.subscribers = new Set();
    }
    ready() {
      const InserterOuterSection = (0,_inserter_outer_section__WEBPACK_IMPORTED_MODULE_2__["default"])();
      this.inserter = new InserterOuterSection(getInserterId(this.id), {});
      customize.section.add(this.inserter);
      this.sectionInstance = customize.section(this.section());
      this.inspector = this.sectionInstance.inspector;
      this.sidebarAdapter = new _components_sidebar_block_editor_sidebar_adapter__WEBPACK_IMPORTED_MODULE_1__["default"](this.setting, customize);
    }
    subscribe(callback) {
      this.subscribers.add(callback);
      return () => {
        this.subscribers.delete(callback);
      };
    }
    onChangeSectionExpanded(expanded, args) {
      if (!args.unchanged) {
        // Close the inserter when the section collapses.
        if (!expanded) {
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store).setIsInserterOpened(false);
        }
        this.subscribers.forEach(subscriber => subscriber(expanded, args));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-section.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-section.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSidebarSection)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inspector_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspector-section */ "./node_modules/@wordpress/customize-widgets/build-module/controls/inspector-section.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const getInspectorSectionId = sidebarId => `widgets-inspector-${sidebarId}`;
function getSidebarSection() {
  const {
    wp: {
      customize
    }
  } = window;
  const reduceMotionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let isReducedMotion = reduceMotionMediaQuery.matches;
  reduceMotionMediaQuery.addEventListener('change', event => {
    isReducedMotion = event.matches;
  });
  return class SidebarSection extends customize.Section {
    ready() {
      const InspectorSection = (0,_inspector_section__WEBPACK_IMPORTED_MODULE_1__["default"])();
      this.inspector = new InspectorSection(getInspectorSectionId(this.id), {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block Settings'),
        parentSection: this,
        customizeAction: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Customizing'), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Widgets'), this.params.title].join(' ▸ ')
      });
      customize.section.add(this.inspector);
      this.contentContainer[0].classList.add('customize-widgets__sidebar-section');
    }
    hasSubSectionOpened() {
      return this.inspector.expanded();
    }
    onChangeExpanded(expanded, _args) {
      const controls = this.controls();
      const args = {
        ..._args,
        completeCallback() {
          controls.forEach(control => {
            control.onChangeSectionExpanded?.(expanded, args);
          });
          _args.completeCallback?.();
        }
      };
      if (args.manualTransition) {
        if (expanded) {
          this.contentContainer.addClass(['busy', 'open']);
          this.contentContainer.removeClass('is-sub-section-open');
          this.contentContainer.closest('.wp-full-overlay').addClass('section-open');
        } else {
          this.contentContainer.addClass(['busy', 'is-sub-section-open']);
          this.contentContainer.closest('.wp-full-overlay').addClass('section-open');
          this.contentContainer.removeClass('open');
        }
        const handleTransitionEnd = () => {
          this.contentContainer.removeClass('busy');
          args.completeCallback();
        };
        if (isReducedMotion) {
          handleTransitionEnd();
        } else {
          this.contentContainer.one('transitionend', handleTransitionEnd);
        }
      } else {
        super.onChangeExpanded(expanded, args);
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/filters/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/filters/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _move_to_sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move-to-sidebar */ "./node_modules/@wordpress/customize-widgets/build-module/filters/move-to-sidebar.js");
/* harmony import */ var _replace_media_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./replace-media-upload */ "./node_modules/@wordpress/customize-widgets/build-module/filters/replace-media-upload.js");
/* harmony import */ var _wide_widget_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wide-widget-display */ "./node_modules/@wordpress/customize-widgets/build-module/filters/wide-widget-display.js");
/**
 * Internal dependencies
 */





/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/filters/move-to-sidebar.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/filters/move-to-sidebar.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_sidebar_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sidebar-controls */ "./node_modules/@wordpress/customize-widgets/build-module/components/sidebar-controls/index.js");
/* harmony import */ var _components_focus_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/focus-control */ "./node_modules/@wordpress/customize-widgets/build-module/components/focus-control/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/customize-widgets/build-module/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */






const withMoveToSidebarToolbarItem = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.createHigherOrderComponent)(BlockEdit => props => {
  let widgetId = (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_4__.getWidgetIdFromBlock)(props);
  const sidebarControls = (0,_components_sidebar_controls__WEBPACK_IMPORTED_MODULE_5__.useSidebarControls)();
  const activeSidebarControl = (0,_components_sidebar_controls__WEBPACK_IMPORTED_MODULE_5__.useActiveSidebarControl)();
  const hasMultipleSidebars = sidebarControls?.length > 1;
  const blockName = props.name;
  const clientId = props.clientId;
  const canInsertBlockInSidebar = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    // Use an empty string to represent the root block list, which
    // in the customizer editor represents a sidebar/widget area.
    return select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).canInsertBlockType(blockName, '');
  }, [blockName]);
  const block = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store).getBlock(clientId), [clientId]);
  const {
    removeBlock
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.store);
  const [, focusWidget] = (0,_components_focus_control__WEBPACK_IMPORTED_MODULE_6__.useFocusControl)();
  function moveToSidebar(sidebarControlId) {
    const newSidebarControl = sidebarControls.find(sidebarControl => sidebarControl.id === sidebarControlId);
    if (widgetId) {
      /**
       * If there's a widgetId, move it to the other sidebar.
       */
      const oldSetting = activeSidebarControl.setting;
      const newSetting = newSidebarControl.setting;
      oldSetting(oldSetting().filter(id => id !== widgetId));
      newSetting([...newSetting(), widgetId]);
    } else {
      /**
       * If there isn't a widgetId, it's most likely a inner block.
       * First, remove the block in the original sidebar,
       * then, create a new widget in the new sidebar and get back its widgetId.
       */
      const sidebarAdapter = newSidebarControl.sidebarAdapter;
      removeBlock(clientId);
      const addedWidgetIds = sidebarAdapter.setWidgets([...sidebarAdapter.getWidgets(), (0,_utils__WEBPACK_IMPORTED_MODULE_7__.blockToWidget)(block)]);
      // The last non-null id is the added widget's id.
      widgetId = addedWidgetIds.reverse().find(id => !!id);
    }

    // Move focus to the moved widget and expand the sidebar.
    focusWidget(widgetId);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(BlockEdit, {
      ...props
    }, "edit"), hasMultipleSidebars && canInsertBlockInSidebar && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_4__.MoveToWidgetArea, {
        widgetAreas: sidebarControls.map(sidebarControl => ({
          id: sidebarControl.id,
          name: sidebarControl.params.label,
          description: sidebarControl.params.description
        })),
        currentWidgetAreaId: activeSidebarControl?.id,
        onSelect: moveToSidebar
      })
    })]
  });
}, 'withMoveToSidebarToolbarItem');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'core/customize-widgets/block-edit', withMoveToSidebarToolbarItem);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/filters/replace-media-upload.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/filters/replace-media-upload.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


const replaceMediaUpload = () => _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_1__.MediaUpload;
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('editor.MediaUpload', 'core/edit-widgets/replace-media-upload', replaceMediaUpload);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/filters/wide-widget-display.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/filters/wide-widget-display.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



const {
  wp
} = window;
const withWideWidgetDisplay = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.createHigherOrderComponent)(BlockEdit => props => {
  var _wp$customize$Widgets;
  const {
    idBase
  } = props.attributes;
  const isWide = (_wp$customize$Widgets = wp.customize.Widgets.data.availableWidgets.find(widget => widget.id_base === idBase)?.is_wide) !== null && _wp$customize$Widgets !== void 0 ? _wp$customize$Widgets : false;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlockEdit, {
    ...props,
    isWide: isWide
  }, "edit");
}, 'withWideWidgetDisplay');
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'core/customize-widgets/wide-widget-display', withWideWidgetDisplay);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/lock-unlock.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/lock-unlock.js ***!
  \*******************************************************************************/
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
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/customize-widgets');


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/actions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/actions.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setIsInserterOpened: () => (/* binding */ setIsInserterOpened)
/* harmony export */ });
/**
 * Returns an action object used to open/close the inserter.
 *
 * @param {boolean|Object} value                Whether the inserter should be
 *                                              opened (true) or closed (false).
 *                                              To specify an insertion point,
 *                                              use an object.
 * @param {string}         value.rootClientId   The root client ID to insert at.
 * @param {number}         value.insertionIndex The index to insert at.
 *
 * @example
 * ```js
 * import { useState } from 'react';
 * import { store as customizeWidgetsStore } from '@wordpress/customize-widgets';
 * import { __ } from '@wordpress/i18n';
 * import { useDispatch } from '@wordpress/data';
 * import { Button } from '@wordpress/components';
 *
 * const ExampleComponent = () => {
 *   const { setIsInserterOpened } = useDispatch( customizeWidgetsStore );
 *   const [ isOpen, setIsOpen ] = useState( false );
 *
 *    return (
 *        <Button
 *            onClick={ () => {
 *                setIsInserterOpened( ! isOpen );
 *                setIsOpen( ! isOpen );
 *            } }
 *        >
 *            { __( 'Open/close inserter' ) }
 *        </Button>
 *    );
 * };
 * ```
 *
 * @return {Object} Action object.
 */
function setIsInserterOpened(value) {
  return {
    type: 'SET_IS_INSERTER_OPENED',
    value
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/constants.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/constants.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   STORE_NAME: () => (/* binding */ STORE_NAME)
/* harmony export */ });
/**
 * Module Constants
 */
const STORE_NAME = 'core/customize-widgets';


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/customize-widgets/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/customize-widgets/build-module/store/actions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/customize-widgets/build-module/store/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * Block editor data store configuration.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#registering-a-store
 *
 * @type {Object}
 */
const storeConfig = {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__
};

/**
 * Store definition for the edit widgets namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(_constants__WEBPACK_IMPORTED_MODULE_4__.STORE_NAME, storeConfig);
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/reducer.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/reducer.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Reducer tracking whether the inserter is open.
 *
 * @param {boolean|Object} state
 * @param {Object}         action
 */
function blockInserterPanel(state = false, action) {
  switch (action.type) {
    case 'SET_IS_INSERTER_OPENED':
      return action.value;
  }
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  blockInserterPanel
}));


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/store/selectors.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __experimentalGetInsertionPoint: () => (/* binding */ __experimentalGetInsertionPoint),
/* harmony export */   isInserterOpened: () => (/* binding */ isInserterOpened)
/* harmony export */ });
const EMPTY_INSERTION_POINT = {
  rootClientId: undefined,
  insertionIndex: undefined
};

/**
 * Returns true if the inserter is opened.
 *
 * @param {Object} state Global application state.
 *
 * @example
 * ```js
 * import { store as customizeWidgetsStore } from '@wordpress/customize-widgets';
 * import { __ } from '@wordpress/i18n';
 * import { useSelect } from '@wordpress/data';
 *
 * const ExampleComponent = () => {
 *    const { isInserterOpened } = useSelect(
 *        ( select ) => select( customizeWidgetsStore ),
 *        []
 *    );
 *
 *    return isInserterOpened()
 *        ? __( 'Inserter is open' )
 *        : __( 'Inserter is closed.' );
 * };
 * ```
 *
 * @return {boolean} Whether the inserter is opened.
 */
function isInserterOpened(state) {
  return !!state.blockInserterPanel;
}

/**
 * Get the insertion point for the inserter.
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} The root client ID and index to insert at.
 */
function __experimentalGetInsertionPoint(state) {
  if (typeof state.blockInserterPanel === 'boolean') {
    return EMPTY_INSERTION_POINT;
  }
  return state.blockInserterPanel;
}


/***/ }),

/***/ "./node_modules/@wordpress/customize-widgets/build-module/utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blockToWidget: () => (/* binding */ blockToWidget),
/* harmony export */   settingIdToWidgetId: () => (/* binding */ settingIdToWidgetId),
/* harmony export */   widgetToBlock: () => (/* binding */ widgetToBlock)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__);
// @ts-check
/**
 * WordPress dependencies
 */



/**
 * Convert settingId to widgetId.
 *
 * @param {string} settingId The setting id.
 * @return {string} The widget id.
 */
function settingIdToWidgetId(settingId) {
  const matches = settingId.match(/^widget_(.+)(?:\[(\d+)\])$/);
  if (matches) {
    const idBase = matches[1];
    const number = parseInt(matches[2], 10);
    return `${idBase}-${number}`;
  }
  return settingId;
}

/**
 * Transform a block to a customizable widget.
 *
 * @param {WPBlock} block          The block to be transformed from.
 * @param {Object}  existingWidget The widget to be extended from.
 * @return {Object} The transformed widget.
 */
function blockToWidget(block, existingWidget = null) {
  let widget;
  const isValidLegacyWidgetBlock = block.name === 'core/legacy-widget' && (block.attributes.id || block.attributes.instance);
  if (isValidLegacyWidgetBlock) {
    if (block.attributes.id) {
      // Widget that does not extend WP_Widget.
      widget = {
        id: block.attributes.id
      };
    } else {
      const {
        encoded,
        hash,
        raw,
        ...rest
      } = block.attributes.instance;

      // Widget that extends WP_Widget.
      widget = {
        idBase: block.attributes.idBase,
        instance: {
          ...existingWidget?.instance,
          // Required only for the customizer.
          is_widget_customizer_js_value: true,
          encoded_serialized_instance: encoded,
          instance_hash_key: hash,
          raw_instance: raw,
          ...rest
        }
      };
    }
  } else {
    const instance = {
      content: (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.serialize)(block)
    };
    widget = {
      idBase: 'block',
      widgetClass: 'WP_Widget_Block',
      instance: {
        raw_instance: instance
      }
    };
  }
  const {
    form,
    rendered,
    ...restExistingWidget
  } = existingWidget || {};
  return {
    ...restExistingWidget,
    ...widget
  };
}

/**
 * Transform a widget to a block.
 *
 * @param {Object} widget          The widget to be transformed from.
 * @param {string} widget.id       The widget id.
 * @param {string} widget.idBase   The id base of the widget.
 * @param {number} widget.number   The number/index of the widget.
 * @param {Object} widget.instance The instance of the widget.
 * @return {WPBlock} The transformed block.
 */
function widgetToBlock({
  id,
  idBase,
  number,
  instance
}) {
  let block;
  const {
    encoded_serialized_instance: encoded,
    instance_hash_key: hash,
    raw_instance: raw,
    ...rest
  } = instance;
  if (idBase === 'block') {
    var _raw$content;
    const parsedBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.parse)((_raw$content = raw.content) !== null && _raw$content !== void 0 ? _raw$content : '', {
      __unstableSkipAutop: true
    });
    block = parsedBlocks.length ? parsedBlocks[0] : (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/paragraph', {});
  } else if (number) {
    // Widget that extends WP_Widget.
    block = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/legacy-widget', {
      idBase,
      instance: {
        encoded,
        hash,
        raw,
        ...rest
      }
    });
  } else {
    // Widget that does not extend WP_Widget.
    block = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.createBlock)('core/legacy-widget', {
      id
    });
  }
  return (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_1__.addWidgetIdToBlock)(block, id);
}


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/close-small.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/close-small.js ***!
  \***************************************************************************/
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


const closeSmall = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeSmall);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/external.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/external.js ***!
  \************************************************************************/
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


const external = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (external);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/more-vertical.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/more-vertical.js ***!
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


const moreVertical = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moreVertical);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/redo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/redo.js ***!
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


const redo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M15.6 6.5l-1.1 1 2.9 3.3H8c-.9 0-1.7.3-2.3.9-1.4 1.5-1.4 4.2-1.4 5.6v.2h1.5v-.3c0-1.1 0-3.5 1-4.5.3-.3.7-.5 1.3-.5h9.2L14.5 15l1.1 1.1 4.6-4.6-4.6-5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (redo);


/***/ }),

/***/ "./node_modules/@wordpress/icons/build-module/library/undo.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/undo.js ***!
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


const undo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M18.3 11.7c-.6-.6-1.4-.9-2.3-.9H6.7l2.9-3.3-1.1-1-4.5 5L8.5 16l1-1-2.7-2.7H16c.5 0 .9.2 1.3.5 1 1 1 3.4 1 4.5v.3h1.5v-.2c0-1.5 0-4.3-1.5-5.7z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (undo);


/***/ }),

/***/ "./node_modules/fast-deep-equal/es6/index.js":
/*!***************************************************!*\
  !*** ./node_modules/fast-deep-equal/es6/index.js ***!
  \***************************************************/
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst


  var envHasBigInt64Array = typeof BigInt64Array !== 'undefined';


module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }


    if ((a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      for (i of a.entries())
        if (!equal(i[1], b.get(i[0]))) return false;
      return true;
    }

    if ((a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      for (i of a.entries())
        if (!b.has(i[0])) return false;
      return true;
    }

    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }


    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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

/***/ "@wordpress/dom":
/*!*****************************!*\
  !*** external ["wp","dom"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["dom"];

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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/is-shallow-equal":
/*!****************************************!*\
  !*** external ["wp","isShallowEqual"] ***!
  \****************************************/
/***/ ((module) => {

module.exports = window["wp"]["isShallowEqual"];

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

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["mediaUtils"];

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
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/customize-widgets/build-module/index.js ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialize: () => (/* binding */ initialize),
/* harmony export */   store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_11__.store)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-library */ "@wordpress/block-library");
/* harmony import */ var _wordpress_block_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/widgets */ "@wordpress/widgets");
/* harmony import */ var _wordpress_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/preferences */ "@wordpress/preferences");
/* harmony import */ var _wordpress_preferences__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_customize_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customize-widgets */ "./node_modules/@wordpress/customize-widgets/build-module/components/customize-widgets/index.js");
/* harmony import */ var _controls_sidebar_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/sidebar-section */ "./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-section.js");
/* harmony import */ var _controls_sidebar_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/sidebar-control */ "./node_modules/@wordpress/customize-widgets/build-module/controls/sidebar-control.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters */ "./node_modules/@wordpress/customize-widgets/build-module/filters/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/customize-widgets/build-module/store/index.js");
/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */





const {
  wp
} = window;
const DISABLED_BLOCKS = ['core/more', 'core/block', 'core/freeform', 'core/template-part'];
const ENABLE_EXPERIMENTAL_FSE_BLOCKS = false;

/**
 * Initializes the widgets block editor in the customizer.
 *
 * @param {string} editorName          The editor name.
 * @param {Object} blockEditorSettings Block editor settings.
 */
function initialize(editorName, blockEditorSettings) {
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_preferences__WEBPACK_IMPORTED_MODULE_5__.store).setDefaults('core/customize-widgets', {
    fixedToolbar: false,
    welcomeGuide: true
  });
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.store).reapplyBlockTypeFilters();
  const coreBlocks = (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__.__experimentalGetCoreBlocks)().filter(block => {
    return !(DISABLED_BLOCKS.includes(block.name) || block.name.startsWith('core/post') || block.name.startsWith('core/query') || block.name.startsWith('core/site') || block.name.startsWith('core/navigation'));
  });
  (0,_wordpress_block_library__WEBPACK_IMPORTED_MODULE_1__.registerCoreBlocks)(coreBlocks);
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__.registerLegacyWidgetBlock)();
  if (false) {}
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__.registerLegacyWidgetVariations)(blockEditorSettings);
  (0,_wordpress_widgets__WEBPACK_IMPORTED_MODULE_2__.registerWidgetGroupBlock)();

  // As we are unregistering `core/freeform` to avoid the Classic block, we must
  // replace it with something as the default freeform content handler. Failure to
  // do this will result in errors in the default block parser.
  // see: https://github.com/WordPress/gutenberg/issues/33097
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.setFreeformContentHandlerName)('core/html');
  const SidebarControl = (0,_controls_sidebar_control__WEBPACK_IMPORTED_MODULE_8__["default"])(blockEditorSettings);
  wp.customize.sectionConstructor.sidebar = (0,_controls_sidebar_section__WEBPACK_IMPORTED_MODULE_7__["default"])();
  wp.customize.controlConstructor.sidebar_block_editor = SidebarControl;
  const container = document.createElement('div');
  document.body.appendChild(container);
  wp.customize.bind('ready', () => {
    const sidebarControls = [];
    wp.customize.control.each(control => {
      if (control instanceof SidebarControl) {
        sidebarControls.push(control);
      }
    });
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(container).render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.StrictMode, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_customize_widgets__WEBPACK_IMPORTED_MODULE_6__["default"], {
        api: wp.customize,
        sidebarControls: sidebarControls,
        blockEditorSettings: blockEditorSettings
      })
    }));
  });
}


})();

(window.wp = window.wp || {}).customizeWidgets = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=customize-widgets.js.map