import { expect } from "chai";
import { Factory } from "../../../src";


describe("Unit/Factories/ValidatorFactoryTest", () =>
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
            name: "John Mayer"
        });

        expect(response.isValid()).to.be.false;
        expect(response.getErrors()).to.have.property("age");
    });

    it("Should be valid whe there's no errors", () => 
    {
        let driverValidator = Factory.make("Validator", {
            name: "required",
            age: "required"
        });

        let response = driverValidator.validate({
            name: "Lewis Hamilton",
            age: 32
        });

        expect(response.isValid()).to.be.true;
    });

});