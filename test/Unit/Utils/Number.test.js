import { expect } from "chai";
import { Utils } from "../../../index";

describe("Unit/Utils/NumberTest", () => 
{
    describe("isNumber()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Numbers.isNumber(123)).to.be.true;
            expect(Utils.Numbers.isNumber(new Number(10))).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Numbers.isNumber({})).to.be.false;
            expect(Utils.Numbers.isNumber("5")).to.be.false;
            expect(Utils.Numbers.isNumber(null)).to.be.false;
        });
    });

    describe("isInteger()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Numbers.isNumber(123)).to.be.true;
            expect(Utils.Numbers.isNumber(-123)).to.be.true;
            expect(Utils.Numbers.isNumber(0)).to.be.true;
            expect(Utils.Numbers.isNumber(new Number(10))).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Numbers.isNumber({})).to.be.false;
            expect(Utils.Numbers.isNumber("5")).to.be.false;
            expect(Utils.Numbers.isNumber(null)).to.be.false;
        });
    });

    describe("isLessThan()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Numbers.isLessThan(1, 2)).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Numbers.isLessThan(2, 1)).to.be.false;
            expect(Utils.Numbers.isLessThan(true, 1)).to.be.false;
            expect(Utils.Numbers.isLessThan(10, 2)).to.be.false;
            expect(Utils.Numbers.isLessThan(10, true)).to.be.false;
        });
    });

    describe("isGreaterThan()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Numbers.isGreaterThan(2, 1)).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Numbers.isGreaterThan(0, 1)).to.be.false;
            expect(Utils.Numbers.isGreaterThan(true, 1)).to.be.false;
            expect(Utils.Numbers.isGreaterThan(-1, 0)).to.be.false;
            expect(Utils.Numbers.isGreaterThan(-1, true)).to.be.false;
        });
    });
});
