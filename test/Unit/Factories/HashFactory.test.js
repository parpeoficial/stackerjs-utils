import { expect } from "chai";
import { Factory } from "./../../../src";


describe("Unit/Factories/HashFactoryTest", () => 
{

    before(() => 
    {
        Factory.load();
    });

    it("Should hash a string", () => 
    {
        let hash = Factory("Hash");
        expect(hash.do("anypasstologin")).to.be.a("string");
    });

    it("Should compare two hashes", () => 
    {
        let hash = Factory("Hash"),
            hashed = hash.do("Imokay");

        expect(hash.check("Imokay", hashed)).to.be.true;
        expect(hash.check("ImNotokay", hashed)).to.be.false;
    });

});