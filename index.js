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
 * objectToUnderscore
 * @param {*} obj the object to be transformed
 * @returns {*} the new object
 */
otrans.objectToUnderscore = function(obj) {
    if(!obj || typeof obj !== "object") return obj;

    if(obj instanceof Date) return obj;

    if(Array.isArray(obj)) {
        var res = [];
        for(var i = 0; i < obj.length; i++) {
            res.push(this.objectToUnderscore(obj[i]));
        }
        return res;
    }

    var res = {};
    for(var key in obj) {
        if(!obj.hasOwnProperty(key)) continue;

        var need = true;
        if(key[0] === "$") need = false;

        res[need ? _.snakeCase(key) : key] = this.objectToUnderscore(obj[key]);
    }
    return res;
};


/**
 * objectToCamel
 * @param {*} obj the object to be transformed
 * @returns {*} the new object
 */
otrans.objectToCamel = function(obj) {
    if(!obj || typeof obj !== "object") return obj;

    if(obj instanceof Date) return obj;

    if(Array.isArray(obj)) {
        var res = [];
        for(var i = 0; i < obj.length; i++) {
            res.push(this.objectToCamel(obj[i]));
        }
        return res;
    }

    var res = {};
    for(var key in obj) {
        if(!obj.hasOwnProperty(key)) continue;
    
        var need = true;
        if(key[0] === "$") need = false;

        res[need ? _.camelCase(key) : key] = this.objectToCamel(obj[key]);
    }
    return res;
};

otrans.toUnderscore = otrans.objectToUnderscore;
otrans.toCamel = otrans.objectToCamel;
