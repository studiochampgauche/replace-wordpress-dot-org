/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/background/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/background/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const backgroundImage = {
  name: 'backgroundImage',
  generate: (style, options) => {
    const _backgroundImage = style?.background?.backgroundImage;

    /*
     * The background image can be a string or an object.
     * If the background image is a string, it could already contain a url() function,
     * or have a linear-gradient value.
     */
    if (typeof _backgroundImage === 'object' && _backgroundImage?.url) {
      return [{
        selector: options.selector,
        key: 'backgroundImage',
        // Passed `url` may already be encoded. To prevent double encoding, decodeURI is executed to revert to the original string.
        value: `url( '${encodeURI((0,_utils__WEBPACK_IMPORTED_MODULE_0__.safeDecodeURI)(_backgroundImage.url))}' )`
      }];
    }
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['background', 'backgroundImage'], 'backgroundImage');
  }
};
const backgroundPosition = {
  name: 'backgroundPosition',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['background', 'backgroundPosition'], 'backgroundPosition');
  }
};
const backgroundRepeat = {
  name: 'backgroundRepeat',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['background', 'backgroundRepeat'], 'backgroundRepeat');
  }
};
const backgroundSize = {
  name: 'backgroundSize',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['background', 'backgroundSize'], 'backgroundSize');
  }
};
const backgroundAttachment = {
  name: 'backgroundAttachment',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['background', 'backgroundAttachment'], 'backgroundAttachment');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize, backgroundAttachment]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/border/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/border/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */



/**
 * Creates a function for generating CSS rules when the style path is the same as the camelCase CSS property used in React.
 *
 * @param path An array of strings representing the path to the style value in the style object.
 *
 * @return A function that generates CSS rules.
 */
function createBorderGenerateFunction(path) {
  return (style, options) => (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, (0,_utils__WEBPACK_IMPORTED_MODULE_0__.camelCaseJoin)(path));
}

/**
 * Creates a function for generating border-{top,bottom,left,right}-{color,style,width} CSS rules.
 *
 * @param edge The edge to create CSS rules for.
 *
 * @return A function that generates CSS rules.
 */
function createBorderEdgeGenerateFunction(edge) {
  return (style, options) => {
    return ['color', 'style', 'width'].flatMap(key => {
      const path = ['border', edge, key];
      return createBorderGenerateFunction(path)(style, options);
    });
  };
}
const color = {
  name: 'color',
  generate: createBorderGenerateFunction(['border', 'color'])
};
const radius = {
  name: 'radius',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateBoxRules)(style, options, ['border', 'radius'], {
      default: 'borderRadius',
      individual: 'border%sRadius'
    }, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
  }
};
const borderStyle = {
  name: 'style',
  generate: createBorderGenerateFunction(['border', 'style'])
};
const width = {
  name: 'width',
  generate: createBorderGenerateFunction(['border', 'width'])
};
const borderTop = {
  name: 'borderTop',
  generate: createBorderEdgeGenerateFunction('top')
};
const borderRight = {
  name: 'borderRight',
  generate: createBorderEdgeGenerateFunction('right')
};
const borderBottom = {
  name: 'borderBottom',
  generate: createBorderEdgeGenerateFunction('bottom')
};
const borderLeft = {
  name: 'borderLeft',
  generate: createBorderEdgeGenerateFunction('left')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([color, borderStyle, width, radius, borderTop, borderRight, borderBottom, borderLeft]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/color/background.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/color/background.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const background = {
  name: 'background',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['color', 'background'], 'backgroundColor');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (background);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/color/gradient.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/color/gradient.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const gradient = {
  name: 'gradient',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['color', 'gradient'], 'background');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gradient);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/color/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/color/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./node_modules/@wordpress/style-engine/build-module/styles/color/background.js");
/* harmony import */ var _gradient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gradient */ "./node_modules/@wordpress/style-engine/build-module/styles/color/gradient.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./node_modules/@wordpress/style-engine/build-module/styles/color/text.js");
/**
 * Internal dependencies
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_text__WEBPACK_IMPORTED_MODULE_0__["default"], _gradient__WEBPACK_IMPORTED_MODULE_1__["default"], _background__WEBPACK_IMPORTED_MODULE_2__["default"]]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/color/text.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/color/text.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const text = {
  name: 'text',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['color', 'text'], 'color');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/constants.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/constants.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE: () => (/* binding */ VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE),
