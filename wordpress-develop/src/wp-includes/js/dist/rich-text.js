/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/rich-text/build-module/apply-format.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/apply-format.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyFormat: () => (/* binding */ applyFormat)
/* harmony export */ });
/* harmony import */ var _normalise_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalise-formats */ "./node_modules/@wordpress/rich-text/build-module/normalise-formats.js");
/**
 * Internal dependencies
 */



/** @typedef {import('./types').RichTextValue} RichTextValue */
/** @typedef {import('./types').RichTextFormat} RichTextFormat */

function replace(array, index, value) {
  array = array.slice();
  array[index] = value;
  return array;
}

/**
 * Apply a format object to a Rich Text value from the given `startIndex` to the
 * given `endIndex`. Indices are retrieved from the selection if none are
 * provided.
 *
 * @param {RichTextValue}  value        Value to modify.
 * @param {RichTextFormat} format       Format to apply.
 * @param {number}         [startIndex] Start index.
 * @param {number}         [endIndex]   End index.
 *
 * @return {RichTextValue} A new value with the format applied.
 */
function applyFormat(value, format, startIndex = value.start, endIndex = value.end) {
  const {
    formats,
    activeFormats
  } = value;
  const newFormats = formats.slice();

  // The selection is collapsed.
  if (startIndex === endIndex) {
    const startFormat = newFormats[startIndex]?.find(({
      type
    }) => type === format.type);

    // If the caret is at a format of the same type, expand start and end to
    // the edges of the format. This is useful to apply new attributes.
    if (startFormat) {
      const index = newFormats[startIndex].indexOf(startFormat);
      while (newFormats[startIndex] && newFormats[startIndex][index] === startFormat) {
        newFormats[startIndex] = replace(newFormats[startIndex], index, format);
        startIndex--;
      }
      endIndex++;
      while (newFormats[endIndex] && newFormats[endIndex][index] === startFormat) {
        newFormats[endIndex] = replace(newFormats[endIndex], index, format);
        endIndex++;
      }
    }
  } else {
    // Determine the highest position the new format can be inserted at.
    let position = +Infinity;
    for (let index = startIndex; index < endIndex; index++) {
      if (newFormats[index]) {
        newFormats[index] = newFormats[index].filter(({
          type
        }) => type !== format.type);
        const length = newFormats[index].length;
        if (length < position) {
          position = length;
        }
      } else {
        newFormats[index] = [];
        position = 0;
      }
    }
    for (let index = startIndex; index < endIndex; index++) {
      newFormats[index].splice(position, 0, format);
    }
  }
  return (0,_normalise_formats__WEBPACK_IMPORTED_MODULE_0__.normaliseFormats)({
    ...value,
    formats: newFormats,
    // Always revise active formats. This serves as a placeholder for new
    // inputs with the format so new input appears with the format applied,
    // and ensures a format of the same type uses the latest values.
    activeFormats: [...(activeFormats?.filter(({
      type
    }) => type !== format.type) || []), format]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/copy-handler.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/event-listeners/copy-handler.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _to_html_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../to-html-string */ "./node_modules/@wordpress/rich-text/build-module/to-html-string.js");
/* harmony import */ var _is_collapsed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../is-collapsed */ "./node_modules/@wordpress/rich-text/build-module/is-collapsed.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../slice */ "./node_modules/@wordpress/rich-text/build-module/slice.js");
/* harmony import */ var _get_text_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../get-text-content */ "./node_modules/@wordpress/rich-text/build-module/get-text-content.js");
/**
 * Internal dependencies
 */




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => element => {
  function onCopy(event) {
    const {
      record
    } = props.current;
    const {
      ownerDocument
    } = element;
    if ((0,_is_collapsed__WEBPACK_IMPORTED_MODULE_0__.isCollapsed)(record.current) || !element.contains(ownerDocument.activeElement)) {
      return;
    }
    const selectedRecord = (0,_slice__WEBPACK_IMPORTED_MODULE_1__.slice)(record.current);
    const plainText = (0,_get_text_content__WEBPACK_IMPORTED_MODULE_2__.getTextContent)(selectedRecord);
    const html = (0,_to_html_string__WEBPACK_IMPORTED_MODULE_3__.toHTMLString)({
      value: selectedRecord
    });
    event.clipboardData.setData('text/plain', plainText);
    event.clipboardData.setData('text/html', html);
    event.clipboardData.setData('rich-text', 'true');
    event.preventDefault();
    if (event.type === 'cut') {
      ownerDocument.execCommand('delete');
    }
  }
  const {
    defaultView
  } = element.ownerDocument;
  defaultView.addEventListener('copy', onCopy);
  defaultView.addEventListener('cut', onCopy);
  return () => {
    defaultView.removeEventListener('copy', onCopy);
    defaultView.removeEventListener('cut', onCopy);
  };
});


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/delete.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/event-listeners/delete.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../remove */ "./node_modules/@wordpress/rich-text/build-module/remove.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => element => {
  function onKeyDown(event) {
    const {
      keyCode
    } = event;
    const {
      createRecord,
      handleChange
    } = props.current;
    if (event.defaultPrevented) {
      return;
    }
    if (keyCode !== _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__.DELETE && keyCode !== _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__.BACKSPACE) {
      return;
    }
    const currentValue = createRecord();
    const {
      start,
      end,
      text
    } = currentValue;

    // Always handle full content deletion ourselves.
    if (start === 0 && end !== 0 && end === text.length) {
      handleChange((0,_remove__WEBPACK_IMPORTED_MODULE_1__.remove)(currentValue));
      event.preventDefault();
    }
  }
  element.addEventListener('keydown', onKeyDown);
  return () => {
    element.removeEventListener('keydown', onKeyDown);
  };
});


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/format-boundaries.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/event-listeners/format-boundaries.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/keycodes */ "@wordpress/keycodes");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_collapsed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../is-collapsed */ "./node_modules/@wordpress/rich-text/build-module/is-collapsed.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const EMPTY_ACTIVE_FORMATS = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => element => {
  function onKeyDown(event) {
    const {
      keyCode,
      shiftKey,
      altKey,
      metaKey,
      ctrlKey
    } = event;
    if (
    // Only override left and right keys without modifiers pressed.
    shiftKey || altKey || metaKey || ctrlKey || keyCode !== _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__.LEFT && keyCode !== _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__.RIGHT) {
      return;
    }
    const {
      record,
      applyRecord,
      forceRender
    } = props.current;
    const {
      text,
      formats,
      start,
      end,
      activeFormats: currentActiveFormats = []
    } = record.current;
    const collapsed = (0,_is_collapsed__WEBPACK_IMPORTED_MODULE_1__.isCollapsed)(record.current);
    const {
      ownerDocument
    } = element;
    const {
      defaultView
    } = ownerDocument;
    // To do: ideally, we should look at visual position instead.
    const {
      direction
    } = defaultView.getComputedStyle(element);
    const reverseKey = direction === 'rtl' ? _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__.RIGHT : _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_0__.LEFT;
    const isReverse = event.keyCode === reverseKey;

    // If the selection is collapsed and at the very start, do nothing if
    // navigating backward.
    // If the selection is collapsed and at the very end, do nothing if
    // navigating forward.
    if (collapsed && currentActiveFormats.length === 0) {
      if (start === 0 && isReverse) {
        return;
      }
      if (end === text.length && !isReverse) {
        return;
      }
    }

    // If the selection is not collapsed, let the browser handle collapsing
    // the selection for now. Later we could expand this logic to set
    // boundary positions if needed.
    if (!collapsed) {
      return;
    }
    const formatsBefore = formats[start - 1] || EMPTY_ACTIVE_FORMATS;
    const formatsAfter = formats[start] || EMPTY_ACTIVE_FORMATS;
    const destination = isReverse ? formatsBefore : formatsAfter;
    const isIncreasing = currentActiveFormats.every((format, index) => format === destination[index]);
    let newActiveFormatsLength = currentActiveFormats.length;
    if (!isIncreasing) {
      newActiveFormatsLength--;
    } else if (newActiveFormatsLength < destination.length) {
      newActiveFormatsLength++;
    }
    if (newActiveFormatsLength === currentActiveFormats.length) {
      record.current._newActiveFormats = destination;
      return;
    }
    event.preventDefault();
    const origin = isReverse ? formatsAfter : formatsBefore;
    const source = isIncreasing ? destination : origin;
    const newActiveFormats = source.slice(0, newActiveFormatsLength);
    const newValue = {
      ...record.current,
      activeFormats: newActiveFormats
    };
    record.current = newValue;
    applyRecord(newValue);
    forceRender();
  }
  element.addEventListener('keydown', onKeyDown);
  return () => {
    element.removeEventListener('keydown', onKeyDown);
  };
});


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/event-listeners/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventListeners: () => (/* binding */ useEventListeners)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _copy_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copy-handler */ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/copy-handler.js");
/* harmony import */ var _select_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-object */ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/select-object.js");
/* harmony import */ var _format_boundaries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./format-boundaries */ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/format-boundaries.js");
/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete */ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/delete.js");
/* harmony import */ var _input_and_selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-and-selection */ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/input-and-selection.js");
/* harmony import */ var _selection_change_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selection-change-compat */ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/selection-change-compat.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */






const allEventListeners = [_copy_handler__WEBPACK_IMPORTED_MODULE_2__["default"], _select_object__WEBPACK_IMPORTED_MODULE_3__["default"], _format_boundaries__WEBPACK_IMPORTED_MODULE_4__["default"], _delete__WEBPACK_IMPORTED_MODULE_5__["default"], _input_and_selection__WEBPACK_IMPORTED_MODULE_6__["default"], _selection_change_compat__WEBPACK_IMPORTED_MODULE_7__["default"]];
function useEventListeners(props) {
  const propsRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(props);
  propsRef.current = props;
  const refEffects = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => allEventListeners.map(refEffect => refEffect(propsRef)), [propsRef]);
  return (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useRefEffect)(element => {
    const cleanups = refEffects.map(effect => effect(element));
    return () => {
      cleanups.forEach(cleanup => cleanup());
    };
  }, [refEffects]);
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/input-and-selection.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/event-listeners/input-and-selection.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _get_active_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../get-active-formats */ "./node_modules/@wordpress/rich-text/build-module/get-active-formats.js");
/* harmony import */ var _update_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../update-formats */ "./node_modules/@wordpress/rich-text/build-module/update-formats.js");
/**
 * Internal dependencies
 */



/**
 * All inserting input types that would insert HTML into the DOM.
 *
 * @see https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes
 *
 * @type {Set}
 */
const INSERTION_INPUT_TYPES_TO_IGNORE = new Set(['insertParagraph', 'insertOrderedList', 'insertUnorderedList', 'insertHorizontalRule', 'insertLink']);
const EMPTY_ACTIVE_FORMATS = [];
const PLACEHOLDER_ATTR_NAME = 'data-rich-text-placeholder';

/**
 * If the selection is set on the placeholder element, collapse the selection to
 * the start (before the placeholder).
 *
 * @param {Window} defaultView
 */
function fixPlaceholderSelection(defaultView) {
  const selection = defaultView.getSelection();
  const {
    anchorNode,
    anchorOffset
  } = selection;
  if (anchorNode.nodeType !== anchorNode.ELEMENT_NODE) {
    return;
  }
  const targetNode = anchorNode.childNodes[anchorOffset];
  if (!targetNode || targetNode.nodeType !== targetNode.ELEMENT_NODE || !targetNode.hasAttribute(PLACEHOLDER_ATTR_NAME)) {
    return;
  }
  selection.collapseToStart();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => element => {
  const {
    ownerDocument
  } = element;
  const {
    defaultView
  } = ownerDocument;
  let isComposing = false;
  function onInput(event) {
    // Do not trigger a change if characters are being composed. Browsers
    // will usually emit a final `input` event when the characters are
    // composed. As of December 2019, Safari doesn't support
    // nativeEvent.isComposing.
    if (isComposing) {
      return;
    }
    let inputType;
    if (event) {
      inputType = event.inputType;
    }
    const {
      record,
      applyRecord,
      createRecord,
      handleChange
    } = props.current;

    // The browser formatted something or tried to insert HTML. Overwrite
    // it. It will be handled later by the format library if needed.
    if (inputType && (inputType.indexOf('format') === 0 || INSERTION_INPUT_TYPES_TO_IGNORE.has(inputType))) {
      applyRecord(record.current);
      return;
    }
    const currentValue = createRecord();
    const {
      start,
      activeFormats: oldActiveFormats = []
    } = record.current;

    // Update the formats between the last and new caret position.
    const change = (0,_update_formats__WEBPACK_IMPORTED_MODULE_0__.updateFormats)({
      value: currentValue,
      start,
      end: currentValue.start,
      formats: oldActiveFormats
    });
    handleChange(change);
  }

  /**
   * Syncs the selection to local state. A callback for the `selectionchange`
   * event.
   */
  function handleSelectionChange() {
    const {
      record,
      applyRecord,
      createRecord,
      onSelectionChange
    } = props.current;

    // Check if the implementor disabled editing. `contentEditable` does
    // disable input, but not text selection, so we must ignore selection
    // changes.
    if (element.contentEditable !== 'true') {
      return;
    }

    // Ensure the active element is the rich text element.
    if (ownerDocument.activeElement !== element) {
      // If it is not, we can stop listening for selection changes. We
      // resume listening when the element is focused.
      ownerDocument.removeEventListener('selectionchange', handleSelectionChange);
      return;
    }

    // In case of a keyboard event, ignore selection changes during
    // composition.
    if (isComposing) {
      return;
    }
    const {
      start,
      end,
      text
    } = createRecord();
    const oldRecord = record.current;

    // Fallback mechanism for IE11, which doesn't support the input event.
    // Any input results in a selection change.
    if (text !== oldRecord.text) {
      onInput();
      return;
    }
    if (start === oldRecord.start && end === oldRecord.end) {
      // Sometimes the browser may set the selection on the placeholder
      // element, in which case the caret is not visible. We need to set
      // the caret before the placeholder if that's the case.
      if (oldRecord.text.length === 0 && start === 0) {
        fixPlaceholderSelection(defaultView);
      }
      return;
    }
    const newValue = {
      ...oldRecord,
      start,
      end,
      // _newActiveFormats may be set on arrow key navigation to control
      // the right boundary position. If undefined, getActiveFormats will
      // give the active formats according to the browser.
      activeFormats: oldRecord._newActiveFormats,
      _newActiveFormats: undefined
    };
    const newActiveFormats = (0,_get_active_formats__WEBPACK_IMPORTED_MODULE_1__.getActiveFormats)(newValue, EMPTY_ACTIVE_FORMATS);

    // Update the value with the new active formats.
    newValue.activeFormats = newActiveFormats;

    // It is important that the internal value is updated first,
    // otherwise the value will be wrong on render!
    record.current = newValue;
    applyRecord(newValue, {
      domOnly: true
    });
    onSelectionChange(start, end);
  }
  function onCompositionStart() {
    isComposing = true;
    // Do not update the selection when characters are being composed as
    // this rerenders the component and might destroy internal browser
    // editing state.
    ownerDocument.removeEventListener('selectionchange', handleSelectionChange);
    // Remove the placeholder. Since the rich text value doesn't update
    // during composition, the placeholder doesn't get removed. There's no
    // need to re-add it, when the value is updated on compositionend it
    // will be re-added when the value is empty.
    element.querySelector(`[${PLACEHOLDER_ATTR_NAME}]`)?.remove();
  }
  function onCompositionEnd() {
    isComposing = false;
    // Ensure the value is up-to-date for browsers that don't emit a final
    // input event after composition.
    onInput({
      inputType: 'insertText'
    });
    // Tracking selection changes can be resumed.
    ownerDocument.addEventListener('selectionchange', handleSelectionChange);
  }
  function onFocus() {
    const {
      record,
      isSelected,
      onSelectionChange,
      applyRecord
    } = props.current;

    // When the whole editor is editable, let writing flow handle
    // selection.
    if (element.parentElement.closest('[contenteditable="true"]')) {
      return;
    }
    if (!isSelected) {
      // We know for certain that on focus, the old selection is invalid.
      // It will be recalculated on the next mouseup, keyup, or touchend
      // event.
      const index = undefined;
      record.current = {
        ...record.current,
        start: index,
        end: index,
        activeFormats: EMPTY_ACTIVE_FORMATS
      };
    } else {
      applyRecord(record.current, {
        domOnly: true
      });
    }
    onSelectionChange(record.current.start, record.current.end);

    // There is no selection change event when the element is focused, so
    // we need to manually trigger it. The selection is also not available
    // yet in this call stack.
    window.queueMicrotask(handleSelectionChange);
    ownerDocument.addEventListener('selectionchange', handleSelectionChange);
  }
  element.addEventListener('input', onInput);
  element.addEventListener('compositionstart', onCompositionStart);
  element.addEventListener('compositionend', onCompositionEnd);
  element.addEventListener('focus', onFocus);
  return () => {
    element.removeEventListener('input', onInput);
    element.removeEventListener('compositionstart', onCompositionStart);
    element.removeEventListener('compositionend', onCompositionEnd);
    element.removeEventListener('focus', onFocus);
  };
});


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/select-object.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/event-listeners/select-object.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => element => {
  function onClick(event) {
    const {
      target
    } = event;

    // If the child element has no text content, it must be an object.
    if (target === element || target.textContent && target.isContentEditable) {
      return;
    }
    const {
      ownerDocument
    } = target;
    const {
      defaultView
    } = ownerDocument;
    const selection = defaultView.getSelection();

    // If it's already selected, do nothing and let default behavior happen.
    // This means it's "click-through".
    if (selection.containsNode(target)) {
      return;
    }
    const range = ownerDocument.createRange();
    // If the target is within a non editable element, select the non
    // editable element.
    const nodeToSelect = target.isContentEditable ? target : target.closest('[contenteditable]');
    range.selectNode(nodeToSelect);
    selection.removeAllRanges();
    selection.addRange(range);
    event.preventDefault();
  }
  function onFocusIn(event) {
    // When there is incoming focus from a link, select the object.
    if (event.relatedTarget && !element.contains(event.relatedTarget) && event.relatedTarget.tagName === 'A') {
      onClick(event);
    }
  }
  element.addEventListener('click', onClick);
  element.addEventListener('focusin', onFocusIn);
  return () => {
    element.removeEventListener('click', onClick);
    element.removeEventListener('focusin', onFocusIn);
  };
});


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/selection-change-compat.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/event-listeners/selection-change-compat.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _is_range_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../is-range-equal */ "./node_modules/@wordpress/rich-text/build-module/is-range-equal.js");
/**
 * Internal dependencies
 */


