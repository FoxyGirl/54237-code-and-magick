/**
 * Created by FoxyGirl on 14.02.2017.
 */
'use strict';

/**
 * @module enableSetup
 * Open and close Setup Modal.
 * @return {Function} - The function for opening and closing Setup Modal.
 * @param {Function} cb - The function for callback.
 */
window.enableSetup = (function () {
  var setupModalNode = document.querySelector('.setup');
  // var setupOpenNode = document.querySelector('.setup-open');
  var setupCloseNode = setupModalNode.querySelector('.setup-close');
  var setupUserNameNode = setupModalNode.querySelector('.setup-user-name');
  var btnSetupSubmit = setupModalNode.querySelector('.setup-submit');
  var onSetupClose = null;

  return function (cb) {
    openSetup();
    setupCloseNode.addEventListener('keydown', onKeyDownHandler);
    setupCloseNode.addEventListener('click', onClickHandler);
    // btnSetupSubmit.addEventListener('keydown', onKeyDownHandler);
    // btnSetupSubmit.addEventListener('click', onClickHandler);
    document.addEventListener('keydown', closeSetupModalKeyHandler);

    onSetupClose = cb;

    return {
      closeSetup: closeSetup
    };
  };

  /**
   * Open Setup Modal.
   * @private
   */
  function openSetup() {
    setupModalNode.classList.remove('invisible');
    setupUserNameNode.focus();
  }

  /**
   * Close Setup Modal.
   * @private
   */
  function closeSetup() {
    setupCloseNode.removeEventListener('keydown', onKeyDownHandler);
    setupCloseNode.removeEventListener('click', onClickHandler);
    btnSetupSubmit.removeEventListener('keydown', onKeyDownHandler);
    btnSetupSubmit.removeEventListener('click', onClickHandler);
    document.removeEventListener('keydown', closeSetupModalKeyHandler);
    setupModalNode.classList.add('invisible');


    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  }

  /**
   * Close Setup Modal by click.
   * @private
   */
  function onClickHandler() {
    closeSetup();
  }

  /**
   * Close Setup Modal by keys.
   * @private
   * @param {Event} event - The Event.
   */
  function onKeyDownHandler(event) {
    if (window.utils.isActivationEvent(event)) {
      closeSetup();
    }
  }

  /**
   * Close Setup Modal by keys.
   *
   * @param {Event} event - The Event.
   */
  function closeSetupModalKeyHandler(event) {
    if (window.utils.isDeactivationEvent(event)) {
      closeSetup();
    }
  }

})();