/* harmony export */   VARIABLE_PATH_SEPARATOR_TOKEN_STYLE: () => (/* binding */ VARIABLE_PATH_SEPARATOR_TOKEN_STYLE),
/* harmony export */   VARIABLE_REFERENCE_PREFIX: () => (/* binding */ VARIABLE_REFERENCE_PREFIX)
/* harmony export */ });
const VARIABLE_REFERENCE_PREFIX = 'var:';
const VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE = '|';
const VARIABLE_PATH_SEPARATOR_TOKEN_STYLE = '--';


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/dimensions/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/dimensions/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const minHeight = {
  name: 'minHeight',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['dimensions', 'minHeight'], 'minHeight');
  }
};
const aspectRatio = {
  name: 'aspectRatio',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['dimensions', 'aspectRatio'], 'aspectRatio');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([minHeight, aspectRatio]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   styleDefinitions: () => (/* binding */ styleDefinitions)
/* harmony export */ });
/* harmony import */ var _border__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./border */ "./node_modules/@wordpress/style-engine/build-module/styles/border/index.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./node_modules/@wordpress/style-engine/build-module/styles/color/index.js");
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dimensions */ "./node_modules/@wordpress/style-engine/build-module/styles/dimensions/index.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./background */ "./node_modules/@wordpress/style-engine/build-module/styles/background/index.js");
/* harmony import */ var _shadow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shadow */ "./node_modules/@wordpress/style-engine/build-module/styles/shadow/index.js");
/* harmony import */ var _outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outline */ "./node_modules/@wordpress/style-engine/build-module/styles/outline/index.js");
/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spacing */ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/index.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typography */ "./node_modules/@wordpress/style-engine/build-module/styles/typography/index.js");
/**
 * Internal dependencies
 */








const styleDefinitions = [..._border__WEBPACK_IMPORTED_MODULE_0__["default"], ..._color__WEBPACK_IMPORTED_MODULE_1__["default"], ..._dimensions__WEBPACK_IMPORTED_MODULE_2__["default"], ..._outline__WEBPACK_IMPORTED_MODULE_3__["default"], ..._spacing__WEBPACK_IMPORTED_MODULE_4__["default"], ..._typography__WEBPACK_IMPORTED_MODULE_5__["default"], ..._shadow__WEBPACK_IMPORTED_MODULE_6__["default"], ..._background__WEBPACK_IMPORTED_MODULE_7__["default"]];


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/outline/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/outline/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const color = {
  name: 'color',
  generate: (style, options, path = ['outline', 'color'], ruleKey = 'outlineColor') => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, ruleKey);
  }
};
const offset = {
  name: 'offset',
  generate: (style, options, path = ['outline', 'offset'], ruleKey = 'outlineOffset') => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, ruleKey);
  }
};
const outlineStyle = {
  name: 'style',
  generate: (style, options, path = ['outline', 'style'], ruleKey = 'outlineStyle') => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, ruleKey);
  }
};
const width = {
  name: 'width',
  generate: (style, options, path = ['outline', 'width'], ruleKey = 'outlineWidth') => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, path, ruleKey);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([color, outlineStyle, offset, width]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/shadow/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/shadow/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const shadow = {
  name: 'shadow',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['shadow'], 'boxShadow');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([shadow]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/spacing/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _padding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./padding */ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/padding.js");
/* harmony import */ var _margin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./margin */ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/margin.js");
/**
 * Internal dependencies
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_margin__WEBPACK_IMPORTED_MODULE_0__["default"], _padding__WEBPACK_IMPORTED_MODULE_1__["default"]]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/margin.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/spacing/margin.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const margin = {
  name: 'margin',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateBoxRules)(style, options, ['spacing', 'margin'], {
      default: 'margin',
      individual: 'margin%s'
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (margin);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/spacing/padding.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/spacing/padding.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const padding = {
  name: 'padding',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateBoxRules)(style, options, ['spacing', 'padding'], {
      default: 'padding',
      individual: 'padding%s'
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (padding);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/typography/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/typography/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * Internal dependencies
 */


const fontSize = {
  name: 'fontSize',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'fontSize'], 'fontSize');
  }
};
const fontStyle = {
  name: 'fontStyle',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'fontStyle'], 'fontStyle');
  }
};
const fontWeight = {
  name: 'fontWeight',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'fontWeight'], 'fontWeight');
  }
};
const fontFamily = {
  name: 'fontFamily',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'fontFamily'], 'fontFamily');
  }
};
const letterSpacing = {
  name: 'letterSpacing',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'letterSpacing'], 'letterSpacing');
  }
};
const lineHeight = {
  name: 'lineHeight',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'lineHeight'], 'lineHeight');
  }
};
const textColumns = {
  name: 'textColumns',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'textColumns'], 'columnCount');
  }
};
const textDecoration = {
  name: 'textDecoration',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'textDecoration'], 'textDecoration');
  }
};
const textTransform = {
  name: 'textTransform',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'textTransform'], 'textTransform');
  }
};
const writingMode = {
  name: 'writingMode',
  generate: (style, options) => {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateRule)(style, options, ['typography', 'writingMode'], 'writingMode');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textColumns, textDecoration, textTransform, writingMode]);