/**
 * Sometimes some browsers are not firing a `selectionchange` event when
 * changing the selection by mouse or keyboard. This hook makes sure that, if we
 * detect no `selectionchange` or `input` event between the up and down events,
 * we fire a `selectionchange` event.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => element => {
  const {
    ownerDocument
  } = element;
  const {
    defaultView
  } = ownerDocument;
  const selection = defaultView?.getSelection();
  let range;
  function getRange() {
    return selection.rangeCount ? selection.getRangeAt(0) : null;
  }
  function onDown(event) {
    const type = event.type === 'keydown' ? 'keyup' : 'pointerup';
    function onCancel() {
      ownerDocument.removeEventListener(type, onUp);
      ownerDocument.removeEventListener('selectionchange', onCancel);
      ownerDocument.removeEventListener('input', onCancel);
    }
    function onUp() {
      onCancel();
      if ((0,_is_range_equal__WEBPACK_IMPORTED_MODULE_0__.isRangeEqual)(range, getRange())) {
        return;
      }
      ownerDocument.dispatchEvent(new Event('selectionchange'));
    }
    ownerDocument.addEventListener(type, onUp);
    ownerDocument.addEventListener('selectionchange', onCancel);
    ownerDocument.addEventListener('input', onCancel);
    range = getRange();
  }
  element.addEventListener('pointerdown', onDown);
  element.addEventListener('keydown', onDown);
  return () => {
    element.removeEventListener('pointerdown', onDown);
    element.removeEventListener('keydown', onDown);
  };
});


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ __experimentalRichText),
/* harmony export */   useRichText: () => (/* binding */ useRichText)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create */ "./node_modules/@wordpress/rich-text/build-module/create.js");
/* harmony import */ var _to_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../to-dom */ "./node_modules/@wordpress/rich-text/build-module/to-dom.js");
/* harmony import */ var _to_html_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../to-html-string */ "./node_modules/@wordpress/rich-text/build-module/to-html-string.js");
/* harmony import */ var _use_default_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./use-default-style */ "./node_modules/@wordpress/rich-text/build-module/component/use-default-style.js");
/* harmony import */ var _use_boundary_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./use-boundary-style */ "./node_modules/@wordpress/rich-text/build-module/component/use-boundary-style.js");
/* harmony import */ var _event_listeners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-listeners */ "./node_modules/@wordpress/rich-text/build-module/component/event-listeners/index.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */






function useRichText({
  value = '',
  selectionStart,
  selectionEnd,
  placeholder,
  onSelectionChange,
  preserveWhiteSpace,
  onChange,
  __unstableDisableFormats: disableFormats,
  __unstableIsSelected: isSelected,
  __unstableDependencies = [],
  __unstableAfterParse,
  __unstableBeforeSerialize,
  __unstableAddInvisibleFormats
}) {
  const registry = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useRegistry)();
  const [, forceRender] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useReducer)(() => ({}));
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  function createRecord() {
    const {
      ownerDocument: {
        defaultView
      }
    } = ref.current;
    const selection = defaultView.getSelection();
    const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    return (0,_create__WEBPACK_IMPORTED_MODULE_3__.create)({
      element: ref.current,
      range,
      __unstableIsEditableTree: true
    });
  }
  function applyRecord(newRecord, {
    domOnly
  } = {}) {
    (0,_to_dom__WEBPACK_IMPORTED_MODULE_4__.apply)({
      value: newRecord,
      current: ref.current,
      prepareEditableTree: __unstableAddInvisibleFormats,
      __unstableDomOnly: domOnly,
      placeholder
    });
  }

  // Internal values are updated synchronously, unlike props and state.
  const _valueRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  const recordRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  function setRecordFromProps() {
    _valueRef.current = value;
    recordRef.current = value;
    if (!(value instanceof _create__WEBPACK_IMPORTED_MODULE_3__.RichTextData)) {
      recordRef.current = value ? _create__WEBPACK_IMPORTED_MODULE_3__.RichTextData.fromHTMLString(value, {
        preserveWhiteSpace
      }) : _create__WEBPACK_IMPORTED_MODULE_3__.RichTextData.empty();
    }
    // To do: make rich text internally work with RichTextData.
    recordRef.current = {
      text: recordRef.current.text,
      formats: recordRef.current.formats,
      replacements: recordRef.current.replacements
    };
    if (disableFormats) {
      recordRef.current.formats = Array(value.length);
      recordRef.current.replacements = Array(value.length);
    }
    if (__unstableAfterParse) {
      recordRef.current.formats = __unstableAfterParse(recordRef.current);
    }
    recordRef.current.start = selectionStart;
    recordRef.current.end = selectionEnd;
  }
  const hadSelectionUpdateRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  if (!recordRef.current) {
    hadSelectionUpdateRef.current = isSelected;
    setRecordFromProps();
  } else if (selectionStart !== recordRef.current.start || selectionEnd !== recordRef.current.end) {
    hadSelectionUpdateRef.current = isSelected;
    recordRef.current = {
      ...recordRef.current,
      start: selectionStart,
      end: selectionEnd,
      activeFormats: undefined
    };
  }

  /**
   * Sync the value to global state. The node tree and selection will also be
   * updated if differences are found.
   *
   * @param {Object} newRecord The record to sync and apply.
   */
  function handleChange(newRecord) {
    recordRef.current = newRecord;
    applyRecord(newRecord);
    if (disableFormats) {
      _valueRef.current = newRecord.text;
    } else {
      const newFormats = __unstableBeforeSerialize ? __unstableBeforeSerialize(newRecord) : newRecord.formats;
      newRecord = {
        ...newRecord,
        formats: newFormats
      };
      if (typeof value === 'string') {
        _valueRef.current = (0,_to_html_string__WEBPACK_IMPORTED_MODULE_5__.toHTMLString)({
          value: newRecord,
          preserveWhiteSpace
        });
      } else {
        _valueRef.current = new _create__WEBPACK_IMPORTED_MODULE_3__.RichTextData(newRecord);
      }
    }
    const {
      start,
      end,
      formats,
      text
    } = recordRef.current;

    // Selection must be updated first, so it is recorded in history when
    // the content change happens.
    // We batch both calls to only attempt to rerender once.
    registry.batch(() => {
      onSelectionChange(start, end);
      onChange(_valueRef.current, {
        __unstableFormats: formats,
        __unstableText: text
      });
    });
    forceRender();
  }
  function applyFromProps() {
    setRecordFromProps();
    applyRecord(recordRef.current);
  }
  const didMountRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);

  // Value updates must happen synchonously to avoid overwriting newer values.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (didMountRef.current && value !== _valueRef.current) {
      applyFromProps();
      forceRender();
    }
  }, [value]);

  // Value updates must happen synchonously to avoid overwriting newer values.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!hadSelectionUpdateRef.current) {
      return;
    }
    if (ref.current.ownerDocument.activeElement !== ref.current) {
      ref.current.focus();
    }
    applyRecord(recordRef.current);
    hadSelectionUpdateRef.current = false;
  }, [hadSelectionUpdateRef.current]);
  const mergedRefs = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useMergeRefs)([ref, (0,_use_default_style__WEBPACK_IMPORTED_MODULE_6__.useDefaultStyle)(), (0,_use_boundary_style__WEBPACK_IMPORTED_MODULE_7__.useBoundaryStyle)({
    record: recordRef
  }), (0,_event_listeners__WEBPACK_IMPORTED_MODULE_8__.useEventListeners)({
    record: recordRef,
    handleChange,
    applyRecord,
    createRecord,
    isSelected,
    onSelectionChange,
    forceRender
  }), (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__.useRefEffect)(() => {
    applyFromProps();
    didMountRef.current = true;
  }, [placeholder, ...__unstableDependencies])]);
  return {
    value: recordRef.current,
    // A function to get the most recent value so event handlers in
    // useRichText implementations have access to it. For example when
    // listening to input events, we internally update the state, but this
    // state is not yet available to the input event handler because React
    // may re-render asynchronously.
    getValue: () => recordRef.current,
    onChange: handleChange,
    ref: mergedRefs
  };
}
function __experimentalRichText() {}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/use-anchor-ref.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/use-anchor-ref.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAnchorRef: () => (/* binding */ useAnchorRef)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_active_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-active-format */ "./node_modules/@wordpress/rich-text/build-module/get-active-format.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * @template T
 * @typedef {import('@wordpress/element').RefObject<T>} RefObject<T>
 */
/** @typedef {import('../register-format-type').WPFormat} WPFormat */
/** @typedef {import('../types').RichTextValue} RichTextValue */

/**
 * This hook, to be used in a format type's Edit component, returns the active
 * element that is formatted, or the selection range if no format is active.
 * The returned value is meant to be used for positioning UI, e.g. by passing it
 * to the `Popover` component.
 *
 * @param {Object}                 $1          Named parameters.
 * @param {RefObject<HTMLElement>} $1.ref      React ref of the element
 *                                             containing  the editable content.
 * @param {RichTextValue}          $1.value    Value to check for selection.
 * @param {WPFormat}               $1.settings The format type's settings.
 *
 * @return {Element|Range} The active element or selection range.
 */
function useAnchorRef({
  ref,
  value,
  settings = {}
}) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_1___default()('`useAnchorRef` hook', {
    since: '6.1',
    alternative: '`useAnchor` hook'
  });
  const {
    tagName,
    className,
    name
  } = settings;
  const activeFormat = name ? (0,_get_active_format__WEBPACK_IMPORTED_MODULE_2__.getActiveFormat)(value, name) : undefined;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!ref.current) {
      return;
    }
    const {
      ownerDocument: {
        defaultView
      }
    } = ref.current;
    const selection = defaultView.getSelection();
    if (!selection.rangeCount) {
      return;
    }
    const range = selection.getRangeAt(0);
    if (!activeFormat) {
      return range;
    }
    let element = range.startContainer;

    // If the caret is right before the element, select the next element.
    element = element.nextElementSibling || element;
    while (element.nodeType !== element.ELEMENT_NODE) {
      element = element.parentNode;
    }
    return element.closest(tagName + (className ? '.' + className : ''));
  }, [activeFormat, value.start, value.end, tagName, className]);
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/use-anchor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/use-anchor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAnchor: () => (/* binding */ useAnchor)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



/** @typedef {import('../register-format-type').WPFormat} WPFormat */
/** @typedef {import('../types').RichTextValue} RichTextValue */

/**
 * Given a range and a format tag name and class name, returns the closest
 * format element.
 *
 * @param {Range}       range                  The Range to check.
 * @param {HTMLElement} editableContentElement The editable wrapper.
 * @param {string}      tagName                The tag name of the format element.
 * @param {string}      className              The class name of the format element.
 *
 * @return {HTMLElement|undefined} The format element, if found.
 */
function getFormatElement(range, editableContentElement, tagName, className) {
  let element = range.startContainer;

  // Even if the active format is defined, the actualy DOM range's start
  // container may be outside of the format's DOM element:
  // `a‸<strong>b</strong>` (DOM) while visually it's `a<strong>‸b</strong>`.
  // So at a given selection index, start with the deepest format DOM element.
  if (element.nodeType === element.TEXT_NODE && range.startOffset === element.length && element.nextSibling) {
    element = element.nextSibling;
    while (element.firstChild) {
      element = element.firstChild;
    }
  }
  if (element.nodeType !== element.ELEMENT_NODE) {
    element = element.parentElement;
  }
  if (!element) {
    return;
  }
  if (element === editableContentElement) {
    return;
  }
  if (!editableContentElement.contains(element)) {
    return;
  }
  const selector = tagName + (className ? '.' + className : '');

  // .closest( selector ), but with a boundary. Check if the element matches
  // the selector. If it doesn't match, try the parent element if it's not the
  // editable wrapper. We don't want to try to match ancestors of the editable
  // wrapper, which is what .closest( selector ) would do. When the element is
  // the editable wrapper (which is most likely the case because most text is
  // unformatted), this never runs.
  while (element !== editableContentElement) {
    if (element.matches(selector)) {
      return element;
    }
    element = element.parentElement;
  }
}

