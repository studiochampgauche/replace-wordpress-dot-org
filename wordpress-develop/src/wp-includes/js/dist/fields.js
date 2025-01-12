/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/dataviews/build-module/components/dataform/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/components/dataform/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataForm)
/* harmony export */ });
/* harmony import */ var _dataforms_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dataforms-layouts */ "./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Internal dependencies
 */



function DataForm({
  form,
  ...props
}) {
  var _form$type;
  const layout = (0,_dataforms_layouts__WEBPACK_IMPORTED_MODULE_1__.getFormLayout)((_form$type = form.type) !== null && _form$type !== void 0 ? _form$type : 'regular');
  if (!layout) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(layout.component, {
    form: form,
    ...props
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/datetime.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataform-controls/datetime.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTime)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function DateTime({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  const {
    id,
    label
  } = field;
  const value = field.getValue({
    item: data
  });
  const onChangeControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue => onChange({
    [id]: newValue
  }), [id, onChange]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("fieldset", {
    className: "dataviews-controls__datetime",
    children: [!hideLabelFromVision && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl.VisualLabel, {
      as: "legend",
      children: label
    }), hideLabelFromVision && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.VisuallyHidden, {
      as: "legend",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TimePicker, {
      currentTime: value,
      onChange: onChangeControl,
      hideLabelFromVision: true
    })]
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataform-controls/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getControl: () => (/* binding */ getControl),
/* harmony export */   getControlByType: () => (/* binding */ getControlByType)
/* harmony export */ });
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datetime */ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/datetime.js");
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integer */ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/integer.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radio */ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/radio.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/select.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text */ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/text.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */






const FORM_CONTROLS = {
  datetime: _datetime__WEBPACK_IMPORTED_MODULE_0__["default"],
  integer: _integer__WEBPACK_IMPORTED_MODULE_1__["default"],
  radio: _radio__WEBPACK_IMPORTED_MODULE_2__["default"],
  select: _select__WEBPACK_IMPORTED_MODULE_3__["default"],
  text: _text__WEBPACK_IMPORTED_MODULE_4__["default"]
};
function getControl(field, fieldTypeDefinition) {
  if (typeof field.Edit === 'function') {
    return field.Edit;
  }
  if (typeof field.Edit === 'string') {
    return getControlByType(field.Edit);
  }
  if (field.elements) {
    return getControlByType('select');
  }
  if (typeof fieldTypeDefinition.Edit === 'string') {
    return getControlByType(fieldTypeDefinition.Edit);
  }
  return fieldTypeDefinition.Edit;
}
function getControlByType(type) {
  if (Object.keys(FORM_CONTROLS).includes(type)) {
    return FORM_CONTROLS[type];
  }
  throw 'Control ' + type + ' not found';
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/integer.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataform-controls/integer.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Integer)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function Integer({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  var _field$getValue;
  const {
    id,
    label,
    description
  } = field;
  const value = (_field$getValue = field.getValue({
    item: data
  })) !== null && _field$getValue !== void 0 ? _field$getValue : '';
  const onChangeControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue => onChange({
    [id]: Number(newValue)
  }), [id, onChange]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalNumberControl, {
    label: label,
    help: description,
    value: value,
    onChange: onChangeControl,
    __next40pxDefaultSize: true,
    hideLabelFromVision: hideLabelFromVision
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/radio.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataform-controls/radio.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function Radio({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  const {
    id,
    label
  } = field;
  const value = field.getValue({
    item: data
  });
  const onChangeControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue => onChange({
    [id]: newValue
  }), [id, onChange]);
  if (field.elements) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RadioControl, {
      label: label,
      onChange: onChangeControl,
      options: field.elements,
      selected: value,
      hideLabelFromVision: hideLabelFromVision
    });
  }
  return null;
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/select.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataform-controls/select.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function Select({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  var _field$getValue, _field$elements;
  const {
    id,
    label
  } = field;
  const value = (_field$getValue = field.getValue({
    item: data
  })) !== null && _field$getValue !== void 0 ? _field$getValue : '';
  const onChangeControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue => onChange({
    [id]: newValue
  }), [id, onChange]);
  const elements = [
  /*
   * Value can be undefined when:
   *
   * - the field is not required
   * - in bulk editing
   *
   */
  {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select item'),
    value: ''
  }, ...((_field$elements = field?.elements) !== null && _field$elements !== void 0 ? _field$elements : [])];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
    label: label,
    value: value,
    options: elements,
    onChange: onChangeControl,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    hideLabelFromVision: hideLabelFromVision
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/text.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataform-controls/text.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

function Text({
  data,
  field,
  onChange,
  hideLabelFromVision
}) {
  const {
    id,
    label,
    placeholder
  } = field;
  const value = field.getValue({
    item: data
  });
  const onChangeControl = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(newValue => onChange({
    [id]: newValue
  }), [id, onChange]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: label,
    placeholder: placeholder,
    value: value !== null && value !== void 0 ? value : '',
    onChange: onChangeControl,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    hideLabelFromVision: hideLabelFromVision
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFormLayout: () => (/* binding */ getFormLayout)
/* harmony export */ });
/* harmony import */ var _regular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regular */ "./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/regular/index.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel */ "./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/panel/index.js");
/**
 * Internal dependencies
 */


const FORM_LAYOUTS = [{
  type: 'regular',
  component: _regular__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  type: 'panel',
  component: _panel__WEBPACK_IMPORTED_MODULE_1__["default"]
}];
function getFormLayout(type) {
  return FORM_LAYOUTS.find(layout => layout.type === type);
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/panel/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/panel/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/close-small.js");
/* harmony import */ var _normalize_fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../normalize-fields */ "./node_modules/@wordpress/dataviews/build-module/normalize-fields.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function DropdownHeader({
  title,
  onClose
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
    className: "dataforms-layouts-panel__dropdown-header",
    spacing: 4,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
      alignment: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHeading, {
        level: 2,
        size: 13,
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {}), onClose && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Close'),
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
        onClick: onClose,
        size: "small"
      })]
    })
  });
}
function FormField({
  data,
  field,
  onChange
}) {
  // Use internal state instead of a ref to make sure that the component
  // re-renders when the popover's anchor updates.
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  // Memoize popoverProps to avoid returning a new object every time.
  const popoverProps = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    // Anchor the popover to the middle of the entire row so that it doesn't
    // move around when the label changes.
    anchor: popoverAnchor,
    placement: 'left-start',
    offset: 36,
    shift: true
  }), [popoverAnchor]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
    ref: setPopoverAnchor,
    className: "dataforms-layouts-panel__field",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "dataforms-layouts-panel__field-label",
      children: field.label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
        contentClassName: "dataforms-layouts-panel__field-dropdown",
        popoverProps: popoverProps,
        focusOnMount: true,
        toggleProps: {
          size: 'compact',
          variant: 'tertiary',
          tooltipPosition: 'middle left'
        },
        renderToggle: ({
          isOpen,
          onToggle
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          className: "dataforms-layouts-panel__field-control",
          size: "compact",
          variant: "tertiary",
          "aria-expanded": isOpen,
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.sprintf)(
          // translators: %s: Field name.
          (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__._x)('Edit %s', 'field'), field.label),
          onClick: onToggle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(field.render, {
            item: data
          })
        }),
        renderContent: ({
          onClose
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropdownHeader, {
            title: field.label,
            onClose: onClose
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(field.Edit, {
            data: data,
            field: field,
            onChange: onChange,
            hideLabelFromVision: true
          }, field.id)]
        })
      })
    })]
  });
}
function FormPanel({
  data,
  fields,
  form,
  onChange
}) {
  const visibleFields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _form$fields;
    return (0,_normalize_fields__WEBPACK_IMPORTED_MODULE_5__.normalizeFields)(((_form$fields = form.fields) !== null && _form$fields !== void 0 ? _form$fields : []).map(fieldId => fields.find(({
      id
    }) => id === fieldId)).filter(field => !!field));
  }, [fields, form.fields]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
    spacing: 2,
    children: visibleFields.map(field => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(FormField, {
        data: data,
        field: field,
        onChange: onChange
      }, field.id);
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/regular/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/dataforms-layouts/regular/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormRegular)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _normalize_fields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../normalize-fields */ "./node_modules/@wordpress/dataviews/build-module/normalize-fields.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function FormRegular({
  data,
  fields,
  form,
  onChange
}) {
  const visibleFields = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    var _form$fields;
    return (0,_normalize_fields__WEBPACK_IMPORTED_MODULE_3__.normalizeFields)(((_form$fields = form.fields) !== null && _form$fields !== void 0 ? _form$fields : []).map(fieldId => fields.find(({
      id
    }) => id === fieldId)).filter(field => !!field));
  }, [fields, form.fields]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalVStack, {
    spacing: 4,
    children: visibleFields.map(field => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(field.Edit, {
        data: data,
        field: field,
        onChange: onChange
      }, field.id);
    })
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/field-types/datetime.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/field-types/datetime.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Internal dependencies
 */

