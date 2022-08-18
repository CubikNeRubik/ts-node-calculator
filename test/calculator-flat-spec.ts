import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

import {Calculator} from "../lib/calculator";

let calculator;

describe('calculator flat', function () {
    before(() => {
        calculator = new Calculator();
    })

    it("should add", function () {
        expect(calculator.add(2, 2)).eq(4);
    });
    it("should sub", function () {
        expect(calculator.sub(2, 2)).eq(0);
    });
    it("should multiple", function () {
        expect(calculator.multiple(2, 2)).eq(4);
    });
    it("should divide", function () {
        expect(calculator.divide(2, 2)).eq(1);
    });
});
