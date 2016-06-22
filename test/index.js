/**
 * XadillaX created at 2016-06-22 16:52:51 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

require("should");

const otrans = require("../");

describe("otrans", function() {
    const obj = require("./object");

    it("should transform to underscore", function() {
        const result = otrans.toUnderscore(obj);
        result.should.be.eql(require("./underscore"));
    });

    it("should transform to camel", function() {
        const result = otrans.toCamel(obj);
        result.should.be.eql(require("./camel"));
    });
});