function sort(a, b, direction) {
  const timeA = new Date(a).getTime();
  const timeB = new Date(b).getTime();
  return direction === 'asc' ? timeA - timeB : timeB - timeA;
}
function isValid(value, context) {
  if (context?.elements) {
    const validValues = context?.elements.map(f => f.value);
    if (!validValues.includes(value)) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sort,
  isValid,
  Edit: 'datetime'
});


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/field-types/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/field-types/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getFieldTypeDefinition)
/* harmony export */ });
/* harmony import */ var _integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integer */ "./node_modules/@wordpress/dataviews/build-module/field-types/integer.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./node_modules/@wordpress/dataviews/build-module/field-types/text.js");
/* harmony import */ var _datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datetime */ "./node_modules/@wordpress/dataviews/build-module/field-types/datetime.js");
/**
 * Internal dependencies
 */





/**
 *
 * @param {FieldType} type The field type definition to get.
 *
 * @return A field type definition.
 */
function getFieldTypeDefinition(type) {
  if ('integer' === type) {
    return _integer__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  if ('text' === type) {
    return _text__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  if ('datetime' === type) {
    return _datetime__WEBPACK_IMPORTED_MODULE_2__["default"];
  }
  return {
    sort: (a, b, direction) => {
      if (typeof a === 'number' && typeof b === 'number') {
        return direction === 'asc' ? a - b : b - a;
      }
      return direction === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
    },
    isValid: (value, context) => {
      if (context?.elements) {
        const validValues = context?.elements?.map(f => f.value);
        if (!validValues.includes(value)) {
          return false;
        }
      }
      return true;
    },
    Edit: () => null
  };
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/field-types/integer.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/field-types/integer.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Internal dependencies
 */

function sort(a, b, direction) {
  return direction === 'asc' ? a - b : b - a;
}
function isValid(value, context) {
  // TODO: this implicitely means the value is required.
  if (value === '') {
    return false;
  }
  if (!Number.isInteger(Number(value))) {
    return false;
  }
  if (context?.elements) {
    const validValues = context?.elements.map(f => f.value);
    if (!validValues.includes(Number(value))) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sort,
  isValid,
  Edit: 'integer'
});


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/field-types/text.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/field-types/text.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Internal dependencies
 */

function sort(valueA, valueB, direction) {
  return direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
}
function isValid(value, context) {
  if (context?.elements) {
    const validValues = context?.elements?.map(f => f.value);
    if (!validValues.includes(value)) {
      return false;
    }
  }
  return true;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  sort,
  isValid,
  Edit: 'text'
});


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/normalize-fields.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/normalize-fields.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeFields: () => (/* binding */ normalizeFields)
/* harmony export */ });
/* harmony import */ var _field_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-types */ "./node_modules/@wordpress/dataviews/build-module/field-types/index.js");
/* harmony import */ var _dataform_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataform-controls */ "./node_modules/@wordpress/dataviews/build-module/dataform-controls/index.js");
/**
 * Internal dependencies
 */



