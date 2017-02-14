/**
 * Created by FoxyGirl on 14.02.2017.
 */
'use strict';

/**
 * @module enableSetup
 */
window.enableSetup = (function () {
  var setupModalNode = document.querySelector('.setup');
  // var setupOpenNode = document.querySelector('.setup-open');
  var setupCloseNode = setupModalNode.querySelector('.setup-close');
  var setupUserNameNode = setupModalNode.querySelector('.setup-user-name');
  var onSetupClose = null;

  return function (cb) {
    openSetup();
    setupCloseNode.addEventListener('keydown', onKeyDown);
    setupCloseNode.addEventListener('keydown', onClick);

    onSetupClose = cb;
  };

  function openSetup() {
    setupModalNode.classList.remove('invisible');
    setupUserNameNode.focus();
    document.addEventListener('focus', lockSetupModalHandler, true);

  }

  function closeSetup() {
    setupModalNode.classList.add('invisible');
    setupCloseNode.removeEventListener('keydown', onKeyDown);
    setupCloseNode.removeEventListener('keydown', onClick);
    document.removeEventListener('focus', lockSetupModalHandler, true);

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  }

  function onClick() {
    closeSetup();
  }

  function onKeyDown(event) {
    console.log('Открыто с клавиатуры!'); //eslint-disable-line
    if (window.utils.isActivationEvent(event)) {
      closeSetup();
    }
  }


  /**
   * Lock Setup Modal.
   */
  function lockSetupModalHandler() {
    if (!setupModalNode.contains(document.activeElement)) {
      setupCloseNode.focus();
    }
    console.log('lockSetupModalHandler'); //eslint-disable-line
  }
})();
