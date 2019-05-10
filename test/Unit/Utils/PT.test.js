import { expect } from "chai";
import { Utils } from "../../../src";

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
            expect(Utils.PT.NIF("507097068").validate()).to.be.true;
            expect(Utils.PT.NIF("256878277").validate()).to.be.true;
            expect(Utils.PT.NIF("244380180").validate()).to.be.true;
            expect(Utils.PT.NIF("249399776").validate()).to.be.true;
            expect(Utils.PT.NIF("279939035").validate()).to.be.true;
            expect(Utils.PT.NIF("222252502").validate()).to.be.true;
            expect(Utils.PT.NIF("150784538").validate()).to.be.true;
            expect(Utils.PT.NIF("102106460").validate()).to.be.true;
            expect(Utils.PT.NIF("131650904").validate()).to.be.true;
            expect(Utils.PT.NIF("183991931").validate()).to.be.true;
            expect(Utils.PT.NIF("139727450").validate()).to.be.true;
            expect(Utils.PT.NIF("145073424").validate()).to.be.true;
            expect(Utils.PT.NIF("654464502").validate()).to.be.true;
            expect(Utils.PT.NIF("605496129").validate()).to.be.true;
            expect(Utils.PT.NIF("675432049").validate()).to.be.true;
            expect(Utils.PT.NIF("689207018").validate()).to.be.true;
            expect(Utils.PT.NIF("685981053").validate()).to.be.true;
            expect(Utils.PT.NIF("680875980").validate()).to.be.true;
            expect(Utils.PT.NIF("619632941").validate()).to.be.true;
            expect(Utils.PT.NIF("651278651").validate()).to.be.true;
            expect(Utils.PT.NIF("876467915").validate()).to.be.true;
            expect(Utils.PT.NIF("835555860").validate()).to.be.true;
            expect(Utils.PT.NIF("865397228").validate()).to.be.true;
            expect(Utils.PT.NIF("825843979").validate()).to.be.true;
            expect(Utils.PT.NIF("837058350").validate()).to.be.true;
            expect(Utils.PT.NIF("839818300").validate()).to.be.true;
            expect(Utils.PT.NIF("976486520").validate()).to.be.true;
            expect(Utils.PT.NIF("989147380").validate()).to.be.true;
            expect(Utils.PT.NIF("923754938").validate()).to.be.true;
            expect(Utils.PT.NIF("915805030").validate()).to.be.true;
            expect(Utils.PT.NIF("932757324").validate()).to.be.true;
            expect(Utils.PT.NIF("999999999").validate()).to.be.true;
        });

        it("Should get error on validate", () => 
        {
            expect(Utils.PT.NIF("501034831").validate()).to.be.false;
            expect(Utils.PT.NIF("50103483").validate()).to.be.false;
        });

        it("Should clear", () => 
        {
            expect(Utils.PT.NIF("501 034 831").clear()).to.be.equal("501034831");
        });

        it("Should format", () => 
        {
            expect(Utils.PT.NIF("501034831").format()).to.be.equal("501 034 831");
        });
    });
});
