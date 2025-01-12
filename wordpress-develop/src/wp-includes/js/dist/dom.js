/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/dom/build-module/data-transfer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/data-transfer.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFilesFromDataTransfer: () => (/* binding */ getFilesFromDataTransfer)
/* harmony export */ });
/**
 * Gets all files from a DataTransfer object.
 *
 * @param {DataTransfer} dataTransfer DataTransfer object to inspect.
 *
 * @return {File[]} An array containing all files.
 */
function getFilesFromDataTransfer(dataTransfer) {
  const files = Array.from(dataTransfer.files);
  Array.from(dataTransfer.items).forEach(item => {
    const file = item.getAsFile();
    if (file && !files.find(({
      name,
      type,
      size
    }) => name === file.name && type === file.type && size === file.size)) {
      files.push(file);
    }
  });
  return files;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/caret-range-from-point.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/caret-range-from-point.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ caretRangeFromPoint)
/* harmony export */ });
/**
 * Polyfill.
 * Get a collapsed range for a given point.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint
 *
 * @param {DocumentMaybeWithCaretPositionFromPoint} doc The document of the range.
 * @param {number}                                  x   Horizontal position within the current viewport.
 * @param {number}                                  y   Vertical position within the current viewport.
 *
 * @return {Range | null} The best range for the given point.
 */
function caretRangeFromPoint(doc, x, y) {
  if (doc.caretRangeFromPoint) {
    return doc.caretRangeFromPoint(x, y);
  }
  if (!doc.caretPositionFromPoint) {
    return null;
  }
  const point = doc.caretPositionFromPoint(x, y);

  // If x or y are negative, outside viewport, or there is no text entry node.
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint
  if (!point) {
    return null;
  }
  const range = doc.createRange();
  range.setStart(point.offsetNode, point.offset);
  range.collapse(true);
  return range;
}

/**
 * @typedef {{caretPositionFromPoint?: (x: number, y: number)=> CaretPosition | null} & Document } DocumentMaybeWithCaretPositionFromPoint
 * @typedef {{ readonly offset: number; readonly offsetNode: Node; getClientRect(): DOMRect | null; }} CaretPosition
 */


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/clean-node-list.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/clean-node-list.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cleanNodeList)
/* harmony export */ });
/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-empty */ "./node_modules/@wordpress/dom/build-module/dom/is-empty.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./node_modules/@wordpress/dom/build-module/dom/remove.js");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unwrap */ "./node_modules/@wordpress/dom/build-module/dom/unwrap.js");
/* harmony import */ var _phrasing_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../phrasing-content */ "./node_modules/@wordpress/dom/build-module/phrasing-content.js");
/* harmony import */ var _insert_after__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insert-after */ "./node_modules/@wordpress/dom/build-module/dom/insert-after.js");
/* harmony import */ var _is_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-element */ "./node_modules/@wordpress/dom/build-module/dom/is-element.js");
/**
 * Internal dependencies
 */






const noop = () => {};

/* eslint-disable jsdoc/valid-types */
/**
 * @typedef SchemaItem
 * @property {string[]}                            [attributes] Attributes.
 * @property {(string | RegExp)[]}                 [classes]    Classnames or RegExp to test against.
 * @property {'*' | { [tag: string]: SchemaItem }} [children]   Child schemas.
 * @property {string[]}                            [require]    Selectors to test required children against. Leave empty or undefined if there are no requirements.
 * @property {boolean}                             allowEmpty   Whether to allow nodes without children.
 * @property {(node: Node) => boolean}             [isMatch]    Function to test whether a node is a match. If left undefined any node will be assumed to match.
 */

/** @typedef {{ [tag: string]: SchemaItem }} Schema */
/* eslint-enable jsdoc/valid-types */

/**
 * Given a schema, unwraps or removes nodes, attributes and classes on a node
 * list.
 *
 * @param {NodeList} nodeList The nodeList to filter.
 * @param {Document} doc      The document of the nodeList.
 * @param {Schema}   schema   An array of functions that can mutate with the provided node.
 * @param {boolean}  inline   Whether to clean for inline mode.
 */
function cleanNodeList(nodeList, doc, schema, inline) {
  Array.from(nodeList).forEach(( /** @type {Node & { nextElementSibling?: unknown }} */node) => {
    const tag = node.nodeName.toLowerCase();

    // It's a valid child, if the tag exists in the schema without an isMatch
    // function, or with an isMatch function that matches the node.
    if (schema.hasOwnProperty(tag) && (!schema[tag].isMatch || schema[tag].isMatch?.(node))) {
      if ((0,_is_element__WEBPACK_IMPORTED_MODULE_0__["default"])(node)) {
        const {
          attributes = [],
          classes = [],
          children,
          require = [],
          allowEmpty
        } = schema[tag];

        // If the node is empty and it's supposed to have children,
        // remove the node.
        if (children && !allowEmpty && (0,_is_empty__WEBPACK_IMPORTED_MODULE_1__["default"])(node)) {
          (0,_remove__WEBPACK_IMPORTED_MODULE_2__["default"])(node);
          return;
        }
        if (node.hasAttributes()) {
          // Strip invalid attributes.
          Array.from(node.attributes).forEach(({
            name
          }) => {
            if (name !== 'class' && !attributes.includes(name)) {
              node.removeAttribute(name);
            }
          });

          // Strip invalid classes.
          // In jsdom-jscore, 'node.classList' can be undefined.
          // TODO: Explore patching this in jsdom-jscore.
          if (node.classList && node.classList.length) {
            const mattchers = classes.map(item => {
              if (typeof item === 'string') {
                return ( /** @type {string} */className) => className === item;
              } else if (item instanceof RegExp) {
                return ( /** @type {string} */className) => item.test(className);
              }
              return noop;
            });
            Array.from(node.classList).forEach(name => {
              if (!mattchers.some(isMatch => isMatch(name))) {
                node.classList.remove(name);
              }
            });
            if (!node.classList.length) {
              node.removeAttribute('class');
            }
          }
        }
        if (node.hasChildNodes()) {
          // Do not filter any content.
          if (children === '*') {
            return;
          }

          // Continue if the node is supposed to have children.
          if (children) {
            // If a parent requires certain children, but it does
            // not have them, drop the parent and continue.
            if (require.length && !node.querySelector(require.join(','))) {
              cleanNodeList(node.childNodes, doc, schema, inline);
              (0,_unwrap__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
              // If the node is at the top, phrasing content, and
              // contains children that are block content, unwrap
              // the node because it is invalid.
            } else if (node.parentNode && node.parentNode.nodeName === 'BODY' && (0,_phrasing_content__WEBPACK_IMPORTED_MODULE_4__.isPhrasingContent)(node)) {
              cleanNodeList(node.childNodes, doc, schema, inline);
              if (Array.from(node.childNodes).some(child => !(0,_phrasing_content__WEBPACK_IMPORTED_MODULE_4__.isPhrasingContent)(child))) {
                (0,_unwrap__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
              }
            } else {
              cleanNodeList(node.childNodes, doc, children, inline);
            }
            // Remove children if the node is not supposed to have any.
          } else {
            while (node.firstChild) {
              (0,_remove__WEBPACK_IMPORTED_MODULE_2__["default"])(node.firstChild);
            }
          }
        }
      }
      // Invalid child. Continue with schema at the same place and unwrap.
    } else {
      cleanNodeList(node.childNodes, doc, schema, inline);

      // For inline mode, insert a line break when unwrapping nodes that
      // are not phrasing content.
      if (inline && !(0,_phrasing_content__WEBPACK_IMPORTED_MODULE_4__.isPhrasingContent)(node) && node.nextElementSibling) {
        (0,_insert_after__WEBPACK_IMPORTED_MODULE_5__["default"])(doc.createElement('br'), node);
      }
      (0,_unwrap__WEBPACK_IMPORTED_MODULE_3__["default"])(node);
    }
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/compute-caret-rect.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/compute-caret-rect.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computeCaretRect)
/* harmony export */ });
/* harmony import */ var _get_rectangle_from_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-rectangle-from-range */ "./node_modules/@wordpress/dom/build-module/dom/get-rectangle-from-range.js");
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */



/**
 * Get the rectangle for the selection in a container.
 *
 * @param {Window} win The window of the selection.
 *
 * @return {DOMRect | null} The rectangle.
 */
function computeCaretRect(win) {
  const selection = win.getSelection();
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(selection, 'selection');
  const range = selection.rangeCount ? selection.getRangeAt(0) : null;
  if (!range) {
    return null;
  }
  return (0,_get_rectangle_from_range__WEBPACK_IMPORTED_MODULE_1__["default"])(range);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/document-has-selection.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/document-has-selection.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ documentHasSelection)
/* harmony export */ });
/* harmony import */ var _is_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-text-field */ "./node_modules/@wordpress/dom/build-module/dom/is-text-field.js");
/* harmony import */ var _is_html_input_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-html-input-element */ "./node_modules/@wordpress/dom/build-module/dom/is-html-input-element.js");
/* harmony import */ var _document_has_text_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-has-text-selection */ "./node_modules/@wordpress/dom/build-module/dom/document-has-text-selection.js");
/**
 * Internal dependencies
 */




/**
 * Check whether the current document has a selection. This includes focus in
 * input fields, textareas, and general rich-text selection.
 *
 * @param {Document} doc The document to check.
 *
 * @return {boolean} True if there is selection, false if not.
 */