/**
 * @typedef {Object} VirtualAnchorElement
 * @property {() => DOMRect} getBoundingClientRect A function returning a DOMRect
 * @property {HTMLElement}   contextElement        The actual DOM element
 */

/**
 * Creates a virtual anchor element for a range.
 *
 * @param {Range}       range                  The range to create a virtual anchor element for.
 * @param {HTMLElement} editableContentElement The editable wrapper.
 *
 * @return {VirtualAnchorElement} The virtual anchor element.
 */
function createVirtualAnchorElement(range, editableContentElement) {
  return {
    contextElement: editableContentElement,
    getBoundingClientRect() {
      return editableContentElement.contains(range.startContainer) ? range.getBoundingClientRect() : editableContentElement.getBoundingClientRect();
    }
  };
}

/**
 * Get the anchor: a format element if there is a matching one based on the
 * tagName and className or a range otherwise.
 *
 * @param {HTMLElement} editableContentElement The editable wrapper.
 * @param {string}      tagName                The tag name of the format
 *                                             element.
 * @param {string}      className              The class name of the format
 *                                             element.
 *
 * @return {HTMLElement|VirtualAnchorElement|undefined} The anchor.
 */
function getAnchor(editableContentElement, tagName, className) {
  if (!editableContentElement) {
    return;
  }
  const {
    ownerDocument
  } = editableContentElement;
  const {
    defaultView
  } = ownerDocument;
  const selection = defaultView.getSelection();
  if (!selection) {
    return;
  }
  if (!selection.rangeCount) {
    return;
  }
  const range = selection.getRangeAt(0);
  if (!range || !range.startContainer) {
    return;
  }
  const formatElement = getFormatElement(range, editableContentElement, tagName, className);
  if (formatElement) {
    return formatElement;
  }
  return createVirtualAnchorElement(range, editableContentElement);
}

/**
 * This hook, to be used in a format type's Edit component, returns the active
 * element that is formatted, or a virtual element for the selection range if
 * no format is active. The returned value is meant to be used for positioning
 * UI, e.g. by passing it to the `Popover` component via the `anchor` prop.
 *
 * @param {Object}           $1                        Named parameters.
 * @param {HTMLElement|null} $1.editableContentElement The element containing
 *                                                     the editable content.
 * @param {WPFormat=}        $1.settings               The format type's settings.
 * @return {Element|VirtualAnchorElement|undefined|null} The active element or selection range.
 */
function useAnchor({
  editableContentElement,
  settings = {}
}) {
  const {
    tagName,
    className,
    isActive
  } = settings;
  const [anchor, setAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(() => getAnchor(editableContentElement, tagName, className));
  const wasActive = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.usePrevious)(isActive);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    if (!editableContentElement) {
      return;
    }
    function callback() {
      setAnchor(getAnchor(editableContentElement, tagName, className));
    }
    function attach() {
      ownerDocument.addEventListener('selectionchange', callback);
    }
    function detach() {
      ownerDocument.removeEventListener('selectionchange', callback);
    }
    const {
      ownerDocument
    } = editableContentElement;
    if (editableContentElement === ownerDocument.activeElement ||
    // When a link is created, we need to attach the popover to the newly created anchor.
    !wasActive && isActive ||
    // Sometimes we're _removing_ an active anchor, such as the inline color popover.
    // When we add the color, it switches from a virtual anchor to a `<mark>` element.
    // When we _remove_ the color, it switches from a `<mark>` element to a virtual anchor.
    wasActive && !isActive) {
      setAnchor(getAnchor(editableContentElement, tagName, className));
      attach();
    }
    editableContentElement.addEventListener('focusin', attach);
    editableContentElement.addEventListener('focusout', detach);
    return () => {
      detach();
      editableContentElement.removeEventListener('focusin', attach);
      editableContentElement.removeEventListener('focusout', detach);
    };
  }, [editableContentElement, tagName, className, isActive, wasActive]);
  return anchor;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/use-boundary-style.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/use-boundary-style.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useBoundaryStyle: () => (/* binding */ useBoundaryStyle)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/*
 * Calculates and renders the format boundary style when the active formats
 * change.
 */
function useBoundaryStyle({
  record
}) {
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    activeFormats = [],
    replacements,
    start
  } = record.current;
  const activeReplacement = replacements[start];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // There's no need to recalculate the boundary styles if no formats are
    // active, because no boundary styles will be visible.
    if ((!activeFormats || !activeFormats.length) && !activeReplacement) {
      return;
    }
    const boundarySelector = '*[data-rich-text-format-boundary]';
    const element = ref.current.querySelector(boundarySelector);
    if (!element) {
      return;
    }
    const {
      ownerDocument
    } = element;
    const {
      defaultView
    } = ownerDocument;
    const computedStyle = defaultView.getComputedStyle(element);
    const newColor = computedStyle.color.replace(')', ', 0.2)').replace('rgb', 'rgba');
    const selector = `.rich-text:focus ${boundarySelector}`;
    const rule = `background-color: ${newColor}`;
    const style = `${selector} {${rule}}`;
    const globalStyleId = 'rich-text-boundary-style';
    let globalStyle = ownerDocument.getElementById(globalStyleId);
    if (!globalStyle) {
      globalStyle = ownerDocument.createElement('style');
      globalStyle.id = globalStyleId;
      ownerDocument.head.appendChild(globalStyle);
    }
    if (globalStyle.innerHTML !== style) {
      globalStyle.innerHTML = style;
    }
  }, [activeFormats, activeReplacement]);
  return ref;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/component/use-default-style.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/component/use-default-style.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDefaultStyle: () => (/* binding */ useDefaultStyle)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * In HTML, leading and trailing spaces are not visible, and multiple spaces
 * elsewhere are visually reduced to one space. This rule prevents spaces from
 * collapsing so all space is visible in the editor and can be removed. It also
 * prevents some browsers from inserting non-breaking spaces at the end of a
 * line to prevent the space from visually disappearing. Sometimes these non
 * breaking spaces can linger in the editor causing unwanted non breaking spaces
 * in between words. If also prevent Firefox from inserting a trailing `br` node
 * to visualise any trailing space, causing the element to be saved.
 *
 * > Authors are encouraged to set the 'white-space' property on editing hosts
 * > and on markup that was originally created through these editing mechanisms
 * > to the value 'pre-wrap'. Default HTML whitespace handling is not well
 * > suited to WYSIWYG editing, and line wrapping will not work correctly in
 * > some corner cases if 'white-space' is left at its default value.
 *
 * https://html.spec.whatwg.org/multipage/interaction.html#best-practices-for-in-page-editors
 *
 * @type {string}
 */
const whiteSpace = 'pre-wrap';

/**
 * A minimum width of 1px will prevent the rich text container from collapsing
 * to 0 width and hiding the caret. This is useful for inline containers.
 */
const minWidth = '1px';
function useDefaultStyle() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(element => {
    if (!element) {
      return;
    }
    element.style.whiteSpace = whiteSpace;
    element.style.minWidth = minWidth;
  }, []);
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/concat.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/concat.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concat: () => (/* binding */ concat),
/* harmony export */   mergePair: () => (/* binding */ mergePair)
/* harmony export */ });
/* harmony import */ var _normalise_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalise-formats */ "./node_modules/@wordpress/rich-text/build-module/normalise-formats.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/@wordpress/rich-text/build-module/create.js");
/**
 * Internal dependencies
 */




/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Concats a pair of rich text values. Not that this mutates `a` and does NOT
 * normalise formats!
 *
 * @param {Object} a Value to mutate.
 * @param {Object} b Value to add read from.
 *
 * @return {Object} `a`, mutated.
 */
function mergePair(a, b) {
  a.formats = a.formats.concat(b.formats);
  a.replacements = a.replacements.concat(b.replacements);
  a.text += b.text;
  return a;
}

/**
 * Combine all Rich Text values into one. This is similar to
 * `String.prototype.concat`.
 *
 * @param {...RichTextValue} values Objects to combine.
 *
 * @return {RichTextValue} A new value combining all given records.
 */
function concat(...values) {
  return (0,_normalise_formats__WEBPACK_IMPORTED_MODULE_0__.normaliseFormats)(values.reduce(mergePair, (0,_create__WEBPACK_IMPORTED_MODULE_1__.create)()));
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/create-element.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/create-element.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
/**
 * Parse the given HTML into a body element.
 *
 * Note: The current implementation will return a shared reference, reset on
 * each call to `createElement`. Therefore, you should not hold a reference to
 * the value to operate upon asynchronously, as it may have unexpected results.
 *
 * @param {HTMLDocument} document The HTML document to use to parse.
 * @param {string}       html     The HTML to parse.
 *
 * @return {HTMLBodyElement} Body element with parsed HTML.
 */
function createElement({
  implementation
}, html) {
  // Because `createHTMLDocument` is an expensive operation, and with this
  // function being internal to `rich-text` (full control in avoiding a risk
  // of asynchronous operations on the shared reference), a single document
  // is reused and reset for each call to the function.
  if (!createElement.body) {
    createElement.body = implementation.createHTMLDocument('').body;
  }
  createElement.body.innerHTML = html;
  return createElement.body;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/create.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/create.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RichTextData: () => (/* binding */ RichTextData),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   removeReservedCharacters: () => (/* binding */ removeReservedCharacters)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/rich-text/build-module/store/index.js");
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-element */ "./node_modules/@wordpress/rich-text/build-module/create-element.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./concat */ "./node_modules/@wordpress/rich-text/build-module/concat.js");
/* harmony import */ var _special_characters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./special-characters */ "./node_modules/@wordpress/rich-text/build-module/special-characters.js");
/* harmony import */ var _to_html_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-html-string */ "./node_modules/@wordpress/rich-text/build-module/to-html-string.js");
/* harmony import */ var _get_text_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-text-content */ "./node_modules/@wordpress/rich-text/build-module/get-text-content.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */







/** @typedef {import('./types').RichTextValue} RichTextValue */

function createEmptyValue() {
  return {
    formats: [],
    replacements: [],
    text: ''
  };
}
function toFormat({
  tagName,
  attributes
}) {
  let formatType;
  if (attributes && attributes.class) {
    formatType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store__WEBPACK_IMPORTED_MODULE_1__.store).getFormatTypeForClassName(attributes.class);
    if (formatType) {
      // Preserve any additional classes.
      attributes.class = ` ${attributes.class} `.replace(` ${formatType.className} `, ' ').trim();
      if (!attributes.class) {
        delete attributes.class;
      }
    }
  }
  if (!formatType) {
    formatType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store__WEBPACK_IMPORTED_MODULE_1__.store).getFormatTypeForBareElement(tagName);
  }
  if (!formatType) {
    return attributes ? {
      type: tagName,
      attributes
    } : {
      type: tagName
    };
  }
  if (formatType.__experimentalCreatePrepareEditableTree && !formatType.__experimentalCreateOnChangeEditableValue) {
    return null;
  }
  if (!attributes) {
    return {
      formatType,
      type: formatType.name,
      tagName
    };
  }
  const registeredAttributes = {};
  const unregisteredAttributes = {};
  const _attributes = {
    ...attributes
  };
  for (const key in formatType.attributes) {
    const name = formatType.attributes[key];
    registeredAttributes[key] = _attributes[name];

    // delete the attribute and what's left is considered
    // to be unregistered.
    delete _attributes[name];
    if (typeof registeredAttributes[key] === 'undefined') {
      delete registeredAttributes[key];
    }
  }
  for (const name in _attributes) {
    unregisteredAttributes[name] = attributes[name];
  }
  if (formatType.contentEditable === false) {
    delete unregisteredAttributes.contenteditable;
  }
  return {
    formatType,
    type: formatType.name,
    tagName,
    attributes: registeredAttributes,
    unregisteredAttributes
  };
}

/**
 * The RichTextData class is used to instantiate a wrapper around rich text
 * values, with methods that can be used to transform or manipulate the data.
 *
 * - Create an empty instance: `new RichTextData()`.
 * - Create one from an HTML string: `RichTextData.fromHTMLString(
 *   '<em>hello</em>' )`.
 * - Create one from a wrapper HTMLElement: `RichTextData.fromHTMLElement(
 *   document.querySelector( 'p' ) )`.
 * - Create one from plain text: `RichTextData.fromPlainText( '1\n2' )`.
 * - Create one from a rich text value: `new RichTextData( { text: '...',
 *   formats: [ ... ] } )`.
 *
 * @todo Add methods to manipulate the data, such as applyFormat, slice etc.
 */
