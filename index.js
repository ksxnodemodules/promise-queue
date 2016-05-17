
((module) => {
    'use strict';

    class GlobalPromise extends require('extended-promise') {}

    var {freeze, assign} = Object;

    const DEFAULT_DESCRIPTOR = freeze({
        init: Symbol('PromiseQueue initial value')
    });

    var staticprop = {
        GlobalPromise,
        DEFAULT_DESCRIPTOR
    };

    assign(PromiseQueue, staticprop);
    assign(PromiseQueue.prototype, staticprop);

    module.exports = class extends PromiseQueue {};

    function PromiseQueue({init} = DEFAULT_DESCRIPTOR) {

        class LocalPromise extends GlobalPromise {};

        var lasted = LocalPromise.resolve(init);

        var addPromise = (callback) =>
            lasted = lasted.listener((...args) => callback(...args));

        var getLastedPromise = () => lasted;

        return {
            LocalPromise,
            addPromise,
            getLastedPromise,
            __proto__: this
        };

    }


})(module);
