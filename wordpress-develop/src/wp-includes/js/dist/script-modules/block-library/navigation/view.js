import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/block-library/build-module/navigation/view.js ***!
  \*******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

const focusableSelectors = ['a[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

// This is a fix for Safari in iOS/iPadOS. Without it, Safari doesn't focus out
// when the user taps in the body. It can be removed once we add an overlay to
// capture the clicks, instead of relying on the focusout event.
document.addEventListener('click', () => {});
const {
  state,
  actions
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('core/navigation', {
  state: {
    get roleAttribute() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return ctx.type === 'overlay' && state.isMenuOpen ? 'dialog' : null;
    },
    get ariaModal() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return ctx.type === 'overlay' && state.isMenuOpen ? 'true' : null;
    },
    get ariaLabel() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return ctx.type === 'overlay' && state.isMenuOpen ? ctx.ariaLabel : null;
    },
    get isMenuOpen() {
      // The menu is opened if either `click`, `hover` or `focus` is true.
      return Object.values(state.menuOpenedBy).filter(Boolean).length > 0;
    },
    get menuOpenedBy() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return ctx.type === 'overlay' ? ctx.overlayOpenedBy : ctx.submenuOpenedBy;
    }
  },
  actions: {
    openMenuOnHover() {
      const {
        type,
        overlayOpenedBy
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (type === 'submenu' &&
      // Only open on hover if the overlay is closed.
      Object.values(overlayOpenedBy || {}).filter(Boolean).length === 0) {
        actions.openMenu('hover');
      }
    },
    closeMenuOnHover() {
      const {
        type,
        overlayOpenedBy
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (type === 'submenu' &&
      // Only close on hover if the overlay is closed.
      Object.values(overlayOpenedBy || {}).filter(Boolean).length === 0) {
        actions.closeMenu('hover');
      }
    },
    openMenuOnClick() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      ctx.previousFocus = ref;
      actions.openMenu('click');
    },
    closeMenuOnClick() {
      actions.closeMenu('click');
      actions.closeMenu('focus');
    },
    openMenuOnFocus() {
      actions.openMenu('focus');
    },
    toggleMenuOnClick() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      // Safari won't send focus to the clicked element, so we need to manually place it: https://bugs.webkit.org/show_bug.cgi?id=22261
      if (window.document.activeElement !== ref) {
        ref.focus();
      }
      const {
        menuOpenedBy
      } = state;
      if (menuOpenedBy.click || menuOpenedBy.focus) {
        actions.closeMenu('click');
        actions.closeMenu('focus');
      } else {
        ctx.previousFocus = ref;
        actions.openMenu('click');
      }
    },
    handleMenuKeydown(event) {
      const {
        type,
        firstFocusableElement,
        lastFocusableElement
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      if (state.menuOpenedBy.click) {
        // If Escape close the menu.
        if (event?.key === 'Escape') {
          actions.closeMenu('click');
          actions.closeMenu('focus');
          return;
        }

        // Trap focus if it is an overlay (main menu).
        if (type === 'overlay' && event.key === 'Tab') {
          // If shift + tab it change the direction.
          if (event.shiftKey && window.document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          } else if (!event.shiftKey && window.document.activeElement === lastFocusableElement) {
            event.preventDefault();
            firstFocusableElement.focus();
          }
        }
      }
    },
    handleMenuFocusout(event) {
      const {
        modal,
        type
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      // If focus is outside modal, and in the document, close menu
      // event.target === The element losing focus
      // event.relatedTarget === The element receiving focus (if any)
      // When focusout is outside the document,
      // `window.document.activeElement` doesn't change.

      // The event.relatedTarget is null when something outside the navigation menu is clicked. This is only necessary for Safari.
      if (event.relatedTarget === null || !modal?.contains(event.relatedTarget) && event.target !== window.document.activeElement && type === 'submenu') {
        actions.closeMenu('click');
        actions.closeMenu('focus');
      }
    },
    openMenu(menuOpenedOn = 'click') {
      const {
        type
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      state.menuOpenedBy[menuOpenedOn] = true;
      if (type === 'overlay') {
        // Add a `has-modal-open` class to the <html> root.
        document.documentElement.classList.add('has-modal-open');
      }
    },
    closeMenu(menuClosedOn = 'click') {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      state.menuOpenedBy[menuClosedOn] = false;
      // Check if the menu is still open or not.
      if (!state.isMenuOpen) {
        if (ctx.modal?.contains(window.document.activeElement)) {
          ctx.previousFocus?.focus();
        }
        ctx.modal = null;
        ctx.previousFocus = null;
        if (ctx.type === 'overlay') {
          document.documentElement.classList.remove('has-modal-open');
        }
      }
    }
  },
  callbacks: {
    initMenu() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      if (state.isMenuOpen) {
        const focusableElements = ref.querySelectorAll(focusableSelectors);
        ctx.modal = ref;
        ctx.firstFocusableElement = focusableElements[0];
        ctx.lastFocusableElement = focusableElements[focusableElements.length - 1];
      }
    },
    focusFirstElement() {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      if (state.isMenuOpen) {
        const focusableElements = ref.querySelectorAll(focusableSelectors);
        focusableElements?.[0]?.focus();
      }
    }
  }
}, {
  lock: true
});

})();


//# sourceMappingURL=view.js.map