class RichTextData {
  #value;
  static empty() {
    return new RichTextData();
  }
  static fromPlainText(text) {
    return new RichTextData(create({
      text
    }));
  }
  static fromHTMLString(html) {
    return new RichTextData(create({
      html
    }));
  }
  static fromHTMLElement(htmlElement, options = {}) {
    const {
      preserveWhiteSpace = false
    } = options;
    const element = preserveWhiteSpace ? htmlElement : collapseWhiteSpace(htmlElement);
    const richTextData = new RichTextData(create({
      element
    }));
    Object.defineProperty(richTextData, 'originalHTML', {
      value: htmlElement.innerHTML
    });
    return richTextData;
  }
  constructor(init = createEmptyValue()) {
    this.#value = init;
  }
  toPlainText() {
    return (0,_get_text_content__WEBPACK_IMPORTED_MODULE_2__.getTextContent)(this.#value);
  }
  // We could expose `toHTMLElement` at some point as well, but we'd only use
  // it internally.
  toHTMLString({
    preserveWhiteSpace
  } = {}) {
    return this.originalHTML || (0,_to_html_string__WEBPACK_IMPORTED_MODULE_3__.toHTMLString)({
      value: this.#value,
      preserveWhiteSpace
    });
  }
  valueOf() {
    return this.toHTMLString();
  }
  toString() {
    return this.toHTMLString();
  }
  toJSON() {
    return this.toHTMLString();
  }
  get length() {
    return this.text.length;
  }
  get formats() {
    return this.#value.formats;
  }
  get replacements() {
    return this.#value.replacements;
  }
  get text() {
    return this.#value.text;
  }
}
for (const name of Object.getOwnPropertyNames(String.prototype)) {
  if (RichTextData.prototype.hasOwnProperty(name)) {
    continue;
  }
  Object.defineProperty(RichTextData.prototype, name, {
    value(...args) {
      // Should we convert back to RichTextData?
      return this.toHTMLString()[name](...args);
    }
  });
}

/**
 * Create a RichText value from an `Element` tree (DOM), an HTML string or a
 * plain text string, with optionally a `Range` object to set the selection. If
 * called without any input, an empty value will be created. The optional
 * functions can be used to filter out content.
 *
 * A value will have the following shape, which you are strongly encouraged not
 * to modify without the use of helper functions:
 *
 * ```js
 * {
 *   text: string,
 *   formats: Array,
 *   replacements: Array,
 *   ?start: number,
 *   ?end: number,
 * }
 * ```
 *
 * As you can see, text and formatting are separated. `text` holds the text,
 * including any replacement characters for objects and lines. `formats`,
 * `objects` and `lines` are all sparse arrays of the same length as `text`. It
 * holds information about the formatting at the relevant text indices. Finally
 * `start` and `end` state which text indices are selected. They are only
 * provided if a `Range` was given.
 *
 * @param {Object}  [$1]                          Optional named arguments.
 * @param {Element} [$1.element]                  Element to create value from.
 * @param {string}  [$1.text]                     Text to create value from.
 * @param {string}  [$1.html]                     HTML to create value from.
 * @param {Range}   [$1.range]                    Range to create value from.
 * @param {boolean} [$1.__unstableIsEditableTree]
 * @return {RichTextValue} A rich text value.
 */
function create({
  element,
  text,
  html,
  range,
  __unstableIsEditableTree: isEditableTree
} = {}) {
  if (html instanceof RichTextData) {
    return {
      text: html.text,
      formats: html.formats,
      replacements: html.replacements
    };
  }
  if (typeof text === 'string' && text.length > 0) {
    return {
      formats: Array(text.length),
      replacements: Array(text.length),
      text
    };
  }
  if (typeof html === 'string' && html.length > 0) {
    // It does not matter which document this is, we're just using it to
    // parse.
    element = (0,_create_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(document, html);
  }
  if (typeof element !== 'object') {
    return createEmptyValue();
  }
  return createFromElement({
    element,
    range,
    isEditableTree
  });
}

/**
 * Helper to accumulate the value's selection start and end from the current
 * node and range.
 *
 * @param {Object} accumulator Object to accumulate into.
 * @param {Node}   node        Node to create value with.
 * @param {Range}  range       Range to create value with.
 * @param {Object} value       Value that is being accumulated.
 */
function accumulateSelection(accumulator, node, range, value) {
  if (!range) {
    return;
  }
  const {
    parentNode
  } = node;
  const {
    startContainer,
    startOffset,
    endContainer,
    endOffset
  } = range;
  const currentLength = accumulator.text.length;

  // Selection can be extracted from value.
  if (value.start !== undefined) {
    accumulator.start = currentLength + value.start;
    // Range indicates that the current node has selection.
  } else if (node === startContainer && node.nodeType === node.TEXT_NODE) {
    accumulator.start = currentLength + startOffset;
    // Range indicates that the current node is selected.
  } else if (parentNode === startContainer && node === startContainer.childNodes[startOffset]) {
    accumulator.start = currentLength;
    // Range indicates that the selection is after the current node.
  } else if (parentNode === startContainer && node === startContainer.childNodes[startOffset - 1]) {
    accumulator.start = currentLength + value.text.length;
    // Fallback if no child inside handled the selection.
  } else if (node === startContainer) {
    accumulator.start = currentLength;
  }

  // Selection can be extracted from value.
  if (value.end !== undefined) {
    accumulator.end = currentLength + value.end;
    // Range indicates that the current node has selection.
  } else if (node === endContainer && node.nodeType === node.TEXT_NODE) {
    accumulator.end = currentLength + endOffset;
    // Range indicates that the current node is selected.
  } else if (parentNode === endContainer && node === endContainer.childNodes[endOffset - 1]) {
    accumulator.end = currentLength + value.text.length;
    // Range indicates that the selection is before the current node.
  } else if (parentNode === endContainer && node === endContainer.childNodes[endOffset]) {
    accumulator.end = currentLength;
    // Fallback if no child inside handled the selection.
  } else if (node === endContainer) {
    accumulator.end = currentLength + endOffset;
  }
}

/**
 * Adjusts the start and end offsets from a range based on a text filter.
 *
 * @param {Node}     node   Node of which the text should be filtered.
 * @param {Range}    range  The range to filter.
 * @param {Function} filter Function to use to filter the text.
 *
 * @return {Object|void} Object containing range properties.
 */
function filterRange(node, range, filter) {
  if (!range) {
    return;
  }
  const {
    startContainer,
    endContainer
  } = range;
  let {
    startOffset,
    endOffset
  } = range;
  if (node === startContainer) {
    startOffset = filter(node.nodeValue.slice(0, startOffset)).length;
  }
  if (node === endContainer) {
    endOffset = filter(node.nodeValue.slice(0, endOffset)).length;
  }
  return {
    startContainer,
    startOffset,
    endContainer,
    endOffset
  };
}

/**
 * Collapse any whitespace used for HTML formatting to one space character,
 * because it will also be displayed as such by the browser.
 *
 * We need to strip it from the content because we use white-space: pre-wrap for
 * displaying editable rich text. Without using white-space: pre-wrap, the
 * browser will litter the content with non breaking spaces, among other issues.
 * See packages/rich-text/src/component/use-default-style.js.
 *
 * @see
 * https://developer.mozilla.org/en-US/docs/Web/CSS/white-space-collapse#collapsing_of_white_space
 *
 * @param {HTMLElement} element
 * @param {boolean}     isRoot
 *
 * @return {HTMLElement} New element with collapsed whitespace.
 */
function collapseWhiteSpace(element, isRoot = true) {
  const clone = element.cloneNode(true);
  clone.normalize();
  Array.from(clone.childNodes).forEach((node, i, nodes) => {
    if (node.nodeType === node.TEXT_NODE) {
      let newNodeValue = node.nodeValue;
      if (/[\n\t\r\f]/.test(newNodeValue)) {
        newNodeValue = newNodeValue.replace(/[\n\t\r\f]+/g, ' ');
      }
      if (newNodeValue.indexOf('  ') !== -1) {
        newNodeValue = newNodeValue.replace(/ {2,}/g, ' ');
      }
      if (i === 0 && newNodeValue.startsWith(' ')) {
        newNodeValue = newNodeValue.slice(1);
      } else if (isRoot && i === nodes.length - 1 && newNodeValue.endsWith(' ')) {
        newNodeValue = newNodeValue.slice(0, -1);
      }
      node.nodeValue = newNodeValue;
    } else if (node.nodeType === node.ELEMENT_NODE) {
      collapseWhiteSpace(node, false);
    }
  });
  return clone;
}

/**
 * We need to normalise line breaks to `\n` so they are consistent across
 * platforms and serialised properly. Not removing \r would cause it to
 * linger and result in double line breaks when whitespace is preserved.
 */
const CARRIAGE_RETURN = '\r';

/**
 * Removes reserved characters used by rich-text (zero width non breaking spaces
 * added by `toTree` and object replacement characters).
 *
 * @param {string} string
 */
function removeReservedCharacters(string) {
  // with the global flag, note that we should create a new regex each time OR
  // reset lastIndex state.
  return string.replace(new RegExp(`[${_special_characters__WEBPACK_IMPORTED_MODULE_5__.ZWNBSP}${_special_characters__WEBPACK_IMPORTED_MODULE_5__.OBJECT_REPLACEMENT_CHARACTER}${CARRIAGE_RETURN}]`, 'gu'), '');
}

/**
 * Creates a Rich Text value from a DOM element and range.
 *
 * @param {Object}  $1                  Named argements.
 * @param {Element} [$1.element]        Element to create value from.
 * @param {Range}   [$1.range]          Range to create value from.
 * @param {boolean} [$1.isEditableTree]
 *
 * @return {RichTextValue} A rich text value.
 */
function createFromElement({
  element,
  range,
  isEditableTree
}) {
  const accumulator = createEmptyValue();
  if (!element) {
    return accumulator;
  }
  if (!element.hasChildNodes()) {
    accumulateSelection(accumulator, element, range, createEmptyValue());
    return accumulator;
  }
  const length = element.childNodes.length;

  // Optimise for speed.
  for (let index = 0; index < length; index++) {
    const node = element.childNodes[index];
    const tagName = node.nodeName.toLowerCase();
    if (node.nodeType === node.TEXT_NODE) {
      const text = removeReservedCharacters(node.nodeValue);
      range = filterRange(node, range, removeReservedCharacters);
      accumulateSelection(accumulator, node, range, {
        text
      });
      // Create a sparse array of the same length as `text`, in which
      // formats can be added.
      accumulator.formats.length += text.length;
      accumulator.replacements.length += text.length;
      accumulator.text += text;
      continue;
    }
    if (node.nodeType !== node.ELEMENT_NODE) {
      continue;
    }
    if (isEditableTree &&
    // Ignore any line breaks that are not inserted by us.
    tagName === 'br' && !node.getAttribute('data-rich-text-line-break')) {
      accumulateSelection(accumulator, node, range, createEmptyValue());
      continue;
    }
    if (tagName === 'script') {
      const value = {
        formats: [,],
        replacements: [{
          type: tagName,
          attributes: {
            'data-rich-text-script': node.getAttribute('data-rich-text-script') || encodeURIComponent(node.innerHTML)
          }
        }],
        text: _special_characters__WEBPACK_IMPORTED_MODULE_5__.OBJECT_REPLACEMENT_CHARACTER
      };
      accumulateSelection(accumulator, node, range, value);
      (0,_concat__WEBPACK_IMPORTED_MODULE_6__.mergePair)(accumulator, value);
      continue;
    }
    if (tagName === 'br') {
      accumulateSelection(accumulator, node, range, createEmptyValue());
      (0,_concat__WEBPACK_IMPORTED_MODULE_6__.mergePair)(accumulator, create({
        text: '\n'
      }));
      continue;
    }
    const format = toFormat({
      tagName,
      attributes: getAttributes({
        element: node
      })
    });

    // When a format type is declared as not editable, replace it with an
    // object replacement character and preserve the inner HTML.
    if (format?.formatType?.contentEditable === false) {
      delete format.formatType;
      accumulateSelection(accumulator, node, range, createEmptyValue());
      (0,_concat__WEBPACK_IMPORTED_MODULE_6__.mergePair)(accumulator, {
        formats: [,],
        replacements: [{
          ...format,
          innerHTML: node.innerHTML
        }],
        text: _special_characters__WEBPACK_IMPORTED_MODULE_5__.OBJECT_REPLACEMENT_CHARACTER
      });
      continue;
    }
    if (format) {
      delete format.formatType;
    }
    const value = createFromElement({
      element: node,
      range,
      isEditableTree
    });
    accumulateSelection(accumulator, node, range, value);

    // Ignore any placeholders, but keep their content since the browser
    // might insert text inside them when the editable element is flex.
    if (!format || node.getAttribute('data-rich-text-placeholder')) {
      (0,_concat__WEBPACK_IMPORTED_MODULE_6__.mergePair)(accumulator, value);
    } else if (value.text.length === 0) {
      if (format.attributes) {
        (0,_concat__WEBPACK_IMPORTED_MODULE_6__.mergePair)(accumulator, {
          formats: [,],
          replacements: [format],
          text: _special_characters__WEBPACK_IMPORTED_MODULE_5__.OBJECT_REPLACEMENT_CHARACTER
        });
      }
    } else {
      // Indices should share a reference to the same formats array.
      // Only create a new reference if `formats` changes.
      function mergeFormats(formats) {
        if (mergeFormats.formats === formats) {
          return mergeFormats.newFormats;
        }
        const newFormats = formats ? [format, ...formats] : [format];
        mergeFormats.formats = formats;
        mergeFormats.newFormats = newFormats;
        return newFormats;
      }

      // Since the formats parameter can be `undefined`, preset
      // `mergeFormats` with a new reference.
      mergeFormats.newFormats = [format];
      (0,_concat__WEBPACK_IMPORTED_MODULE_6__.mergePair)(accumulator, {
        ...value,
        formats: Array.from(value.formats, mergeFormats)
      });
    }
  }
  return accumulator;
}

/**
 * Gets the attributes of an element in object shape.
 *
 * @param {Object}  $1         Named argements.
 * @param {Element} $1.element Element to get attributes from.
 *
 * @return {Object|void} Attribute object or `undefined` if the element has no
 *                       attributes.
 */
function getAttributes({
  element
}) {
  if (!element.hasAttributes()) {
    return;
  }
  const length = element.attributes.length;
  let accumulator;

  // Optimise for speed.
  for (let i = 0; i < length; i++) {
    const {
      name,
      value
    } = element.attributes[i];
    if (name.indexOf('data-rich-text-') === 0) {
      continue;
    }
    const safeName = /^on/i.test(name) ? 'data-disable-rich-text-' + name : name;
    accumulator = accumulator || {};
    accumulator[safeName] = value;
  }
  return accumulator;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/get-active-format.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/get-active-format.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveFormat: () => (/* binding */ getActiveFormat)
/* harmony export */ });
/* harmony import */ var _get_active_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-active-formats */ "./node_modules/@wordpress/rich-text/build-module/get-active-formats.js");
/**
 * Internal dependencies
 */


/** @typedef {import('./types').RichTextValue} RichTextValue */
/** @typedef {import('./types').RichTextFormat} RichTextFormat */

/**
 * Gets the format object by type at the start of the selection. This can be
 * used to get e.g. the URL of a link format at the current selection, but also
 * to check if a format is active at the selection. Returns undefined if there
 * is no format at the selection.
 *
 * @param {RichTextValue} value      Value to inspect.
 * @param {string}        formatType Format type to look for.
 *
 * @return {RichTextFormat|undefined} Active format object of the specified
 *                                    type, or undefined.
 */
function getActiveFormat(value, formatType) {
  return (0,_get_active_formats__WEBPACK_IMPORTED_MODULE_0__.getActiveFormats)(value).find(({
    type
  }) => type === formatType);
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/get-active-formats.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/get-active-formats.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveFormats: () => (/* binding */ getActiveFormats)
/* harmony export */ });
/* harmony import */ var _is_format_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-format-equal */ "./node_modules/@wordpress/rich-text/build-module/is-format-equal.js");
/** @typedef {import('./types').RichTextValue} RichTextValue */
/** @typedef {import('./types').RichTextFormatList} RichTextFormatList */

/**
 * Internal dependencies
 */


/**
 * Gets the all format objects at the start of the selection.
 *
 * @param {RichTextValue} value                Value to inspect.
 * @param {Array}         EMPTY_ACTIVE_FORMATS Array to return if there are no
 *                                             active formats.
 *
 * @return {RichTextFormatList} Active format objects.
 */