function documentHasSelection(doc) {
  return !!doc.activeElement && ((0,_is_html_input_element__WEBPACK_IMPORTED_MODULE_0__["default"])(doc.activeElement) || (0,_is_text_field__WEBPACK_IMPORTED_MODULE_1__["default"])(doc.activeElement) || (0,_document_has_text_selection__WEBPACK_IMPORTED_MODULE_2__["default"])(doc));
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/document-has-text-selection.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/document-has-text-selection.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ documentHasTextSelection)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/**
 * Check whether the current document has selected text. This applies to ranges
 * of text in the document, and not selection inside `<input>` and `<textarea>`
 * elements.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection#Related_objects.
 *
 * @param {Document} doc The document to check.
 *
 * @return {boolean} True if there is selection, false if not.
 */
function documentHasTextSelection(doc) {
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(doc.defaultView, 'doc.defaultView');
  const selection = doc.defaultView.getSelection();
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(selection, 'selection');
  const range = selection.rangeCount ? selection.getRangeAt(0) : null;
  return !!range && !range.collapsed;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/document-has-uncollapsed-selection.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/document-has-uncollapsed-selection.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ documentHasUncollapsedSelection)
/* harmony export */ });
/* harmony import */ var _document_has_text_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-has-text-selection */ "./node_modules/@wordpress/dom/build-module/dom/document-has-text-selection.js");
/* harmony import */ var _input_field_has_uncollapsed_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-field-has-uncollapsed-selection */ "./node_modules/@wordpress/dom/build-module/dom/input-field-has-uncollapsed-selection.js");
/**
 * Internal dependencies
 */



/**
 * Check whether the current document has any sort of (uncollapsed) selection.
 * This includes ranges of text across elements and any selection inside
 * textual `<input>` and `<textarea>` elements.
 *
 * @param {Document} doc The document to check.
 *
 * @return {boolean} Whether there is any recognizable text selection in the document.
 */
function documentHasUncollapsedSelection(doc) {
  return (0,_document_has_text_selection__WEBPACK_IMPORTED_MODULE_0__["default"])(doc) || !!doc.activeElement && (0,_input_field_has_uncollapsed_selection__WEBPACK_IMPORTED_MODULE_1__["default"])(doc.activeElement);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/get-computed-style.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/get-computed-style.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getComputedStyle)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * @param {Element} element
 * @return {ReturnType<Window['getComputedStyle']>} The computed style for the element.
 */
function getComputedStyle(element) {
  /* eslint-enable jsdoc/valid-types */
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(element.ownerDocument.defaultView, 'element.ownerDocument.defaultView');
  return element.ownerDocument.defaultView.getComputedStyle(element);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/get-offset-parent.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/get-offset-parent.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getOffsetParent)
/* harmony export */ });
/* harmony import */ var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-computed-style */ "./node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");
/**
 * Internal dependencies
 */


/**
 * Returns the closest positioned element, or null under any of the conditions
 * of the offsetParent specification. Unlike offsetParent, this function is not
 * limited to HTMLElement and accepts any Node (e.g. Node.TEXT_NODE).
 *
 * @see https://drafts.csswg.org/cssom-view/#dom-htmlelement-offsetparent
 *
 * @param {Node} node Node from which to find offset parent.
 *
 * @return {Node | null} Offset parent.
 */
function getOffsetParent(node) {
  // Cannot retrieve computed style or offset parent only anything other than
  // an element node, so find the closest element node.
  let closestElement;
  while (closestElement = /** @type {Node} */node.parentNode) {
    if (closestElement.nodeType === closestElement.ELEMENT_NODE) {
      break;
    }
  }
  if (!closestElement) {
    return null;
  }

  // If the closest element is already positioned, return it, as offsetParent
  // does not otherwise consider the node itself.
  if ((0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__["default"])( /** @type {Element} */closestElement).position !== 'static') {
    return closestElement;
  }

  // offsetParent is undocumented/draft.
  return /** @type {Node & { offsetParent: Node }} */closestElement.offsetParent;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/get-range-height.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/get-range-height.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRangeHeight)
/* harmony export */ });
/**
 * Gets the height of the range without ignoring zero width rectangles, which
 * some browsers ignore when creating a union.
 *
 * @param {Range} range The range to check.
 * @return {number | undefined} Height of the range or undefined if the range has no client rectangles.
 */
function getRangeHeight(range) {
  const rects = Array.from(range.getClientRects());
  if (!rects.length) {
    return;
  }
  const highestTop = Math.min(...rects.map(({
    top
  }) => top));
  const lowestBottom = Math.max(...rects.map(({
    bottom
  }) => bottom));
  return lowestBottom - highestTop;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/get-rectangle-from-range.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/get-rectangle-from-range.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getRectangleFromRange)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/**
 * Get the rectangle of a given Range. Returns `null` if no suitable rectangle
 * can be found.
 *
 * @param {Range} range The range.
 *
 * @return {DOMRect?} The rectangle.
 */
function getRectangleFromRange(range) {
  // For uncollapsed ranges, get the rectangle that bounds the contents of the
  // range; this a rectangle enclosing the union of the bounding rectangles
  // for all the elements in the range.
  if (!range.collapsed) {
    const rects = Array.from(range.getClientRects());

    // If there's just a single rect, return it.
    if (rects.length === 1) {
      return rects[0];
    }

    // Ignore tiny selection at the edge of a range.
    const filteredRects = rects.filter(({
      width
    }) => width > 1);

    // If it's full of tiny selections, return browser default.
    if (filteredRects.length === 0) {
      return range.getBoundingClientRect();
    }
    if (filteredRects.length === 1) {
      return filteredRects[0];
    }
    let {
      top: furthestTop,
      bottom: furthestBottom,
      left: furthestLeft,
      right: furthestRight
    } = filteredRects[0];
    for (const {
      top,
      bottom,
      left,
      right
    } of filteredRects) {
      if (top < furthestTop) {
        furthestTop = top;
      }
      if (bottom > furthestBottom) {
        furthestBottom = bottom;
      }
      if (left < furthestLeft) {
        furthestLeft = left;
      }
      if (right > furthestRight) {
        furthestRight = right;
      }
    }
    return new window.DOMRect(furthestLeft, furthestTop, furthestRight - furthestLeft, furthestBottom - furthestTop);
  }
  const {
    startContainer
  } = range;
  const {
    ownerDocument
  } = startContainer;

  // Correct invalid "BR" ranges. The cannot contain any children.
  if (startContainer.nodeName === 'BR') {
    const {
      parentNode
    } = startContainer;
    (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(parentNode, 'parentNode');
    const index = /** @type {Node[]} */Array.from(parentNode.childNodes).indexOf(startContainer);
    (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(ownerDocument, 'ownerDocument');
    range = ownerDocument.createRange();
    range.setStart(parentNode, index);
    range.setEnd(parentNode, index);
  }
  const rects = range.getClientRects();

  // If we have multiple rectangles for a collapsed range, there's no way to
  // know which it is, so don't return anything.
  if (rects.length > 1) {
    return null;
  }
  let rect = rects[0];

  // If the collapsed range starts (and therefore ends) at an element node,
  // `getClientRects` can be empty in some browsers. This can be resolved
  // by adding a temporary text node with zero-width space to the range.
  //
  // See: https://stackoverflow.com/a/6847328/995445
  if (!rect || rect.height === 0) {
    (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(ownerDocument, 'ownerDocument');
    const padNode = ownerDocument.createTextNode('\u200b');
    // Do not modify the live range.
    range = range.cloneRange();
    range.insertNode(padNode);
    rect = range.getClientRects()[0];
    (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(padNode.parentNode, 'padNode.parentNode');
    padNode.parentNode.removeChild(padNode);
  }
  return rect;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollContainer)
/* harmony export */ });
/* harmony import */ var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-computed-style */ "./node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");
/**
 * Internal dependencies
 */


/**
 * Given a DOM node, finds the closest scrollable container node or the node
 * itself, if scrollable.
 *
 * @param {Element | null} node      Node from which to start.
 * @param {?string}        direction Direction of scrollable container to search for ('vertical', 'horizontal', 'all').
 *                                   Defaults to 'vertical'.
 * @return {Element | undefined} Scrollable container node, if found.
 */
function getScrollContainer(node, direction = 'vertical') {
  if (!node) {
    return undefined;
  }
  if (direction === 'vertical' || direction === 'all') {
    // Scrollable if scrollable height exceeds displayed...
    if (node.scrollHeight > node.clientHeight) {
      // ...except when overflow is defined to be hidden or visible
      const {
        overflowY
      } = (0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
      if (/(auto|scroll)/.test(overflowY)) {
        return node;
      }
    }
  }
  if (direction === 'horizontal' || direction === 'all') {
    // Scrollable if scrollable width exceeds displayed...
    if (node.scrollWidth > node.clientWidth) {
      // ...except when overflow is defined to be hidden or visible
      const {
        overflowX
      } = (0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__["default"])(node);
      if (/(auto|scroll)/.test(overflowX)) {
        return node;
      }
    }
  }
  if (node.ownerDocument === node.parentNode) {
    return node;
  }

  // Continue traversing.
  return getScrollContainer( /** @type {Element} */node.parentNode, direction);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/hidden-caret-range-from-point.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/hidden-caret-range-from-point.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hiddenCaretRangeFromPoint)
/* harmony export */ });
/* harmony import */ var _caret_range_from_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caret-range-from-point */ "./node_modules/@wordpress/dom/build-module/dom/caret-range-from-point.js");
/* harmony import */ var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-computed-style */ "./node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");
/**
 * Internal dependencies
 */



