(function() {
  'use strict';

  angular
    .module('dmstest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