function getActiveFormats(value, EMPTY_ACTIVE_FORMATS = []) {
  const {
    formats,
    start,
    end,
    activeFormats
  } = value;
  if (start === undefined) {
    return EMPTY_ACTIVE_FORMATS;
  }
  if (start === end) {
    // For a collapsed caret, it is possible to override the active formats.
    if (activeFormats) {
      return activeFormats;
    }
    const formatsBefore = formats[start - 1] || EMPTY_ACTIVE_FORMATS;
    const formatsAfter = formats[start] || EMPTY_ACTIVE_FORMATS;

    // By default, select the lowest amount of formats possible (which means
    // the caret is positioned outside the format boundary). The user can
    // then use arrow keys to define `activeFormats`.
    if (formatsBefore.length < formatsAfter.length) {
      return formatsBefore;
    }
    return formatsAfter;
  }

  // If there's no formats at the start index, there are not active formats.
  if (!formats[start]) {
    return EMPTY_ACTIVE_FORMATS;
  }
  const selectedFormats = formats.slice(start, end);

  // Clone the formats so we're not mutating the live value.
  const _activeFormats = [...selectedFormats[0]];
  let i = selectedFormats.length;

  // For performance reasons, start from the end where it's much quicker to
  // realise that there are no active formats.
  while (i--) {
    const formatsAtIndex = selectedFormats[i];

    // If we run into any index without formats, we're sure that there's no
    // active formats.
    if (!formatsAtIndex) {
      return EMPTY_ACTIVE_FORMATS;
    }
    let ii = _activeFormats.length;

    // Loop over the active formats and remove any that are not present at
    // the current index.
    while (ii--) {
      const format = _activeFormats[ii];
      if (!formatsAtIndex.find(_format => (0,_is_format_equal__WEBPACK_IMPORTED_MODULE_0__.isFormatEqual)(format, _format))) {
        _activeFormats.splice(ii, 1);
      }
    }

    // If there are no active formats, we can stop.
    if (_activeFormats.length === 0) {
      return EMPTY_ACTIVE_FORMATS;
    }
  }
  return _activeFormats || EMPTY_ACTIVE_FORMATS;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/get-active-object.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/get-active-object.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveObject: () => (/* binding */ getActiveObject)
/* harmony export */ });
/* harmony import */ var _special_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./special-characters */ "./node_modules/@wordpress/rich-text/build-module/special-characters.js");
/**
 * Internal dependencies
 */



/** @typedef {import('./types').RichTextValue} RichTextValue */
/** @typedef {import('./types').RichTextFormat} RichTextFormat */

/**
 * Gets the active object, if there is any.
 *
 * @param {RichTextValue} value Value to inspect.
 *
 * @return {RichTextFormat|void} Active object, or undefined.
 */
function getActiveObject({
  start,
  end,
  replacements,
  text
}) {
  if (start + 1 !== end || text[start] !== _special_characters__WEBPACK_IMPORTED_MODULE_0__.OBJECT_REPLACEMENT_CHARACTER) {
    return;
  }
  return replacements[start];
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/get-format-type.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/get-format-type.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormatType: () => (/* binding */ getFormatType)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/rich-text/build-module/store/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


/** @typedef {import('./register-format-type').RichTextFormatType} RichTextFormatType */

/**
 * Returns a registered format type.
 *
 * @param {string} name Format name.
 *
 * @return {RichTextFormatType|undefined} Format type.
 */
function getFormatType(name) {
  return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store__WEBPACK_IMPORTED_MODULE_1__.store).getFormatType(name);
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/get-text-content.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/get-text-content.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTextContent: () => (/* binding */ getTextContent)
/* harmony export */ });
/* harmony import */ var _special_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./special-characters */ "./node_modules/@wordpress/rich-text/build-module/special-characters.js");
/**
 * Internal dependencies
 */


/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Get the textual content of a Rich Text value. This is similar to
 * `Element.textContent`.
 *
 * @param {RichTextValue} value Value to use.
 *
 * @return {string} The text content.
 */
function getTextContent({
  text
}) {
  return text.replace(_special_characters__WEBPACK_IMPORTED_MODULE_0__.OBJECT_REPLACEMENT_CHARACTER, '');
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/insert-object.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/insert-object.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertObject: () => (/* binding */ insertObject)
/* harmony export */ });
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert */ "./node_modules/@wordpress/rich-text/build-module/insert.js");
/* harmony import */ var _special_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./special-characters */ "./node_modules/@wordpress/rich-text/build-module/special-characters.js");
/**
 * Internal dependencies
 */




/** @typedef {import('./types').RichTextValue} RichTextValue */
/** @typedef {import('./types').RichTextFormat} RichTextFormat */

/**
 * Insert a format as an object into a Rich Text value at the given
 * `startIndex`. Any content between `startIndex` and `endIndex` will be
 * removed. Indices are retrieved from the selection if none are provided.
 *
 * @param {RichTextValue}  value          Value to modify.
 * @param {RichTextFormat} formatToInsert Format to insert as object.
 * @param {number}         [startIndex]   Start index.
 * @param {number}         [endIndex]     End index.
 *
 * @return {RichTextValue} A new value with the object inserted.
 */
function insertObject(value, formatToInsert, startIndex, endIndex) {
  const valueToInsert = {
    formats: [,],
    replacements: [formatToInsert],
    text: _special_characters__WEBPACK_IMPORTED_MODULE_0__.OBJECT_REPLACEMENT_CHARACTER
  };
  return (0,_insert__WEBPACK_IMPORTED_MODULE_1__.insert)(value, valueToInsert, startIndex, endIndex);
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/insert.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/insert.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insert: () => (/* binding */ insert)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/@wordpress/rich-text/build-module/create.js");
/* harmony import */ var _normalise_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalise-formats */ "./node_modules/@wordpress/rich-text/build-module/normalise-formats.js");
/**
 * Internal dependencies
 */




/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Insert a Rich Text value, an HTML string, or a plain text string, into a
 * Rich Text value at the given `startIndex`. Any content between `startIndex`
 * and `endIndex` will be removed. Indices are retrieved from the selection if
 * none are provided.
 *
 * @param {RichTextValue}        value         Value to modify.
 * @param {RichTextValue|string} valueToInsert Value to insert.
 * @param {number}               [startIndex]  Start index.
 * @param {number}               [endIndex]    End index.
 *
 * @return {RichTextValue} A new value with the value inserted.
 */
function insert(value, valueToInsert, startIndex = value.start, endIndex = value.end) {
  const {
    formats,
    replacements,
    text
  } = value;
  if (typeof valueToInsert === 'string') {
    valueToInsert = (0,_create__WEBPACK_IMPORTED_MODULE_0__.create)({
      text: valueToInsert
    });
  }
  const index = startIndex + valueToInsert.text.length;
  return (0,_normalise_formats__WEBPACK_IMPORTED_MODULE_1__.normaliseFormats)({
    formats: formats.slice(0, startIndex).concat(valueToInsert.formats, formats.slice(endIndex)),
    replacements: replacements.slice(0, startIndex).concat(valueToInsert.replacements, replacements.slice(endIndex)),
    text: text.slice(0, startIndex) + valueToInsert.text + text.slice(endIndex),
    start: index,
    end: index
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/is-collapsed.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/is-collapsed.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isCollapsed: () => (/* binding */ isCollapsed)
/* harmony export */ });
/**
 * Internal dependencies
 */

/**
 * Check if the selection of a Rich Text value is collapsed or not. Collapsed
 * means that no characters are selected, but there is a caret present. If there
 * is no selection, `undefined` will be returned. This is similar to
 * `window.getSelection().isCollapsed()`.
 *
 * @param props       The rich text value to check.
 * @param props.start
 * @param props.end
 * @return True if the selection is collapsed, false if not, undefined if there is no selection.
 */
function isCollapsed({
  start,
  end
}) {
  if (start === undefined || end === undefined) {
    return;
  }
  return start === end;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/is-empty.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/is-empty.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmpty: () => (/* binding */ isEmpty)
/* harmony export */ });
/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Check if a Rich Text value is Empty, meaning it contains no text or any
 * objects (such as images).
 *
 * @param {RichTextValue} value Value to use.
 *
 * @return {boolean} True if the value is empty, false if not.
 */
function isEmpty({
  text
}) {
  return text.length === 0;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/is-format-equal.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/is-format-equal.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFormatEqual: () => (/* binding */ isFormatEqual)
/* harmony export */ });
/** @typedef {import('./types').RichTextFormat} RichTextFormat */

/**
 * Optimised equality check for format objects.
 *
 * @param {?RichTextFormat} format1 Format to compare.
 * @param {?RichTextFormat} format2 Format to compare.
 *
 * @return {boolean} True if formats are equal, false if not.
 */
function isFormatEqual(format1, format2) {
  // Both not defined.
  if (format1 === format2) {
    return true;
  }

  // Either not defined.
  if (!format1 || !format2) {
    return false;
  }
  if (format1.type !== format2.type) {
    return false;
  }
  const attributes1 = format1.attributes;
  const attributes2 = format2.attributes;

  // Both not defined.
  if (attributes1 === attributes2) {
    return true;
  }

  // Either not defined.
  if (!attributes1 || !attributes2) {
    return false;
  }
  const keys1 = Object.keys(attributes1);
  const keys2 = Object.keys(attributes2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  const length = keys1.length;

  // Optimise for speed.
  for (let i = 0; i < length; i++) {
    const name = keys1[i];
    if (attributes1[name] !== attributes2[name]) {
      return false;
    }
  }
  return true;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/is-range-equal.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/is-range-equal.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isRangeEqual: () => (/* binding */ isRangeEqual)
/* harmony export */ });
/**
 * Returns true if two ranges are equal, or false otherwise. Ranges are
 * considered equal if their start and end occur in the same container and
 * offset.
 *
 * @param {Range|null} a First range object to test.
 * @param {Range|null} b First range object to test.
 *
 * @return {boolean} Whether the two ranges are equal.
 */
function isRangeEqual(a, b) {
  return a === b || a && b && a.startContainer === b.startContainer && a.startOffset === b.startOffset && a.endContainer === b.endContainer && a.endOffset === b.endOffset;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/join.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/join.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   join: () => (/* binding */ join)
/* harmony export */ });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ "./node_modules/@wordpress/rich-text/build-module/create.js");
/* harmony import */ var _normalise_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalise-formats */ "./node_modules/@wordpress/rich-text/build-module/normalise-formats.js");
/**
 * Internal dependencies
 */




/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Combine an array of Rich Text values into one, optionally separated by
 * `separator`, which can be a Rich Text value, HTML string, or plain text
 * string. This is similar to `Array.prototype.join`.
 *
 * @param {Array<RichTextValue>} values      An array of values to join.
 * @param {string|RichTextValue} [separator] Separator string or value.
 *
 * @return {RichTextValue} A new combined value.
 */
function join(values, separator = '') {
  if (typeof separator === 'string') {
    separator = (0,_create__WEBPACK_IMPORTED_MODULE_0__.create)({
      text: separator
    });
  }
  return (0,_normalise_formats__WEBPACK_IMPORTED_MODULE_1__.normaliseFormats)(values.reduce((accumlator, {
    formats,
    replacements,
    text
  }) => ({
    formats: accumlator.formats.concat(separator.formats, formats),
    replacements: accumlator.replacements.concat(separator.replacements, replacements),
    text: accumlator.text + separator.text + text
  })));
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/normalise-formats.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/normalise-formats.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normaliseFormats: () => (/* binding */ normaliseFormats)
/* harmony export */ });
/* harmony import */ var _is_format_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-format-equal */ "./node_modules/@wordpress/rich-text/build-module/is-format-equal.js");
/**
 * Internal dependencies
 */



/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Normalises formats: ensures subsequent adjacent equal formats have the same
 * reference.
 *
 * @param {RichTextValue} value Value to normalise formats of.
 *
 * @return {RichTextValue} New value with normalised formats.
 */
function normaliseFormats(value) {
  const newFormats = value.formats.slice();
  newFormats.forEach((formatsAtIndex, index) => {
    const formatsAtPreviousIndex = newFormats[index - 1];
    if (formatsAtPreviousIndex) {
      const newFormatsAtIndex = formatsAtIndex.slice();
      newFormatsAtIndex.forEach((format, formatIndex) => {
        const previousFormat = formatsAtPreviousIndex[formatIndex];
        if ((0,_is_format_equal__WEBPACK_IMPORTED_MODULE_0__.isFormatEqual)(format, previousFormat)) {
          newFormatsAtIndex[formatIndex] = previousFormat;
        }
      });
      newFormats[index] = newFormatsAtIndex;
    }
  });
  return {
    ...value,
    formats: newFormats
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/register-format-type.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/register-format-type.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFormatType: () => (/* binding */ registerFormatType)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/rich-text/build-module/store/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

/**
 * @typedef {Object} WPFormat
 *
 * @property {string}        name        A string identifying the format. Must be
 *                                       unique across all registered formats.
 * @property {string}        tagName     The HTML tag this format will wrap the
 *                                       selection with.
 * @property {boolean}       interactive Whether format makes content interactive or not.
 * @property {string | null} [className] A class to match the format.
 * @property {string}        title       Name of the format.
 * @property {Function}      edit        Should return a component for the user to
 *                                       interact with the new registered format.
 */

/**
 * Registers a new format provided a unique name and an object defining its
 * behavior.
 *
 * @param {string}   name     Format name.
 * @param {WPFormat} settings Format settings.
 *
 * @return {WPFormat|undefined} The format, if it has been successfully
 *                              registered; otherwise `undefined`.
 */
function registerFormatType(name, settings) {
  settings = {
    name,
    ...settings
  };
  if (typeof settings.name !== 'string') {
    window.console.error('Format names must be strings.');
    return;
  }
  if (!/^[a-z][a-z0-9-]*\/[a-z][a-z0-9-]*$/.test(settings.name)) {
    window.console.error('Format names must contain a namespace prefix, include only lowercase alphanumeric characters or dashes, and start with a letter. Example: my-plugin/my-custom-format');
    return;
  }
  if ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store__WEBPACK_IMPORTED_MODULE_1__.store).getFormatType(settings.name)) {
    window.console.error('Format "' + settings.name + '" is already registered.');
    return;
  }
  if (typeof settings.tagName !== 'string' || settings.tagName === '') {
    window.console.error('Format tag names must be a string.');
    return;
  }
  if ((typeof settings.className !== 'string' || settings.className === '') && settings.className !== null) {
    window.console.error('Format class names must be a string, or null to handle bare elements.');
    return;
  }
  if (!/^[_a-zA-Z]+[a-zA-Z0-9_-]*$/.test(settings.className)) {
    window.console.error('A class name must begin with a letter, followed by any number of hyphens, underscores, letters, or numbers.');
    return;
  }
  if (settings.className === null) {
    const formatTypeForBareElement = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store__WEBPACK_IMPORTED_MODULE_1__.store).getFormatTypeForBareElement(settings.tagName);
    if (formatTypeForBareElement && formatTypeForBareElement.name !== 'core/unknown') {
      window.console.error(`Format "${formatTypeForBareElement.name}" is already registered to handle bare tag name "${settings.tagName}".`);
      return;
    }
  } else {
    const formatTypeForClassName = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store__WEBPACK_IMPORTED_MODULE_1__.store).getFormatTypeForClassName(settings.className);
    if (formatTypeForClassName) {
      window.console.error(`Format "${formatTypeForClassName.name}" is already registered to handle class name "${settings.className}".`);
      return;
    }
  }
  if (!('title' in settings) || settings.title === '') {
    window.console.error('The format "' + settings.name + '" must have a title.');
    return;
  }
  if ('keywords' in settings && settings.keywords.length > 3) {
    window.console.error('The format "' + settings.name + '" can have a maximum of 3 keywords.');
    return;
  }
  if (typeof settings.title !== 'string') {
    window.console.error('Format titles must be strings.');
    return;
  }
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_1__.store).addFormatTypes(settings);
  return settings;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/remove-format.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/remove-format.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeFormat: () => (/* binding */ removeFormat)