/**
 * Get a collapsed range for a given point.
 * Gives the container a temporary high z-index (above any UI).
 * This is preferred over getting the UI nodes and set styles there.
 *
 * @param {Document}    doc       The document of the range.
 * @param {number}      x         Horizontal position within the current viewport.
 * @param {number}      y         Vertical position within the current viewport.
 * @param {HTMLElement} container Container in which the range is expected to be found.
 *
 * @return {?Range} The best range for the given point.
 */
function hiddenCaretRangeFromPoint(doc, x, y, container) {
  const originalZIndex = container.style.zIndex;
  const originalPosition = container.style.position;
  const {
    position = 'static'
  } = (0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__["default"])(container);

  // A z-index only works if the element position is not static.
  if (position === 'static') {
    container.style.position = 'relative';
  }
  container.style.zIndex = '10000';
  const range = (0,_caret_range_from_point__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, x, y);
  container.style.zIndex = originalZIndex;
  container.style.position = originalPosition;
  return range;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __unstableStripHTML: () => (/* reexport safe */ _strip_html__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   computeCaretRect: () => (/* reexport safe */ _compute_caret_rect__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   documentHasSelection: () => (/* reexport safe */ _document_has_selection__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   documentHasTextSelection: () => (/* reexport safe */ _document_has_text_selection__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   documentHasUncollapsedSelection: () => (/* reexport safe */ _document_has_uncollapsed_selection__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   getOffsetParent: () => (/* reexport safe */ _get_offset_parent__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   getRectangleFromRange: () => (/* reexport safe */ _get_rectangle_from_range__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   getScrollContainer: () => (/* reexport safe */ _get_scroll_container__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   insertAfter: () => (/* reexport safe */ _insert_after__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   isEmpty: () => (/* reexport safe */ _is_empty__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   isEntirelySelected: () => (/* reexport safe */ _is_entirely_selected__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   isFormElement: () => (/* reexport safe */ _is_form_element__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   isHorizontalEdge: () => (/* reexport safe */ _is_horizontal_edge__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   isNumberInput: () => (/* reexport safe */ _is_number_input__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   isRTL: () => (/* reexport safe */ _is_rtl__WEBPACK_IMPORTED_MODULE_24__["default"]),
/* harmony export */   isSelectionForward: () => (/* reexport safe */ _is_selection_forward__WEBPACK_IMPORTED_MODULE_26__["default"]),
/* harmony export */   isTextField: () => (/* reexport safe */ _is_text_field__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   isVerticalEdge: () => (/* reexport safe */ _is_vertical_edge__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   placeCaretAtHorizontalEdge: () => (/* reexport safe */ _place_caret_at_horizontal_edge__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   placeCaretAtVerticalEdge: () => (/* reexport safe */ _place_caret_at_vertical_edge__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   remove: () => (/* reexport safe */ _remove__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   removeInvalidHTML: () => (/* reexport safe */ _remove_invalid_html__WEBPACK_IMPORTED_MODULE_23__["default"]),
/* harmony export */   replace: () => (/* reexport safe */ _replace__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   replaceTag: () => (/* reexport safe */ _replace_tag__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   safeHTML: () => (/* reexport safe */ _safe_html__WEBPACK_IMPORTED_MODULE_25__["default"]),
/* harmony export */   unwrap: () => (/* reexport safe */ _unwrap__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   wrap: () => (/* reexport safe */ _wrap__WEBPACK_IMPORTED_MODULE_20__["default"])
/* harmony export */ });
/* harmony import */ var _compute_caret_rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute-caret-rect */ "./node_modules/@wordpress/dom/build-module/dom/compute-caret-rect.js");
/* harmony import */ var _document_has_text_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-has-text-selection */ "./node_modules/@wordpress/dom/build-module/dom/document-has-text-selection.js");
/* harmony import */ var _document_has_uncollapsed_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document-has-uncollapsed-selection */ "./node_modules/@wordpress/dom/build-module/dom/document-has-uncollapsed-selection.js");
/* harmony import */ var _document_has_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./document-has-selection */ "./node_modules/@wordpress/dom/build-module/dom/document-has-selection.js");
/* harmony import */ var _get_rectangle_from_range__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-rectangle-from-range */ "./node_modules/@wordpress/dom/build-module/dom/get-rectangle-from-range.js");
/* harmony import */ var _get_scroll_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-scroll-container */ "./node_modules/@wordpress/dom/build-module/dom/get-scroll-container.js");
/* harmony import */ var _get_offset_parent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-offset-parent */ "./node_modules/@wordpress/dom/build-module/dom/get-offset-parent.js");
/* harmony import */ var _is_entirely_selected__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-entirely-selected */ "./node_modules/@wordpress/dom/build-module/dom/is-entirely-selected.js");
/* harmony import */ var _is_form_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./is-form-element */ "./node_modules/@wordpress/dom/build-module/dom/is-form-element.js");
/* harmony import */ var _is_horizontal_edge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-horizontal-edge */ "./node_modules/@wordpress/dom/build-module/dom/is-horizontal-edge.js");
/* harmony import */ var _is_number_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./is-number-input */ "./node_modules/@wordpress/dom/build-module/dom/is-number-input.js");
/* harmony import */ var _is_text_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./is-text-field */ "./node_modules/@wordpress/dom/build-module/dom/is-text-field.js");
/* harmony import */ var _is_vertical_edge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./is-vertical-edge */ "./node_modules/@wordpress/dom/build-module/dom/is-vertical-edge.js");
/* harmony import */ var _place_caret_at_horizontal_edge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./place-caret-at-horizontal-edge */ "./node_modules/@wordpress/dom/build-module/dom/place-caret-at-horizontal-edge.js");
/* harmony import */ var _place_caret_at_vertical_edge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./place-caret-at-vertical-edge */ "./node_modules/@wordpress/dom/build-module/dom/place-caret-at-vertical-edge.js");
/* harmony import */ var _replace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./replace */ "./node_modules/@wordpress/dom/build-module/dom/replace.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./remove */ "./node_modules/@wordpress/dom/build-module/dom/remove.js");
/* harmony import */ var _insert_after__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./insert-after */ "./node_modules/@wordpress/dom/build-module/dom/insert-after.js");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./unwrap */ "./node_modules/@wordpress/dom/build-module/dom/unwrap.js");
/* harmony import */ var _replace_tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./replace-tag */ "./node_modules/@wordpress/dom/build-module/dom/replace-tag.js");
/* harmony import */ var _wrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./wrap */ "./node_modules/@wordpress/dom/build-module/dom/wrap.js");
/* harmony import */ var _strip_html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./strip-html */ "./node_modules/@wordpress/dom/build-module/dom/strip-html.js");
/* harmony import */ var _is_empty__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./is-empty */ "./node_modules/@wordpress/dom/build-module/dom/is-empty.js");
/* harmony import */ var _remove_invalid_html__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./remove-invalid-html */ "./node_modules/@wordpress/dom/build-module/dom/remove-invalid-html.js");
/* harmony import */ var _is_rtl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./is-rtl */ "./node_modules/@wordpress/dom/build-module/dom/is-rtl.js");
/* harmony import */ var _safe_html__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./safe-html */ "./node_modules/@wordpress/dom/build-module/dom/safe-html.js");
/* harmony import */ var _is_selection_forward__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./is-selection-forward */ "./node_modules/@wordpress/dom/build-module/dom/is-selection-forward.js");





























/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/input-field-has-uncollapsed-selection.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/input-field-has-uncollapsed-selection.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inputFieldHasUncollapsedSelection)
/* harmony export */ });
/* harmony import */ var _is_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-text-field */ "./node_modules/@wordpress/dom/build-module/dom/is-text-field.js");
/* harmony import */ var _is_html_input_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-html-input-element */ "./node_modules/@wordpress/dom/build-module/dom/is-html-input-element.js");
/**
 * Internal dependencies
 */



/**
 * Check whether the given input field or textarea contains a (uncollapsed)
 * selection of text.
 *
 * CAVEAT: Only specific text-based HTML inputs support the selection APIs
 * needed to determine whether they have a collapsed or uncollapsed selection.
 * This function defaults to returning `true` when the selection cannot be
 * inspected, such as with `<input type="time">`. The rationale is that this
 * should cause the block editor to defer to the browser's native selection
 * handling (e.g. copying and pasting), thereby reducing friction for the user.
 *
 * See: https://html.spec.whatwg.org/multipage/input.html#do-not-apply
 *
 * @param {Element} element The HTML element.
 *
 * @return {boolean} Whether the input/textareaa element has some "selection".
 */