/**
 * Apply default values and normalize the fields config.
 *
 * @param fields Fields config.
 * @return Normalized fields config.
 */
function normalizeFields(fields) {
  return fields.map(field => {
    var _field$sort, _field$isValid, _field$enableHiding, _field$enableSorting;
    const fieldTypeDefinition = (0,_field_types__WEBPACK_IMPORTED_MODULE_0__["default"])(field.type);
    const getValue = field.getValue || (({
      item
    }) => item[field.id]);
    const sort = (_field$sort = field.sort) !== null && _field$sort !== void 0 ? _field$sort : function sort(a, b, direction) {
      return fieldTypeDefinition.sort(getValue({
        item: a
      }), getValue({
        item: b
      }), direction);
    };
    const isValid = (_field$isValid = field.isValid) !== null && _field$isValid !== void 0 ? _field$isValid : function isValid(item, context) {
      return fieldTypeDefinition.isValid(getValue({
        item
      }), context);
    };
    const Edit = (0,_dataform_controls__WEBPACK_IMPORTED_MODULE_1__.getControl)(field, fieldTypeDefinition);
    const renderFromElements = ({
      item
    }) => {
      const value = getValue({
        item
      });
      return field?.elements?.find(element => element.value === value)?.label || getValue({
        item
      });
    };
    const render = field.render || (field.elements ? renderFromElements : getValue);
    return {
      ...field,
      label: field.label || field.id,
      header: field.header || field.label || field.id,
      getValue,
      render,
      sort,
      isValid,
      Edit,
      enableHiding: (_field$enableHiding = field.enableHiding) !== null && _field$enableHiding !== void 0 ? _field$enableHiding : true,
      enableSorting: (_field$enableSorting = field.enableSorting) !== null && _field$enableSorting !== void 0 ? _field$enableSorting : true
    };
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/dataviews/build-module/validation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/dataviews/build-module/validation.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isItemValid: () => (/* binding */ isItemValid)
/* harmony export */ });
/* harmony import */ var _normalize_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalize-fields */ "./node_modules/@wordpress/dataviews/build-module/normalize-fields.js");
/**
 * Internal dependencies
 */

function isItemValid(item, fields, form) {
  const _fields = (0,_normalize_fields__WEBPACK_IMPORTED_MODULE_0__.normalizeFields)(fields.filter(({
    id
  }) => !!form.fields?.includes(id)));
  return _fields.every(field => {
    return field.isValid(item, {
      elements: field.elements
    });
  });
}


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/base-post/duplicate-post.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/base-post/duplicate-post.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_dataviews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/dataviews */ "./node_modules/@wordpress/dataviews/build-module/components/dataform/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../fields */ "./node_modules/@wordpress/fields/build-module/fields/title/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/fields/build-module/actions/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




const fields = [_fields__WEBPACK_IMPORTED_MODULE_8__["default"]];
const formDuplicateAction = {
  fields: ['title']
};
const duplicatePost = {
  id: 'duplicate-post',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('Duplicate', 'action label'),
  isEligible({
    status
  }) {
    return status !== 'trash';
  },
  RenderModal: ({
    items,
    closeModal,
    onActionPerformed
  }) => {
    const [item, setItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)({
      ...items[0],
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)( /* translators: %s: Existing template title */
      (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('%s (Copy)', 'template'), (0,_utils__WEBPACK_IMPORTED_MODULE_9__.getItemTitle)(items[0]))
    });
    const [isCreatingPage, setIsCreatingPage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const {
      saveEntityRecord
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      createSuccessNotice,
      createErrorNotice
    } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_4__.store);
    async function createPage(event) {
      event.preventDefault();
      if (isCreatingPage) {
        return;
      }
      const newItemOject = {
        status: 'draft',
        title: item.title,
        slug: item.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('No title'),
        comment_status: item.comment_status,
        content: typeof item.content === 'string' ? item.content : item.content.raw,
        excerpt: typeof item.excerpt === 'string' ? item.excerpt : item.excerpt?.raw,
        meta: item.meta,
        parent: item.parent,
        password: item.password,
        template: item.template,
        format: item.format,
        featured_media: item.featured_media,
        menu_order: item.menu_order,
        ping_status: item.ping_status
      };
      const assignablePropertiesPrefix = 'wp:action-assign-';
      // Get all the properties that the current user is able to assign normally author, categories, tags,
      // and custom taxonomies.
      const assignableProperties = Object.keys(item?._links || {}).filter(property => property.startsWith(assignablePropertiesPrefix)).map(property => property.slice(assignablePropertiesPrefix.length));
      assignableProperties.forEach(property => {
        if (item.hasOwnProperty(property)) {
          // @ts-ignore
          newItemOject[property] = item[property];
        }
      });
      setIsCreatingPage(true);
      try {
        const newItem = await saveEntityRecord('postType', item.type, newItemOject, {
          throwOnError: true
        });
        createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.sprintf)(
        // translators: %s: Title of the created post or template, e.g: "Hello world".
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('"%s" successfully created.'), (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_1__.decodeEntities)(newItem.title?.rendered || item.title)), {
          id: 'duplicate-post-action',
          type: 'snackbar'
        });
        if (onActionPerformed) {
          onActionPerformed([newItem]);
        }
      } catch (error) {
        const typedError = error;
        const errorMessage = typedError.message && typedError.code !== 'unknown_error' ? typedError.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('An error occurred while duplicating the page.');
        createErrorNotice(errorMessage, {
          type: 'snackbar'
        });
      } finally {
        setIsCreatingPage(false);
        closeModal?.();
      }
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("form", {
      onSubmit: createPage,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalVStack, {
        spacing: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_dataviews__WEBPACK_IMPORTED_MODULE_10__["default"], {
          data: item,
          fields: fields,
          form: formDuplicateAction,
          onChange: changes => setItem(prev => ({
            ...prev,
            ...changes
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.__experimentalHStack, {
          spacing: 2,
          justify: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
            variant: "tertiary",
            onClick: closeModal,
            __next40pxDefaultSize: true,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Cancel')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Button, {
            variant: "primary",
            type: "submit",
            isBusy: isCreatingPage,
            "aria-disabled": isCreatingPage,
            __next40pxDefaultSize: true,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__._x)('Duplicate', 'action label')
          })]
        })]
      })
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (duplicatePost);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/base-post/duplicate-post.native.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/base-post/duplicate-post.native.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const duplicatePost = undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (duplicatePost);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/base-post/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/base-post/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   duplicatePost: () => (/* reexport safe */ _duplicate_post__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   duplicatePostNative: () => (/* reexport safe */ _duplicate_post_native__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   reorderPage: () => (/* reexport safe */ _reorder_page__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   reorderPageNative: () => (/* reexport safe */ _reorder_page_native__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   viewPost: () => (/* reexport safe */ _view_post__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _view_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-post */ "./node_modules/@wordpress/fields/build-module/actions/base-post/view-post.js");
/* harmony import */ var _reorder_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reorder-page */ "./node_modules/@wordpress/fields/build-module/actions/base-post/reorder-page.js");
/* harmony import */ var _reorder_page_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reorder-page.native */ "./node_modules/@wordpress/fields/build-module/actions/base-post/reorder-page.native.js");
/* harmony import */ var _duplicate_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./duplicate-post */ "./node_modules/@wordpress/fields/build-module/actions/base-post/duplicate-post.js");
/* harmony import */ var _duplicate_post_native__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./duplicate-post.native */ "./node_modules/@wordpress/fields/build-module/actions/base-post/duplicate-post.native.js");