/* harmony export */ });
/* harmony import */ var _normalise_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalise-formats */ "./node_modules/@wordpress/rich-text/build-module/normalise-formats.js");
/**
 * Internal dependencies
 */



/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Remove any format object from a Rich Text value by type from the given
 * `startIndex` to the given `endIndex`. Indices are retrieved from the
 * selection if none are provided.
 *
 * @param {RichTextValue} value        Value to modify.
 * @param {string}        formatType   Format type to remove.
 * @param {number}        [startIndex] Start index.
 * @param {number}        [endIndex]   End index.
 *
 * @return {RichTextValue} A new value with the format applied.
 */
function removeFormat(value, formatType, startIndex = value.start, endIndex = value.end) {
  const {
    formats,
    activeFormats
  } = value;
  const newFormats = formats.slice();

  // If the selection is collapsed, expand start and end to the edges of the
  // format.
  if (startIndex === endIndex) {
    const format = newFormats[startIndex]?.find(({
      type
    }) => type === formatType);
    if (format) {
      while (newFormats[startIndex]?.find(newFormat => newFormat === format)) {
        filterFormats(newFormats, startIndex, formatType);
        startIndex--;
      }
      endIndex++;
      while (newFormats[endIndex]?.find(newFormat => newFormat === format)) {
        filterFormats(newFormats, endIndex, formatType);
        endIndex++;
      }
    }
  } else {
    for (let i = startIndex; i < endIndex; i++) {
      if (newFormats[i]) {
        filterFormats(newFormats, i, formatType);
      }
    }
  }
  return (0,_normalise_formats__WEBPACK_IMPORTED_MODULE_0__.normaliseFormats)({
    ...value,
    formats: newFormats,
    activeFormats: activeFormats?.filter(({
      type
    }) => type !== formatType) || []
  });
}
function filterFormats(formats, index, formatType) {
  const newFormats = formats[index].filter(({
    type
  }) => type !== formatType);
  if (newFormats.length) {
    formats[index] = newFormats;
  } else {
    delete formats[index];
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/remove.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/remove.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remove: () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insert */ "./node_modules/@wordpress/rich-text/build-module/insert.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/@wordpress/rich-text/build-module/create.js");
/**
 * Internal dependencies
 */




/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Remove content from a Rich Text value between the given `startIndex` and
 * `endIndex`. Indices are retrieved from the selection if none are provided.
 *
 * @param {RichTextValue} value        Value to modify.
 * @param {number}        [startIndex] Start index.
 * @param {number}        [endIndex]   End index.
 *
 * @return {RichTextValue} A new value with the content removed.
 */
function remove(value, startIndex, endIndex) {
  return (0,_insert__WEBPACK_IMPORTED_MODULE_0__.insert)(value, (0,_create__WEBPACK_IMPORTED_MODULE_1__.create)(), startIndex, endIndex);
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/replace.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/replace.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   replace: () => (/* binding */ replace)
/* harmony export */ });
/* harmony import */ var _normalise_formats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalise-formats */ "./node_modules/@wordpress/rich-text/build-module/normalise-formats.js");
/**
 * Internal dependencies
 */



/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Search a Rich Text value and replace the match(es) with `replacement`. This
 * is similar to `String.prototype.replace`.
 *
 * @param {RichTextValue}   value       The value to modify.
 * @param {RegExp|string}   pattern     A RegExp object or literal. Can also be
 *                                      a string. It is treated as a verbatim
 *                                      string and is not interpreted as a
 *                                      regular expression. Only the first
 *                                      occurrence will be replaced.
 * @param {Function|string} replacement The match or matches are replaced with
 *                                      the specified or the value returned by
 *                                      the specified function.
 *
 * @return {RichTextValue} A new value with replacements applied.
 */
function replace({
  formats,
  replacements,
  text,
  start,
  end
}, pattern, replacement) {
  text = text.replace(pattern, (match, ...rest) => {
    const offset = rest[rest.length - 2];
    let newText = replacement;
    let newFormats;
    let newReplacements;
    if (typeof newText === 'function') {
      newText = replacement(match, ...rest);
    }
    if (typeof newText === 'object') {
      newFormats = newText.formats;
      newReplacements = newText.replacements;
      newText = newText.text;
    } else {
      newFormats = Array(newText.length);
      newReplacements = Array(newText.length);
      if (formats[offset]) {
        newFormats = newFormats.fill(formats[offset]);
      }
    }
    formats = formats.slice(0, offset).concat(newFormats, formats.slice(offset + match.length));
    replacements = replacements.slice(0, offset).concat(newReplacements, replacements.slice(offset + match.length));
    if (start) {
      start = end = offset + newText.length;
    }
    return newText;
  });
  return (0,_normalise_formats__WEBPACK_IMPORTED_MODULE_0__.normaliseFormats)({
    formats,
    replacements,
    text,
    start,
    end
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/slice.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/slice.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slice: () => (/* binding */ slice)
/* harmony export */ });
/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Slice a Rich Text value from `startIndex` to `endIndex`. Indices are
 * retrieved from the selection if none are provided. This is similar to
 * `String.prototype.slice`.
 *
 * @param {RichTextValue} value        Value to modify.
 * @param {number}        [startIndex] Start index.
 * @param {number}        [endIndex]   End index.
 *
 * @return {RichTextValue} A new extracted value.
 */
function slice(value, startIndex = value.start, endIndex = value.end) {
  const {
    formats,
    replacements,
    text
  } = value;
  if (startIndex === undefined || endIndex === undefined) {
    return {
      ...value
    };
  }
  return {
    formats: formats.slice(startIndex, endIndex),
    replacements: replacements.slice(startIndex, endIndex),
    text: text.slice(startIndex, endIndex)
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/special-characters.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/special-characters.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OBJECT_REPLACEMENT_CHARACTER: () => (/* binding */ OBJECT_REPLACEMENT_CHARACTER),
/* harmony export */   ZWNBSP: () => (/* binding */ ZWNBSP)
/* harmony export */ });
/**
 * Object replacement character, used as a placeholder for objects.
 */
const OBJECT_REPLACEMENT_CHARACTER = '\ufffc';

/**
 * Zero width non-breaking space, used as padding in the editable DOM tree when
 * it is empty otherwise.
 */
const ZWNBSP = '\ufeff';


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/split.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/split.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   split: () => (/* binding */ split)
/* harmony export */ });
/**
 * Internal dependencies
 */

/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Split a Rich Text value in two at the given `startIndex` and `endIndex`, or
 * split at the given separator. This is similar to `String.prototype.split`.
 * Indices are retrieved from the selection if none are provided.
 *
 * @param {RichTextValue} value
 * @param {number|string} [string] Start index, or string at which to split.
 *
 * @return {Array<RichTextValue>|undefined} An array of new values.
 */
function split({
  formats,
  replacements,
  text,
  start,
  end
}, string) {
  if (typeof string !== 'string') {
    return splitAtSelection(...arguments);
  }
  let nextStart = 0;
  return text.split(string).map(substring => {
    const startIndex = nextStart;
    const value = {
      formats: formats.slice(startIndex, startIndex + substring.length),
      replacements: replacements.slice(startIndex, startIndex + substring.length),
      text: substring
    };
    nextStart += string.length + substring.length;
    if (start !== undefined && end !== undefined) {
      if (start >= startIndex && start < nextStart) {
        value.start = start - startIndex;
      } else if (start < startIndex && end > startIndex) {
        value.start = 0;
      }
      if (end >= startIndex && end < nextStart) {
        value.end = end - startIndex;
      } else if (start < nextStart && end > nextStart) {
        value.end = substring.length;
      }
    }
    return value;
  });
}
function splitAtSelection({
  formats,
  replacements,
  text,
  start,
  end
}, startIndex = start, endIndex = end) {
  if (start === undefined || end === undefined) {
    return;
  }
  const before = {
    formats: formats.slice(0, startIndex),
    replacements: replacements.slice(0, startIndex),
    text: text.slice(0, startIndex)
  };
  const after = {
    formats: formats.slice(endIndex),
    replacements: replacements.slice(endIndex),
    text: text.slice(endIndex),
    start: 0,
    end: 0
  };
  return [before, after];
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/store/actions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/store/actions.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFormatTypes: () => (/* binding */ addFormatTypes),
/* harmony export */   removeFormatTypes: () => (/* binding */ removeFormatTypes)
/* harmony export */ });
/**
 * Returns an action object used in signalling that format types have been
 * added.
 * Ignored from documentation as registerFormatType should be used instead from @wordpress/rich-text
 *
 * @ignore
 *
 * @param {Array|Object} formatTypes Format types received.
 *
 * @return {Object} Action object.
 */
function addFormatTypes(formatTypes) {
  return {
    type: 'ADD_FORMAT_TYPES',
    formatTypes: Array.isArray(formatTypes) ? formatTypes : [formatTypes]
  };
}

/**
 * Returns an action object used to remove a registered format type.
 *
 * Ignored from documentation as unregisterFormatType should be used instead from @wordpress/rich-text
 *
 * @ignore
 *
 * @param {string|Array} names Format name.
 *
 * @return {Object} Action object.
 */
function removeFormatTypes(names) {
  return {
    type: 'REMOVE_FORMAT_TYPES',
    names: Array.isArray(names) ? names : [names]
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/store/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/store/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/@wordpress/rich-text/build-module/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/@wordpress/rich-text/build-module/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/rich-text/build-module/store/actions.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const STORE_NAME = 'core/rich-text';

/**
 * Store definition for the rich-text namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/store/reducer.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/store/reducer.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formatTypes: () => (/* binding */ formatTypes)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Reducer managing the format types
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function formatTypes(state = {}, action) {
  switch (action.type) {
    case 'ADD_FORMAT_TYPES':
      return {
        ...state,
        // Key format types by their name.
        ...action.formatTypes.reduce((newFormatTypes, type) => ({
          ...newFormatTypes,
          [type.name]: type
        }), {})
      };
    case 'REMOVE_FORMAT_TYPES':
      return Object.fromEntries(Object.entries(state).filter(([key]) => !action.names.includes(key)));
  }
  return state;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  formatTypes
}));


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/store/selectors.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/store/selectors.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormatType: () => (/* binding */ getFormatType),
/* harmony export */   getFormatTypeForBareElement: () => (/* binding */ getFormatTypeForBareElement),
/* harmony export */   getFormatTypeForClassName: () => (/* binding */ getFormatTypeForClassName),
/* harmony export */   getFormatTypes: () => (/* binding */ getFormatTypes)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Returns all the available format types.
 *
 * @param {Object} state Data state.
 *
 * @example
 * ```js
 * import { __, sprintf } from '@wordpress/i18n';
 * import { store as richTextStore } from '@wordpress/rich-text';
 * import { useSelect } from '@wordpress/data';
 *
 * const ExampleComponent = () => {
 *    const { getFormatTypes } = useSelect(
 *        ( select ) => select( richTextStore ),
 *        []
 *    );
 *
 *    const availableFormats = getFormatTypes();
 *
 *    return availableFormats ? (
 *        <ul>
 *            { availableFormats?.map( ( format ) => (
 *                <li>{ format.name }</li>
 *           ) ) }
 *        </ul>
 *    ) : (
 *        __( 'No Formats available' )
 *    );
 * };
 * ```
 *
 * @return {Array} Format types.
 */
const getFormatTypes = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createSelector)(state => Object.values(state.formatTypes), state => [state.formatTypes]);

/**
 * Returns a format type by name.
 *
 * @param {Object} state Data state.
 * @param {string} name  Format type name.
 *
 * @example
 * ```js
 * import { __, sprintf } from '@wordpress/i18n';
 * import { store as richTextStore } from '@wordpress/rich-text';
 * import { useSelect } from '@wordpress/data';
 *
 * const ExampleComponent = () => {
 *    const { getFormatType } = useSelect(
 *        ( select ) => select( richTextStore ),
 *        []
 *    );
 *
 *    const boldFormat = getFormatType( 'core/bold' );
 *
 *    return boldFormat ? (
 *        <ul>
 *            { Object.entries( boldFormat )?.map( ( [ key, value ] ) => (
 *                <li>
 *                    { key } : { value }
 *                </li>
 *           ) ) }
 *       </ul>
 *    ) : (
 *        __( 'Not Found' )
 *    ;
 * };
 * ```
 *
 * @return {Object?} Format type.
 */
function getFormatType(state, name) {
  return state.formatTypes[name];
}

/**
 * Gets the format type, if any, that can handle a bare element (without a
 * data-format-type attribute), given the tag name of this element.
 *
 * @param {Object} state              Data state.
 * @param {string} bareElementTagName The tag name of the element to find a
 *                                    format type for.
 *
 * @example
 * ```js
 * import { __, sprintf } from '@wordpress/i18n';
 * import { store as richTextStore } from '@wordpress/rich-text';
 * import { useSelect } from '@wordpress/data';
 *
 * const ExampleComponent = () => {
 *    const { getFormatTypeForBareElement } = useSelect(
 *        ( select ) => select( richTextStore ),
 *        []
 *    );
 *
 *    const format = getFormatTypeForBareElement( 'strong' );
 *
 *    return format && <p>{ sprintf( __( 'Format name: %s' ), format.name ) }</p>;
 * }
 * ```
 *
 * @return {?Object} Format type.
 */
function getFormatTypeForBareElement(state, bareElementTagName) {
  const formatTypes = getFormatTypes(state);
  return formatTypes.find(({
    className,
    tagName
  }) => {
    return className === null && bareElementTagName === tagName;
  }) || formatTypes.find(({
    className,
    tagName
  }) => {
    return className === null && '*' === tagName;
  });
}

/**
 * Gets the format type, if any, that can handle an element, given its classes.
 *
 * @param {Object} state            Data state.
 * @param {string} elementClassName The classes of the element to find a format
 *                                  type for.
 *
 * @example
 * ```js
 * import { __, sprintf } from '@wordpress/i18n';
 * import { store as richTextStore } from '@wordpress/rich-text';
 * import { useSelect } from '@wordpress/data';
 *
 * const ExampleComponent = () => {
 *    const { getFormatTypeForClassName } = useSelect(
 *        ( select ) => select( richTextStore ),
 *        []
 *    );
 *
 *    const format = getFormatTypeForClassName( 'has-inline-color' );
 *
 *    return format && <p>{ sprintf( __( 'Format name: %s' ), format.name ) }</p>;
 * };
 * ```
 *
 * @return {?Object} Format type.
 */