function inputFieldHasUncollapsedSelection(element) {
  if (!(0,_is_html_input_element__WEBPACK_IMPORTED_MODULE_0__["default"])(element) && !(0,_is_text_field__WEBPACK_IMPORTED_MODULE_1__["default"])(element)) {
    return false;
  }

  // Safari throws a type error when trying to get `selectionStart` and
  // `selectionEnd` on non-text <input> elements, so a try/catch construct is
  // necessary.
  try {
    const {
      selectionStart,
      selectionEnd
    } = /** @type {HTMLInputElement | HTMLTextAreaElement} */element;
    return (
      // `null` means the input type doesn't implement selection, thus we
      // cannot determine whether the selection is collapsed, so we
      // default to true.
      selectionStart === null ||
      // when not null, compare the two points
      selectionStart !== selectionEnd
    );
  } catch (error) {
    // This is Safari's way of saying that the input type doesn't implement
    // selection, so we default to true.
    return true;
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/insert-after.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/insert-after.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertAfter)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/**
 * Given two DOM nodes, inserts the former in the DOM as the next sibling of
 * the latter.
 *
 * @param {Node} newNode       Node to be inserted.
 * @param {Node} referenceNode Node after which to perform the insertion.
 * @return {void}
 */
function insertAfter(newNode, referenceNode) {
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(referenceNode.parentNode, 'referenceNode.parentNode');
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-edge.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-edge.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isEdge)
/* harmony export */ });
/* harmony import */ var _is_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-rtl */ "./node_modules/@wordpress/dom/build-module/dom/is-rtl.js");
/* harmony import */ var _get_range_height__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-range-height */ "./node_modules/@wordpress/dom/build-module/dom/get-range-height.js");
/* harmony import */ var _get_rectangle_from_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-rectangle-from-range */ "./node_modules/@wordpress/dom/build-module/dom/get-rectangle-from-range.js");
/* harmony import */ var _is_selection_forward__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-selection-forward */ "./node_modules/@wordpress/dom/build-module/dom/is-selection-forward.js");
/* harmony import */ var _hidden_caret_range_from_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hidden-caret-range-from-point */ "./node_modules/@wordpress/dom/build-module/dom/hidden-caret-range-from-point.js");
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/* harmony import */ var _is_input_or_text_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-input-or-text-area */ "./node_modules/@wordpress/dom/build-module/dom/is-input-or-text-area.js");
/* harmony import */ var _scroll_if_no_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scroll-if-no-range */ "./node_modules/@wordpress/dom/build-module/dom/scroll-if-no-range.js");
/**
 * Internal dependencies
 */









/**
 * Check whether the selection is at the edge of the container. Checks for
 * horizontal position by default. Set `onlyVertical` to true to check only
 * vertically.
 *
 * @param {HTMLElement} container            Focusable element.
 * @param {boolean}     isReverse            Set to true to check left, false to check right.
 * @param {boolean}     [onlyVertical=false] Set to true to check only vertical position.
 *
 * @return {boolean} True if at the edge, false if not.
 */
function isEdge(container, isReverse, onlyVertical = false) {
  if ((0,_is_input_or_text_area__WEBPACK_IMPORTED_MODULE_0__["default"])(container) && typeof container.selectionStart === 'number') {
    if (container.selectionStart !== container.selectionEnd) {
      return false;
    }
    if (isReverse) {
      return container.selectionStart === 0;
    }
    return container.value.length === container.selectionStart;
  }
  if (!container.isContentEditable) {
    return true;
  }
  const {
    ownerDocument
  } = container;
  const {
    defaultView
  } = ownerDocument;
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_1__.assertIsDefined)(defaultView, 'defaultView');
  const selection = defaultView.getSelection();
  if (!selection || !selection.rangeCount) {
    return false;
  }
  const range = selection.getRangeAt(0);
  const collapsedRange = range.cloneRange();
  const isForward = (0,_is_selection_forward__WEBPACK_IMPORTED_MODULE_2__["default"])(selection);
  const isCollapsed = selection.isCollapsed;

  // Collapse in direction of selection.
  if (!isCollapsed) {
    collapsedRange.collapse(!isForward);
  }
  const collapsedRangeRect = (0,_get_rectangle_from_range__WEBPACK_IMPORTED_MODULE_3__["default"])(collapsedRange);
  const rangeRect = (0,_get_rectangle_from_range__WEBPACK_IMPORTED_MODULE_3__["default"])(range);
  if (!collapsedRangeRect || !rangeRect) {
    return false;
  }

  // Only consider the multiline selection at the edge if the direction is
  // towards the edge. The selection is multiline if it is taller than the
  // collapsed  selection.
  const rangeHeight = (0,_get_range_height__WEBPACK_IMPORTED_MODULE_4__["default"])(range);
  if (!isCollapsed && rangeHeight && rangeHeight > collapsedRangeRect.height && isForward === isReverse) {
    return false;
  }

  // In the case of RTL scripts, the horizontal edge is at the opposite side.
  const isReverseDir = (0,_is_rtl__WEBPACK_IMPORTED_MODULE_5__["default"])(container) ? !isReverse : isReverse;
  const containerRect = container.getBoundingClientRect();

  // To check if a selection is at the edge, we insert a test selection at the
  // edge of the container and check if the selections have the same vertical
  // or horizontal position. If they do, the selection is at the edge.
  // This method proves to be better than a DOM-based calculation for the
  // horizontal edge, since it ignores empty textnodes and a trailing line
  // break element. In other words, we need to check visual positioning, not
  // DOM positioning.
  // It also proves better than using the computed style for the vertical
  // edge, because we cannot know the padding and line height reliably in
  // pixels. `getComputedStyle` may return a value with different units.
  const x = isReverseDir ? containerRect.left + 1 : containerRect.right - 1;
  const y = isReverse ? containerRect.top + 1 : containerRect.bottom - 1;
  const testRange = (0,_scroll_if_no_range__WEBPACK_IMPORTED_MODULE_6__.scrollIfNoRange)(container, isReverse, () => (0,_hidden_caret_range_from_point__WEBPACK_IMPORTED_MODULE_7__["default"])(ownerDocument, x, y, container));
  if (!testRange) {
    return false;
  }
  const testRect = (0,_get_rectangle_from_range__WEBPACK_IMPORTED_MODULE_3__["default"])(testRange);
  if (!testRect) {
    return false;
  }
  const verticalSide = isReverse ? 'top' : 'bottom';
  const horizontalSide = isReverseDir ? 'left' : 'right';
  const verticalDiff = testRect[verticalSide] - rangeRect[verticalSide];
  const horizontalDiff = testRect[horizontalSide] - collapsedRangeRect[horizontalSide];

  // Allow the position to be 1px off.
  const hasVerticalDiff = Math.abs(verticalDiff) <= 1;
  const hasHorizontalDiff = Math.abs(horizontalDiff) <= 1;
  return onlyVertical ? hasVerticalDiff : hasVerticalDiff && hasHorizontalDiff;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-element.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isElement)
/* harmony export */ });
/* eslint-disable jsdoc/valid-types */
/**
 * @param {Node | null | undefined} node
 * @return {node is Element} True if node is an Element node
 */
function isElement(node) {
  /* eslint-enable jsdoc/valid-types */
  return !!node && node.nodeType === node.ELEMENT_NODE;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-empty.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-empty.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isEmpty)
/* harmony export */ });
/**
 * Recursively checks if an element is empty. An element is not empty if it
 * contains text or contains elements with attributes such as images.
 *
 * @param {Element} element The element to check.
 *
 * @return {boolean} Whether or not the element is empty.
 */
function isEmpty(element) {
  switch (element.nodeType) {
    case element.TEXT_NODE:
      // We cannot use \s since it includes special spaces which we want
      // to preserve.
      return /^[ \f\n\r\t\v\u00a0]*$/.test(element.nodeValue || '');
    case element.ELEMENT_NODE:
      if (element.hasAttributes()) {
        return false;
      } else if (!element.hasChildNodes()) {
        return true;
      }
      return /** @type {Element[]} */Array.from(element.childNodes).every(isEmpty);
    default:
      return true;
  }
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-entirely-selected.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-entirely-selected.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isEntirelySelected)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/* harmony import */ var _is_input_or_text_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-input-or-text-area */ "./node_modules/@wordpress/dom/build-module/dom/is-input-or-text-area.js");
/**
 * Internal dependencies
 */



/**
 * Check whether the contents of the element have been entirely selected.
 * Returns true if there is no possibility of selection.
 *
 * @param {HTMLElement} element The element to check.
 *
 * @return {boolean} True if entirely selected, false if not.
 */
function isEntirelySelected(element) {
  if ((0,_is_input_or_text_area__WEBPACK_IMPORTED_MODULE_0__["default"])(element)) {
    return element.selectionStart === 0 && element.value.length === element.selectionEnd;
  }
  if (!element.isContentEditable) {
    return true;
  }
  const {
    ownerDocument
  } = element;
  const {
    defaultView
  } = ownerDocument;
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_1__.assertIsDefined)(defaultView, 'defaultView');
  const selection = defaultView.getSelection();
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_1__.assertIsDefined)(selection, 'selection');
  const range = selection.rangeCount ? selection.getRangeAt(0) : null;
  if (!range) {
    return true;
  }
  const {
    startContainer,
    endContainer,
    startOffset,
    endOffset
  } = range;
  if (startContainer === element && endContainer === element && startOffset === 0 && endOffset === element.childNodes.length) {
    return true;
  }
  const lastChild = element.lastChild;
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_1__.assertIsDefined)(lastChild, 'lastChild');
  const endContainerContentLength = endContainer.nodeType === endContainer.TEXT_NODE ? /** @type {Text} */endContainer.data.length : endContainer.childNodes.length;
  return isDeepChild(startContainer, element, 'firstChild') && isDeepChild(endContainer, element, 'lastChild') && startOffset === 0 && endOffset === endContainerContentLength;
}

