import { expect } from "chai";
import { Factory } from "../../../src";


describe("Test/Unit/Factories/ValidatorFactoryTest", () =>
{

    before(() =>
    {
        Factory.load();
    });

    it("Should validate required fields", () => 
    {
        let driverValidator = Factory.make("Validator", {
            name: "required",
            age: "required"
        });

        let response = driverValidator.validate({
            name: "Fulano de tal"
        });

        expect(response.isValid()).to.be.true;
        expect(response.getErrors()).to.have.property("age");
    });

});