/***/ }),

/***/ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/styles/utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCaseJoin: () => (/* binding */ camelCaseJoin),
/* harmony export */   generateBoxRules: () => (/* binding */ generateBoxRules),
/* harmony export */   generateRule: () => (/* binding */ generateRule),
/* harmony export */   getCSSValueFromRawStyle: () => (/* binding */ getCSSValueFromRawStyle),
/* harmony export */   getStyleValueByPath: () => (/* binding */ getStyleValueByPath),
/* harmony export */   safeDecodeURI: () => (/* binding */ safeDecodeURI),
/* harmony export */   upperFirst: () => (/* binding */ upperFirst)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! change-case */ "./node_modules/param-case/dist.es2015/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@wordpress/style-engine/build-module/styles/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Helper util to return a value from a certain path of the object.
 * Path is specified as an array of properties, like `[ 'x', 'y' ]`.
 *
 * @param object Input object.
 * @param path   Path to the object property.
 * @return Value of the object property at the specified path.
 */
const getStyleValueByPath = (object, path) => {
  let value = object;
  path.forEach(fieldName => {
    value = value?.[fieldName];
  });
  return value;
};

/**
 * Returns a JSON representation of the generated CSS rules.
 *
 * @param style   Style object.
 * @param options Options object with settings to adjust how the styles are generated.
 * @param path    An array of strings representing the path to the style value in the style object.
 * @param ruleKey A CSS property key.
 *
 * @return GeneratedCSSRule[] CSS rules.
 */
function generateRule(style, options, path, ruleKey) {
  const styleValue = getStyleValueByPath(style, path);
  return styleValue ? [{
    selector: options?.selector,
    key: ruleKey,
    value: getCSSValueFromRawStyle(styleValue)
  }] : [];
}

/**
 * Returns a JSON representation of the generated CSS rules taking into account box model properties, top, right, bottom, left.
 *
 * @param style                Style object.
 * @param options              Options object with settings to adjust how the styles are generated.
 * @param path                 An array of strings representing the path to the style value in the style object.
 * @param ruleKeys             An array of CSS property keys and patterns.
 * @param individualProperties The "sides" or individual properties for which to generate rules.
 *
 * @return GeneratedCSSRule[]  CSS rules.
 */
