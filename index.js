
'use strict';

const qerrorLog = require('./lib/qerrorLog');
const logger = require('./lib/logger');

/**
 * Error logger middleware that logs errors and provides AI-powered suggestions.
 * @param {Error} error - The error object
 * @param {string} context - Context where the error occurred
 * @param {Object} [req] - Express request object (optional)
 * @param {Object} [res] - Express response object (optional)
 * @param {Function} [next] - Express next function (optional)
 * @returns {Promise<void>}
 */
module.exports = {
  qerrorLog,
  logger
};

// For backward compatibility and ease of use, also export qerrorLogger as the default export
module.exports.default = qerrorLog;