/**
 * Check whether the contents of the element have been entirely selected.
 * Returns true if there is no possibility of selection.
 *
 * @param {HTMLElement|Node}         query     The element to check.
 * @param {HTMLElement}              container The container that we suspect "query" may be a first or last child of.
 * @param {"firstChild"|"lastChild"} propName  "firstChild" or "lastChild"
 *
 * @return {boolean} True if query is a deep first/last child of container, false otherwise.
 */
function isDeepChild(query, container, propName) {
  /** @type {HTMLElement | ChildNode | null} */
  let candidate = container;
  do {
    if (query === candidate) {
      return true;
    }
    candidate = candidate[propName];
  } while (candidate);
  return false;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-form-element.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-form-element.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isFormElement)
/* harmony export */ });
/* harmony import */ var _is_input_or_text_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-input-or-text-area */ "./node_modules/@wordpress/dom/build-module/dom/is-input-or-text-area.js");
/**
 * Internal dependencies
 */


/**
 *
 * Detects if element is a form element.
 *
 * @param {Element} element The element to check.
 *
 * @return {boolean} True if form element and false otherwise.
 */
function isFormElement(element) {
  if (!element) {
    return false;
  }
  const {
    tagName
  } = element;
  const checkForInputTextarea = (0,_is_input_or_text_area__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
  return checkForInputTextarea || tagName === 'BUTTON' || tagName === 'SELECT';
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-horizontal-edge.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-horizontal-edge.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isHorizontalEdge)
/* harmony export */ });
/* harmony import */ var _is_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-edge */ "./node_modules/@wordpress/dom/build-module/dom/is-edge.js");
/**
 * Internal dependencies
 */


/**
 * Check whether the selection is horizontally at the edge of the container.
 *
 * @param {HTMLElement} container Focusable element.
 * @param {boolean}     isReverse Set to true to check left, false for right.
 *
 * @return {boolean} True if at the horizontal edge, false if not.
 */
function isHorizontalEdge(container, isReverse) {
  return (0,_is_edge__WEBPACK_IMPORTED_MODULE_0__["default"])(container, isReverse);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-html-input-element.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-html-input-element.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isHTMLInputElement)
/* harmony export */ });
/* eslint-disable jsdoc/valid-types */
/**
 * @param {Node} node
 * @return {node is HTMLInputElement} Whether the node is an HTMLInputElement.
 */
function isHTMLInputElement(node) {
  /* eslint-enable jsdoc/valid-types */
  return node?.nodeName === 'INPUT';
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-input-or-text-area.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-input-or-text-area.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isInputOrTextArea)
/* harmony export */ });
/* eslint-disable jsdoc/valid-types */
/**
 * @param {Element} element
 * @return {element is HTMLInputElement | HTMLTextAreaElement} Whether the element is an input or textarea
 */
function isInputOrTextArea(element) {
  /* eslint-enable jsdoc/valid-types */
  return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-number-input.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-number-input.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isNumberInput)
/* harmony export */ });
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/deprecated */ "@wordpress/deprecated");
/* harmony import */ var _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_html_input_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-html-input-element */ "./node_modules/@wordpress/dom/build-module/dom/is-html-input-element.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * Check whether the given element is an input field of type number.
 *
 * @param {Node} node The HTML node.
 *
 * @return {node is HTMLInputElement} True if the node is number input.
 */
function isNumberInput(node) {
  _wordpress_deprecated__WEBPACK_IMPORTED_MODULE_0___default()('wp.dom.isNumberInput', {
    since: '6.1',
    version: '6.5'
  });
  /* eslint-enable jsdoc/valid-types */
  return (0,_is_html_input_element__WEBPACK_IMPORTED_MODULE_1__["default"])(node) && node.type === 'number' && !isNaN(node.valueAsNumber);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-rtl.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-rtl.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isRTL)
/* harmony export */ });
/* harmony import */ var _get_computed_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-computed-style */ "./node_modules/@wordpress/dom/build-module/dom/get-computed-style.js");
/**
 * Internal dependencies
 */


/**
 * Whether the element's text direction is right-to-left.
 *
 * @param {Element} element The element to check.
 *
 * @return {boolean} True if rtl, false if ltr.
 */
function isRTL(element) {
  return (0,_get_computed_style__WEBPACK_IMPORTED_MODULE_0__["default"])(element).direction === 'rtl';
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-selection-forward.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-selection-forward.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSelectionForward)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/**
 * Returns true if the given selection object is in the forward direction, or
 * false otherwise.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
 *
 * @param {Selection} selection Selection object to check.
 *
 * @return {boolean} Whether the selection is forward.
 */
function isSelectionForward(selection) {
  const {
    anchorNode,
    focusNode,
    anchorOffset,
    focusOffset
  } = selection;
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(anchorNode, 'anchorNode');
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(focusNode, 'focusNode');
  const position = anchorNode.compareDocumentPosition(focusNode);

  // Disable reason: `Node#compareDocumentPosition` returns a bitmask value,
  // so bitwise operators are intended.
  /* eslint-disable no-bitwise */
  // Compare whether anchor node precedes focus node. If focus node (where
  // end of selection occurs) is after the anchor node, it is forward.
  if (position & anchorNode.DOCUMENT_POSITION_PRECEDING) {
    return false;
  }
  if (position & anchorNode.DOCUMENT_POSITION_FOLLOWING) {
    return true;
  }
  /* eslint-enable no-bitwise */

  // `compareDocumentPosition` returns 0 when passed the same node, in which
  // case compare offsets.
  if (position === 0) {
    return anchorOffset <= focusOffset;
  }

  // This should never be reached, but return true as default case.
  return true;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-text-field.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-text-field.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isTextField)
/* harmony export */ });
/* harmony import */ var _is_html_input_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-html-input-element */ "./node_modules/@wordpress/dom/build-module/dom/is-html-input-element.js");
/**
 * Internal dependencies
 */


/* eslint-disable jsdoc/valid-types */
/**
 * Check whether the given element is a text field, where text field is defined
 * by the ability to select within the input, or that it is contenteditable.
 *
 * See: https://html.spec.whatwg.org/#textFieldSelection
 *
 * @param {Node} node The HTML element.
 * @return {node is HTMLElement} True if the element is an text field, false if not.
 */
function isTextField(node) {
  /* eslint-enable jsdoc/valid-types */
  const nonTextInputs = ['button', 'checkbox', 'hidden', 'file', 'radio', 'image', 'range', 'reset', 'submit', 'number', 'email', 'time'];
  return (0,_is_html_input_element__WEBPACK_IMPORTED_MODULE_0__["default"])(node) && node.type && !nonTextInputs.includes(node.type) || node.nodeName === 'TEXTAREA' || /** @type {HTMLElement} */node.contentEditable === 'true';
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/is-vertical-edge.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/is-vertical-edge.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isVerticalEdge)
/* harmony export */ });
/* harmony import */ var _is_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-edge */ "./node_modules/@wordpress/dom/build-module/dom/is-edge.js");
/**
 * Internal dependencies
 */


/**
 * Check whether the selection is vertically at the edge of the container.
 *
 * @param {HTMLElement} container Focusable element.
 * @param {boolean}     isReverse Set to true to check top, false for bottom.
 *
 * @return {boolean} True if at the vertical edge, false if not.
 */
function isVerticalEdge(container, isReverse) {
  return (0,_is_edge__WEBPACK_IMPORTED_MODULE_0__["default"])(container, isReverse, true);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/place-caret-at-edge.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/place-caret-at-edge.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeCaretAtEdge)
/* harmony export */ });
/* harmony import */ var _hidden_caret_range_from_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hidden-caret-range-from-point */ "./node_modules/@wordpress/dom/build-module/dom/hidden-caret-range-from-point.js");
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/* harmony import */ var _is_input_or_text_area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-input-or-text-area */ "./node_modules/@wordpress/dom/build-module/dom/is-input-or-text-area.js");
/* harmony import */ var _is_rtl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-rtl */ "./node_modules/@wordpress/dom/build-module/dom/is-rtl.js");
/* harmony import */ var _scroll_if_no_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scroll-if-no-range */ "./node_modules/@wordpress/dom/build-module/dom/scroll-if-no-range.js");
/**
 * Internal dependencies
 */






/**
 * Gets the range to place.
 *
 * @param {HTMLElement}      container Focusable element.
 * @param {boolean}          isReverse True for end, false for start.
 * @param {number|undefined} x         X coordinate to vertically position.
 *
 * @return {Range|null} The range to place.
 */