function getFormatTypeForClassName(state, elementClassName) {
  return getFormatTypes(state).find(({
    className
  }) => {
    if (className === null) {
      return false;
    }
    return ` ${elementClassName} `.indexOf(` ${className} `) >= 0;
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/to-dom.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/to-dom.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apply: () => (/* binding */ apply),
/* harmony export */   applySelection: () => (/* binding */ applySelection),
/* harmony export */   applyValue: () => (/* binding */ applyValue),
/* harmony export */   toDom: () => (/* binding */ toDom)
/* harmony export */ });
/* harmony import */ var _to_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-tree */ "./node_modules/@wordpress/rich-text/build-module/to-tree.js");
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./node_modules/@wordpress/rich-text/build-module/create-element.js");
/* harmony import */ var _is_range_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-range-equal */ "./node_modules/@wordpress/rich-text/build-module/is-range-equal.js");
/**
 * Internal dependencies
 */





/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Creates a path as an array of indices from the given root node to the given
 * node.
 *
 * @param {Node}        node     Node to find the path of.
 * @param {HTMLElement} rootNode Root node to find the path from.
 * @param {Array}       path     Initial path to build on.
 *
 * @return {Array} The path from the root node to the node.
 */
function createPathToNode(node, rootNode, path) {
  const parentNode = node.parentNode;
  let i = 0;
  while (node = node.previousSibling) {
    i++;
  }
  path = [i, ...path];
  if (parentNode !== rootNode) {
    path = createPathToNode(parentNode, rootNode, path);
  }
  return path;
}

/**
 * Gets a node given a path (array of indices) from the given node.
 *
 * @param {HTMLElement} node Root node to find the wanted node in.
 * @param {Array}       path Path (indices) to the wanted node.
 *
 * @return {Object} Object with the found node and the remaining offset (if any).
 */
function getNodeByPath(node, path) {
  path = [...path];
  while (node && path.length > 1) {
    node = node.childNodes[path.shift()];
  }
  return {
    node,
    offset: path[0]
  };
}
function append(element, child) {
  if (child.html !== undefined) {
    return element.innerHTML += child.html;
  }
  if (typeof child === 'string') {
    child = element.ownerDocument.createTextNode(child);
  }
  const {
    type,
    attributes
  } = child;
  if (type) {
    child = element.ownerDocument.createElement(type);
    for (const key in attributes) {
      child.setAttribute(key, attributes[key]);
    }
  }
  return element.appendChild(child);
}
function appendText(node, text) {
  node.appendData(text);
}
function getLastChild({
  lastChild
}) {
  return lastChild;
}
function getParent({
  parentNode
}) {
  return parentNode;
}
function isText(node) {
  return node.nodeType === node.TEXT_NODE;
}
function getText({
  nodeValue
}) {
  return nodeValue;
}
function remove(node) {
  return node.parentNode.removeChild(node);
}
function toDom({
  value,
  prepareEditableTree,
  isEditableTree = true,
  placeholder,
  doc = document
}) {
  let startPath = [];
  let endPath = [];
  if (prepareEditableTree) {
    value = {
      ...value,
      formats: prepareEditableTree(value)
    };
  }

  /**
   * Returns a new instance of a DOM tree upon which RichText operations can be
   * applied.
   *
   * Note: The current implementation will return a shared reference, reset on
   * each call to `createEmpty`. Therefore, you should not hold a reference to
   * the value to operate upon asynchronously, as it may have unexpected results.
   *
   * @return {Object} RichText tree.
   */
  const createEmpty = () => (0,_create_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(doc, '');
  const tree = (0,_to_tree__WEBPACK_IMPORTED_MODULE_1__.toTree)({
    value,
    createEmpty,
    append,
    getLastChild,
    getParent,
    isText,
    getText,
    remove,
    appendText,
    onStartIndex(body, pointer) {
      startPath = createPathToNode(pointer, body, [pointer.nodeValue.length]);
    },
    onEndIndex(body, pointer) {
      endPath = createPathToNode(pointer, body, [pointer.nodeValue.length]);
    },
    isEditableTree,
    placeholder
  });
  return {
    body: tree,
    selection: {
      startPath,
      endPath
    }
  };
}

/**
 * Create an `Element` tree from a Rich Text value and applies the difference to
 * the `Element` tree contained by `current`.
 *
 * @param {Object}        $1                       Named arguments.
 * @param {RichTextValue} $1.value                 Value to apply.
 * @param {HTMLElement}   $1.current               The live root node to apply the element tree to.
 * @param {Function}      [$1.prepareEditableTree] Function to filter editorable formats.
 * @param {boolean}       [$1.__unstableDomOnly]   Only apply elements, no selection.
 * @param {string}        [$1.placeholder]         Placeholder text.
 */
function apply({
  value,
  current,
  prepareEditableTree,
  __unstableDomOnly,
  placeholder
}) {
  // Construct a new element tree in memory.
  const {
    body,
    selection
  } = toDom({
    value,
    prepareEditableTree,
    placeholder,
    doc: current.ownerDocument
  });
  applyValue(body, current);
  if (value.start !== undefined && !__unstableDomOnly) {
    applySelection(selection, current);
  }
}
function applyValue(future, current) {
  let i = 0;
  let futureChild;
  while (futureChild = future.firstChild) {
    const currentChild = current.childNodes[i];
    if (!currentChild) {
      current.appendChild(futureChild);
    } else if (!currentChild.isEqualNode(futureChild)) {
      if (currentChild.nodeName !== futureChild.nodeName || currentChild.nodeType === currentChild.TEXT_NODE && currentChild.data !== futureChild.data) {
        current.replaceChild(futureChild, currentChild);
      } else {
        const currentAttributes = currentChild.attributes;
        const futureAttributes = futureChild.attributes;
        if (currentAttributes) {
          let ii = currentAttributes.length;

          // Reverse loop because `removeAttribute` on `currentChild`
          // changes `currentAttributes`.
          while (ii--) {
            const {
              name
            } = currentAttributes[ii];
            if (!futureChild.getAttribute(name)) {
              currentChild.removeAttribute(name);
            }
          }
        }
        if (futureAttributes) {
          for (let ii = 0; ii < futureAttributes.length; ii++) {
            const {
              name,
              value
            } = futureAttributes[ii];
            if (currentChild.getAttribute(name) !== value) {
              currentChild.setAttribute(name, value);
            }
          }
        }
        applyValue(futureChild, currentChild);
        future.removeChild(futureChild);
      }
    } else {
      future.removeChild(futureChild);
    }
    i++;
  }
  while (current.childNodes[i]) {
    current.removeChild(current.childNodes[i]);
  }
}
function applySelection({
  startPath,
  endPath
}, current) {
  const {
    node: startContainer,
    offset: startOffset
  } = getNodeByPath(current, startPath);
  const {
    node: endContainer,
    offset: endOffset
  } = getNodeByPath(current, endPath);
  const {
    ownerDocument
  } = current;
  const {
    defaultView
  } = ownerDocument;
  const selection = defaultView.getSelection();
  const range = ownerDocument.createRange();
  range.setStart(startContainer, startOffset);
  range.setEnd(endContainer, endOffset);
  const {
    activeElement
  } = ownerDocument;
  if (selection.rangeCount > 0) {
    // If the to be added range and the live range are the same, there's no
    // need to remove the live range and add the equivalent range.
    if ((0,_is_range_equal__WEBPACK_IMPORTED_MODULE_2__.isRangeEqual)(range, selection.getRangeAt(0))) {
      return;
    }
    selection.removeAllRanges();
  }
  selection.addRange(range);

  // This function is not intended to cause a shift in focus. Since the above
  // selection manipulations may shift focus, ensure that focus is restored to
  // its previous state.
  if (activeElement !== ownerDocument.activeElement) {
    // The `instanceof` checks protect against edge cases where the focused
    // element is not of the interface HTMLElement (does not have a `focus`
    // or `blur` property).
    //
    // See: https://github.com/Microsoft/TypeScript/issues/5901#issuecomment-431649653
    if (activeElement instanceof defaultView.HTMLElement) {
      activeElement.focus();
    }
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/to-html-string.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/to-html-string.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toHTMLString: () => (/* binding */ toHTMLString)
/* harmony export */ });
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/escape-html */ "@wordpress/escape-html");
/* harmony import */ var _wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _to_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-tree */ "./node_modules/@wordpress/rich-text/build-module/to-tree.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Create an HTML string from a Rich Text value.
 *
 * @param {Object}        $1                      Named argements.
 * @param {RichTextValue} $1.value                Rich text value.
 * @param {boolean}       [$1.preserveWhiteSpace] Preserves newlines if true.
 *
 * @return {string} HTML string.
 */
function toHTMLString({
  value,
  preserveWhiteSpace
}) {
  const tree = (0,_to_tree__WEBPACK_IMPORTED_MODULE_1__.toTree)({
    value,
    preserveWhiteSpace,
    createEmpty,
    append,
    getLastChild,
    getParent,
    isText,
    getText,
    remove,
    appendText
  });
  return createChildrenHTML(tree.children);
}
function createEmpty() {
  return {};
}
function getLastChild({
  children
}) {
  return children && children[children.length - 1];
}
function append(parent, object) {
  if (typeof object === 'string') {
    object = {
      text: object
    };
  }
  object.parent = parent;
  parent.children = parent.children || [];
  parent.children.push(object);
  return object;
}
function appendText(object, text) {
  object.text += text;
}
function getParent({
  parent
}) {
  return parent;
}
function isText({
  text
}) {
  return typeof text === 'string';
}
function getText({
  text
}) {
  return text;
}
function remove(object) {
  const index = object.parent.children.indexOf(object);
  if (index !== -1) {
    object.parent.children.splice(index, 1);
  }
  return object;
}
function createElementHTML({
  type,
  attributes,
  object,
  children
}) {
  let attributeString = '';
  for (const key in attributes) {
    if (!(0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__.isValidAttributeName)(key)) {
      continue;
    }
    attributeString += ` ${key}="${(0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__.escapeAttribute)(attributes[key])}"`;
  }
  if (object) {
    return `<${type}${attributeString}>`;
  }
  return `<${type}${attributeString}>${createChildrenHTML(children)}</${type}>`;
}
function createChildrenHTML(children = []) {
  return children.map(child => {
    if (child.html !== undefined) {
      return child.html;
    }
    return child.text === undefined ? createElementHTML(child) : (0,_wordpress_escape_html__WEBPACK_IMPORTED_MODULE_0__.escapeEditableHTML)(child.text);
  }).join('');
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/to-tree.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/to-tree.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toTree: () => (/* binding */ toTree)
/* harmony export */ });
/* harmony import */ var _get_active_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-active-formats */ "./node_modules/@wordpress/rich-text/build-module/get-active-formats.js");
/* harmony import */ var _get_format_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-format-type */ "./node_modules/@wordpress/rich-text/build-module/get-format-type.js");
/* harmony import */ var _special_characters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./special-characters */ "./node_modules/@wordpress/rich-text/build-module/special-characters.js");
/**
 * Internal dependencies
 */




function restoreOnAttributes(attributes, isEditableTree) {
  if (isEditableTree) {
    return attributes;
  }
  const newAttributes = {};
  for (const key in attributes) {
    let newKey = key;
    if (key.startsWith('data-disable-rich-text-')) {
      newKey = key.slice('data-disable-rich-text-'.length);
    }
    newAttributes[newKey] = attributes[key];
  }
  return newAttributes;
}

/**
 * Converts a format object to information that can be used to create an element
 * from (type, attributes and object).
 *
 * @param {Object}  $1                        Named parameters.
 * @param {string}  $1.type                   The format type.
 * @param {string}  $1.tagName                The tag name.
 * @param {Object}  $1.attributes             The format attributes.
 * @param {Object}  $1.unregisteredAttributes The unregistered format
 *                                            attributes.
 * @param {boolean} $1.object                 Whether or not it is an object
 *                                            format.
 * @param {boolean} $1.boundaryClass          Whether or not to apply a boundary
 *                                            class.
 * @param {boolean} $1.isEditableTree
 *
 * @return {Object} Information to be used for element creation.
 */
function fromFormat({
  type,
  tagName,
  attributes,
  unregisteredAttributes,
  object,
  boundaryClass,
  isEditableTree
}) {
  const formatType = (0,_get_format_type__WEBPACK_IMPORTED_MODULE_0__.getFormatType)(type);
  let elementAttributes = {};
  if (boundaryClass && isEditableTree) {
    elementAttributes['data-rich-text-format-boundary'] = 'true';
  }
  if (!formatType) {
    if (attributes) {
      elementAttributes = {
        ...attributes,
        ...elementAttributes
      };
    }
    return {
      type,
      attributes: restoreOnAttributes(elementAttributes, isEditableTree),
      object
    };
  }
  elementAttributes = {
    ...unregisteredAttributes,
    ...elementAttributes
  };
  for (const name in attributes) {
    const key = formatType.attributes ? formatType.attributes[name] : false;
    if (key) {
      elementAttributes[key] = attributes[name];
    } else {
      elementAttributes[name] = attributes[name];
    }
  }
  if (formatType.className) {
    if (elementAttributes.class) {
      elementAttributes.class = `${formatType.className} ${elementAttributes.class}`;
    } else {
      elementAttributes.class = formatType.className;
    }
  }

  // When a format is declared as non editable, make it non editable in the
  // editor.
  if (isEditableTree && formatType.contentEditable === false) {
    elementAttributes.contenteditable = 'false';
  }
  return {
    type: tagName || formatType.tagName,
    object: formatType.object,
    attributes: restoreOnAttributes(elementAttributes, isEditableTree)
  };
}

/**
 * Checks if both arrays of formats up until a certain index are equal.
 *
 * @param {Array}  a     Array of formats to compare.
 * @param {Array}  b     Array of formats to compare.
 * @param {number} index Index to check until.
 */