/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/base-post/reorder-page.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/base-post/reorder-page.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_dataviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/dataviews */ "./node_modules/@wordpress/dataviews/build-module/validation.js");
/* harmony import */ var _wordpress_dataviews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/dataviews */ "./node_modules/@wordpress/dataviews/build-module/components/dataform/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../fields */ "./node_modules/@wordpress/fields/build-module/fields/order/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




const fields = [_fields__WEBPACK_IMPORTED_MODULE_7__["default"]];
const formOrderAction = {
  fields: ['menu_order']
};
function ReorderModal({
  items,
  closeModal,
  onActionPerformed
}) {
  const [item, setItem] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(items[0]);
  const orderInput = item.menu_order;
  const {
    editEntityRecord,
    saveEditedEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_3__.store);
  async function onOrder(event) {
    event.preventDefault();
    if (!(0,_wordpress_dataviews__WEBPACK_IMPORTED_MODULE_8__.isItemValid)(item, fields, formOrderAction)) {
      return;
    }
    try {
      await editEntityRecord('postType', item.type, item.id, {
        menu_order: orderInput
      });
      closeModal?.();
      // Persist edited entity.
      await saveEditedEntityRecord('postType', item.type, item.id, {
        throwOnError: true
      });
      createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order updated.'), {
        type: 'snackbar'
      });
      onActionPerformed?.(items);
    } catch (error) {
      const typedError = error;
      const errorMessage = typedError.message && typedError.code !== 'unknown_error' ? typedError.message : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('An error occurred while updating the order');
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
    }
  }
  const isSaveDisabled = !(0,_wordpress_dataviews__WEBPACK_IMPORTED_MODULE_8__.isItemValid)(item, fields, formOrderAction);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("form", {
    onSubmit: onOrder,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalVStack, {
      spacing: "5",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Determines the order of pages. Pages with the same order value are sorted alphabetically. Negative order values are supported.')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_dataviews__WEBPACK_IMPORTED_MODULE_9__["default"], {
        data: item,
        fields: fields,
        form: formOrderAction,
        onChange: changes => setItem({
          ...item,
          ...changes
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalHStack, {
        justify: "right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          __next40pxDefaultSize: true,
          variant: "tertiary",
          onClick: () => {
            closeModal?.();
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cancel')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
          __next40pxDefaultSize: true,
          variant: "primary",
          type: "submit",
          accessibleWhenDisabled: true,
          disabled: isSaveDisabled,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Save')
        })]
      })]
    })
  });
}
const reorderPage = {
  id: 'order-pages',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Order'),
  isEligible({
    status
  }) {
    return status !== 'trash';
  },
  RenderModal: ReorderModal
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reorderPage);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/base-post/reorder-page.native.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/base-post/reorder-page.native.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reorderPage = undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reorderPage);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/base-post/view-post.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/base-post/view-post.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const viewPost = {
  id: 'view-post',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('View', 'verb'),
  isPrimary: true,
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
  isEligible(post) {
    return post.status !== 'trash';
  },
  callback(posts, {
    onActionPerformed
  }) {
    const post = posts[0];
    window.open(post?.link, '_blank');
    if (onActionPerformed) {
      onActionPerformed(posts);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewPost);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/common/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/common/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   permanentlyDeletePost: () => (/* reexport safe */ _permanently_delete_post__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   viewPostRevisions: () => (/* reexport safe */ _view_post_revisions__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _view_post_revisions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-post-revisions */ "./node_modules/@wordpress/fields/build-module/actions/common/view-post-revisions.js");
/* harmony import */ var _permanently_delete_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permanently-delete-post */ "./node_modules/@wordpress/fields/build-module/actions/common/permanently-delete-post.js");




/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/common/permanently-delete-post.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/common/permanently-delete-post.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/trash.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/fields/build-module/actions/utils.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

const permanentlyDeletePost = {
  id: 'permanently-delete',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Permanently delete'),
  supportsBulk: true,
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"],
  isEligible(item) {
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_4__.isTemplateOrTemplatePart)(item) || item.type === 'wp_block') {
      return false;
    }
    const {
      status,
      permissions
    } = item;
    return status === 'trash' && permissions?.delete;
  },
  async callback(posts, {
    registry,
    onActionPerformed
  }) {
    const {
      createSuccessNotice,
      createErrorNotice
    } = registry.dispatch(_wordpress_notices__WEBPACK_IMPORTED_MODULE_2__.store);
    const {
      deleteEntityRecord
    } = registry.dispatch(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.store);
    const promiseResult = await Promise.allSettled(posts.map(post => {
      return deleteEntityRecord('postType', post.type, post.id, {
        force: true
      }, {
        throwOnError: true
      });
    }));
    // If all the promises were fulfilled with success.
    if (promiseResult.every(({
      status
    }) => status === 'fulfilled')) {
      let successMessage;
      if (promiseResult.length === 1) {
        successMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: The posts's title. */
        (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('"%s" permanently deleted.'), (0,_utils__WEBPACK_IMPORTED_MODULE_4__.getItemTitle)(posts[0]));
      } else {
        successMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The items were permanently deleted.');
      }
      createSuccessNotice(successMessage, {
        type: 'snackbar',
        id: 'permanently-delete-post-action'
      });
      onActionPerformed?.(posts);
    } else {
      // If there was at lease one failure.
      let errorMessage;
      // If we were trying to permanently delete a single post.
      if (promiseResult.length === 1) {
        const typedError = promiseResult[0];
        if (typedError.reason?.message) {
          errorMessage = typedError.reason.message;
        } else {
          errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An error occurred while permanently deleting the item.');
        }
        // If we were trying to permanently delete multiple posts
      } else {
        const errorMessages = new Set();
        const failedPromises = promiseResult.filter(({
          status
        }) => status === 'rejected');
        for (const failedPromise of failedPromises) {
          const typedError = failedPromise;
          if (typedError.reason?.message) {
            errorMessages.add(typedError.reason.message);
          }
        }
        if (errorMessages.size === 0) {
          errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An error occurred while permanently deleting the items.');
        } else if (errorMessages.size === 1) {
          errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s: an error message */
          (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('An error occurred while permanently deleting the items: %s'), [...errorMessages][0]);
        } else {
          errorMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s: a list of comma separated error messages */
          (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Some errors occurred while permanently deleting the items: %s'), [...errorMessages].join(','));
        }
      }
      createErrorNotice(errorMessage, {
        type: 'snackbar'
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (permanentlyDeletePost);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/common/view-post-revisions.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/common/view-post-revisions.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

const viewPostRevisions = {
  id: 'view-post-revisions',
  context: 'list',
  label(items) {
    var _items$0$_links$versi;
    const revisionsCount = (_items$0$_links$versi = items[0]._links?.['version-history']?.[0]?.count) !== null && _items$0$_links$versi !== void 0 ? _items$0$_links$versi : 0;
    return (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.sprintf)( /* translators: %s: number of revisions. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('View revisions (%s)'), revisionsCount);
  },
  isEligible(post) {
    var _post$_links$predeces, _post$_links$version;
    if (post.status === 'trash') {
      return false;
    }
    const lastRevisionId = (_post$_links$predeces = post?._links?.['predecessor-version']?.[0]?.id) !== null && _post$_links$predeces !== void 0 ? _post$_links$predeces : null;
    const revisionsCount = (_post$_links$version = post?._links?.['version-history']?.[0]?.count) !== null && _post$_links$version !== void 0 ? _post$_links$version : 0;
    return !!lastRevisionId && revisionsCount > 1;
  },
  callback(posts, {
    onActionPerformed
  }) {
    const post = posts[0];
    const href = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_0__.addQueryArgs)('revision.php', {
      revision: post?._links?.['predecessor-version']?.[0]?.id
    });
    document.location.href = href;
    if (onActionPerformed) {
      onActionPerformed(posts);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewPostRevisions);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   duplicatePattern: () => (/* reexport safe */ _pattern__WEBPACK_IMPORTED_MODULE_2__.duplicatePattern),
/* harmony export */   duplicatePost: () => (/* reexport safe */ _base_post__WEBPACK_IMPORTED_MODULE_0__.duplicatePost),
/* harmony export */   duplicatePostNative: () => (/* reexport safe */ _base_post__WEBPACK_IMPORTED_MODULE_0__.duplicatePostNative),
/* harmony export */   exportPattern: () => (/* reexport safe */ _pattern__WEBPACK_IMPORTED_MODULE_2__.exportPattern),
/* harmony export */   exportPatternNative: () => (/* reexport safe */ _pattern__WEBPACK_IMPORTED_MODULE_2__.exportPatternNative),
/* harmony export */   permanentlyDeletePost: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.permanentlyDeletePost),
/* harmony export */   reorderPage: () => (/* reexport safe */ _base_post__WEBPACK_IMPORTED_MODULE_0__.reorderPage),
/* harmony export */   reorderPageNative: () => (/* reexport safe */ _base_post__WEBPACK_IMPORTED_MODULE_0__.reorderPageNative),
/* harmony export */   viewPost: () => (/* reexport safe */ _base_post__WEBPACK_IMPORTED_MODULE_0__.viewPost),
/* harmony export */   viewPostRevisions: () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.viewPostRevisions)
/* harmony export */ });
/* harmony import */ var _base_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-post */ "./node_modules/@wordpress/fields/build-module/actions/base-post/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./node_modules/@wordpress/fields/build-module/actions/common/index.js");
/* harmony import */ var _pattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pattern */ "./node_modules/@wordpress/fields/build-module/actions/pattern/index.js");





/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/pattern/duplicate-pattern.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/pattern/duplicate-pattern.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/patterns */ "@wordpress/patterns");
/* harmony import */ var _wordpress_patterns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_patterns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lock_unlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lock-unlock */ "./node_modules/@wordpress/fields/build-module/lock-unlock.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */

// @ts-ignore

/**
 * Internal dependencies
 */


// Patterns.
const {
  CreatePatternModalContents,
  useDuplicatePatternProps
} = (0,_lock_unlock__WEBPACK_IMPORTED_MODULE_3__.unlock)(_wordpress_patterns__WEBPACK_IMPORTED_MODULE_1__.privateApis);
const duplicatePattern = {
  id: 'duplicate-pattern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Duplicate', 'action label'),
  isEligible: item => item.type !== 'wp_template_part',
  modalHeader: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Duplicate pattern', 'action label'),
  RenderModal: ({
    items,
    closeModal
  }) => {
    const [item] = items;
    const duplicatedProps = useDuplicatePatternProps({
      pattern: item,
      onSuccess: () => closeModal?.()
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CreatePatternModalContents, {
      onClose: closeModal,
      confirmLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('Duplicate', 'action label'),
      ...duplicatedProps
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (duplicatePattern);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/pattern/export-pattern.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/pattern/export-pattern.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var change_case__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! change-case */ "./node_modules/param-case/dist.es2015/index.js");
/* harmony import */ var client_zip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! client-zip */ "./node_modules/client-zip/index.js");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/download.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/@wordpress/fields/build-module/actions/utils.js");
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function getJsonFromItem(item) {
  return JSON.stringify({
    __file: item.type,
    title: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getItemTitle)(item),
    content: typeof item.content === 'string' ? item.content : item.content?.raw,
    syncStatus: item.wp_pattern_sync_status
  }, null, 2);
}
const exportPattern = {
  id: 'export-pattern',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Export as JSON'),
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"],
  supportsBulk: true,
  isEligible: item => item.type === 'wp_block',
  callback: async items => {
    if (items.length === 1) {
      return (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_1__.downloadBlob)(`${(0,change_case__WEBPACK_IMPORTED_MODULE_5__.paramCase)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.getItemTitle)(items[0]) || items[0].slug)}.json`, getJsonFromItem(items[0]), 'application/json');
    }
    const nameCount = {};
    const filesToZip = items.map(item => {
      const name = (0,change_case__WEBPACK_IMPORTED_MODULE_5__.paramCase)((0,_utils__WEBPACK_IMPORTED_MODULE_3__.getItemTitle)(item) || item.slug);
      nameCount[name] = (nameCount[name] || 0) + 1;
      return {
        name: `${name + (nameCount[name] > 1 ? '-' + (nameCount[name] - 1) : '')}.json`,
        lastModified: new Date(),
        input: getJsonFromItem(item)
      };
    });
    return (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_1__.downloadBlob)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('patterns-export') + '.zip', await (0,client_zip__WEBPACK_IMPORTED_MODULE_0__.downloadZip)(filesToZip).blob(), 'application/zip');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportPattern);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/pattern/export-pattern.native.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/pattern/export-pattern.native.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const exportPattern = undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportPattern);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/pattern/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/pattern/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   duplicatePattern: () => (/* reexport safe */ _duplicate_pattern__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   exportPattern: () => (/* reexport safe */ _export_pattern__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   exportPatternNative: () => (/* reexport safe */ _export_pattern_native__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _duplicate_pattern__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duplicate-pattern */ "./node_modules/@wordpress/fields/build-module/actions/pattern/duplicate-pattern.js");
/* harmony import */ var _export_pattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./export-pattern */ "./node_modules/@wordpress/fields/build-module/actions/pattern/export-pattern.js");
/* harmony import */ var _export_pattern_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./export-pattern.native */ "./node_modules/@wordpress/fields/build-module/actions/pattern/export-pattern.native.js");





/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/actions/utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/actions/utils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TEMPLATE_ORIGINS: () => (/* binding */ TEMPLATE_ORIGINS),
/* harmony export */   TEMPLATE_PART_POST_TYPE: () => (/* binding */ TEMPLATE_PART_POST_TYPE),
/* harmony export */   TEMPLATE_POST_TYPE: () => (/* binding */ TEMPLATE_POST_TYPE),
/* harmony export */   getItemTitle: () => (/* binding */ getItemTitle),
/* harmony export */   isTemplate: () => (/* binding */ isTemplate),
/* harmony export */   isTemplateOrTemplatePart: () => (/* binding */ isTemplateOrTemplatePart),
/* harmony export */   isTemplatePart: () => (/* binding */ isTemplatePart),
/* harmony export */   isTemplateRemovable: () => (/* binding */ isTemplateRemovable)
/* harmony export */ });
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const TEMPLATE_POST_TYPE = 'wp_template';
const TEMPLATE_PART_POST_TYPE = 'wp_template_part';
const TEMPLATE_ORIGINS = {
  custom: 'custom',
  theme: 'theme',
  plugin: 'plugin'
};
function isTemplate(post) {
  return post.type === TEMPLATE_POST_TYPE;
}
function isTemplatePart(post) {
  return post.type === TEMPLATE_PART_POST_TYPE;
}
function isTemplateOrTemplatePart(p) {
  return p.type === TEMPLATE_POST_TYPE || p.type === TEMPLATE_PART_POST_TYPE;
}
function getItemTitle(item) {
  if (typeof item.title === 'string') {
    return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__.decodeEntities)(item.title);
  }
  if ('rendered' in item.title) {
    return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__.decodeEntities)(item.title.rendered);
  }
  if ('raw' in item.title) {
    return (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_0__.decodeEntities)(item.title.raw);
  }
  return '';
}

