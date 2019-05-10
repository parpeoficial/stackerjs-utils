import { expect } from "chai";
import { Utils } from "../../../src";

describe("Unit/Utils/ArrayTest", () => 
{
    describe("isArray()", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.Arrays.isArray([])).to.be.true;
            expect(Utils.Arrays.isArray(new Array(10))).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.Arrays.isArray({})).to.be.false;
            expect(Utils.Arrays.isArray(5)).to.be.false;
            expect(Utils.Arrays.isArray(null)).to.be.false;
        });
    });
});