function isEqualUntil(a, b, index) {
  do {
    if (a[index] !== b[index]) {
      return false;
    }
  } while (index--);
  return true;
}
function toTree({
  value,
  preserveWhiteSpace,
  createEmpty,
  append,
  getLastChild,
  getParent,
  isText,
  getText,
  remove,
  appendText,
  onStartIndex,
  onEndIndex,
  isEditableTree,
  placeholder
}) {
  const {
    formats,
    replacements,
    text,
    start,
    end
  } = value;
  const formatsLength = formats.length + 1;
  const tree = createEmpty();
  const activeFormats = (0,_get_active_formats__WEBPACK_IMPORTED_MODULE_1__.getActiveFormats)(value);
  const deepestActiveFormat = activeFormats[activeFormats.length - 1];
  let lastCharacterFormats;
  let lastCharacter;
  append(tree, '');
  for (let i = 0; i < formatsLength; i++) {
    const character = text.charAt(i);
    const shouldInsertPadding = isEditableTree && (
    // Pad the line if the line is empty.
    !lastCharacter ||
    // Pad the line if the previous character is a line break, otherwise
    // the line break won't be visible.
    lastCharacter === '\n');
    const characterFormats = formats[i];
    let pointer = getLastChild(tree);
    if (characterFormats) {
      characterFormats.forEach((format, formatIndex) => {
        if (pointer && lastCharacterFormats &&
        // Reuse the last element if all formats remain the same.
        isEqualUntil(characterFormats, lastCharacterFormats, formatIndex)) {
          pointer = getLastChild(pointer);
          return;
        }
        const {
          type,
          tagName,
          attributes,
          unregisteredAttributes
        } = format;
        const boundaryClass = isEditableTree && format === deepestActiveFormat;
        const parent = getParent(pointer);
        const newNode = append(parent, fromFormat({
          type,
          tagName,
          attributes,
          unregisteredAttributes,
          boundaryClass,
          isEditableTree
        }));
        if (isText(pointer) && getText(pointer).length === 0) {
          remove(pointer);
        }
        pointer = append(newNode, '');
      });
    }

    // If there is selection at 0, handle it before characters are inserted.
    if (i === 0) {
      if (onStartIndex && start === 0) {
        onStartIndex(tree, pointer);
      }
      if (onEndIndex && end === 0) {
        onEndIndex(tree, pointer);
      }
    }
    if (character === _special_characters__WEBPACK_IMPORTED_MODULE_2__.OBJECT_REPLACEMENT_CHARACTER) {
      const replacement = replacements[i];
      if (!replacement) {
        continue;
      }
      const {
        type,
        attributes,
        innerHTML
      } = replacement;
      const formatType = (0,_get_format_type__WEBPACK_IMPORTED_MODULE_0__.getFormatType)(type);
      if (!isEditableTree && type === 'script') {
        pointer = append(getParent(pointer), fromFormat({
          type: 'script',
          isEditableTree
        }));
        append(pointer, {
          html: decodeURIComponent(attributes['data-rich-text-script'])
        });
      } else if (formatType?.contentEditable === false) {
        // For non editable formats, render the stored inner HTML.
        pointer = append(getParent(pointer), fromFormat({
          ...replacement,
          isEditableTree,
          boundaryClass: start === i && end === i + 1
        }));
        if (innerHTML) {
          append(pointer, {
            html: innerHTML
          });
        }
      } else {
        pointer = append(getParent(pointer), fromFormat({
          ...replacement,
          object: true,
          isEditableTree
        }));
      }
      // Ensure pointer is text node.
      pointer = append(getParent(pointer), '');
    } else if (!preserveWhiteSpace && character === '\n') {
      pointer = append(getParent(pointer), {
        type: 'br',
        attributes: isEditableTree ? {
          'data-rich-text-line-break': 'true'
        } : undefined,
        object: true
      });
      // Ensure pointer is text node.
      pointer = append(getParent(pointer), '');
    } else if (!isText(pointer)) {
      pointer = append(getParent(pointer), character);
    } else {
      appendText(pointer, character);
    }
    if (onStartIndex && start === i + 1) {
      onStartIndex(tree, pointer);
    }
    if (onEndIndex && end === i + 1) {
      onEndIndex(tree, pointer);
    }
    if (shouldInsertPadding && i === text.length) {
      append(getParent(pointer), _special_characters__WEBPACK_IMPORTED_MODULE_2__.ZWNBSP);

      // We CANNOT use CSS to add a placeholder with pseudo elements on
      // the main block wrappers because that could clash with theme CSS.
      if (placeholder && text.length === 0) {
        append(getParent(pointer), {
          type: 'span',
          attributes: {
            'data-rich-text-placeholder': placeholder,
            // Necessary to prevent the placeholder from catching
            // selection and being editable.
            style: 'pointer-events:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;'
          }
        });
      }
    }
    lastCharacterFormats = characterFormats;
    lastCharacter = character;
  }
  return tree;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/toggle-format.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/toggle-format.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toggleFormat: () => (/* binding */ toggleFormat)
/* harmony export */ });
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _get_active_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-active-format */ "./node_modules/@wordpress/rich-text/build-module/get-active-format.js");
/* harmony import */ var _remove_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-format */ "./node_modules/@wordpress/rich-text/build-module/remove-format.js");
/* harmony import */ var _apply_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apply-format */ "./node_modules/@wordpress/rich-text/build-module/apply-format.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





/** @typedef {import('./types').RichTextValue} RichTextValue */
/** @typedef {import('./types').RichTextFormat} RichTextFormat */

/**
 * Toggles a format object to a Rich Text value at the current selection.
 *
 * @param {RichTextValue}  value  Value to modify.
 * @param {RichTextFormat} format Format to apply or remove.
 *
 * @return {RichTextValue} A new value with the format applied or removed.
 */
function toggleFormat(value, format) {
  if ((0,_get_active_format__WEBPACK_IMPORTED_MODULE_2__.getActiveFormat)(value, format.type)) {
    // For screen readers, will announce if formatting control is disabled.
    if (format.title) {
      // translators: %s: title of the formatting control
      (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%s removed.'), format.title), 'assertive');
    }
    return (0,_remove_format__WEBPACK_IMPORTED_MODULE_3__.removeFormat)(value, format.type);
  }
  // For screen readers, will announce if formatting control is enabled.
  if (format.title) {
    // translators: %s: title of the formatting control
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_0__.speak)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('%s applied.'), format.title), 'assertive');
  }
  return (0,_apply_format__WEBPACK_IMPORTED_MODULE_4__.applyFormat)(value, format);
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/unregister-format-type.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/unregister-format-type.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unregisterFormatType: () => (/* binding */ unregisterFormatType)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/rich-text/build-module/store/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/** @typedef {import('./register-format-type').WPFormat} WPFormat */

/**
 * Unregisters a format.
 *
 * @param {string} name Format name.
 *
 * @return {WPFormat|undefined} The previous format value, if it has
 *                                        been successfully unregistered;
 *                                        otherwise `undefined`.
 */
function unregisterFormatType(name) {
  const oldFormat = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)(_store__WEBPACK_IMPORTED_MODULE_1__.store).getFormatType(name);
  if (!oldFormat) {
    window.console.error(`Format ${name} is not registered.`);
    return;
  }
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)(_store__WEBPACK_IMPORTED_MODULE_1__.store).removeFormatTypes(name);
  return oldFormat;
}


/***/ }),

/***/ "./node_modules/@wordpress/rich-text/build-module/update-formats.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/rich-text/build-module/update-formats.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateFormats: () => (/* binding */ updateFormats)
/* harmony export */ });
/* harmony import */ var _is_format_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-format-equal */ "./node_modules/@wordpress/rich-text/build-module/is-format-equal.js");
/**
 * Internal dependencies
 */



/** @typedef {import('./types').RichTextValue} RichTextValue */

/**
 * Efficiently updates all the formats from `start` (including) until `end`
 * (excluding) with the active formats. Mutates `value`.
 *
 * @param {Object}        $1         Named paramentes.
 * @param {RichTextValue} $1.value   Value te update.
 * @param {number}        $1.start   Index to update from.
 * @param {number}        $1.end     Index to update until.
 * @param {Array}         $1.formats Replacement formats.
 *
 * @return {RichTextValue} Mutated value.
 */
function updateFormats({
  value,
  start,
  end,
  formats
}) {
  // Start and end may be switched in case of delete.
  const min = Math.min(start, end);
  const max = Math.max(start, end);
  const formatsBefore = value.formats[min - 1] || [];
  const formatsAfter = value.formats[max] || [];

  // First, fix the references. If any format right before or after are
  // equal, the replacement format should use the same reference.
  value.activeFormats = formats.map((format, index) => {
    if (formatsBefore[index]) {
      if ((0,_is_format_equal__WEBPACK_IMPORTED_MODULE_0__.isFormatEqual)(format, formatsBefore[index])) {
        return formatsBefore[index];
      }
    } else if (formatsAfter[index]) {
      if ((0,_is_format_equal__WEBPACK_IMPORTED_MODULE_0__.isFormatEqual)(format, formatsAfter[index])) {
        return formatsAfter[index];
      }
    }
    return format;
  });
  while (--end >= start) {
    if (value.activeFormats.length > 0) {
      value.formats[end] = value.activeFormats;
    } else {
      delete value.formats[end];
    }
  }
  return value;
}


/***/ }),

/***/ "@wordpress/a11y":
/*!******************************!*\
  !*** external ["wp","a11y"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["a11y"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/escape-html":
/*!************************************!*\
  !*** external ["wp","escapeHtml"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["escapeHtml"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/keycodes":
/*!**********************************!*\
  !*** external ["wp","keycodes"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["keycodes"];

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
  !*** ./node_modules/@wordpress/rich-text/build-module/index.js ***!
  \*****************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RichTextData: () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_3__.RichTextData),
/* harmony export */   __experimentalRichText: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   __unstableCreateElement: () => (/* reexport safe */ _create_element__WEBPACK_IMPORTED_MODULE_23__.createElement),
/* harmony export */   __unstableToDom: () => (/* reexport safe */ _to_dom__WEBPACK_IMPORTED_MODULE_19__.toDom),
/* harmony export */   __unstableUseRichText: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_26__.useRichText),
/* harmony export */   applyFormat: () => (/* reexport safe */ _apply_format__WEBPACK_IMPORTED_MODULE_1__.applyFormat),
/* harmony export */   concat: () => (/* reexport safe */ _concat__WEBPACK_IMPORTED_MODULE_2__.concat),
/* harmony export */   create: () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_3__.create),
/* harmony export */   getActiveFormat: () => (/* reexport safe */ _get_active_format__WEBPACK_IMPORTED_MODULE_4__.getActiveFormat),
/* harmony export */   getActiveFormats: () => (/* reexport safe */ _get_active_formats__WEBPACK_IMPORTED_MODULE_5__.getActiveFormats),
/* harmony export */   getActiveObject: () => (/* reexport safe */ _get_active_object__WEBPACK_IMPORTED_MODULE_6__.getActiveObject),
/* harmony export */   getTextContent: () => (/* reexport safe */ _get_text_content__WEBPACK_IMPORTED_MODULE_7__.getTextContent),
/* harmony export */   insert: () => (/* reexport safe */ _insert__WEBPACK_IMPORTED_MODULE_15__.insert),
/* harmony export */   insertObject: () => (/* reexport safe */ _insert_object__WEBPACK_IMPORTED_MODULE_16__.insertObject),
/* harmony export */   isCollapsed: () => (/* reexport safe */ _is_collapsed__WEBPACK_IMPORTED_MODULE_8__.isCollapsed),
/* harmony export */   isEmpty: () => (/* reexport safe */ _is_empty__WEBPACK_IMPORTED_MODULE_9__.isEmpty),
/* harmony export */   join: () => (/* reexport safe */ _join__WEBPACK_IMPORTED_MODULE_10__.join),
/* harmony export */   registerFormatType: () => (/* reexport safe */ _register_format_type__WEBPACK_IMPORTED_MODULE_11__.registerFormatType),
/* harmony export */   remove: () => (/* reexport safe */ _remove__WEBPACK_IMPORTED_MODULE_13__.remove),
/* harmony export */   removeFormat: () => (/* reexport safe */ _remove_format__WEBPACK_IMPORTED_MODULE_12__.removeFormat),
/* harmony export */   replace: () => (/* reexport safe */ _replace__WEBPACK_IMPORTED_MODULE_14__.replace),
/* harmony export */   slice: () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_17__.slice),
/* harmony export */   split: () => (/* reexport safe */ _split__WEBPACK_IMPORTED_MODULE_18__.split),
/* harmony export */   store: () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_0__.store),
/* harmony export */   toHTMLString: () => (/* reexport safe */ _to_html_string__WEBPACK_IMPORTED_MODULE_20__.toHTMLString),
/* harmony export */   toggleFormat: () => (/* reexport safe */ _toggle_format__WEBPACK_IMPORTED_MODULE_21__.toggleFormat),
/* harmony export */   unregisterFormatType: () => (/* reexport safe */ _unregister_format_type__WEBPACK_IMPORTED_MODULE_22__.unregisterFormatType),
/* harmony export */   useAnchor: () => (/* reexport safe */ _component_use_anchor__WEBPACK_IMPORTED_MODULE_25__.useAnchor),
/* harmony export */   useAnchorRef: () => (/* reexport safe */ _component_use_anchor_ref__WEBPACK_IMPORTED_MODULE_24__.useAnchorRef)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./node_modules/@wordpress/rich-text/build-module/store/index.js");
/* harmony import */ var _apply_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-format */ "./node_modules/@wordpress/rich-text/build-module/apply-format.js");
/* harmony import */ var _concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./concat */ "./node_modules/@wordpress/rich-text/build-module/concat.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create */ "./node_modules/@wordpress/rich-text/build-module/create.js");
/* harmony import */ var _get_active_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-active-format */ "./node_modules/@wordpress/rich-text/build-module/get-active-format.js");
/* harmony import */ var _get_active_formats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-active-formats */ "./node_modules/@wordpress/rich-text/build-module/get-active-formats.js");
/* harmony import */ var _get_active_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-active-object */ "./node_modules/@wordpress/rich-text/build-module/get-active-object.js");
/* harmony import */ var _get_text_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./get-text-content */ "./node_modules/@wordpress/rich-text/build-module/get-text-content.js");
/* harmony import */ var _is_collapsed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is-collapsed */ "./node_modules/@wordpress/rich-text/build-module/is-collapsed.js");
/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-empty */ "./node_modules/@wordpress/rich-text/build-module/is-empty.js");
/* harmony import */ var _join__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./join */ "./node_modules/@wordpress/rich-text/build-module/join.js");
/* harmony import */ var _register_format_type__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register-format-type */ "./node_modules/@wordpress/rich-text/build-module/register-format-type.js");
/* harmony import */ var _remove_format__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./remove-format */ "./node_modules/@wordpress/rich-text/build-module/remove-format.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./remove */ "./node_modules/@wordpress/rich-text/build-module/remove.js");
/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./replace */ "./node_modules/@wordpress/rich-text/build-module/replace.js");
/* harmony import */ var _insert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./insert */ "./node_modules/@wordpress/rich-text/build-module/insert.js");
/* harmony import */ var _insert_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./insert-object */ "./node_modules/@wordpress/rich-text/build-module/insert-object.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slice */ "./node_modules/@wordpress/rich-text/build-module/slice.js");
/* harmony import */ var _split__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./split */ "./node_modules/@wordpress/rich-text/build-module/split.js");
/* harmony import */ var _to_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./to-dom */ "./node_modules/@wordpress/rich-text/build-module/to-dom.js");
/* harmony import */ var _to_html_string__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./to-html-string */ "./node_modules/@wordpress/rich-text/build-module/to-html-string.js");
/* harmony import */ var _toggle_format__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./toggle-format */ "./node_modules/@wordpress/rich-text/build-module/toggle-format.js");
/* harmony import */ var _unregister_format_type__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./unregister-format-type */ "./node_modules/@wordpress/rich-text/build-module/unregister-format-type.js");
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-element */ "./node_modules/@wordpress/rich-text/build-module/create-element.js");
/* harmony import */ var _component_use_anchor_ref__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/use-anchor-ref */ "./node_modules/@wordpress/rich-text/build-module/component/use-anchor-ref.js");
/* harmony import */ var _component_use_anchor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/use-anchor */ "./node_modules/@wordpress/rich-text/build-module/component/use-anchor.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component */ "./node_modules/@wordpress/rich-text/build-module/component/index.js");




























/**
 * An object which represents a formatted string. See main `@wordpress/rich-text`
 * documentation for more information.
 */

})();

(window.wp = window.wp || {}).richText = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=rich-text.js.map