/**
 * Check if a template is removable.
 *
 * @param template The template entity to check.
 * @return Whether the template is removable.
 */
function isTemplateRemovable(template) {
  if (!template) {
    return false;
  }
  // In patterns list page we map the templates parts to a different object
  // than the one returned from the endpoint. This is why we need to check for
  // two props whether is custom or has a theme file.
  return [template.source, template.source].includes(TEMPLATE_ORIGINS.custom) && !Boolean(template.type === 'wp_template' && template?.plugin) && !template.has_theme_file;
}


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/fields/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/fields/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orderField: () => (/* reexport safe */ _order__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   titleField: () => (/* reexport safe */ _title__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title */ "./node_modules/@wordpress/fields/build-module/fields/title/index.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "./node_modules/@wordpress/fields/build-module/fields/order/index.js");




/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/fields/order/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/fields/order/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

const orderField = {
  type: 'integer',
  id: 'menu_order',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Order'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Determines the order of pages.')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderField);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/fields/title/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/fields/title/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/utils */ "./node_modules/@wordpress/fields/build-module/actions/utils.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


const titleField = {
  type: 'text',
  id: 'title',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title'),
  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No title'),
  getValue: ({
    item
  }) => (0,_actions_utils__WEBPACK_IMPORTED_MODULE_1__.getItemTitle)(item)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (titleField);


/***/ }),

