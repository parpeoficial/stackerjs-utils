import { expect } from "chai";
import { Factory } from "../../src";


describe("Unit/FactoryTest", () => 
{

    describe("Loading Factories", () => 
    {
        it("Should build defined providers", () => 
        {
            expect(Factory.load()).to.be.true;
        });
    });

    describe("Accessing Factory", () => 
    {
        it("Should access built Factory", () => 
        {
            expect(Factory("Person").presentYourself())
                .to.be.equal("Hi, my name is Luke Sky Walker, I'm a Human that does Jedi Fights for living!");
        });

        it("Should present error trying to access non-existent Factory", () => 
        {
            expect(Factory("NonExistent")).to.be.null;
        });
    });

    describe("Making Factory", () => 
    {
        it("Should make built Factory", () => 
        {
            expect(Factory.make("Person", {
                name: "Allan Turing",
                race: "Nerd",
                job: "Crypto"
            }).presentYourself()).to.be.equal("Hi, my name is Allan Turing, I'm a Nerd that does Crypto for living!")
        });

        it("Should present error trying to make non-existent Factory", () => 
        {
            expect(Factory.make("NonExistent", { any: "data" })).to.be.null;
        });
    });

});