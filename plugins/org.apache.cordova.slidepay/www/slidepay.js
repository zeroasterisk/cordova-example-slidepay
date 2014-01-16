
var exec = require('cordova/exec'),
    cordova = require('cordova'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils');

function Slidepay() {
    this.status = 'unknown';
}

/**
 * Get connection info
 *
 * @param {Function} successCallback The function to call when the Connection data is available
 * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)
 */
Slidepay.prototype.getInfo = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Slidepay", "getConnectionInfo", []);
};

/**
 * Initialize swiper
 *
 * @param {Function} successCallback The function to call when the Connection data is available
 * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)
 */
Slidepay.prototype.initialize = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Slidepay", "initialize", []);
};

/**
 * startup swiper
 *
 * @param {Function} successCallback The function to call when the Connection data is available
 * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)
 */
Slidepay.prototype.startup = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Slidepay", "startup", []);
};

/**
 * stop swiper
 *
 * @param {Function} successCallback The function to call when the Connection data is available
 * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)
 */
Slidepay.prototype.stop = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Slidepay", "stop", []);
};

/**
 * test swiper
 *
 * @param {Function} successCallback The function to call when the Connection data is available
 * @param {Function} errorCallback The function to call when there is an error getting the Connection data. (OPTIONAL)
 */
Slidepay.prototype.test = function(successCallback, errorCallback) {
    exec(successCallback, errorCallback, "Slidepay", "echo", ['abc swiper']);
};

var me = new Slidepay();
var timerId = null;
var timeout = 500;

channel.createSticky('onCordovaConnectionReady');
channel.waitForInitialization('onCordovaConnectionReady');

channel.onCordovaReady.subscribe(function() {
    me.getInfo(function(info) {
        me.status = info;
        if (info === "none") {
            // set a timer if still offline at the end of timer send the offline event
            timerId = setTimeout(function(){
                cordova.fireDocumentEvent("offline");
                timerId = null;
            }, timeout);
        } else {
            // If there is a current offline event pending clear it
            if (timerId !== null) {
                clearTimeout(timerId);
                timerId = null;
            }
            cordova.fireDocumentEvent("online");
        }

        // should only fire this once
        if (channel.onCordovaConnectionReady.state !== 2) {
            channel.onCordovaConnectionReady.fire();
        }
    },
    function (e) {
        // If we can't get the network info we should still tell Cordova
        // to fire the deviceready event.
        if (channel.onCordovaConnectionReady.state !== 2) {
            channel.onCordovaConnectionReady.fire();
        }
        console.log("Error initializing Network Connection: " + e);
    });
});

module.exports = me;