function generateBoxRules(style, options, path, ruleKeys, individualProperties = ['top', 'right', 'bottom', 'left']) {
  const boxStyle = getStyleValueByPath(style, path);
  if (!boxStyle) {
    return [];
  }
  const rules = [];
  if (typeof boxStyle === 'string') {
    rules.push({
      selector: options?.selector,
      key: ruleKeys.default,
      value: boxStyle
    });
  } else {
    const sideRules = individualProperties.reduce((acc, side) => {
      const value = getCSSValueFromRawStyle(getStyleValueByPath(boxStyle, [side]));
      if (value) {
        acc.push({
          selector: options?.selector,
          key: ruleKeys?.individual.replace('%s', upperFirst(side)),
          value
        });
      }
      return acc;
    }, []);
    rules.push(...sideRules);
  }
  return rules;
}

/**
 * Returns a WordPress CSS custom var value from incoming style preset value,
 * if one is detected.
 *
 * The preset value is a string and follows the pattern `var:description|context|slug`.
 *
 * Example:
 *
 * `getCSSValueFromRawStyle( 'var:preset|color|heavenlyBlue' )` // returns 'var(--wp--preset--color--heavenly-blue)'
 *
 * @param styleValue A string representing a raw CSS value. Non-strings won't be processed.
 *
 * @return A CSS custom var value if the incoming style value is a preset value.
 */

function getCSSValueFromRawStyle(styleValue) {
  if (typeof styleValue === 'string' && styleValue.startsWith(_constants__WEBPACK_IMPORTED_MODULE_0__.VARIABLE_REFERENCE_PREFIX)) {
    const variable = styleValue.slice(_constants__WEBPACK_IMPORTED_MODULE_0__.VARIABLE_REFERENCE_PREFIX.length).split(_constants__WEBPACK_IMPORTED_MODULE_0__.VARIABLE_PATH_SEPARATOR_TOKEN_ATTRIBUTE).map(presetVariable => (0,change_case__WEBPACK_IMPORTED_MODULE_1__.paramCase)(presetVariable, {
      splitRegexp: [/([a-z0-9])([A-Z])/g,
      // fooBar => foo-bar, 3Bar => 3-bar
      /([0-9])([a-z])/g,
      // 3bar => 3-bar
      /([A-Za-z])([0-9])/g,
      // Foo3 => foo-3, foo3 => foo-3
      /([A-Z])([A-Z][a-z])/g // FOOBar => foo-bar
      ]
    })).join(_constants__WEBPACK_IMPORTED_MODULE_0__.VARIABLE_PATH_SEPARATOR_TOKEN_STYLE);
    return `var(--wp--${variable})`;
  }
  return styleValue;
}

/**
 * Capitalizes the first letter in a string.
 *
 * @param string The string whose first letter the function will capitalize.
 *
 * @return String with the first letter capitalized.
 */
function upperFirst(string) {
  const [firstLetter, ...rest] = string;
  return firstLetter.toUpperCase() + rest.join('');
}

/**
 * Converts an array of strings into a camelCase string.
 *
 * @param strings The strings to join into a camelCase string.
 *
 * @return camelCase string.
 */
function camelCaseJoin(strings) {
  const [firstItem, ...rest] = strings;
  return firstItem.toLowerCase() + rest.map(upperFirst).join('');
}

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

/***/ "./node_modules/dot-case/dist.es2015/index.js":
/*!****************************************************!*\
  !*** ./node_modules/dot-case/dist.es2015/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dotCase: () => (/* binding */ dotCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var no_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! no-case */ "./node_modules/no-case/dist.es2015/index.js");


function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,no_case__WEBPACK_IMPORTED_MODULE_0__.noCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "." }, options));
}


/***/ }),

/***/ "./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),
/* harmony export */   lowerCase: () => (/* binding */ lowerCase)
/* harmony export */ });
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
var SUPPORTED_LOCALE = {
    tr: {
        regexp: /\u0130|\u0049|\u0049\u0307/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    az: {
        regexp: /\u0130/g,
        map: {
            İ: "\u0069",
            I: "\u0131",
            İ: "\u0069",
        },
    },
    lt: {
        regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
        map: {
            I: "\u0069\u0307",
            J: "\u006A\u0307",
            Į: "\u012F\u0307",
            Ì: "\u0069\u0307\u0300",
            Í: "\u0069\u0307\u0301",
            Ĩ: "\u0069\u0307\u0303",
        },
    },
};
/**
 * Localized lower case.
 */
function localeLowerCase(str, locale) {
    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];
    if (lang)
        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));
    return lowerCase(str);
}
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}


