"use strict";
// let should = require('should');
// should(5).is.a.Number();
exports.__esModule = true;
var add_1 = require("../src/add");
describe('test add', function () {
    it('should can add to number', function () {
        var a = 2;
        var b = 3;
        var result = add_1.add(a, b);
        result.should.be.equal(5);
    });
});