function getRange(container, isReverse, x) {
  const {
    ownerDocument
  } = container;
  // In the case of RTL scripts, the horizontal edge is at the opposite side.
  const isReverseDir = (0,_is_rtl__WEBPACK_IMPORTED_MODULE_0__["default"])(container) ? !isReverse : isReverse;
  const containerRect = container.getBoundingClientRect();
  // When placing at the end (isReverse), find the closest range to the bottom
  // right corner. When placing at the start, to the top left corner.
  // Ensure x is defined and within the container's boundaries. When it's
  // exactly at the boundary, it's not considered within the boundaries.
  if (x === undefined) {
    x = isReverse ? containerRect.right - 1 : containerRect.left + 1;
  } else if (x <= containerRect.left) {
    x = containerRect.left + 1;
  } else if (x >= containerRect.right) {
    x = containerRect.right - 1;
  }
  const y = isReverseDir ? containerRect.bottom - 1 : containerRect.top + 1;
  return (0,_hidden_caret_range_from_point__WEBPACK_IMPORTED_MODULE_1__["default"])(ownerDocument, x, y, container);
}

/**
 * Places the caret at start or end of a given element.
 *
 * @param {HTMLElement}      container Focusable element.
 * @param {boolean}          isReverse True for end, false for start.
 * @param {number|undefined} x         X coordinate to vertically position.
 */
function placeCaretAtEdge(container, isReverse, x) {
  if (!container) {
    return;
  }
  container.focus();
  if ((0,_is_input_or_text_area__WEBPACK_IMPORTED_MODULE_2__["default"])(container)) {
    // The element may not support selection setting.
    if (typeof container.selectionStart !== 'number') {
      return;
    }
    if (isReverse) {
      container.selectionStart = container.value.length;
      container.selectionEnd = container.value.length;
    } else {
      container.selectionStart = 0;
      container.selectionEnd = 0;
    }
    return;
  }
  if (!container.isContentEditable) {
    return;
  }
  const range = (0,_scroll_if_no_range__WEBPACK_IMPORTED_MODULE_3__.scrollIfNoRange)(container, isReverse, () => getRange(container, isReverse, x));
  if (!range) {
    return;
  }
  const {
    ownerDocument
  } = container;
  const {
    defaultView
  } = ownerDocument;
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_4__.assertIsDefined)(defaultView, 'defaultView');
  const selection = defaultView.getSelection();
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_4__.assertIsDefined)(selection, 'selection');
  selection.removeAllRanges();
  selection.addRange(range);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/place-caret-at-horizontal-edge.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/place-caret-at-horizontal-edge.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeCaretAtHorizontalEdge)
/* harmony export */ });
/* harmony import */ var _place_caret_at_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-caret-at-edge */ "./node_modules/@wordpress/dom/build-module/dom/place-caret-at-edge.js");
/**
 * Internal dependencies
 */


/**
 * Places the caret at start or end of a given element.
 *
 * @param {HTMLElement} container Focusable element.
 * @param {boolean}     isReverse True for end, false for start.
 */
function placeCaretAtHorizontalEdge(container, isReverse) {
  return (0,_place_caret_at_edge__WEBPACK_IMPORTED_MODULE_0__["default"])(container, isReverse, undefined);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/place-caret-at-vertical-edge.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/place-caret-at-vertical-edge.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ placeCaretAtVerticalEdge)
/* harmony export */ });
/* harmony import */ var _place_caret_at_edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-caret-at-edge */ "./node_modules/@wordpress/dom/build-module/dom/place-caret-at-edge.js");
/**
 * Internal dependencies
 */


/**
 * Places the caret at the top or bottom of a given element.
 *
 * @param {HTMLElement} container Focusable element.
 * @param {boolean}     isReverse True for bottom, false for top.
 * @param {DOMRect}     [rect]    The rectangle to position the caret with.
 */
function placeCaretAtVerticalEdge(container, isReverse, rect) {
  return (0,_place_caret_at_edge__WEBPACK_IMPORTED_MODULE_0__["default"])(container, isReverse, rect?.left);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/remove-invalid-html.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/remove-invalid-html.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeInvalidHTML)
/* harmony export */ });
/* harmony import */ var _clean_node_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clean-node-list */ "./node_modules/@wordpress/dom/build-module/dom/clean-node-list.js");
/**
 * Internal dependencies
 */


/**
 * Given a schema, unwraps or removes nodes, attributes and classes on HTML.
 *
 * @param {string}                             HTML   The HTML to clean up.
 * @param {import('./clean-node-list').Schema} schema Schema for the HTML.
 * @param {boolean}                            inline Whether to clean for inline mode.
 *
 * @return {string} The cleaned up HTML.
 */
function removeInvalidHTML(HTML, schema, inline) {
  const doc = document.implementation.createHTMLDocument('');
  doc.body.innerHTML = HTML;
  (0,_clean_node_list__WEBPACK_IMPORTED_MODULE_0__["default"])(doc.body.childNodes, doc, schema, inline);
  return doc.body.innerHTML;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/remove.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/remove.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/**
 * Given a DOM node, removes it from the DOM.
 *
 * @param {Node} node Node to be removed.
 * @return {void}
 */
function remove(node) {
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(node.parentNode, 'node.parentNode');
  node.parentNode.removeChild(node);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/replace-tag.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/replace-tag.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ replaceTag)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/**
 * Replaces the given node with a new node with the given tag name.
 *
 * @param {Element} node    The node to replace
 * @param {string}  tagName The new tag name.
 *
 * @return {Element} The new node.
 */
function replaceTag(node, tagName) {
  const newNode = node.ownerDocument.createElement(tagName);
  while (node.firstChild) {
    newNode.appendChild(node.firstChild);
  }
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(node.parentNode, 'node.parentNode');
  node.parentNode.replaceChild(newNode, node);
  return newNode;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/replace.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/replace.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ replace)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/* harmony import */ var _insert_after__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-after */ "./node_modules/@wordpress/dom/build-module/dom/insert-after.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./node_modules/@wordpress/dom/build-module/dom/remove.js");
/**
 * Internal dependencies
 */




/**
 * Given two DOM nodes, replaces the former with the latter in the DOM.
 *
 * @param {Element} processedNode Node to be removed.
 * @param {Element} newNode       Node to be inserted in its place.
 * @return {void}
 */
function replace(processedNode, newNode) {
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(processedNode.parentNode, 'processedNode.parentNode');
  (0,_insert_after__WEBPACK_IMPORTED_MODULE_1__["default"])(newNode, processedNode.parentNode);
  (0,_remove__WEBPACK_IMPORTED_MODULE_2__["default"])(processedNode);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/safe-html.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/safe-html.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ safeHTML)
/* harmony export */ });
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove */ "./node_modules/@wordpress/dom/build-module/dom/remove.js");
/**
 * Internal dependencies
 */


/**
 * Strips scripts and on* attributes from HTML.
 *
 * @param {string} html HTML to sanitize.
 *
 * @return {string} The sanitized HTML.
 */
function safeHTML(html) {
  const {
    body
  } = document.implementation.createHTMLDocument('');
  body.innerHTML = html;
  const elements = body.getElementsByTagName('*');
  let elementIndex = elements.length;
  while (elementIndex--) {
    const element = elements[elementIndex];
    if (element.tagName === 'SCRIPT') {
      (0,_remove__WEBPACK_IMPORTED_MODULE_0__["default"])(element);
    } else {
      let attributeIndex = element.attributes.length;
      while (attributeIndex--) {
        const {
          name: key
        } = element.attributes[attributeIndex];
        if (key.startsWith('on')) {
          element.removeAttribute(key);
        }
      }
    }
  }
  return body.innerHTML;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/scroll-if-no-range.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/scroll-if-no-range.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrollIfNoRange: () => (/* binding */ scrollIfNoRange)
/* harmony export */ });
/**
 * If no range range can be created or it is outside the container, the element
 * may be out of view, so scroll it into view and try again.
 *
 * @param {HTMLElement} container  The container to scroll.
 * @param {boolean}     alignToTop True to align to top, false to bottom.
 * @param {Function}    callback   The callback to create the range.
 *
 * @return {?Range} The range returned by the callback.
 */
function scrollIfNoRange(container, alignToTop, callback) {
  let range = callback();

  // If no range range can be created or it is outside the container, the
  // element may be out of view.
  if (!range || !range.startContainer || !container.contains(range.startContainer)) {
    container.scrollIntoView(alignToTop);
    range = callback();
    if (!range || !range.startContainer || !container.contains(range.startContainer)) {
      return null;
    }
  }
  return range;
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/strip-html.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/strip-html.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripHTML)
/* harmony export */ });
/* harmony import */ var _safe_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safe-html */ "./node_modules/@wordpress/dom/build-module/dom/safe-html.js");
/**
 * Internal dependencies
 */


/**
 * Removes any HTML tags from the provided string.
 *
 * @param {string} html The string containing html.
 *
 * @return {string} The text content with any html removed.
 */
function stripHTML(html) {
  // Remove any script tags or on* attributes otherwise their *contents* will be left
  // in place following removal of HTML tags.
  html = (0,_safe_html__WEBPACK_IMPORTED_MODULE_0__["default"])(html);
  const doc = document.implementation.createHTMLDocument('');
  doc.body.innerHTML = html;
  return doc.body.textContent || '';
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/unwrap.js":
/*!****************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/unwrap.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unwrap)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/**
 * Unwrap the given node. This means any child nodes are moved to the parent.
 *
 * @param {Node} node The node to unwrap.
 *
 * @return {void}
 */
function unwrap(node) {
  const parent = node.parentNode;
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(parent, 'node.parentNode');
  while (node.firstChild) {
    parent.insertBefore(node.firstChild, node);
  }
  parent.removeChild(node);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/dom/wrap.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/dom/wrap.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ wrap)
/* harmony export */ });
/* harmony import */ var _utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/assert-is-defined */ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js");
/**
 * Internal dependencies
 */


