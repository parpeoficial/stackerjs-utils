import { expect } from "chai";
import { Utils } from "../../../lib";

describe("Unit/Utils/OtherTest", () => 
{
    describe("isEmpty()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Other.isEmpty("")).to.be.true;
            expect(Utils.Other.isEmpty(new String())).to.be.true;
            expect(Utils.Other.isEmpty([])).to.be.true;
            expect(Utils.Other.isEmpty({})).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Other.isEmpty(5)).to.be.false;
            expect(Utils.Other.isEmpty("[1]")).to.be.false;
            expect(Utils.Other.isEmpty(null)).to.be.false;
        });
    });

    describe("hasLength()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Other.hasLength("ok", 2)).to.be.true;
            expect(Utils.Other.hasLength([1, 2], 2)).to.be.true;
            expect(Utils.Other.hasLength(function(a, b) 
            {}, 2)).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Other.hasLength(22, 2)).to.be.false;
        });
    });

    describe("hasLengthRange()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Other.hasLengthRange("ok", 1, 3)).to.be.true;
            expect(Utils.Other.hasLengthRange([1, 2], 1, 3)).to.be.true;
            expect(Utils.Other.hasLengthRange(function(a, b) 
            {}, 1, 3)).to.be
                .true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Other.hasLengthRange(22, 1, 3)).to.be.false;
        });

        it("Should get error on validate if provided a non-positive integer lower bound", () => 
        {
            expect(() => Utils.Other.hasLengthRange([], -1, 5)).to.throw(RangeError);
            expect(() => Utils.Other.hasLengthRange([], true, 5)).to.throw(TypeError);
            expect(() => Utils.Other.hasLengthRange([], "5", 5)).to.throw(TypeError);
            expect(() => Utils.Other.hasLengthRange([], null, 5)).to.throw(TypeError);
        });
        it("Should get error on validate if provided a non-positive integer upper bound", () => 
        {
            expect(() => Utils.Other.hasLengthRange([], 0, -1)).to.throw(RangeError);
            expect(() => Utils.Other.hasLengthRange([], 0, true)).to.throw(TypeError);
            expect(() => Utils.Other.hasLengthRange([], 0, "5")).to.throw(TypeError);
            expect(() => Utils.Other.hasLengthRange([], 0, null)).to.throw(TypeError);
        });
    });

    describe("matches()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Other.matches("beep", "beep,boop")).to.be.true;
            expect(Utils.Other.matches(5, [5, 7, 9].join(","))).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Other.matches(null, "beep,boop")).to.be.false;
            expect(Utils.Other.matches(123, "beep,boop")).to.be.false;
            expect(Utils.Other.matches("foobar", "beep,boop")).to.be.false;
            expect(() =>
                Utils.Other.matches("foobar", ["beep", "boop"])).to.throw(TypeError);
        });
    });
});
