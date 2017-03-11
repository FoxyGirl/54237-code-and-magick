/**
 * Created by FoxyGirl on 14.02.2017.
 */
'use strict';

/**
 * @module setupModal
 * Open and close Setup Modal.
 * @return {Function} - The function for opening and closing Setup Modal.
 * @param {Function} cb - The function for callback.
 */
window.setupModal = (function () {
  var setupModalNode = document.querySelector('.setup');
  var setupCloseNode = setupModalNode.querySelector('.setup-close');
  var setupUserNameNode = setupModalNode.querySelector('.setup-user-name');
  var setupWizardFormNode = setupModalNode.querySelector('.setup-wizard-form');
  var btnSubmitNode = setupModalNode.querySelector('.setup-submit');
  var SPACE_KEY_CODE = 32;
  var onSetupClose = null;
  var wizardNode = setupModalNode.querySelector('.setup-wizard-wrap');
  var setupSimilarNode = setupModalNode.querySelector('.setup-similar');
  var urlWizard = 'https://intensive-javascript-server-myophkugvq.now.sh/code-and-magick/data';

  return function (cb) {
    openSetup();

    onSetupClose = cb;
  };

  /**
   * Open Setup Modal.
   * @private
   */
  function openSetup() {
    setupModalNode.classList.remove('invisible');
    setupUserNameNode.focus();

    window.load(urlWizard, loadWizards);

    setupCloseNode.addEventListener('keydown', onKeyDownHandler);
    setupCloseNode.addEventListener('click', onClickHandler);
    btnSubmitNode.addEventListener('keydown', onKeyDownHandler);
    btnSubmitNode.addEventListener('click', onClickHandler);

    document.addEventListener('keydown', closeSetupModalKeyHandler);
    document.addEventListener('focus', lockSetupModalHandler, true);

    setupWizardFormNode.addEventListener('submit', preventSubmitHandler);

    setupModalNode.addEventListener('keydown', preventDefaultOfSpaseHandler);
  }

  /**
   * Create similar wizards
   * @private
   * @param {Array} wizards - Data for wizards elements.
   */
  function loadWizards(wizards) {
    var randomWizards = window.utils.getRandomArrayFromArray(wizards, 5);
    renderWizards(randomWizards);
  }

  /**
   * Render wizards
   * @private
   * @param {Array} wizards - The array of objects with wizards data.
   */
  function renderWizards(wizards) {
    var fragment = document.createDocumentFragment();
    var newWizardNode = null;
    var wizardInsideNode = null;
    wizards.forEach(function (wizard) {
      newWizardNode = wizardNode.cloneNode(true);
      newWizardNode.setAttribute('title', wizard.name);
      wizardInsideNode = newWizardNode.querySelector('#wizard');
      wizardInsideNode.querySelector('#wizard-coat').style.fill = wizard.colorCoat;
      wizardInsideNode.querySelector('#wizard-eyes').style.fill = wizard.colorEyes;

      changeAllChildren(newWizardNode, changeIdToClass);
      fragment.appendChild(newWizardNode);
    });

    setupSimilarNode.innerHTML = '';
    setupSimilarNode.appendChild(fragment);
  }

  /**
   * Change id to class
   * @private
   * @param {Element} elem - The changeable element.
   */
  function changeIdToClass(elem) {
    if (elem.hasAttribute('id')) {
      elem.classList.add(elem.getAttribute('id'));
      elem.removeAttribute('id');
    }
  }

  /**
   * Change all children
   * @private
   * @param {Element} elem - The element in which all children must be changed.
   * @param {Function} func - The function for changing of every child.
   */
  function changeAllChildren(elem, func) {
    if (elem.children.length === 0) {
      return;
    }
    [].forEach.call(elem.children, function (children) {
      func(children);
      changeAllChildren(children, func);
    });
  }

  /**
   * Close Setup Modal by click Handler.
   * @private
   * @param {Event} event - The Event.
   */
  function onClickHandler(event) {
    event.preventDefault();
    closeSetup();
  }

  /**
   * Close Setup Modal by keys Handler.
   * @private
   * @param {Event} event - The Event.
   */
  function onKeyDownHandler(event) {
    if (window.utils.isActivationEvent(event)) {
      closeSetup();
    }
  }

  /**
   * Close Setup Modal.
   * @private
   */
  function closeSetup() {
    setupCloseNode.removeEventListener('keydown', onKeyDownHandler);
    setupCloseNode.removeEventListener('click', onClickHandler);
    btnSubmitNode.removeEventListener('keydown', onKeyDownHandler);
    btnSubmitNode.removeEventListener('click', onClickHandler);

    document.removeEventListener('keydown', closeSetupModalKeyHandler);
    document.removeEventListener('focus', lockSetupModalHandler, true);

    setupWizardFormNode.removeEventListener('submit', preventSubmitHandler);

    setupModalNode.removeEventListener('keydown', preventDefaultOfSpaseHandler);

    setupModalNode.classList.add('invisible');

    if (typeof onSetupClose === 'function') {
      onSetupClose();
    }
  }

  /**
   * Close Setup Modal by keys.
   * @param {Event} event - The Event.
   */
  function closeSetupModalKeyHandler(event) {
    if (window.utils.isDeactivationEvent(event)) {
      closeSetup();
    }
  }

  /**
   * Close Setup Modal after submit form.
   * @param {Event} event - The Event.
   */
  function preventSubmitHandler(event) {
    event.preventDefault();
    closeSetup();
  }

  /**
   * Lock Setup Modal.
   */
  function lockSetupModalHandler() {
    if (!setupModalNode.contains(document.activeElement)) {
      setupCloseNode.focus();
    }
  }

  /**
   * Prevent default of Spase key.
   * @param {Event} event - The Event.
   */
  function preventDefaultOfSpaseHandler(event) {
    if (event.keyCode === SPACE_KEY_CODE && event.target.tagName !== 'INPUT') {
      event.preventDefault(); // Чтобы не скролилось окно
      event.stopPropagation(); // Чтобы не дошло до window
    }
  }
})();
