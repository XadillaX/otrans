/**
 * XadillaX created at 2016-06-22 16:48:44 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

const _ = {
    camelCase: require("lodash.camelcase"),
    snakeCase: require("lodash.snakecase")
};

const otrans = module.exports = {};

/**
 * to
 * @param {*} obj the object to be transformed
 * @param {Function} func the key transformation function
 * @param {Object} [map] the specified key transformation map
 * @returns {*} the new object
 */
function to(obj, func, map) {
    if(!obj || typeof obj !== "object") return obj;

    if(obj instanceof Date) return obj;

    if(Array.isArray(obj)) {
        var res = [];
        for(var i = 0; i < obj.length; i++) {
            res.push(to(obj[i], func, map));
        }
        return res;
    }

    var res = {};
    for(var key in obj) {
        if(!obj.hasOwnProperty(key)) continue;

        /**
         * Rules:
         *
         * 1. $...: keep origin;
         * 2. otherwise;
         *   2.1. map[key] exists: map[key];
         *   2.2. otherwise: func(key).
         */
        const newKey = (key[0] === "$" ? key : (map[key] || func(key)))
        res[newKey] = to(obj[key], func, map);
    }
    return res;
}

/**
 * objectToUnderscore
 * @param {*} obj the object to be transformed
 * @param {Object} [map] the specified key transformation map
 * @returns {*} the new object
 */
otrans.objectToUnderscore = function(obj, map) {
    return to(obj, _.snakeCase, map || {});
};


/**
 * objectToCamel
 * @param {*} obj the object to be transformed
 * @param {Object} [map] the specified key transformation map
 * @returns {*} the new object
 */
otrans.objectToCamel = function(obj, map) {
    return to(obj, _.camelCase, map || {});
};

otrans.toUnderscore = otrans.objectToUnderscore;
otrans.toCamel = otrans.objectToCamel;