/***/ "./node_modules/@wordpress/fields/build-module/lock-unlock.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/lock-unlock.js ***!
  \********************************************************************/
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
} = (0,_wordpress_private_apis__WEBPACK_IMPORTED_MODULE_0__.__dangerousOptInToUnstableAPIsOnlyForCoreModules)('I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.', '@wordpress/fields');


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

/***/ "./node_modules/@wordpress/icons/build-module/library/download.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/download.js ***!
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


const download = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    d: "M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (download);


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

/***/ "./node_modules/@wordpress/icons/build-module/library/trash.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/trash.js ***!
  \*********************************************************************/
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


const trash = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_0__.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5.5A2.25 2.25 0 0 0 9.878 7h4.244A2.251 2.251 0 0 0 12 5.5ZM12 4a3.751 3.751 0 0 0-3.675 3H5v1.5h1.27l.818 8.997a2.75 2.75 0 0 0 2.739 2.501h4.347a2.75 2.75 0 0 0 2.738-2.5L17.73 8.5H19V7h-3.325A3.751 3.751 0 0 0 12 4Zm4.224 4.5H7.776l.806 8.861a1.25 1.25 0 0 0 1.245 1.137h4.347a1.25 1.25 0 0 0 1.245-1.137l.805-8.861Z"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trash);


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

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

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

