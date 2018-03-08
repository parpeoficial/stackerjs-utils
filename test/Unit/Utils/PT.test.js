import { expect } from "chai";
import { Utils } from "../../../lib";

describe("Unit/Utils/PTTest", () => 
{
    describe("NIF", () => 
    {
        it("Should validate", () => 
        {
            expect(Utils.PT.NIF("509888100").validate()).to.be.true;
            expect(Utils.PT.NIF("506477959").validate()).to.be.true;
            expect(Utils.PT.NIF("502034831").validate()).to.be.true;
            expect(Utils.PT.NIF("509721117").validate()).to.be.true;
            expect(Utils.PT.NIF("500307751").validate()).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.PT.NIF("501034831").validate()).to.be.false;
        });
    });
});
