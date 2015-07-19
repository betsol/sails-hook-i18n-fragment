module.exports = function (sails) {

  var deasync = require('deasync');
  var fs = require('fs');
  var marked = require('marked');
  var pkg = require('./package.json');

  var configKey = pkg.name.replace('sails-hook-', '');

  var activeLocale;

  var defaults = {};
  defaults[configKey] = {
    path: 'locales/fragments/{locale}/{path}.md'
  };

  return {

    defaults: defaults,

    routes: {
      before: {
        '/*': function (request, response, next) {

          // Using condition to filter out static files requests.
          if (request.accepted.some(function (type) {
            return type.value === 'text/html';
          })) {
            activeLocale = request.getLocale();
            response.locals.fragment = deasync(getFragment);
          }

          next();
        }
      }
    }

  };

  /**
   * Returns fragment source by its address.
   * Uses active locale to select the fragment.
   *
   * @param {string} address
   * @param {function} callback
   */
  function getFragment (address, callback) {
    var path = getFragmentPath(address, activeLocale);
    fs.readFile(path, 'utf8', function (error, source) {
      if (error) {
        return callback(error);
      }
      marked(source, callback);
    });
  }

  /**
   * Returns filesystem path for the specified fragment address and locale.
   *
   * @param {string} address
   * @param {string} locale
   *
   * @returns {string}
   */
  function getFragmentPath (address, locale) {
    return sails.config[configKey].path
      .replace('{locale}', locale)
      .replace('{path}', address.replace('.', '/'))
    ;
  }

};