/***/ "@wordpress/patterns":
/*!**********************************!*\
  !*** external ["wp","patterns"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["patterns"];

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

/***/ "./node_modules/client-zip/index.js":
/*!******************************************!*\
  !*** ./node_modules/client-zip/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   downloadZip: () => (/* binding */ A),
/* harmony export */   makeZip: () => (/* binding */ N),
/* harmony export */   predictLength: () => (/* binding */ S)
/* harmony export */ });
"stream"in Blob.prototype||Object.defineProperty(Blob.prototype,"stream",{value(){return new Response(this).body}}),"setBigUint64"in DataView.prototype||Object.defineProperty(DataView.prototype,"setBigUint64",{value(e,n,t){const i=Number(0xffffffffn&n),r=Number(n>>32n);this.setUint32(e+(t?0:4),i,t),this.setUint32(e+(t?4:0),r,t)}});var e=e=>new DataView(new ArrayBuffer(e)),n=e=>new Uint8Array(e.buffer||e),t=e=>(new TextEncoder).encode(String(e)),i=e=>Math.min(4294967295,Number(e)),r=e=>Math.min(65535,Number(e));function f(e,i){if(void 0===i||i instanceof Date||(i=new Date(i)),e instanceof File)return{isFile:1,t:i||new Date(e.lastModified),i:e.stream()};if(e instanceof Response)return{isFile:1,t:i||new Date(e.headers.get("Last-Modified")||Date.now()),i:e.body};if(void 0===i)i=new Date;else if(isNaN(i))throw new Error("Invalid modification date.");if(void 0===e)return{isFile:0,t:i};if("string"==typeof e)return{isFile:1,t:i,i:t(e)};if(e instanceof Blob)return{isFile:1,t:i,i:e.stream()};if(e instanceof Uint8Array||e instanceof ReadableStream)return{isFile:1,t:i,i:e};if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return{isFile:1,t:i,i:n(e)};if(Symbol.asyncIterator in e)return{isFile:1,t:i,i:o(e[Symbol.asyncIterator]())};throw new TypeError("Unsupported input format.")}function o(e,n=e){return new ReadableStream({async pull(n){let t=0;for(;n.desiredSize>t;){const i=await e.next();if(!i.value){n.close();break}{const e=a(i.value);n.enqueue(e),t+=e.byteLength}}},cancel(e){n.throw?.(e)}})}function a(e){return"string"==typeof e?t(e):e instanceof Uint8Array?e:n(e)}function s(e,i,r){let[f,o]=function(e){return e?e instanceof Uint8Array?[e,1]:ArrayBuffer.isView(e)||e instanceof ArrayBuffer?[n(e),1]:[t(e),0]:[void 0,0]}(i);if(e instanceof File)return{o:d(f||t(e.name)),u:BigInt(e.size),l:o};if(e instanceof Response){const n=e.headers.get("content-disposition"),i=n&&n.match(/;\s*filename\*?\s*=\s*(?:UTF-\d+''|)["']?([^;"'\r\n]*)["']?(?:;|$)/i),a=i&&i[1]||e.url&&new URL(e.url).pathname.split("/").findLast(Boolean),s=a&&decodeURIComponent(a),u=r||+e.headers.get("content-length");return{o:d(f||t(s)),u:BigInt(u),l:o}}return f=d(f,void 0!==e||void 0!==r),"string"==typeof e?{o:f,u:BigInt(t(e).length),l:o}:e instanceof Blob?{o:f,u:BigInt(e.size),l:o}:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?{o:f,u:BigInt(e.byteLength),l:o}:{o:f,u:u(e,r),l:o}}function u(e,n){return n>-1?BigInt(n):e?void 0:0n}function d(e,n=1){if(!e||e.every((c=>47===c)))throw new Error("The file must have a name.");if(n)for(;47===e[e.length-1];)e=e.subarray(0,-1);else 47!==e[e.length-1]&&(e=new Uint8Array([...e,47]));return e}var l=new Uint32Array(256);for(let e=0;e<256;++e){let n=e;for(let e=0;e<8;++e)n=n>>>1^(1&n&&3988292384);l[e]=n}function y(e,n=0){n^=-1;for(var t=0,i=e.length;t<i;t++)n=n>>>8^l[255&n^e[t]];return(-1^n)>>>0}function w(e,n,t=0){const i=e.getSeconds()>>1|e.getMinutes()<<5|e.getHours()<<11,r=e.getDate()|e.getMonth()+1<<5|e.getFullYear()-1980<<9;n.setUint16(t,i,1),n.setUint16(t+2,r,1)}function B({o:e,l:n},t){return 8*(!n||(t??function(e){try{b.decode(e)}catch{return 0}return 1}(e)))}var b=new TextDecoder("utf8",{fatal:1});function p(t,i=0){const r=e(30);return r.setUint32(0,1347093252),r.setUint32(4,754976768|i),w(t.t,r,10),r.setUint16(26,t.o.length,1),n(r)}async function*g(e){let{i:n}=e;if("then"in n&&(n=await n),n instanceof Uint8Array)yield n,e.m=y(n,0),e.u=BigInt(n.length);else{e.u=0n;const t=n.getReader();for(;;){const{value:n,done:i}=await t.read();if(i)break;e.m=y(n,e.m),e.u+=BigInt(n.length),yield n}}}function I(t,r){const f=e(16+(r?8:0));return f.setUint32(0,1347094280),f.setUint32(4,t.isFile?t.m:0,1),r?(f.setBigUint64(8,t.u,1),f.setBigUint64(16,t.u,1)):(f.setUint32(8,i(t.u),1),f.setUint32(12,i(t.u),1)),n(f)}function v(t,r,f=0,o=0){const a=e(46);return a.setUint32(0,1347092738),a.setUint32(4,755182848),a.setUint16(8,2048|f),w(t.t,a,12),a.setUint32(16,t.isFile?t.m:0,1),a.setUint32(20,i(t.u),1),a.setUint32(24,i(t.u),1),a.setUint16(28,t.o.length,1),a.setUint16(30,o,1),a.setUint16(40,t.isFile?33204:16893,1),a.setUint32(42,i(r),1),n(a)}function h(t,i,r){const f=e(r);return f.setUint16(0,1,1),f.setUint16(2,r-4,1),16&r&&(f.setBigUint64(4,t.u,1),f.setBigUint64(12,t.u,1)),f.setBigUint64(r-8,i,1),n(f)}function D(e){return e instanceof File||e instanceof Response?[[e],[e]]:[[e.input,e.name,e.size],[e.input,e.lastModified]]}var S=e=>function(e){let n=BigInt(22),t=0n,i=0;for(const r of e){if(!r.o)throw new Error("Every file must have a non-empty name.");if(void 0===r.u)throw new Error(`Missing size for file "${(new TextDecoder).decode(r.o)}".`);const e=r.u>=0xffffffffn,f=t>=0xffffffffn;t+=BigInt(46+r.o.length+(e&&8))+r.u,n+=BigInt(r.o.length+46+(12*f|28*e)),i||(i=e)}return(i||t>=0xffffffffn)&&(n+=BigInt(76)),n+t}(function*(e){for(const n of e)yield s(...D(n)[0])}(e));function A(e,n={}){const t={"Content-Type":"application/zip","Content-Disposition":"attachment"};return("bigint"==typeof n.length||Number.isInteger(n.length))&&n.length>0&&(t["Content-Length"]=String(n.length)),n.metadata&&(t["Content-Length"]=String(S(n.metadata))),new Response(N(e,n),{headers:t})}function N(t,a={}){const u=function(e){const n=e[Symbol.iterator in e?Symbol.iterator:Symbol.asyncIterator]();return{async next(){const e=await n.next();if(e.done)return e;const[t,i]=D(e.value);return{done:0,value:Object.assign(f(...i),s(...t))}},throw:n.throw?.bind(n),[Symbol.asyncIterator](){return this}}}(t);return o(async function*(t,f){const o=[];let a=0n,s=0n,u=0;for await(const e of t){const n=B(e,f.buffersAreUTF8);yield p(e,n),yield new Uint8Array(e.o),e.isFile&&(yield*g(e));const t=e.u>=0xffffffffn,i=12*(a>=0xffffffffn)|28*t;yield I(e,t),o.push(v(e,a,n,i)),o.push(e.o),i&&o.push(h(e,a,i)),t&&(a+=8n),s++,a+=BigInt(46+e.o.length)+e.u,u||(u=t)}let d=0n;for(const e of o)yield e,d+=BigInt(e.length);if(u||a>=0xffffffffn){const t=e(76);t.setUint32(0,1347094022),t.setBigUint64(4,BigInt(44),1),t.setUint32(12,755182848),t.setBigUint64(24,s,1),t.setBigUint64(32,s,1),t.setBigUint64(40,d,1),t.setBigUint64(48,a,1),t.setUint32(56,1347094023),t.setBigUint64(64,a+d,1),t.setUint32(72,1,1),yield n(t)}const l=e(22);l.setUint32(0,1347093766),l.setUint16(8,r(s),1),l.setUint16(10,r(s),1),l.setUint32(12,i(d),1),l.setUint32(16,i(a),1),yield n(l)}(u,a),u)}

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
/*!**************************************************************!*\
  !*** ./node_modules/@wordpress/fields/build-module/index.js ***!
  \**************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   duplicatePattern: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.duplicatePattern),
/* harmony export */   duplicatePost: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.duplicatePost),
/* harmony export */   duplicatePostNative: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.duplicatePostNative),
/* harmony export */   exportPattern: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.exportPattern),
/* harmony export */   exportPatternNative: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.exportPatternNative),
/* harmony export */   orderField: () => (/* reexport safe */ _fields__WEBPACK_IMPORTED_MODULE_0__.orderField),
/* harmony export */   permanentlyDeletePost: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.permanentlyDeletePost),
/* harmony export */   reorderPage: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.reorderPage),
/* harmony export */   reorderPageNative: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.reorderPageNative),
/* harmony export */   titleField: () => (/* reexport safe */ _fields__WEBPACK_IMPORTED_MODULE_0__.titleField),
/* harmony export */   viewPost: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.viewPost),
/* harmony export */   viewPostRevisions: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_1__.viewPostRevisions)
/* harmony export */ });
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields */ "./node_modules/@wordpress/fields/build-module/fields/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./node_modules/@wordpress/fields/build-module/actions/index.js");



})();

(window.wp = window.wp || {}).fields = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=fields.js.map