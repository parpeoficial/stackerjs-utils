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
            name: "string|required|min:2|max:100",
            age: "number|required|min:18|max:100",
            active: "boolean|required"
        });

        let response = driverValidator.validate({
            name: "Lewis Hamilton",
            age: 32,
            active: false
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

    it("Should validate min size/value of fields", () => 
    {
        let driverValidator = Factory.make("Validator", {
            name: "required|min:3",
            age: "required|min:18"
        });

        let response = driverValidator.validate({
            name: "Sá",
            age: 17
        });

        expect(response.isValid()).to.be.false;
        expect(response.getErrors("name")).to.be.lengthOf(1);
        expect(response.getErrors("age")).to.be.lengthOf(1);
    });

    describe("Validating field types", () => 
    {
        it("Should validate field is a string", () => 
        {
            let validator = Factory.make("Validator", {
                name: "string"
            });

            let response = validator.validate({
                "name": 123
            });

            expect(response.isValid()).to.be.false;
            expect(response.getErrors("name")).to.be.lengthOf(1);
        });

        it("Should validate field is an integer", () => 
        {
            let validator = Factory.make("Validator", {
                age: "number"
            });

            let response = validator.validate({
                age: "123"
            });

            expect(response.isValid()).to.be.false;
            expect(response.getErrors("age")).to.be.lengthOf(1);
        });

        it("Should validate field is boolean", () => 
        {
            let validator = Factory.make("Validator", {
                active: "boolean"
            });

            let response = validator.validate({
                active: 123
            });

            expect(response.isValid()).to.be.false;
            expect(response.getErrors("active")).to.be.lengthOf(1);
        });
    });

});