/**
 * Wraps the given node with a new node with the given tag name.
 *
 * @param {Element} newNode       The node to insert.
 * @param {Element} referenceNode The node to wrap.
 */
function wrap(newNode, referenceNode) {
  (0,_utils_assert_is_defined__WEBPACK_IMPORTED_MODULE_0__.assertIsDefined)(referenceNode.parentNode, 'referenceNode.parentNode');
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
  newNode.appendChild(referenceNode);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/focusable.js":
/*!***************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/focusable.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* binding */ find)
/* harmony export */ });
/**
 * References:
 *
 * Focusable:
 *  - https://www.w3.org/TR/html5/editing.html#focus-management
 *
 * Sequential focus navigation:
 *  - https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
 *
 * Disabled elements:
 *  - https://www.w3.org/TR/html5/disabled-elements.html#disabled-elements
 *
 * getClientRects algorithm (requiring layout box):
 *  - https://www.w3.org/TR/cssom-view-1/#extension-to-the-element-interface
 *
 * AREA elements associated with an IMG:
 *  - https://w3c.github.io/html/editing.html#data-model
 */

/**
 * Returns a CSS selector used to query for focusable elements.
 *
 * @param {boolean} sequential If set, only query elements that are sequentially
 *                             focusable. Non-interactive elements with a
 *                             negative `tabindex` are focusable but not
 *                             sequentially focusable.
 *                             https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute
 *
 * @return {string} CSS selector.
 */
function buildSelector(sequential) {
  return [sequential ? '[tabindex]:not([tabindex^="-"])' : '[tabindex]', 'a[href]', 'button:not([disabled])', 'input:not([type="hidden"]):not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'iframe:not([tabindex^="-"])', 'object', 'embed', 'area[href]', '[contenteditable]:not([contenteditable=false])'].join(',');
}

/**
 * Returns true if the specified element is visible (i.e. neither display: none
 * nor visibility: hidden).
 *
 * @param {HTMLElement} element DOM element to test.
 *
 * @return {boolean} Whether element is visible.
 */
function isVisible(element) {
  return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
}

/**
 * Returns true if the specified area element is a valid focusable element, or
 * false otherwise. Area is only focusable if within a map where a named map
 * referenced by an image somewhere in the document.
 *
 * @param {HTMLAreaElement} element DOM area element to test.
 *
 * @return {boolean} Whether area element is valid for focus.
 */
function isValidFocusableArea(element) {
  /** @type {HTMLMapElement | null} */
  const map = element.closest('map[name]');
  if (!map) {
    return false;
  }

  /** @type {HTMLImageElement | null} */
  const img = element.ownerDocument.querySelector('img[usemap="#' + map.name + '"]');
  return !!img && isVisible(img);
}

/**
 * Returns all focusable elements within a given context.
 *
 * @param {Element} context              Element in which to search.
 * @param {Object}  options
 * @param {boolean} [options.sequential] If set, only return elements that are
 *                                       sequentially focusable.
 *                                       Non-interactive elements with a
 *                                       negative `tabindex` are focusable but
 *                                       not sequentially focusable.
 *                                       https://html.spec.whatwg.org/multipage/interaction.html#the-tabindex-attribute
 *
 * @return {HTMLElement[]} Focusable elements.
 */
function find(context, {
  sequential = false
} = {}) {
  /** @type {NodeListOf<HTMLElement>} */
  const elements = context.querySelectorAll(buildSelector(sequential));
  return Array.from(elements).filter(element => {
    if (!isVisible(element)) {
      return false;
    }
    const {
      nodeName
    } = element;
    if ('AREA' === nodeName) {
      return isValidFocusableArea( /** @type {HTMLAreaElement} */element);
    }
    return true;
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/phrasing-content.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/phrasing-content.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPhrasingContentSchema: () => (/* binding */ getPhrasingContentSchema),
/* harmony export */   isPhrasingContent: () => (/* binding */ isPhrasingContent),
/* harmony export */   isTextContent: () => (/* binding */ isTextContent)
/* harmony export */ });
/**
 * All phrasing content elements.
 *
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0
 */

/**
 * @typedef {Record<string,SemanticElementDefinition>} ContentSchema
 */

/**
 * @typedef SemanticElementDefinition
 * @property {string[]}      [attributes] Content attributes
 * @property {ContentSchema} [children]   Content attributes
 */

/**
 * All text-level semantic elements.
 *
 * @see https://html.spec.whatwg.org/multipage/text-level-semantics.html
 *
 * @type {ContentSchema}
 */
const textContentSchema = {
  strong: {},
  em: {},
  s: {},
  del: {},
  ins: {},
  a: {
    attributes: ['href', 'target', 'rel', 'id']
  },
  code: {},
  abbr: {
    attributes: ['title']
  },
  sub: {},
  sup: {},
  br: {},
  small: {},
  // To do: fix blockquote.
  // cite: {},
  q: {
    attributes: ['cite']
  },
  dfn: {
    attributes: ['title']
  },
  data: {
    attributes: ['value']
  },
  time: {
    attributes: ['datetime']
  },
  var: {},
  samp: {},
  kbd: {},
  i: {},
  b: {},
  u: {},
  mark: {},
  ruby: {},
  rt: {},
  rp: {},
  bdi: {
    attributes: ['dir']
  },
  bdo: {
    attributes: ['dir']
  },
  wbr: {},
  '#text': {}
};

// Recursion is needed.
// Possible: strong > em > strong.
// Impossible: strong > strong.
const excludedElements = ['#text', 'br'];
Object.keys(textContentSchema).filter(element => !excludedElements.includes(element)).forEach(tag => {
  const {
    [tag]: removedTag,
    ...restSchema
  } = textContentSchema;
  textContentSchema[tag].children = restSchema;
});

/**
 * Embedded content elements.
 *
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#embedded-content-0
 *
 * @type {ContentSchema}
 */
const embeddedContentSchema = {
  audio: {
    attributes: ['src', 'preload', 'autoplay', 'mediagroup', 'loop', 'muted']
  },
  canvas: {
    attributes: ['width', 'height']
  },
  embed: {
    attributes: ['src', 'type', 'width', 'height']
  },
  img: {
    attributes: ['alt', 'src', 'srcset', 'usemap', 'ismap', 'width', 'height']
  },
  object: {
    attributes: ['data', 'type', 'name', 'usemap', 'form', 'width', 'height']
  },
  video: {
    attributes: ['src', 'poster', 'preload', 'playsinline', 'autoplay', 'mediagroup', 'loop', 'muted', 'controls', 'width', 'height']
  }
};

/**
 * Phrasing content elements.
 *
 * @see https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#phrasing-content-0
 */
const phrasingContentSchema = {
  ...textContentSchema,
  ...embeddedContentSchema
};

/**
 * Get schema of possible paths for phrasing content.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
 *
 * @param {string} [context] Set to "paste" to exclude invisible elements and
 *                           sensitive data.
 *
 * @return {Partial<ContentSchema>} Schema.
 */
function getPhrasingContentSchema(context) {
  if (context !== 'paste') {
    return phrasingContentSchema;
  }

  /**
   * @type {Partial<ContentSchema>}
   */
  const {
    u,
    // Used to mark misspelling. Shouldn't be pasted.
    abbr,
    // Invisible.
    data,
    // Invisible.
    time,
    // Invisible.
    wbr,
    // Invisible.
    bdi,
    // Invisible.
    bdo,
    // Invisible.
    ...remainingContentSchema
  } = {
    ...phrasingContentSchema,
    // We shouldn't paste potentially sensitive information which is not
    // visible to the user when pasted, so strip the attributes.
    ins: {
      children: phrasingContentSchema.ins.children
    },
    del: {
      children: phrasingContentSchema.del.children
    }
  };
  return remainingContentSchema;
}

/**
 * Find out whether or not the given node is phrasing content.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
 *
 * @param {Node} node The node to test.
 *
 * @return {boolean} True if phrasing content, false if not.
 */
function isPhrasingContent(node) {
  const tag = node.nodeName.toLowerCase();
  return getPhrasingContentSchema().hasOwnProperty(tag) || tag === 'span';
}

/**
 * @param {Node} node
 * @return {boolean} Node is text content
 */
function isTextContent(node) {
  const tag = node.nodeName.toLowerCase();
  return textContentSchema.hasOwnProperty(tag) || tag === 'span';
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/tabbable.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/tabbable.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findNext: () => (/* binding */ findNext),
/* harmony export */   findPrevious: () => (/* binding */ findPrevious),
/* harmony export */   isTabbableIndex: () => (/* binding */ isTabbableIndex)
/* harmony export */ });
/* harmony import */ var _focusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusable */ "./node_modules/@wordpress/dom/build-module/focusable.js");
/**
 * Internal dependencies
 */


/**
 * Returns the tab index of the given element. In contrast with the tabIndex
 * property, this normalizes the default (0) to avoid browser inconsistencies,
 * operating under the assumption that this function is only ever called with a
 * focusable node.
 *
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=1190261
 *
 * @param {Element} element Element from which to retrieve.
 *
 * @return {number} Tab index of element (default 0).
 */