/***/ }),

/***/ "./node_modules/no-case/dist.es2015/index.js":
/*!***************************************************!*\
  !*** ./node_modules/no-case/dist.es2015/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   noCase: () => (/* binding */ noCase)
/* harmony export */ });
/* harmony import */ var lower_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lower-case */ "./node_modules/lower-case/dist.es2015/index.js");

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lower_case__WEBPACK_IMPORTED_MODULE_0__.lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}


/***/ }),

/***/ "./node_modules/param-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/param-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paramCase: () => (/* binding */ paramCase)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var dot_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dot-case */ "./node_modules/dot-case/dist.es2015/index.js");


function paramCase(input, options) {
    if (options === void 0) { options = {}; }
    return (0,dot_case__WEBPACK_IMPORTED_MODULE_0__.dotCase)(input, (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({ delimiter: "-" }, options));
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/style-engine/build-module/index.js ***!
  \********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compileCSS: () => (/* binding */ compileCSS),
/* harmony export */   getCSSRules: () => (/* binding */ getCSSRules),
/* harmony export */   getCSSValueFromRawStyle: () => (/* reexport safe */ _styles_utils__WEBPACK_IMPORTED_MODULE_2__.getCSSValueFromRawStyle)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! change-case */ "./node_modules/param-case/dist.es2015/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./node_modules/@wordpress/style-engine/build-module/styles/index.js");
/* harmony import */ var _styles_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/utils */ "./node_modules/@wordpress/style-engine/build-module/styles/utils.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Generates a stylesheet for a given style object and selector.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param style   Style object, for example, the value of a block's attributes.style object or the top level styles in theme.json
 * @param options Options object with settings to adjust how the styles are generated.
 *
 * @return A generated stylesheet or inline style declarations.
 */
function compileCSS(style, options = {}) {
  const rules = getCSSRules(style, options);

  // If no selector is provided, treat generated rules as inline styles to be returned as a single string.
  if (!options?.selector) {
    const inlineRules = [];
    rules.forEach(rule => {
      inlineRules.push(`${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.paramCase)(rule.key)}: ${rule.value};`);
    });
    return inlineRules.join(' ');
  }
  const groupedRules = rules.reduce((acc, rule) => {
    const {
      selector
    } = rule;
    if (!selector) {
      return acc;
    }
    if (!acc[selector]) {
      acc[selector] = [];
    }
    acc[selector].push(rule);
    return acc;
  }, {});
  const selectorRules = Object.keys(groupedRules).reduce((acc, subSelector) => {
    acc.push(`${subSelector} { ${groupedRules[subSelector].map(rule => `${(0,change_case__WEBPACK_IMPORTED_MODULE_0__.paramCase)(rule.key)}: ${rule.value};`).join(' ')} }`);
    return acc;
  }, []);
  return selectorRules.join('\n');
}

/**
 * Returns a JSON representation of the generated CSS rules.
 *
 * @since 6.1.0 Introduced in WordPress core.
 *
 * @param style   Style object, for example, the value of a block's attributes.style object or the top level styles in theme.json
 * @param options Options object with settings to adjust how the styles are generated.
 *
 * @return A collection of objects containing the selector, if any, the CSS property key (camelcase) and parsed CSS value.
 */
function getCSSRules(style, options = {}) {
  const rules = [];
  _styles__WEBPACK_IMPORTED_MODULE_1__.styleDefinitions.forEach(definition => {
    if (typeof definition.generate === 'function') {
      rules.push(...definition.generate(style, options));
    }
  });
  return rules;
}

// Export style utils.


})();

(window.wp = window.wp || {}).styleEngine = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=style-engine.js.map