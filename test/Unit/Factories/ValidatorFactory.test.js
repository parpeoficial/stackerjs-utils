import { expect } from "chai";
import { Factory } from "../../../src";


describe("Unit/Factories/ValidatorFactoryTest", () => 
{

    before(() => 
    {
        Factory.load();
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

    it("Should validate max size/value of fields", () => 
    {
        let driverValidator = Factory.make("Validator", {
            name: "required|max:30",
            age: "required|max:32"
        });

        let response = driverValidator.validate({
            name: "Luke Skywalker da Silva Gomes de Andrade",
            age: 33
        });

        expect(response.isValid()).to.be.false;
        expect(response.getErrors("name")).to.be.lengthOf(1);
        expect(response.getErrors("age")).to.be.lengthOf(1);
    });

});