function getTabIndex(element) {
  const tabIndex = element.getAttribute('tabindex');
  return tabIndex === null ? 0 : parseInt(tabIndex, 10);
}

/**
 * Returns true if the specified element is tabbable, or false otherwise.
 *
 * @param {Element} element Element to test.
 *
 * @return {boolean} Whether element is tabbable.
 */
function isTabbableIndex(element) {
  return getTabIndex(element) !== -1;
}

/** @typedef {HTMLElement & { type?: string, checked?: boolean, name?: string }} MaybeHTMLInputElement */

/**
 * Returns a stateful reducer function which constructs a filtered array of
 * tabbable elements, where at most one radio input is selected for a given
 * name, giving priority to checked input, falling back to the first
 * encountered.
 *
 * @return {(acc: MaybeHTMLInputElement[], el: MaybeHTMLInputElement) => MaybeHTMLInputElement[]} Radio group collapse reducer.
 */
function createStatefulCollapseRadioGroup() {
  /** @type {Record<string, MaybeHTMLInputElement>} */
  const CHOSEN_RADIO_BY_NAME = {};
  return function collapseRadioGroup( /** @type {MaybeHTMLInputElement[]} */result, /** @type {MaybeHTMLInputElement} */element) {
    const {
      nodeName,
      type,
      checked,
      name
    } = element;

    // For all non-radio tabbables, construct to array by concatenating.
    if (nodeName !== 'INPUT' || type !== 'radio' || !name) {
      return result.concat(element);
    }
    const hasChosen = CHOSEN_RADIO_BY_NAME.hasOwnProperty(name);

    // Omit by skipping concatenation if the radio element is not chosen.
    const isChosen = checked || !hasChosen;
    if (!isChosen) {
      return result;
    }

    // At this point, if there had been a chosen element, the current
    // element is checked and should take priority. Retroactively remove
    // the element which had previously been considered the chosen one.
    if (hasChosen) {
      const hadChosenElement = CHOSEN_RADIO_BY_NAME[name];
      result = result.filter(e => e !== hadChosenElement);
    }
    CHOSEN_RADIO_BY_NAME[name] = element;
    return result.concat(element);
  };
}

/**
 * An array map callback, returning an object with the element value and its
 * array index location as properties. This is used to emulate a proper stable
 * sort where equal tabIndex should be left in order of their occurrence in the
 * document.
 *
 * @param {HTMLElement} element Element.
 * @param {number}      index   Array index of element.
 *
 * @return {{ element: HTMLElement, index: number }} Mapped object with element, index.
 */
function mapElementToObjectTabbable(element, index) {
  return {
    element,
    index
  };
}

/**
 * An array map callback, returning an element of the given mapped object's
 * element value.
 *
 * @param {{ element: HTMLElement }} object Mapped object with element.
 *
 * @return {HTMLElement} Mapped object element.
 */
function mapObjectTabbableToElement(object) {
  return object.element;
}

/**
 * A sort comparator function used in comparing two objects of mapped elements.
 *
 * @see mapElementToObjectTabbable
 *
 * @param {{ element: HTMLElement, index: number }} a First object to compare.
 * @param {{ element: HTMLElement, index: number }} b Second object to compare.
 *
 * @return {number} Comparator result.
 */
function compareObjectTabbables(a, b) {
  const aTabIndex = getTabIndex(a.element);
  const bTabIndex = getTabIndex(b.element);
  if (aTabIndex === bTabIndex) {
    return a.index - b.index;
  }
  return aTabIndex - bTabIndex;
}

/**
 * Givin focusable elements, filters out tabbable element.
 *
 * @param {HTMLElement[]} focusables Focusable elements to filter.
 *
 * @return {HTMLElement[]} Tabbable elements.
 */
function filterTabbable(focusables) {
  return focusables.filter(isTabbableIndex).map(mapElementToObjectTabbable).sort(compareObjectTabbables).map(mapObjectTabbableToElement).reduce(createStatefulCollapseRadioGroup(), []);
}

/**
 * @param {Element} context
 * @return {HTMLElement[]} Tabbable elements within the context.
 */
function find(context) {
  return filterTabbable((0,_focusable__WEBPACK_IMPORTED_MODULE_0__.find)(context));
}

/**
 * Given a focusable element, find the preceding tabbable element.
 *
 * @param {Element} element The focusable element before which to look. Defaults
 *                          to the active element.
 *
 * @return {HTMLElement|undefined} Preceding tabbable element.
 */
function findPrevious(element) {
  return filterTabbable((0,_focusable__WEBPACK_IMPORTED_MODULE_0__.find)(element.ownerDocument.body)).reverse().find(focusable =>
  // eslint-disable-next-line no-bitwise
  element.compareDocumentPosition(focusable) & element.DOCUMENT_POSITION_PRECEDING);
}

/**
 * Given a focusable element, find the next tabbable element.
 *
 * @param {Element} element The focusable element after which to look. Defaults
 *                          to the active element.
 *
 * @return {HTMLElement|undefined} Next tabbable element.
 */
function findNext(element) {
  return filterTabbable((0,_focusable__WEBPACK_IMPORTED_MODULE_0__.find)(element.ownerDocument.body)).find(focusable =>
  // eslint-disable-next-line no-bitwise
  element.compareDocumentPosition(focusable) & element.DOCUMENT_POSITION_FOLLOWING);
}


/***/ }),

/***/ "./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/utils/assert-is-defined.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assertIsDefined: () => (/* binding */ assertIsDefined)
/* harmony export */ });
function assertIsDefined(val, name) {
  if ( true && (val === undefined || val === null)) {
    throw new Error(`Expected '${name}' to be defined, but received ${val}`);
  }
}


/***/ }),

/***/ "@wordpress/deprecated":
/*!************************************!*\
  !*** external ["wp","deprecated"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["deprecated"];

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
/*!***********************************************************!*\
  !*** ./node_modules/@wordpress/dom/build-module/index.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __unstableStripHTML: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.__unstableStripHTML),
/* harmony export */   computeCaretRect: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.computeCaretRect),
/* harmony export */   documentHasSelection: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.documentHasSelection),
/* harmony export */   documentHasTextSelection: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.documentHasTextSelection),
/* harmony export */   documentHasUncollapsedSelection: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.documentHasUncollapsedSelection),
/* harmony export */   focus: () => (/* binding */ focus),
/* harmony export */   getFilesFromDataTransfer: () => (/* reexport safe */ _data_transfer__WEBPACK_IMPORTED_MODULE_4__.getFilesFromDataTransfer),
/* harmony export */   getOffsetParent: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.getOffsetParent),
/* harmony export */   getPhrasingContentSchema: () => (/* reexport safe */ _phrasing_content__WEBPACK_IMPORTED_MODULE_3__.getPhrasingContentSchema),
/* harmony export */   getRectangleFromRange: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.getRectangleFromRange),
/* harmony export */   getScrollContainer: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.getScrollContainer),
/* harmony export */   insertAfter: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.insertAfter),
/* harmony export */   isEmpty: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isEmpty),
/* harmony export */   isEntirelySelected: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isEntirelySelected),
/* harmony export */   isFormElement: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isFormElement),
/* harmony export */   isHorizontalEdge: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isHorizontalEdge),
/* harmony export */   isNumberInput: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isNumberInput),
/* harmony export */   isPhrasingContent: () => (/* reexport safe */ _phrasing_content__WEBPACK_IMPORTED_MODULE_3__.isPhrasingContent),
/* harmony export */   isRTL: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isRTL),
/* harmony export */   isSelectionForward: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isSelectionForward),
/* harmony export */   isTextContent: () => (/* reexport safe */ _phrasing_content__WEBPACK_IMPORTED_MODULE_3__.isTextContent),
/* harmony export */   isTextField: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isTextField),
/* harmony export */   isVerticalEdge: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.isVerticalEdge),
/* harmony export */   placeCaretAtHorizontalEdge: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.placeCaretAtHorizontalEdge),
/* harmony export */   placeCaretAtVerticalEdge: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.placeCaretAtVerticalEdge),
/* harmony export */   remove: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.remove),
/* harmony export */   removeInvalidHTML: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.removeInvalidHTML),
/* harmony export */   replace: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.replace),
/* harmony export */   replaceTag: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.replaceTag),
/* harmony export */   safeHTML: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.safeHTML),
/* harmony export */   unwrap: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.unwrap),
/* harmony export */   wrap: () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_2__.wrap)
/* harmony export */ });
/* harmony import */ var _focusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./focusable */ "./node_modules/@wordpress/dom/build-module/focusable.js");
/* harmony import */ var _tabbable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabbable */ "./node_modules/@wordpress/dom/build-module/tabbable.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./node_modules/@wordpress/dom/build-module/dom/index.js");
/* harmony import */ var _phrasing_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phrasing-content */ "./node_modules/@wordpress/dom/build-module/phrasing-content.js");
/* harmony import */ var _data_transfer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-transfer */ "./node_modules/@wordpress/dom/build-module/data-transfer.js");
/**
 * Internal dependencies
 */



/**
 * Object grouping `focusable` and `tabbable` utils
 * under the keys with the same name.
 */
const focus = {
  focusable: _focusable__WEBPACK_IMPORTED_MODULE_0__,
  tabbable: _tabbable__WEBPACK_IMPORTED_MODULE_1__
};




})();

(window.wp = window.wp || {}).dom = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=dom.js.map